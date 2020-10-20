import React from "react";
import logo from "./logo.svg";
import "./App.css"
// import "./Landing.css";
import background from "./me-and-taz.jpeg";

function App() {
  return (
    <>
    <div className="App">
      <header className="">
      {/* <img src={background} /> */}
        <p className="maintitle">Nimesh</p>
        <p className="maintitleline2">Govind</p>
      </header>
      <div className="App-header">
      <p>Additional content goes below</p>
        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but also the leap into 
          electronic typesetting, remaining essentially unchanged. It was popularised in 
          the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker including 
          versions of Lorem Ipsum.</h6>
          </div>
    </div>
    </>
  );
}

export default App;
