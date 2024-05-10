import React, { useState } from "react";
import "./App.css";
import W3practice from "./W3practice";
import UsersList, { FirstComponent } from "./components/FirstComponent";
import PropsComponent from "./components/PropsComponent";
import UserComponent from "./components/UserComponent";
import Greet from "./components/Greet";
import { Person } from "./components/Person";
import { Personlist } from "./components/Personlist";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Count } from "./components/Count";
import Dummycompo from "./components/Dummycompo";
import FetchTesting from "./components/FetchTesting";
import Input from "./components/Input";
import Button from "./components/Button";
import User from "./components/state/User";
import Counter from "./components/state/Counter";
import ThemeContextProvider from "./components/context/ThemeContext";
import Box from "./components/context/Box";
import UserContextProvider from "./components/context/UserContext";
import Users from "./components/context/Users";
import DomRef from "./components/ref/DomRef";
import MutableRef from "./components/ref/MutableRef";
import ClassCounter from "./components/class/ClassCounter";
import List from "./components/generics/List";
import GenericsTesting from "./components/generics/GenericsTesting";
import Summary from "./components/generics/Summary";
import RandomQuoteGenerator from "./components/RandomQuoteGenerator";
import PasswordGenerator from "./components/PasswordGenerator";
import Records from "./components/pagination/Records";
import StopWatch from "./components/stopwatch/StopWatch";

const App = () => {
  const [number, setNumber] = useState<number>(2);
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>([]);
  const [submit, setSubmit] = useState<boolean>(false);
  const [index, setIndex] = useState<number | null>(null);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!submit) {
      setTodoList([...todoList, todo]);
    } else {
      const dummyList = [...todoList];
      dummyList[index as number] = todo;
      setTodoList(dummyList);
      setIndex(null);
      setSubmit(false);
    }
    setTodo("");
  };
  const handleEdit = (ind: number) => {
    const data = todoList[ind];
    setSubmit(true);
    setTodo(data);
    setIndex(ind);
  };
  const handleDelete = (ind: number) => {
    const dummyList = [...todoList];
    dummyList.splice(ind, 1);
    setTodoList(dummyList);
  };
  const personName = {
    first: "mani",
    last: "G",
  };
  const nameList = [
    {
      first: "mani",
      last: "G",
    },
    {
      first: "vamsi",
      last: "G",
    },
    {
      first: "aneesh",
      last: "patil",
    },
  ];
  const style: React.CSSProperties = {
    fontFamily: "sans-serif",
    textAlign: "center",
    color: "red",
  };
  return (
    <div className="App">
      <h1>This project is deployed using {personName.first}</h1>
      <W3practice />
      <FirstComponent />
      <UsersList />
      <PropsComponent fName="jack" lName="Sparrow" />
      <UserComponent
        name="John Doe"
        age={26}
        address="87 Summer St, Boston, MA 02110"
        dob={new Date()}
      />
      <Greet name={"mani"} count={20} isLogedin={true} />
      <Greet name={"mani"} isLogedin={true} />
      <Person name={personName} />
      <Personlist names={nameList} />
      <Status status="error" />
      <Heading>This is Heading component children</Heading>
      <Heading>
        <div>This is Heading component children</div>
      </Heading>
      <Oscar>
        <Heading>Oscar goes to leader</Heading>
      </Oscar>
      <Count count={2} />
      <Dummycompo number={number} setNumber={setNumber} style={style} />
      <FetchTesting />
      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />
      <Input
        todo={todo}
        setTodo={setTodo}
        submitFunc={handleSubmit}
        todoList={todoList}
        handleEdit={handleEdit}
        submit={submit}
        handleDelete={handleDelete}
      />
      <User />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <Users />
      </UserContextProvider>
      <DomRef />
      <MutableRef />
      <ClassCounter message="Class Counter has a Count of " />
      {/* <List items={["lion","bull","fox"]} onClick = {(item)=>console.log("LISTITEM::",item)}/>
      <List items={[5,6,7]} onClick = {(item)=>console.log("LISTITEM::",item)}/> */}
      <List
        items={[
          { id: 1, name: "mani", loc: "hyb" },
          { id: 2, name: "ram", loc: "hyb" },
          { id: 3, name: "aadarsh", loc: "hyb" },
        ]}
        onClick={(item) => console.log("LISTITEM::", item)}
      />
      <GenericsTesting ve1={23} ve2={65} />
      <Summary data={{ name: "mani", age: 22 }} property={"age"} />
      <RandomQuoteGenerator />
      <PasswordGenerator />
      <Records />
      <StopWatch />
    </div>
  );
};

export default App;
