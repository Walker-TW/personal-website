import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Let's Hire Tom Walker He's A Swell Guy!</p>
        <a
          className="App-link"
          href="https://github.com/Walker-TW"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Out My Projects
        </a>
      </header>
    </div>
  );
}

export default App;
