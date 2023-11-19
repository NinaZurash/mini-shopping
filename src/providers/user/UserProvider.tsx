import { createContext, useState } from "react";

import "firebase/auth";

type User = {
  email: string;
  uid: string;
};

type UserContextState = {
  user: User;
  setUser: (user: User) => void;
};

const initialState = {
  user: {
    email: "",
    uid: "",
  },
  setUser: () => null,
};

export const UserContext = createContext<UserContextState>(initialState);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(initialState.user);

  const values = {
    user,
    setUser,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
