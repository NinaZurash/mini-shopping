import { auth } from "@/config/firebase";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInWithEmailAndPassword } from "firebase/auth";
import * as z from "zod";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useUser } from "@/providers/user/useUser";
import { formSchema } from "@/components/forms/sign-in/schema";
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

type FormSchema = z.infer<typeof formSchema>;

export default function SignInForm() {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: FormSchema) {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        if (userCredential.user.email)
          setUser({ email: userCredential.user.email, uid: userCredential.user.uid });
        navigate(ROUTES.profile);
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="rounded-2xl border bg-white p-14 shadow-md">
      <h3 className="mb-4 text-center text-2xl font-bold">Sign In</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-[300px] space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="" {...field} />
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
          <div className="flex justify-between">
            <a href={ROUTES.home} className="text-sm text-gray-500 hover:underline">
              Forgot password?
            </a>
            <a href={ROUTES.signUp} className="text-sm text-gray-500 hover:underline">
              Sign up
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
