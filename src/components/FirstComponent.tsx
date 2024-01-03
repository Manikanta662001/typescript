import React,{useState,useEffect} from 'react'
import tsimg from './../images/tsimg.jpg'

export const FirstComponent:React.FC<{}> = () => {
  return (
    <div>
        <h1>FirstComponent</h1>
        <h3>A Simple React Component Example with Typescript</h3>
        <img src={tsimg} alt="img" />
    </div>
  )
}

interface Users{
    id:number,
    name:string,
    email:string,
    username:string
}

interface UserState{
    users:Users[] | null,
    isLoading: boolean,
    error: string | null
}

const Useusers=()=>{
    const [state,setstate] = useState<UserState>({
        users:null,
        isLoading:true,
        error:null
    })
    useEffect(()=>{
        const fetchUsers = async ()=>{
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const res = await response.json()
                setstate({...state,users:res,isLoading:false})
            }
            catch(error:any){
                setstate({...state,error:error.message,isLoading:false})
            }
        } 
        fetchUsers();
    },[])
    return state
}

const UsersList=()=>{
    const {users,isLoading,error} = Useusers()
    if (isLoading){
        return <div>Loading.........</div>
    }
    else if(error){
        return <div>{error}</div>
    }
   return (
    <ul>
        
            {users?.map((user)=>{
                return(
                    <li key={user.id}>
                    <p>{user.id}</p>
                    <p>{user.name}</p>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                </li>
                )
            })}
        
    </ul>
   )
        
    
}
export default UsersList