import { z } from "zod";

export const signUpFormSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(8).max(100),
  passwordConfirmation: z.string().min(8).max(100),
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
});
