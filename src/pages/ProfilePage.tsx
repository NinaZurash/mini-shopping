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

  return <div>ProfilePage</div>;
}
