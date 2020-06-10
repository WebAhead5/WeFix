import React from "react";
import "./howitworks.css";
import Work from "../../img/work.png";
export class Howitworks extends React.Component {
  render() {
    return (
      <div className="howitworks-container">
        <img src={Work} id="work-img" />
        <h1>How It Works</h1>
        <p>
          Car trouble? We can help Book a service online and our mechanics will
          come to your home or office to service your car. We make the entire
          process easy for you. Using our website and mobile apps, you can
          access the maintenance schedule of all your cars, get a fair and
          transparent price, book an appointment, make payments, access service
          history and get maintenance reminders. And since we don’t have the
          overhead cost of a shop, we are able to charge less while providing a
          convenient service. Scheduling Your Appointment is Easy{" "}
        </p>
        <h3>HERE IS WHAT WE NEED</h3>
        <ul>
          <li>
            {" "}
            What you think is wrong (e.g., "my car is shaking" or "I need new
            brakes")
          </li>
          <li> The year, make, and model of your car </li>
          <li>
            Your name, email address, phone number, and zip code. GET A FAIR AND
            TRANSPARENT PRICE We’ll provide a detailed list of the parts,
            services, and costs needed to service your car. In most cases, we
            will provide a fair and transparent price instantly. All our
            mechanics have agreed to honor the quotes we provide. This ensures
            that there will be no need for negotiations or any last minute
            surprises.
          </li>
        </ul>
      </div>
    );
  }
}

export default Howitworks;
