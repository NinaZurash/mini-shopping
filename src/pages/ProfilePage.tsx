import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useUser } from "@/providers/user/useUser";

export default function ProfilePage() {
  const { user } = useUser();
  // const [address, setAddress] = useState("");

  const navigate = useNavigate();

  // const handleAddAddress = () => {
  //   // Logic to add address
  //   console.log("Address added:", address);
  // };

  useEffect(() => {
    if (user === null) {
      navigate("/sign-in");
    } else {
      console.log(user);
    }
  }, [navigate, user]);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">Profile</h1>
      {/* <p className="mb-2 text-lg">Name: {user?.name}</p>
      <p className="mb-2 text-lg">Email: {user?.email}</p>
      <p className="mb-2 text-lg">Address: {user?.address || "No address found"}</p>
      {!user?.address ? (
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={handleAddAddress}
        >
          Add Address
        </button>
      ) : null} */}
    </div>
  );
}
