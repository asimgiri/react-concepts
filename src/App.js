import React from 'react';
import './App.css';
import Todo from './components/Todo/Todo';
import Sample from './components/StateMgmt/Sample';
import ContactMgr from './components/ContactManager/ContactMgr';
import MouseEvent from './components/DOM/MouseEvent';
import Clock from './components/DOM/Clock';

var taskItems = [
  {
    taskname: "Buy Fish",
    date: new Date().getFullYear()
  },
  {
    taskname: "Buy Fish",
    date: new Date().getFullYear()
  }
]

var contactList = [
  {
    img: "https://lorempixel.com/70/70/people",
    name: "Aman KC",
    mob: "+977-9851086453",
    location: "Kathmandu, Nepal"
  },
  {
    img: "https://lorempixel.com/70/70/sports",
    name: "Bivek Chaulagain",
    mob: "+977-9851086453",
    location: "Kathmandu, Nepal"
  },
  {
    img: "https://lorempixel.com/70/70/nature",
    name: "Devin Rai",
    mob: "+977-9851086453",
    location: "Kathmandu, Nepal"
  }
]

function App() {
  return (
    <div className="App">
      {/* <Todo 
        items = {taskItems}
      />
      <Sample /> */}
      {/* <ContactMgr 
        items={contactList}
      /> */}

      <Clock />

    </div>
  );
}

export default App;
