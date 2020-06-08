import React from "react";
import carsale from "../services/carsale.jpg";

export class Prepurches extends React.Component {
  render() {
    return (
      <div className="TiersPage">
        <div className="imageicon">
          <img src={carsale} className="imgbackground" />
        </div>

        <div className="Form">
          <div className="details-nums">
            <p> Please Select Prefered Brand:</p>
            <p> working hours:</p>
            <p>Product Description</p>
          </div>
          <div className="productdesc">
            <p>
              {" "}
              This inspection package consists of mechanical, body And electric
              inspections.
            </p>
          </div>
          <button type="button" className="addcarttext">
            ADD To Cart
          </button>
        </div>
      </div>
    );
  }
}

export default Prepurches;
