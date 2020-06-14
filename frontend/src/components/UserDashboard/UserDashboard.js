import "./UserDashboard.css";
import React from "react";
import tires from "../../img/tires.svg";
import fix from "../../img/fix.svg";
import prepurchase from "../../img/prepurchase.svg";
import ValBox from "../ValBox";


export class UserDash extends React.Component {

state= {
data:null,
}

  componentDidMount(){
    fetch('http://localhost:4000/cart', {
      method: 'GET',
      headers: {'Content-Type':'text/plain'},
      }).then(response => response.json())
      .then((json) => {
        this.setState({
          data: json
        }, () => {
          console.log(this.state.data);
        }); 
     }); 
  }

  render() {

     


    if (!this.state.data) {
      return 'Loading...'
    }

    return (
      <div>
        <div className="dash-container">
          <h1>Dashboard</h1>

          <div className="user-data">
            <p>Car Model</p>
            <p>Model Year</p>
            <p>Last Service</p>
          </div>
          <h1>Welcome Amir Fahoum Please select a service</h1>
          <div className="pic-container">
            <a href="/Tires">
              <img src={tires} className="tires" />
            </a>
            <a href="/Diagnose">
              <img src={fix} className="fix" />
            </a>
            <a href="/Prepurches">
              <img src={prepurchase} className="prepurchase" />
            </a>
          </div>
          <div className="reservation">
            {}
            <p>Your next reservation contains:</p>
            {this.state.data.map((item, index) => {
              var  myString = item.price;
              var foo = parseInt(myString);
              var index1=foo+index1;
              return (
                <li> Department:{item.department} || Company: {item.company} || reservation_id:{item.reservation_id}  || measure:{item.measure} || quantity:{item.quantity} || price={item.price}</li> 

                  )
                  
            })}
          </div>

        </div>
      </div>
    );
  }
}
