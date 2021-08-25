import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Card from "./components/cards/Card";
import './App.css';

const App =() => {
const [isVisible, setIsVisible] = useState(true);

const onMouseClick = () => {
  setIsVisible(!isVisible);
};

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Card isVisible={isVisible} onMouseClick={onMouseClick} />
    </div>
  );
}

export default App;
