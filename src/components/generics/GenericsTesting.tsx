import React from "react";

interface GenericsTestingProps<S, T> {
  ve1: S;
  ve2: T;
}

function GenericsTesting<S extends number, T extends number>({
  ve1,
  ve2,
}: GenericsTestingProps<S, T>) {
  return (
    <>
      <h2>Generics</h2>
      <p>
        {ve1} {ve2}
      </p>
    </>
  );
}
export default GenericsTesting;
