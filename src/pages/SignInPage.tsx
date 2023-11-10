import SignInForm from "@/components/forms/SignInForm";

const imageUrl =
  "https://img.freepik.com/premium-vector/contemporary-seamless-pattern-vector-wallpaper_263779-876.jpg?w=2000";
export default function SignInPage() {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="flex h-screen items-center justify-center"
    >
      <SignInForm />
    </div>
  );
}
