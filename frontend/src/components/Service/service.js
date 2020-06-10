import React from "react";
import "./service.css";
import Parts from "../../img/parts.jpg";

export class Service extends React.Component {
  render() {
    return (
      <div className="service-container">
        <img src={Parts} id="part-img" />
        <h1>Our Services</h1>
        <ul>
          <li>Battery</li>
          <li>Brakes</li>
          <li>Belts</li>
          <li>Clutch & Transmissio</li>
          <li>Diagnostics</li>
          <li>Engine</li>
          <li>Exhaust Systems</li>
          <li>Fluids</li>
          <li>Filter</li>
          <li>Fuel Systems</li>
          <li>Suspension & Steering</li>
          <li>Heating & AC</li>
          <li>Sensors</li>
          <li>Lights</li>
          <li>Ignition</li>
          <li>Pre-Purchase Car Inspection</li>
        </ul>
      </div>
    );
  }
}

export default Service;
