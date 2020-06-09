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
    const onMeasurechange = (measure) => this.setState({ measure });
    const onPricechange = (price) => this.setState({ price });
    const onQuantitychange = (quantity) => this.setState({ quantity });

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
            <p> Working hours: </p>
            {this.state.tire && (
              <ValBox
                data={this.state.tire.hours}
                name="hours"
                onChange={onPricechange}
              />
            )}
            <p>Price Per Tire:</p>
            {this.state.tire && (
              <ValBox
                data={this.state.tire.price}
                name="price"
                onChange={onPricechange}
              />
            )}
            <p>Quantity:</p>
            {this.state.tire && (
              <DropDown
                data={this.state.tire.quantity}
                name="quantity"
                onChange={onQuantitychange}
              />
            )}
          </div>
          <button type="button" className="addcarttext">
            ADD To Cart
          </button>
        </div>
      </div>
    );
  }
}

{
  /* 
<span> Working Hours</span>
{this.state.part && (
  <ValBox
    data={this.state.part.hours}
    name="hours"
    onChange={onPricechange}
  />
)}

<span> Price</span>
{this.state.part && (
  <ValBox
    data={this.state.part.price}
    name="price"
    onChange={onPricechange}
  />
)}
</div>  */
}
