import React from "react";
<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Regist, Login, Tires,Prepurches, DiagnoseFix} from "./login"


//class App extends React.Component{


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>

      <Route exact path="/">
        <a href="/login">
          Login 
        </a>
        <a href="/SignUp">
          SignUp 
        </a>
        <a href="/tires">
          Tires 
        </a>
        <a href="/Prepurches">
          pre-purches 
        </a>
        <a href="/Diagnose">
        Diagnose 
        </a>
          </Route>

          <Route exact path="/Diagnose">
            <DiagnoseFix/>
          </Route>

          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/Tires">
            <Tires/>
          </Route>
          <Route exact path="/Prepurches">
            <Prepurches/>
          </Route>
      </Switch>

      </Router>
=======
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function App() {
  return (
    <div>
      <Header />
      <Home />
>>>>>>> d25ed4c89cbe4ecf268cff57901b23605e7c34fa
    </div>
  );
}

export default App;
