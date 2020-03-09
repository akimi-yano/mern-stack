import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import Dash from './components/Dash';
import Add from './components/Add';
import Details from './components/Details';
import Edit from './components/Edit';


function App() {
  return (
    <div className="App">
      
      <Router>
      <Dash path="/" />
      <Add path="/new" />
      <Details path='/:id' />
      <Edit path='/:id/edit' />
      </Router>
    </div>
  );
}

export default App;
