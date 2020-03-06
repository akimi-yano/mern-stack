import React from 'react';

import './App.css';
import ChildComponent from './components/ChildComponent';

function parentDivClickedHandler() {
  console.log("parent clicked!")
}

function childDivClickedHandler() {
  console.log("child clicked!!")
}

function App() {
  return (
    <div className="App" onClick={parentDivClickedHandler}>
      This is the parent div
      <ChildComponent divClickedHandler={childDivClickedHandler}/>
      
    </div>
  );
}

export default App;
