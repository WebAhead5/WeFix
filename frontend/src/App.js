import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Regist,
  Login,
  Tires,
  Prepurches,
  DiagnoseFix,
  Home,
  Header,
  UserDash,
} from "./login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <a href="/login">Login</a>
            <a href="/Regist">SignUp</a>
            <a href="/tires">Tires</a>
            <a href="/Prepurches">pre-purches</a>
            <a href="/Diagnose">Diagnose</a>
            <a href="/Home">Home</a>
            <a href="/Dashboard">Dashboard</a>
          </Route>

          <Route exact path="/Diagnose">
            <DiagnoseFix />
          </Route>
          <Route exact path="/Dashboard">
            <UserDash />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/Regist">
            <Regist />
          </Route>
          <Route exact path="/Tires">
            <Tires />
          </Route>
          <Route exact path="/Prepurches">
            <Prepurches />
          </Route>
          <Route exact path="/Home">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
