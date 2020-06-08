import React from "react";
import "./Home.css";
import Shield from "../../img/security.svg";
import price from "../../img/coin.svg";
import easily from "../../img/globe.svg";

export class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div id="wallppr">
          <div className="welcome-text">
            <p id="item" className="repair">
              Car Repair & Servicing Made Easy A fair price in seconds,
              mechanics you can trust next-day service at your door
            </p>
            <p id="item">
              <img src={Shield} width="100px" height="100px" id="pic" />
              HAPPINESS GUARANTEED We only work with highly rated mechanics. All
              services are backed by our 12-month / 12,000-km warranty.
            </p>
            <p id="item">
              <img src={price} width="100px" height="100px" id="pic" />
              FAIR PRICING We offer fair pricing and provide estimates upfront
              for hundreds of services on thousands of cars. Book with
              confidence.
            </p>
            <p id="item">
              <img src={easily} width="100px" height="100px" id="pic" />
              WE MAKE IT EASY Get a quote and book a service online. Our
              mechanics will come to your home or office, even on evenings and
              weekends.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
