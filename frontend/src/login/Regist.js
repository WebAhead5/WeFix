import React from "react";
import carTable from "../data/carTable.json";
import DropDown from "../components/DropDown";

export class Regist extends React.Component {
  state = {
    company:"",
    model :"",
    year:"",
    firstname:"",
    email:"",
    password :"",
    confirmpassword:"",
    city:"",
    zipCode:"",
  };
    

 
 async handleSubmit(event){ 
    event.preventDefault();
    await fetch(process.env.REACT_APP_API_URL + "/login", {
     method: 'post',
     headers: {'Content-Type':'application/json'},
     body: JSON.stringify({
      "fullName": this.state.firstname,
      "email":this.state.email,
      "password":this.state.password,
      "confirmpassword":this.state.confirmpassword,
      "city":this.state.city,
      "zipCode":this.state.zipCode,
      "manufacturer":this.state.company.title,
      "model":this.state.model1.name,
      "make_year":this.state.year1.year,
      "last_service":this.state.year1.year
     })
     
    }).then((response)=> {  
      if(response.ok===false)
      {
        console.log("problem with with auth")
      }else 
{        
     window.location.pathname = '/Dashboard'
}    })
    .catch((e)=> {
      console.log(e);    })
    };
  

    
   handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
      }   
      dropChange(statename,value) {
        this.setState({
          [statename]: value
        });
      }   
    
       modelChange=(model)=> this.setState({model})





  render() {

     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.dropChange = this.dropChange.bind(this);
     this.modelChange = this.modelChange.bind(this);

    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="reg-header">Registration Page</div>
        <div className="content">
          <form class="login__form" onSubmit={this.handleSubmit} method="POST">
            <div className="reg-header">Please Fill your Information</div>

            <div className="form-group">
              <label> Name </label>
              <input
                type="text"
                name="firstname"
                value={this.state.firstname}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label> Email </label>
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
            <label>    password    </label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />

            </div>

            <div className="form-group">
            <label>Confirm-password    </label>
            <input type="password" name="confirmpassword" value={this.state.confirmpassword} onChange={this.handleChange} />

            </div>

            <div className="form-group">
              <label>City </label>
              <input
                type="text"
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>ZIP </label>
              <input
                type="text"
                name="zipCode"
                value={this.state.zipCode}
                onChange={this.handleChange}
              />
            </div>

            <div className="car-details">
              <div className="reg-header"> What Car Do You Drive?</div>
              <div className="car-details button">
                <DropDown
                  data={carTable}
                  name="title"
                  statename="company"
                  value={this.state.car}
                  onChange={this.dropChange}
                />
              </div>

              {this.state.company && (
                <div className="car-details button">
                  <DropDown
                    data={this.state.company.model}
                    name="name"
                    statename="model1"
                    value={this.state.car}
                    onChange={this.dropChange}
                  />
                </div>
              )}
              {this.state.model1 && (
                <div className="car-details button">
                  <DropDown
                    data={this.state.company.year}
                    name="year"
                    statename="year1"
                    value={this.state.car}
                    onChange={this.dropChange}
                  />
                </div>
              )}
            </div>

            <input className="button" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Regist;
