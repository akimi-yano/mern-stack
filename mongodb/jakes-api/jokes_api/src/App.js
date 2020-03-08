import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import Dash from './components/Dash'
import Add from './components/Add'
import Edit from './components/Edit'
import Details from './components/Details'

function App() {
  return (
    <div className="App">
      <Router>
        <Dash path="/" />
        {/* <Hybrid path="/new"/>
        <Hybrid path="/edit/:id"/> */}
        <Add path="/new" />
        <Edit path="/edit/:id" />
        <Details path="/show/:id" />
      </Router>
    </div>
  );
}

export default App;
