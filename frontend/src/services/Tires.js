import React from "react";
import tireImg from "../services/tires.jpg";
import DropDown from "../components/DropDown";
import tireTable from "../data/tierTable.json";
import ValBox from "../components/ValBox";

export class Tires extends React.Component {
  state = {
    tire: { measure: [], hours: [], price: [], quantity: [] },
  };

  render() {
    const onTirechange = (tire) => this.setState({ tire });
    const onSizechange = (model) => this.setState({ model });
    const onMeasurechange = (measure) => this.setState({ measure });

    return (
      <div className="imageicon1">
        <img src={tireImg} id="tire-img" />
        <h1>Tires</h1>

        <div className="Form">
          <p> Please Select Preferred Brand:</p>
          <div className="tire-details">
            <span> Manufacturer</span>
            <DropDown data={tireTable} name="title" onChange={onTirechange} />
          </div>

          <div className="car-details">
            {
              <DropDown
                data={this.state.tire.measure}
                name="measure"
                onChange={onMeasurechange}
              />
            }
          </div>
          <div className="details-nums">
            <p> Working hours:</p>
            <p>Price Per Tire:</p>
            <p>Quantity:</p>
          </div>
          <button type="button" className="addcarttext">
            ADD To Cart
          </button>
        </div>
      </div>
    );
  }
}
