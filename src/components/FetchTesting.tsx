import React, { useEffect, useState } from 'react'


interface UsersList{
    id:number;
    name:string;
    email:string;
    username:string;
    website : string;
    address:{street: string, suite: string, city: string, zipcode: string, geo: {lat:string;lng:string}}
}

function FetchTesting() {
    const [data,setData] = useState<UsersList[] | []>([])
    console.log(data,"5555s")
    useEffect(()=>{
        const fetchUsers = async ()=>{
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const res = await response.json()
                setData(res)
            }
            catch(error:any){
                console.log(error)
            }
        } 
        fetchUsers();
    },[])
  return (
    <div>FetchTesting</div>
  )
}

export default FetchTesting