import React, { useState } from "react";
import "./DragDrop.css";

function DragDrop() {
  const [list1, setList1] = useState<string[]>([
    "Ram",
    "Mani",
    "Ravi",
    "Ratan",
    "Aadarsh",
  ]);
  const [list2, setList2] = useState<string[]>([]);
  const [draggedItem, setDraggedItem] = useState<{
    name: string;
    list: string;
    indexnum: number;
  } | null>(null);
  const handleDragStart = (
    e: React.DragEvent<HTMLLIElement>,
    name: string,
    list: string,
    indexnum: number
  ) => {
    setDraggedItem({ name, list, indexnum });
  };

  const handleDrop = (
    e: React.DragEvent<HTMLLIElement> | React.DragEvent<HTMLDivElement>,
    targetList: string,
    ind?: number
  ) => {
    e.preventDefault();
    if (draggedItem && ind === undefined) {
      if (draggedItem.list !== targetList) {
        if (targetList === "list2") {
          setList1(list1.filter((item) => item !== draggedItem.name));
          setList2([...list2, draggedItem.name]);
        } else {
          setList2(list2.filter((item) => item !== draggedItem.name));
          setList1([...list1, draggedItem.name]);
        }
      }
    } else {
      if (targetList === "list1") {
        const newList = [...list1];
        const removedItem = newList.splice(draggedItem?.indexnum as number, 1);
        newList.splice(ind as number, 0, removedItem[0]);
        setList1(newList);
      } else {
        const newList = [...list2];
        const removedItem = newList.splice(draggedItem?.indexnum as number, 1);
        newList.splice(ind as number, 0, removedItem[0]);
        setList2(newList);
      }
    }
    setDraggedItem(null);
  };
  return (
    <div>
      <h1>DragDrop</h1>
      <div className="boxes">
        <div
          className="side-box"
          onDrop={(e) =>
            draggedItem?.indexnum !== undefined && handleDrop(e, "list1")
          }
          onDragOver={(e) => e.preventDefault()}
        >
          <ul>
            {list1.map((name: string, ind: number) => {
              return (
                <li
                  key={ind}
                  draggable
                  onDragStart={(e) => handleDragStart(e, name, "list1", ind)}
                  onDrop={(e) => handleDrop(e, "list1", ind)}
                >
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className="side-box"
          onDrop={(e) =>
            draggedItem?.indexnum !== undefined && handleDrop(e, "list2")
          }
          onDragOver={(e) => e.preventDefault()}
        >
          <ul>
            {list2.map((name: string, ind: number) => {
              return (
                <li
                  key={ind}
                  draggable
                  onDragStart={(e) => handleDragStart(e, name, "list2", ind)}
                  onDrop={(e) => handleDrop(e, "list2", ind)}
                >
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DragDrop;
