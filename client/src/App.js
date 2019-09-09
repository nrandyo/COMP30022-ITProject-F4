import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Member from "./components/members/member.js";

function App() {
  return (
    <div className="App">
      <header>
        <h1>We are the Fantastic 4!</h1>
      </header>
      <Member />
    </div>
  );
}

export default App;
