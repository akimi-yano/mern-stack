import React from 'react';
import './App.css';

import { Router } from '@reach/router';
import Mix from './components/Mix'
import Custom from './components/Custom';

function App() {
  return (
    <div className="App">
      <Router>
        <Mix path="/:param"/>
        <Custom path="/:param/:color/:color2"/>
      </Router>
    </div>
  );
}

export default App;
