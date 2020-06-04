import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Regist, Login, Tires,Prepurches, DiagnoseFix,Home,Header} from "./login"


//class App extends React.Component{


function App() {
  return (
    <div className="App">
      <Router>
<<<<<<< HEAD
        <Switch>
          <Route exact path="/">
            <a href="/login">Login</a>
            <a href="/SignUp">SignUp</a>
            <a href="/tires">Tires</a>
            <a href="/Prepurches">pre-purches</a>
            <a href="/Diagnose">Diagnose</a>
=======
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
        <a href="/Home">
        Home 
        </a>

>>>>>>> 854c035a76c3089f12a8402bd43c4da518817f4b
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
<<<<<<< HEAD
        </Switch>
=======
          <Route exact path="/Home">
          <Header/>
            <Home/>
          </Route>


      </Switch>

>>>>>>> 854c035a76c3089f12a8402bd43c4da518817f4b
      </Router>
    </div>
  );
}

export default App;
