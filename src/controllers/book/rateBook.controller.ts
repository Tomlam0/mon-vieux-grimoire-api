import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';

import { RatingSchema } from '@/schema/book/rating.schema';

/**
 * ========================================
 *        Add a new rating
 * ========================================
 */
export const rateBook = async (
  req: FastifyRequest<{ Params: { id: string } }>,
  res: FastifyReply
) => {
  // Verify if the book ID is well structured before sending unnecessary requests to the DB.
  const IdSchema = z.string().uuid();
  const validatedId = IdSchema.parse(req.params.id);

  const book = await req.server.prisma.book.findUnique({
    where: {
      id: validatedId,
    },
    include: {
      ratings: true,
    },
  });

  if (!book) {
    return res.status(404).send({ error: 'Book not found' });
  }

  const actualUserId = req.user as string;

  // Verify if the user has already rated this book
  const existingRating = await req.server.prisma.rating.findFirst({
    where: {
      bookId: validatedId,
      userId: actualUserId,
    },
  });

  if (existingRating) {
    return res.status(403).send({ message: 'You have already rated this book' });
  }

  const ratingData = req.body;
  const validatedRatingData = RatingSchema.parse(ratingData);

  const newRating = await req.server.prisma.rating.create({
    data: {
      grade: validatedRatingData.grade,
      userId: actualUserId,
      bookId: validatedId,
    },
  });

  // Recalculate the average rating
  const allRatings = await req.server.prisma.rating.findMany({
    where: { bookId: validatedId },
    select: { grade: true },
  });

  const newAverageRating =
    Math.round(
      (allRatings.reduce((sum: number, rating: { grade: number }) => sum + rating.grade, 0) / allRatings.length) * 10
    ) / 10;

  await req.server.prisma.book.update({
    where: { id: validatedId },
    data: {
      averageRating: newAverageRating,
    },
  });

  return res.status(200).send(newRating);
};
