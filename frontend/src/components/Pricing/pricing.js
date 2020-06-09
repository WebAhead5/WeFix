import React from "react";
import "./pricing.css";
import Price from "../../img/price.jpg";

export class Pricing extends React.Component {
  render() {
    return (
      <div className="pricing-container">
        <h1>Fair & Transparent Pricing</h1>
        <p>
          Get peace of mind with our easy to understand, transparent quotes.
          Getting an instant price is just a few clicks away. Simply provide
          your car make and model, desired service, your location and we’ll
          provide you with a fair, transparent quote—before you schedule your
          service. Our easy to understand quotes show the detailed cost of
          labor, parts, and taxes (if any). You'll know exactly what's included
          in your service so there are no surprises. You're always in control.
          If your mechanic discovers that your car doesn't need all the services
          you requested, we'll remove those services and lower your bill, right
          on the spot. If your car needs additional repair services, your
          mechanic will provide you with an itemized list of what you need. You
          can always decide to add or decline any additional services.
        </p>
        <img src={Price} id="price-img" />
      </div>
    );
  }
}

export default Pricing;
