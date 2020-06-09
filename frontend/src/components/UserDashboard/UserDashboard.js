import "./UserDashboard.css";
import React from "react";
import tires from "../../img/tires.svg";
import fix from "../../img/fix.svg";
import prepurchase from "../../img/prepurchase.svg";

export class UserDash extends React.Component {
  render() {
    return (
      <div>
        <div className="dash-container">
          <h1>Dashboard</h1>

          <div className="user-data">
            <p>Car Model</p>
            <p>Model Year</p>
            <p>Last Service</p>
          </div>
          <h1>Welcome Amir Fahoum Please select a service</h1>
          <div className="pic-container">
            <a href="/Tires">
              <img src={tires} className="tires" />
            </a>
            <a href="/Diagnose">
              <img src={fix} className="fix" />
            </a>
            <a href="/Prepurches">
              <img src={prepurchase} className="prepurchase" />
            </a>
          </div>
          <div className="reservation">
            <p>Your next reservation contains:</p>
          </div>
        </div>
      </div>
    );
  }
}
