import './App.css';
// import React, { useState, createContext } from 'react';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper';



function App() {


  return (
    <div className="App">
      <Wrapper>
          <Navbar/>
          <FormWrapper/> 
          {/* ???? what does this do? */}
      </Wrapper>
    </div>
  );
}

export default App;
