import React, { useState } from "react";

interface AuthUser {
  name: string;
  email: string;
}

function User() {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "mani",
      email: "mani@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser({} as AuthUser);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User Name is : {user.name}</div>
      <div>User Email is : {user.email}</div>
    </div>
  );
}

export default User;
