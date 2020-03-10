import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import Dash from './components/Dash';
import Add from './components/Add';
import Redirect from './components/Redirect';
import Header from './components/Header';
import Menu from './components/Menu';
import Status from './components/Status';

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Redirect/>
      <Router>
          <Dash path ='/players/list'/>
          <Add path='/players/addplayer'/>
          <Status path='/status/game/:id'/>
      </Router>
    </div>
  );
}

export default App;
