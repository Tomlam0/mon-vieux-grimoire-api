import { FastifyRequest, FastifyReply } from 'fastify';

/**
 * ========================================
 *  Connect to a user account using Google Oauth
 * ========================================
 */
export const oauthGoogle = async (req: FastifyRequest, res: FastifyReply) => {
  const authorizationUri = req.server.googleOAuth2.generateAuthorizationUri(req);

  res.redirect(authorizationUri);
};

export const oauthGoogleCallback = async (req: FastifyRequest, res: FastifyReply) => {
  const { auth } = await req.server.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(req);
  const userInfo = await req.server.googleOAuth2.userinfo(auth);

  let user = await req.server.prisma.user.findUnique({
    where: { email: userInfo.email },
  });

  // If user exist and have a password it's a standard account.
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
  const token = req.server.jwt.sign({ userId: user.id }, { expiresIn: '4h' });

  res.setCookie('authToken', token, {
    httpOnly: true, // Set httpOnly to avoid XSS attack, cookie only accessible by fetch
    sameSite: process.env.NODE_ENV === 'production' ? 'lax' : 'none', // Protect against CSRF
    secure: process.env.NODE_ENV === 'production', // Ensure secure flag is set in production
    maxAge: 4 * 60 * 60, // 4 hours
    path: '/',
  });

  return res.status(200).send({
    userId: user.id,
  });
};
