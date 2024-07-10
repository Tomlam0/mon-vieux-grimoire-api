import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputSchema } from '../inputTypeSchemas/UserWhereUniqueInputSchema'

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Omit<Prisma.UserFindUniqueOrThrowArgs, "select">> = z.object({
  where: UserWhereUniqueInputSchema,
}).strict() ;

export default UserFindUniqueOrThrowArgsSchema;
