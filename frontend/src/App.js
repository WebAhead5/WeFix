import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Regist, Login, Tires, Prepurches, DiagnoseFix } from "./login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <a href="/login">Login</a>
            <a href="/SignUp">SignUp</a>
            <a href="/tires">Tires</a>
            <a href="/Prepurches">pre-purches</a>
            <a href="/Diagnose">Diagnose</a>
          </Route>

          <Route exact path="/Diagnose">
            <DiagnoseFix />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/Tires">
            <Tires />
          </Route>
          <Route exact path="/Prepurches">
            <Prepurches />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
