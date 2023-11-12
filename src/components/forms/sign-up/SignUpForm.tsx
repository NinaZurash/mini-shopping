import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useForm } from "react-hook-form";

import { signUpFormSchema } from "@/components/forms/sign-up/schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ROUTES } from "@/utils/routes";

type SignUpFormSchema = z.infer<typeof signUpFormSchema>;

export default function SignUpForm() {
  const form = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
      firstName: "",
      lastName: "",
    },
  });

  function onSubmit(values: SignUpFormSchema) {
    console.log(values);
  }

  return (
    <div className="rounded-2xl border bg-white p-12 shadow-md">
      <h3 className="mb-4 text-center text-2xl font-bold">Sign Up</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-[300px] space-y-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input type="name" placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="passwordConfirmation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between">
            <a href={ROUTES.home} className="text-sm text-gray-500 hover:underline">
              Already have an account?
            </a>
          </div>
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
