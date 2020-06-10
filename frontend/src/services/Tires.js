import React from "react";
import tireImg from "../services/tires.jpg";
import DropDown from "../components/DropDown";
import tireTable from "../data/tierTable.json";
import ValBox from "../components/ValBox";

export class Tires extends React.Component {
  state = {
    model: "",
    company: "",
    hours: "",
    measure: "",
    price: "",
    quantity: "",
  };

  dropChange(statename, value) {
    this.setState({
      [statename]: value,
    });
  }
  onHourschange = (hours) => this.setState({ hours });

  handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:5000/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        company: this.state.company,
        measure: this.state.measure,
        quantity: this.state.quantity,
        price: this.state.price,
      }),
    }).then(() => {
      window.location.pathname = "/Dashboard";
    });
  }

  render() {
    this.dropChange = this.dropChange.bind(this);

    const onTirechange = (tire) => this.setState({ tire });
    const onMeasurechange = (measure) => this.setState({ measure });
    const onQuantitychange = (quantity) => this.setState({ quantity });
    const onPricechange = (price) => this.setState({ price });
    const onHourschange = (hours) => this.setState({ hours });

    return (
      <div className="imageicon1">
        <img src={tireImg} id="tire-img" />
        <h1>Tires</h1>

        <div className="Form">
          <form class="Form" onSubmit={this.handleSubmit} method="POST">
            <p> Please Select Preferred Brand:</p>
            <div className="car-details button">
              <span> Manufacturer</span>
              <DropDown
                data={tireTable}
                name="title"
                statename="company"
                value={this.state.car}
                onChange={this.dropChange}
              />
            </div>
            <span> Measure</span>

            <div className="car-details button">
              <DropDown
                data={this.state.company ? this.state.company.measure : []}
                name="measure"
                statename="model1"
                value={this.state.car}
                onChange={this.dropChange}
              />
            </div>
            <span> Quantity</span>

            <div className="car-details button">
              <DropDown
                data={
                  this.state.company.quantity ? this.state.company.quantity : []
                }
                name="quantity"
                statename="quantity"
                value={this.state.car}
                onChange={this.dropChange}
              />
            </div>

            <span> Hours</span>

            {this.state.company && (
              <div className="car-details button">
                <ValBox
                  data={this.state.company.hours}
                  name="hours"
                  statename="hours"
                  value={this.state.car}
                  onChange={this.onHourschange}
                />
              </div>
            )}

            <span> Price Per Tire</span>

            {this.state.company && (
              <div className="car-details button">
                <ValBox
                  data={this.state.company.price}
                  name="price"
                  statename="price"
                  value={this.state.car}
                  onChange={this.onHourschange}
                />
              </div>
            )}

            <input type="submit" value="Add To Cart" />
          </form>
        </div>
      </div>
    );
  }
}
