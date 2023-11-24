import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useUser } from "@/providers/user/useUser";

export default function PurchaseHistory() {
  const { user } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/sign-in");
    }
  }, [navigate, user]);
  return <div>PurchaseHistory</div>;
}
