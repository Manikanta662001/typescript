import React, { useState,ChangeEvent, FormEvent, useRef, useEffect} from 'react'

interface Props{
    count:number
}
export const Count:React.FunctionComponent<Props> = (props) => {
    const [val,setval] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)

    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setval(e.target.value)
    }

    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault()
        alert('Form is Submitted')
    }
    useEffect(()=>{
        if(inputRef.current){
            console.log(inputRef.current,"2020")
            inputRef.current.focus()
        }
    },[])
  return (
    <div>
        <h1>Count</h1>
        <h4>{props.count}</h4>
        <h4>{val}</h4>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={val} ref={inputRef}/>
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
