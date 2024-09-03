import { FastifyRequest, FastifyReply } from 'fastify';

export const oauthGoogleCallback = async (req: FastifyRequest, res: FastifyReply) => {
  const { token } = await req.server.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(req);
  const userInfo = await req.server.googleOAuth2.userinfo(token);

  let user = await req.server.prisma.user.findUnique({
    where: { email: userInfo.email },
  });

  // If user exists and has a password it's a standard account.
  if (user && user.password) {
    return res.status(400).send({
      message:
        'This email is already associated with a standard account. Please login using your email and password.',
    });
  }

  // If the user doesn't exist, create a new user with OAuth data
  if (!user) {
    user = await req.server.prisma.user.create({
      data: {
        email: userInfo.email,
        OAuthAccount: {
          create: {
            provider: 'google',
            providerAccountId: userInfo.sub,
          },
        },
      },
    });
  }

  // Generate JWT with userId in payload
  const authToken = req.server.jwt.sign({ userId: user.id }, { expiresIn: '4h' });

  res.setCookie('authToken', authToken, {
    httpOnly: true,
    sameSite: 'lax',
    secure: false,
    maxAge: 4 * 60 * 60, // 4 hours
    path: '/',
  });

  return res.status(200).send({
    userId: user.id,
  });
};
