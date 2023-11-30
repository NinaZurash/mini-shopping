import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useUser } from "@/providers/user/useUser";

export default function PurchaseHistory() {
  const { user, loading } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user === null) {
      navigate("/sign-in");
    } else console.log(user);
  }, [navigate, user, loading]);
  return <div>PurchaseH</div>;
}
