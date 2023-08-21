import React from 'react';
import Header from './components/Header';
import "./App.css"
import Main from './components/Main';
import Roadmap from './components/Roadmap';
import Token from './components/Token';
import FaQ from './components/FaQ';

function App() {
  return (
    <div className=''>
      <Header />
      <Main />
      <Roadmap />
      <Token />
      <FaQ />
    </div>
  )
}

export default App
