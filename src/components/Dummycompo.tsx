import React from 'react'

interface Dummyprops{
    number :number,
    setNumber : React.Dispatch<React.SetStateAction<number>>,
    style : React.CSSProperties
}

const Dummycompo:React.FC<Dummyprops> =({number,setNumber,style})=> {

    const handleinc=()=>{
        setNumber((prevnum)=>prevnum+1)
    }
  return (
    <div>
        <h3 style={style}>Dummycompo</h3>
        {number}&nbsp;
        <button onClick={()=>handleinc()}>+</button>
    </div>
  )
}

export default  Dummycompo;
