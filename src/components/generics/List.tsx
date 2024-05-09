import React from "react";
interface ListProps<T> {
  items: T[];
  onClick: (val: T) => void;
}

const List = <T extends { id: number }>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>This is Generics Component</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {typeof item === "string" ? item : JSON.stringify(item)}
          </div>
        );
      })}
    </div>
  );
};
export default List;
