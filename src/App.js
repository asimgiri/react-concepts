import React from 'react';
import './App.css';
import Todo from './components/Todo/Todo';
import Sample from './components/StateMgmt/Sample';
import ContactMgr from './components/ContactManager/ContactMgr';
import MouseEvent from './components/DOM/MouseEvent';
import Clock from './components/DOM/Clock';
import Modal from './components/DOM/Modal';
import Question from './components/Quiz/Question';

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
      <ContactMgr 
        items={contactList}
      />

      <Clock />
{/* 
      <Modal
        title="This is a Modal Title"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore exercitationem magni cum provident, laudantium consectetur sequi accusamus velit id ducimus modi asperiores perferendis optio magnam similique est praesentium commodi? Modi culpa deserunt optio itaque illum asperiores iste adipisci necessitatibus quas?"
      />

      <Question /> */}

    </div>
  );
}

export default App;
