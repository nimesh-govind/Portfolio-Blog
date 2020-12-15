import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "./App.scss"

import About from "./About"
import Photography from "./Photography"
import Videography from "./Videography"
import Home from "./Home";

function App() {
//*******************LOOP TO FIND PATH LENGTH THROUGH INDEX.HTML */
  // const logo = document.querySelectorAll("#govind-position path");
  // for (let i = 0; i < logo.length; i++) {
  //   console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
  // }
//************************************************************** */
  return (
    <>
    <Router>
        <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}/>
        <Route path="/photography" component={Photography} />
        <Route path="/videography" component={Videography} />
        </Switch>
    </Router>
    </>
  );
}

export default App;

