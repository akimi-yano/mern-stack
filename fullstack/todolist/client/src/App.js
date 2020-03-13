import React from 'react';
import './App.css';
import Dash from './components/Dash'
import Add from './components/Add'
import {Router} from '@reach/router'
import Edit from './components/Edit'
import Detail from './components/Detail'
import Title from './components/Title'
import Reviews from './components/Reviews'

function App() {
  return (
    <div className="App">
      <Title  />
      <Router>
      <Dash path="/" />
      <Add path="/new" />  
      <Edit path="/edit/:id" />
      <Detail path="/show/:id" />
      <Reviews path="/reviews/:id" />
      </Router>
    </div>
  );
}

export default App;
