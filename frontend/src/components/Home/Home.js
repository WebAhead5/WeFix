import React from "react";
import "./Home.css";
import Pic from "../../img/bmw.jpg";

export class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="bmw-pic">
          <img src={Pic} />
        </div>
        <div className="welcome-text">
          <p>
            Car Repair & Servicing Made Easy A fair price in seconds, mechanics
            you can trust next-day service at your door
          </p>
          <p>
            HAPPINESS GUARANTEED We only work with highly rated mechanics. All
            services are backed by our 12-month / 12,000-km warranty.
          </p>
          <p>
            FAIR PRICING We offer fair pricing and provide estimates upfront for
            hundreds of services on thousands of cars. Book with confidence.
          </p>
          <p>
            WE MAKE IT EASY Get a quote and book a service online. Our mechanics
            will come to your home or office, even on evenings and weekends.
          </p>
        </div>
      </div>
    );
  }
}
export default Home;
