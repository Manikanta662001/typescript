import React from "react";

interface ButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}

function Button({ handleClick }: ButtonProps) {
  return (
    <div>
      <button onClick={(event) => handleClick(event, 45)}>Click me</button>
    </div>
  );
}

export default Button;
