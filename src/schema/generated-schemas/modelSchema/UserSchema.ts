import { z } from 'zod';

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string(),
  password: z.string(),
});

export type User = z.infer<typeof UserSchema>;

export default UserSchema;
