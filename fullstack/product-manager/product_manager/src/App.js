import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import Dash from './components/Dash';
import Add from './components/Add';


function App() {
  return (
    <div className="App">
      
      <Router>
      <Dash path="/" />
      <Add path="/new" />
      </Router>
    </div>
  );
}

export default App;
