import React from 'react'

type Greetprops={
    name:string,
    count:number,
    isLogedin:boolean
}
// interface Greetprops{
//     name:string
// }
const Greet = (props:Greetprops) => {
  return (
    <div>
        {props.isLogedin? <h1>Welcome to Greet component by the user {props.name} you have {props.count} msgs</h1>:<h2>Welcome Guest</h2>}

    </div>
  )
}
export default Greet;