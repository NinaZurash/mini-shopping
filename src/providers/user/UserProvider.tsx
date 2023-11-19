import { getAuth, onAuthStateChanged, User } from "firebase/auth";

import { createContext, useEffect, useState } from "react";

export type ActiveUser = {
  email: string;
  uid: string;
};

type UserContextState = {
  user: ActiveUser | null;
  loading: boolean;
  setUser: (user: ActiveUser | null) => void;
};

const initialState = {
  user: null,
  loading: true,
  setUser: () => null,
};

export const UserContext = createContext<UserContextState>(initialState);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<ActiveUser | null>(initialState.user);
  const [loading, setLoading] = useState<boolean>(initialState.loading);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      setUser(user ? { email: user.email!, uid: user.uid } : null);
      setLoading(false);
    });

    return unsubscribe;
  }, [auth]);

  const values = {
    user,
    loading,
    setUser,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
