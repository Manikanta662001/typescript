import React from "react";

type StatusProps = {
  status: "loading" | "success" | "error";
};
export const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Data is loading";
  } else if (props.status === "success") {
    message = "Data fetched successfully";
  } else {
    message = "Error while fetching";
  }
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};
