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

function identity<N>(val: N): N {
  return val;
}
const merge = <A, B>(obj1: A, obj2: B): A & B => {
  return { ...obj1, ...obj2 };
};
function getLength<T extends { length: number }>(arg: T) {
  return arg.length;
}
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
function printKeys<T extends Record<string, number>>(obj: T) {
  console.log(Object.keys(obj));
}

const GenericsPractice = () => {
  console.log("1::::", identity<number>(3));
  console.log("2::::", merge({ name: "mk" }, { age: 22 }));
  console.log("3::::", getLength("abc"), getLength([1, 2, 3, 4]));
  const user = { name: "Alice", age: 30 };
  console.log("4::::", getProp(user, "name"));
  console.log("5::::", printKeys({ a: 1, b: 2 }))
  return <></>;
};
export { GenericsPractice };
