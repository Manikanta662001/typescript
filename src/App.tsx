import React from 'react';
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

const App = ()=> {
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
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
