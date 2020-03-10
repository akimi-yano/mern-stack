import React from 'react';
import './App.css';
import {Router} from '@reach/router'

import Dash from './components/Dash'
// import AddEdit from './components/AddEdit'
import Add from './components/Add'
import Edit from './components/Edit'
import Title from './components/Title'

function App() {
  return (
    <div className="App">
      <Title/>
      <Router>
        <Dash path ='/' />
        <Add path = '/new' />
        <Edit path = '/edit/:id' />
        {/* <AddEdit path = '/new' />
        <AddEdit path = '/edit/:id' /> */}
      </Router>
    </div>
  );
}

export default App;
