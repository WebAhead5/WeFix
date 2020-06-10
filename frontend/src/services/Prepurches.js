import React from "react";
import carsale from "../services/carsale.jpg";
import purchTable from "../data/purchTable.json";
import DropDown from "../components/DropDown";
import ValBox from "../components/ValBox";

export class Prepurches extends React.Component {
  state = {
    tire: { measure: [], hours: [], price: [], describtion: [] },
  };

  render() {
    const onTirechange = (tire) => this.setState({ tire });

    return (
      <div className="TiersPage">
        <div className="imageicon">
          <img src={carsale} className="imgbackground" />
        </div>

        <div className="Form">
          <div className="details-nums">
            <span> Company:</span>
            <DropDown
              data={purchTable}
              name="service"
              onChange={onTirechange}
            />
          </div>

          <span>Working Hours:</span>
          <div className="workinghours">
            <ValBox
              className="workinghours"
              data={this.state.tire.hours}
              name="hours"
            />
          </div>
          <span>Price:</span>
          <div className="workinghours">
            <ValBox data={this.state.tire.price} name="price" />
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
