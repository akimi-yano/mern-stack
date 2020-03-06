import React, { useState } from 'react';
import './App.css';
import { Router, navigate } from '@reach/router'
import Search from './components/Search';
import Person from './components/Person';
import Planet from './components/Planet';
import Starship from './components/Starship';
import ErrorComponent from './components/ErrorComponent'

function App() {


  const onSubmitHandler = e => {
    e.preventDefault()
    navigate(`/${formState.searchParam}/${formState.searchId}`)
  }

  const onChangeHandler = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }
  const [formState, setFormState] = useState({
    searchParam: "people",
    searchId: "1"
  })
  return (
    <div className="App">
      <Search onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} />
      <Router>
        <Person path="/people/:id" />
        <Planet path="/planets/:id" />
        <Starship path="/starships/:id" />
        <ErrorComponent path="/error" />
      </Router>
    </div>
  );
}

export default App;
