import React from 'react';
import Dash from './components/Dash'
import Add from './components/Add'
import Edit from './components/Edit'
import Detail from './components/Detail'
import {Router} from '@reach/router'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Dash path="/"/>
      <Add path='new'/>
      <Edit path='edit/:id'/>
      <Detail path=":id"/>
      </Router>
    </div>
  );
}

export default App;
