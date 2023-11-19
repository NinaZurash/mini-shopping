import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useUser } from "@/providers/user/useUser";

export default function ProfilePage() {
  const { user } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/sign-in");
    }
  }, [navigate, user]);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-3xl font-bold">Profile Information</h1>
    </div>
  );
}
