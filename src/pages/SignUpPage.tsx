import SignUpForm from "@/components/forms/SignUpForm";

const imageUrl = "/wallp.jpg";
export default function SignInPage() {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover" }}
      className="flex min-h-screen items-center justify-center bg-no-repeat object-cover"
    >
      <SignUpForm />
    </div>
  );
}
