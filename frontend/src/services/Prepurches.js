import React from "react";
import carsale from "../services/carsale.jpg";
import purchTable from "../data/purchTable.json";
import DropDown from "../components/DropDown";
import ValBox from "../components/ValBox";

export class Prepurches extends React.Component {
  state = {
    service: "",
    hours: "",
    describtion: "",
  };
  dropChange(statename, value) {
    this.setState({
      [statename]: value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    fetch(process.env.REACT_APP_API_URL + "/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service: this.state.service,
        hours: this.state.hours,
        describtion: this.state.describtion,
      }),
    }).then(() => {
      window.location.pathname = "/Dashboard";
    });
  }

  render() {
    this.dropChange = this.dropChange.bind(this);

    return (
      <div className="TiersPage">
        <div className="imageicon">
          <img src={carsale} className="imgbackground" />
        </div>

        <form class="Form" onSubmit={this.handleSubmit} method="POST">
          <p> Please Select Preferred Brand:</p>
          <div className="car-details button">
            <span> Service</span>
            <DropDown
              data={purchTable}
              name="service"
              statename="service"
              value={this.state.car}
              onChange={this.dropChange}
            />
          </div>

          <span> Hours</span>

          {this.state.service && (
            <div className="car-details button">
              <ValBox
                data={this.state.service.hours}
                name="hours"
                statename="hours"
                value={this.state.car}
                onChange={this.onHourschange}
              />
            </div>
          )}

          <span> Describtion</span>

          {this.state.service && (
            <div className="car-details button">
              <ValBox
                data={this.state.service.describtion}
                name="describtion"
                statename="describtion"
                value={this.state.car}
                onChange={this.onHourschange}
              />
            </div>
          )}
          <input type="submit" value="Add To Cart" />
        </form>
      </div>
    );
  }
}

export default Prepurches;
