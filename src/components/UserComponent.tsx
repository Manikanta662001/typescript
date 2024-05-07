import React from "react";
import UserInterface from "../interfaces";
const UserComponent: React.FC<UserInterface> = (props) => {
  return (
    <div>
      <h2>
        {props.name}--{props.age} -- {props.address} --
        {props.dob.toLocaleDateString()}
      </h2>
    </div>
  );
};
export default UserComponent;
