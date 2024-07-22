import { z } from 'zod';

export const RatingScalarFieldEnumSchema = z.enum(['id','bookId','userId','grade']);

export default RatingScalarFieldEnumSchema;
