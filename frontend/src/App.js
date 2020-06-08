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
  LoggedinHeader,
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
            <LoggedinHeader />
            <DiagnoseFix />
          </Route>
          <Route exact path="/Dashboard">
            <LoggedinHeader />
            <UserDash />
          </Route>
          <Route exact path="/login">
            <Header />
            <Login />
          </Route>
          <Route exact path="/Regist">
            <Header />
            <Regist />
          </Route>
          <Route exact path="/Tires">
            <LoggedinHeader />
            <Tires />
          </Route>
          <Route exact path="/Prepurches">
            <LoggedinHeader />
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
