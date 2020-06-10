import React from "react";
import DropDown from "../components/DropDown";
import partTable from "../data/partTable.json";
import ValBox from "../components/ValBox";
import mechanic from "../img/mechanic.jpeg";

export class DiagnoseFix extends React.Component {
  state = {
    parts: "",
    price: "",
    hours: "",
    describtion: "",
  };

  handleSubmit(event) {
    console.log(this.state.parts)
    event.preventDefault();
    fetch(process.env.REACT_APP_API_URL + "/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        parts: this.state.parts,
        price: this.state.price,
        hours: this.state.hours,
        describtion: this.state.describtion,
      }),
    }).then(() => {
      window.location.pathname = "/Dashboard";
    });
  }

  dropChange(statename, value) {
    this.setState({
      [statename]: value,
    });
  }
  render() {
    this.dropChange = this.dropChange.bind(this);

    return (
      <div className="TiersPage">
        <img src={mechanic} id="mech-pic" />
        <form class="Form" onSubmit={this.handleSubmit} method="POST">
          <p> Please Select item:</p>
          <div className="tire-details">
            <span> Item</span>
            <DropDown
              data={partTable}
              name="parts"
              statename="parts"
              onChange={this.dropChange}
            />
          </div>

          <span> Hours</span>
          {this.state.parts && (
            <div className="car-details button">
              <ValBox
                data={this.state.parts.hours}
                name="hours"
                statename="hours"
                value={this.state.car}
                onChange={this.onPartchange}
              />
            </div>
          )}
          <span> Description</span>

          {this.state.parts && (
            <div className="car-details button">
              <ValBox
                data={this.state.parts.describtion}
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

export default DiagnoseFix;
