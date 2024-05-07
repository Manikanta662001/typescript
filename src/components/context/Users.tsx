import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";

function Users() {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    userContext.setUser({
      name: "mani",
      email: "mani@gmail.com",
    });
  };
  const handleLogout = () => {
    userContext.setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User Name is : {userContext.user?.name}</div>
      <div>User Email is : {userContext.user?.email}</div>
    </div>
  );
}

export default Users;
