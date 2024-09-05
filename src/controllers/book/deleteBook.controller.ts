import { FastifyRequest, FastifyReply } from 'fastify';
import { DeleteObjectCommand } from '@aws-sdk/client-s3';
import { z } from 'zod';

/**
 * ========================================
 *        Delete a book
 * ========================================
 */
export const deleteBook = async (
  req: FastifyRequest<{ Params: { id: string } }>,
  res: FastifyReply
) => {
  // Verify if book Id is well structured before sending useless requests to db.
  const IdSchema = z.string().uuid();
  const validatedId = IdSchema.parse(req.params.id);

  const book = await req.server.prisma.book.findUnique({
    where: {
      id: validatedId,
    },
  });

  if (!book) {
    res.status(404).send({ error: 'Book not found' });
    return;
  }

  // Check if the authenticated user is the owner of the book
  const userId = req.user;

  if (book.userId !== userId) {
    res.status(403).send({ message: 'You are not authorized to delete this book' });
  }

  // Delete the image from S3
  const imageKey = book.imageUrl.split('/').pop();
  try {
    await req.server.s3.send(
      new DeleteObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME!,
        Key: imageKey,
      })
    );
  } catch (err) {
    const errorMessage = (err as Error).message;
    req.log.error(`Failed to delete S3 image with key ${imageKey}: ${errorMessage}`);
  }

  // We need to delete ratings first and then the book
  await req.server.prisma.rating.deleteMany({
    where: { bookId: validatedId },
  });
  await req.server.prisma.book.delete({
    where: { id: validatedId },
  });

  res.status(200).send({ message: 'Book successfully deleted' });
};
