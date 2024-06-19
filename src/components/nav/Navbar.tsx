import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      {/* <h1>Navbar</h1> */}
      <div className="alllinks">
        <NavLink to={"/w3practice"}>W3Practise</NavLink>
        <NavLink to={"/firstcompo"}>FirstComponent</NavLink>
        <NavLink to={"/userslist"}>UsersList</NavLink>
        <NavLink to={"/propscompo"}>PropsComponent</NavLink>
        <NavLink to={"/usercompo"}>UserComponent</NavLink>
        <NavLink to={"/greet"}>Greet</NavLink>
        <NavLink to={"/greetoptional"}>GreetOptional</NavLink>
        <NavLink to={"/person"}>Person</NavLink>
        <NavLink to={"/personlist"}>Personlist</NavLink>
        <NavLink to={"/status"}>Statuses</NavLink>
        <NavLink to={"/heading"}>Heading</NavLink>
        <NavLink to={"/heading1"}>Heading1</NavLink>
        <NavLink to={"/heading2"}>Heading2</NavLink>
        <NavLink to={"/oscar"}>Oscar</NavLink>
        <NavLink to={"/count"}>Count</NavLink>
        <NavLink to={"/dummycompo"}>Dummycompo</NavLink>
        <NavLink to={"/fetchtesting"}>FetchTesting</NavLink>
        <NavLink to={"/button"}>Button</NavLink>
        <NavLink to={"/todo"}>Todos</NavLink>
        <NavLink to={"/user"}>User</NavLink>
        <NavLink to={"/counter"}>Counter</NavLink>
        <NavLink to={"/themecontext"}>ThemeContext</NavLink>
        <NavLink to={"/usercontext"}>UserContext</NavLink>
        <NavLink to={"/domref"}>Domref</NavLink>
        <NavLink to={"/mutableref"}>MutableRef</NavLink>
        <NavLink to={"/classcounter"}>ClassCounter</NavLink>
        <NavLink to={"/generics1"}>Generics1</NavLink>
        <NavLink to={"/generics2"}>Generics2</NavLink>
        <NavLink to={"/summary"}>Summary</NavLink>
        <NavLink to={"/quotegenerator"}>RandomQuoteGenerator</NavLink>
        <NavLink to={"/passwordgenerator"}>PasswordGenerator</NavLink>
        <NavLink to={"/records"}>Records</NavLink>
        <NavLink to={"/stopwatch"}>StopWatch</NavLink>
        <NavLink to={"/popup"}>Popup</NavLink>
        <NavLink to={"/emojisearch"}>EmojiSearch</NavLink>
        <NavLink to={"/ipaddress"}>Ip Address</NavLink>
        <NavLink to={"/dragdrop"}>Drag-Drop</NavLink>
        <NavLink to={"/toastify"}>Toastify</NavLink>
        <NavLink to={"/react-data-grid"}>React-data-grid</NavLink>
        <NavLink to={"/infinite-scroll"}>Infinite Scroll</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
