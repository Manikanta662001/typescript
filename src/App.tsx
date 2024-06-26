import React, { Suspense, lazy, useState } from "react";
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
import Navbar from "./components/nav/Navbar";
import { Route, Routes } from "react-router-dom";
import Popup from "./components/popup/Popup";
import Errorpage from "./components/Errorpage";
import IPAddress from "./components/IPAddress";
import DragDrop from "./components/drag-drop/DragDrop";
import Index from "./components/toastify/Index";
import Datagrid from "./components/react-data-grid/ReactDatagrid";
// import EmojiSearch from "./components/emojis/EmojiSearch";
const LazyEmojiSearch = lazy(() => import("./components/emojis/EmojiSearch"));
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
      <Navbar />
      <Routes>
        <Route path="/w3practice" element={<W3practice />} />
        <Route path="/firstcompo" element={<FirstComponent />} />
        <Route path="/userslist" element={<UsersList />} />
        <Route
          path="/propscompo"
          element={<PropsComponent fName="jack" lName="Sparrow" />}
        />
        <Route
          path="/usercompo"
          element={
            <UserComponent
              name="John Doe"
              age={26}
              address="87 Summer St, Boston, MA 02110"
              dob={new Date()}
            />
          }
        />
        <Route
          path="/greet"
          element={<Greet name={"mani"} count={20} isLogedin={true} />}
        />
        <Route
          path="/greetoptional"
          element={<Greet name={"mani"} isLogedin={true} />}
        />
        <Route path="/person" element={<Person name={personName} />} />
        <Route path="/personlist" element={<Personlist names={nameList} />} />
        <Route path="/status" element={<Status status="error" />} />
        <Route
          path="/heading"
          element={<Heading>This is Heading component children</Heading>}
        />
        <Route
          path="/heading1"
          element={<Heading>This is Heading component children</Heading>}
        />
        <Route
          path="/heading2"
          element={
            <Heading>
              <div>This is Heading component children</div>
            </Heading>
          }
        />
        <Route
          path="/oscar"
          element={
            <Oscar>
              <Heading>Oscar goes to leader</Heading>
            </Oscar>
          }
        />
        <Route path="/count" element={<Count count={2} />} />
        <Route
          path="/dummycompo"
          element={
            <Dummycompo number={number} setNumber={setNumber} style={style} />
          }
        />

        <Route path="/fetchtesting" element={<FetchTesting />} />
        <Route
          path="/button"
          element={
            <Button
              handleClick={(event, id) => {
                console.log("Button Clicked", event, id);
              }}
            />
          }
        />
        <Route
          path="/todo"
          element={
            <Input
              todo={todo}
              setTodo={setTodo}
              submitFunc={handleSubmit}
              todoList={todoList}
              handleEdit={handleEdit}
              submit={submit}
              handleDelete={handleDelete}
            />
          }
        />
        <Route path="/user" element={<User />} />
        <Route path="/counter" element={<Counter />} />
        <Route
          path="/themecontext"
          element={
            <ThemeContextProvider>
              <Box />
            </ThemeContextProvider>
          }
        />
        <Route
          path="/usercontext"
          element={
            <UserContextProvider>
              <Users />
            </UserContextProvider>
          }
        />
        <Route path="/domref" element={<DomRef />} />
        <Route path="/mutableref" element={<MutableRef />} />
        <Route
          path="/classcounter"
          element={<ClassCounter message="Class Counter has a Count of " />}
        />
        <Route
          path="/generics1"
          element={
            <List
              items={[
                { id: 1, name: "mani", loc: "hyb" },
                { id: 2, name: "ram", loc: "hyb" },
                { id: 3, name: "aadarsh", loc: "hyb" },
              ]}
              onClick={(item) => console.log("LISTITEM::", item)}
            />
          }
        />
        <Route
          path="/generics2"
          element={<GenericsTesting ve1={23} ve2={65} />}
        />
        <Route
          path="/summary"
          element={
            <Summary data={{ name: "mani", age: 22 }} property={"age"} />
          }
        />
        <Route path="/quotegenerator" element={<RandomQuoteGenerator />} />
        <Route path="/passwordgenerator" element={<PasswordGenerator />} />
        <Route path="/records" element={<Records />} />
        <Route path="/stopwatch" element={<StopWatch />} />
        <Route path="/popup" element={<Popup />} />
        <Route
          path="/emojisearch"
          element={
            <Suspense fallback="Loading.......">
              <LazyEmojiSearch />
            </Suspense>
          }
        />
        <Route path="/ipaddress" element={<IPAddress />} />
        <Route path="/dragdrop" element={<DragDrop />} />
        <Route path="/toastify" element={<Index />} />
        <Route path="/react-data-grid" element={<Datagrid />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>

      {/* <List items={["lion","bull","fox"]} onClick = {(item)=>console.log("LISTITEM::",item)}/>
      <List items={[5,6,7]} onClick = {(item)=>console.log("LISTITEM::",item)}/> */}
    </div>
  );
};

export default App;
