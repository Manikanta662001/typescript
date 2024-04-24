import React, { useState } from 'react';
import './App.css';
import { type } from 'os';
import  W3practice  from './W3practice';
import UsersList, { FirstComponent } from './components/FirstComponent';
import PropsComponent from './components/PropsComponent';
import UserComponent from './components/UserComponent';
import Greet from './components/Greet';
import { Person } from './components/Person';
import { Personlist } from './components/Personlist';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Count } from './components/Count';
import Dummycompo from './components/Dummycompo';
import FetchTesting from './components/FetchTesting';
import Input from './components/Input';

const App = ()=> {
  const [number,setNumber] = useState<number>(2)
  const [todo,setTodo] = useState<string>("")
  const [todoList,setTodoList] = useState<string[]>([])
  const [submit,setSubmit] = useState<boolean>(false)
  const [index,setIndex] = useState<number | null>(null)
  const handleSubmit = (e:any) =>{
    e.preventDefault();
    if (!submit){
    setTodoList([...todoList,todo]);
    }
    else{
      const dummyList = [...todoList];
      dummyList[index as number] = todo
      setTodoList(dummyList);
      setIndex(null);
      setSubmit(false);
    }
    setTodo("");
  }
  const handleEdit = (ind : number) =>{
    const data = todoList[ind];
    setSubmit(true)
    setTodo(data);
    setIndex(ind)
  }
  const handleDelete = (ind : number) =>{
    const dummyList = [...todoList];
    dummyList.splice(ind,1)
    setTodoList(dummyList);
  }
 const personName={
  first:'mani',
  last:'G'
 }
 const nameList = [
  {
    first:'mani',
    last:'G'
   },
   {
    first:'vamsi',
    last:'G'
   },
   {
    first:'aneesh',
    last:'patil'
   }
 ]
 const style:React.CSSProperties = {
      fontFamily: 'sans-serif',
      textAlign: 'center',
      color : 'red'
      
 }
  return (
    <div className="App">
      <h1>This project is deployed using {personName.first}</h1>
     <W3practice/>
     <FirstComponent/>
     <UsersList/>
     <PropsComponent fName='jack' lName='Sparrow'/>
     <UserComponent name="John Doe" age={26} address="87 Summer St, Boston, MA 02110" dob={new Date()}/>
     <Greet name={'mani'} count={20} isLogedin={true}/>
     <Person name={personName}/>
     <Personlist names={nameList}/>
     <Status status='Error'/>
     <Heading>This is Heading component children</Heading>
     <Heading><div>This is Heading component children</div></Heading>
     <Oscar><Heading>Oscar goes to leader</Heading></Oscar>
     <Count count={2}/>
     <Dummycompo number={number} setNumber={setNumber} style={style} />
     <FetchTesting/>
     <Input todo={todo} setTodo={setTodo} submitFunc={handleSubmit} todoList={todoList} handleEdit={handleEdit} submit={submit} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
