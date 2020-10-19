import React from "react";
import logo from "./logo.svg";
import "./App.css"
// import "./Landing.css";
import background from "./me-and-taz.jpeg";

function App() {
  return (
    <div className="App">
      <div className="App-header Background-Image">
      <img src={background} />
        <p className="maintitle">Nimesh</p>
        <p className="maintitleline2">Govind</p>
        <p>Additional content goes below</p>
      </div>
    </div>
  );
}

export default App;
