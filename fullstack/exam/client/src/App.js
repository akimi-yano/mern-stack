import React from 'react';
import Dash from "./components/Dash"
import Add from "./components/Add"
import {Router} from '@reach/router'
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Project Manager</h1>
      <Router>
      <Dash path="/" />
      <Add path="/new" />

      </Router>
    </div>
  );
}

export default App;
