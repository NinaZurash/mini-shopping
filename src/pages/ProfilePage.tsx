import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const userSignedIn = false;
  const navigate = useNavigate();

  useEffect(() => {
    if (!userSignedIn) {
      navigate("/sign-in");
    }
  }, [userSignedIn, navigate]);

  return <div>ProfilePage</div>;
}
