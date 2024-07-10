import { z } from 'zod';

export const BookScalarFieldEnumSchema = z.enum(['id','userId','title','author','genre','year','imageUrl','averageRating']);

export default BookScalarFieldEnumSchema;
