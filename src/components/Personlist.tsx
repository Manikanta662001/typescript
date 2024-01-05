import React from 'react'

// type personlistProps= {
//     names:{
//         first:string;
//         last:string;
//     }[]
// }
interface personlistProps {
    names:{
        first:string;
        last:string;
    }[]
}
export const Personlist = (props:personlistProps) => {
  return (
    <div>
        {
            props.names.map((item,ind)=>{
                return(
                    <div key={ind}>{item.first}-{item.last}</div>
                )
            })
        }
    </div>
  )
}
