import React from 'react';
import './App.css';
// import Chat from './components/Chat';
import Register from './components/Register';

import { Router } from '@reach/router';
import Dashboard from './components/Dashboard';
import Context from './components/Context';


function App() {

  return (
    <div className="App">
      <Context>
      <Router>
          <Register path="/" />
          <Dashboard path="/chatrooms/:name"/>
      </Router>
      </Context>
       {/* <Chat path="/chat/:name" /> */}
    </div>
  );
}
export default App;
