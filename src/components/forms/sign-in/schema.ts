import * as z from "zod";

export const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(8).max(100),
});
