import React, { createContext, useState } from "react";

export interface AuthUser {
  name: string;
  email: string;
}
interface UserContextProp {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
}

export const UserContext = createContext<UserContextProp>(
  {} as UserContextProp,
);
function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </div>
  );
}

export default UserContextProvider;
