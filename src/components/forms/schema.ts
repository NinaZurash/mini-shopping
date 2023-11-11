import * as z from "zod";

export const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(8).max(100),
});

export const signUpFormSchema = formSchema.extend({
  passwordConfirmation: z.string().min(8).max(100),
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
});
