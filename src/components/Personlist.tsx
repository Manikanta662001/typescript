import React from "react";
import { Name } from "./Person.types";

// type personlistProps= {
//     names:{
//         first:string;
//         last:string;
//     }[]
// }
interface personlistProps {
  names: Name[];
}
export const Personlist = (props: personlistProps) => {
  return (
    <div>
      {props.names.map((item, ind) => {
        return (
          <div key={ind}>
            {item.first}-{item.last}
          </div>
        );
      })}
    </div>
  );
};
