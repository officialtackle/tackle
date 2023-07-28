import React from "react";
import Header from "./components/Header";
import "./App.css";
import "./components/Main";
import Main from "./components/Main";
import Token from "./components/Token";
import Roadmap from "./components/Roadmap";

const App = () => {
  return (
    <div className=" divide-y-[1px] .body-c">
      
        <Header />
        <Main />
        <Roadmap />
        <Token />
        
      
    </div>
  );
};

export default App;
