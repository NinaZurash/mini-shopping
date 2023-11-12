import SignInForm from "@/components/forms/sign-in/SignInForm";

const imageUrl = "/wallp.jpg";
export default function SignInPage() {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover" }}
      className="flex min-h-screen items-center justify-center bg-no-repeat object-cover"
    >
      <SignInForm />
    </div>
  );
}
