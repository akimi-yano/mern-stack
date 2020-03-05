import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper'
import Navbar from './components/Navbar'
import FormWrapper from './components/FormWrapper'
import MyContext from './context/NameContext';

function App() {
  return (
  <Wrapper>
    <Navbar/>
    <FormWrapper/>
  </Wrapper>
  );
}

export default App;
