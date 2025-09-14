import { z } from 'zod';
import UserFormModel from '@/resources/feature/models/UserModel';
export const userSchema = z.object({
  id: z.number().optional(),
  name: z.string().trim().min(3),
  email: z.email().trim(),
}) as z.ZodType<UserFormModel>;
