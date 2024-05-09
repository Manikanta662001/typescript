import React from "react";
interface SummaryProps<S extends {}, T extends keyof S> {
  data: S;
  property: T;
}

const Summary = <S extends {}, T extends keyof S>({
  data,
  property,
}: SummaryProps<S, T>) => {
  const value = data[property] as string;
  return (
    <div>
      <h2>Summary Compomnent</h2>
      {typeof property === "string" ? (
        <p>
          {property} : {value}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};
export default Summary;
