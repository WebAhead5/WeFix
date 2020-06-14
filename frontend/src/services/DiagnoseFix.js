import React from "react";
import DropDown from "../components/DropDown";
import partTable from "../data/partTable.json";
import ValBox from "../components/ValBox";
import mechanic from "../img/mechanic.jpeg";
import tireTable from "../data/tierTable.json";

export class DiagnoseFix extends React.Component {
  state = {
     company: "",
     hours:""
  };

  dropChange(statename, value) {
    this.setState({
      [statename]: value,
    });
    console.log(this.state.company.hours)
   }

  handleSubmit(event) {

    event.preventDefault();
    fetch("http://localhost:4000/addItem", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email:localStorage.getItem('email'),
        //company:this.state.company,
        measure: "-",
        quantity: "1",
        //price:this.state.company[0].price,
        department:"Diagnose&fix",

      }),
    }).then(() => {

      window.location.pathname = "/Dashboard";
    });
  }
  onHourchange = (hours) => this.setState({ hours });


  render() {
    this.dropChange = this.dropChange.bind(this);
    //this.onPricechange = this.onPricechange.bind(this);
    this.onHourchange = this.onHourchange.bind(this);


    return (
      <div className="TiersPage">
        <img src={mechanic} id="mech-pic" />
        <form class="Form" onSubmit={this.handleSubmit} method="POST">
          <p> Please Select item:</p>
          <div className="tire-details">
       
          <span> Item</span>
              <DropDown
                data={partTable}
                name="title"
                statename="company"
                value={this.state.company}
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
                onChange={this.dropChange}
              />
            </div>
          )}


             <span> Price</span>
          {this.state.company && (
            <div className="car-details button">
              <ValBox
                data={this.state.company.price}
                name="price"
                statename="price"
                value={this.state.car}
                onChange={this.onPartchange}
              />
            </div>
          )}
          <span> Description</span>

          {this.state.company && (
            <div className="car-details button">
              <ValBox
                data={this.state.company.describtion}
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
