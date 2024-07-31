import { z } from 'zod';

export const BookScalarFieldEnumSchema = z.enum([
  'id',
  'userId',
  'title',
  'author',
  'imageUrl',
  'year',
  'genre',
  'averageRating',
]);

export default BookScalarFieldEnumSchema;
