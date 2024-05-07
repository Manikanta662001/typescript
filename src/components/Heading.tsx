import React from "react";

type HeadingProps = {
  children: string | React.ReactElement;
};
export const Heading = (props: HeadingProps) => {
  return <div>{props.children}</div>;
};
