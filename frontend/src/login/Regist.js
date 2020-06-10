import React from "react";
//import Calendar from "react-calendar";
//import "react-calendar/dist/Calendar.css";
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
    city:"",
    zipCode:"",
  };
    
  handleSubmit(event){ 

    event.preventDefault();
     fetch('http://localhost:5000/login', {
     method: 'post',
     headers: {'Content-Type':'application/json'},
     body: JSON.stringify({
      "fullName": this.state.firstname,
      "email":this.state.email,
      "password":this.state.password,
      "city":this.state.city,
      "zipCode":this.state.zipCode,
      "manufacturer":this.state.company.title,
      "model":this.state.model1.name,
      "make_year":this.state.year1.year,
      "last_service":this.state.year1.year
     })
     
    }).then(()=> {
      window.location.pathname = '/Dashboard'
    });
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
        <form class="login__form" onSubmit={this.handleSubmit}  method="POST">
            <div className="reg-header">Please Fill your Information</div>

            <div className="form-group">
              <label> Name   </label>
            <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
            </div>

            <div className="form-group">
            <label>    Email    </label>
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
            </div>

            <div className="form-group">
            <label>    password    </label>
            <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
            </div>
      
            <div className="form-group">
            <label>Confirm-password    </label>
            <input type="text" name="confirmPas" value={this.state.confirmPas} onChange={this.handleChange} />
            </div>

            <div className="form-group">
            <label>City   </label>
            <input type="text" name="city" value={this.state.city} onChange={this.handleChange} />
            </div>

            <div className="form-group">
            <label>ZIP   </label>
            <input type="text" name="zipCode" value={this.state.zipCode} onChange={this.handleChange} />
            </div>

            <div className="car-details">
          <div className="reg-header"> What Car Do You Drive?</div>
          <div className="car-details button">
            <DropDown data={carTable} name="title" statename="company" value={this.state.car} onChange={this.dropChange} />
          </div>
          
          {this.state.company && <div className="car-details button">
          <DropDown data={this.state.company.model} name="name" statename="model1" value={this.state.car} onChange={this.dropChange} />
          </div>} 
          {this.state.model1 && <div className="car-details button">
          <DropDown data={this.state.company.year} name="year" statename="year1" value={this.state.car} onChange={this.dropChange} />
          </div>} 
          </div>



          <input type="submit" value="Submit"/>

        </form>
        </div>

        </div>

     ) }

/*          <div className="car-details button">
            <div className="car-details">
              {this.state.car && (
                <DropDown
                  data={this.state.car.model}
                  name="name"
                  onChange={onModelchange}
                />
              )}
            </div>
          </div>
          <div className="car-details">
            {this.state.model && (
              <DropDown
                data={this.state.car.year}
                name="year"
                onChange={onYearChange}
              />
            )}
          </div>
        </div>
        <h1>Last Service</h1>
        <div className="calendar-container">
          <Calendar />
        </div>

            <input   type="submit" value="Submit"/>

          </form>
        </div>

      

        <div className="footer">
          <button type="button" className="button" >
            SIGN UP
          </button>
        </div>
        <div className="footer">
          <p>Already have an account</p>
          <a href="/login">Log in</a>
        </div>
      </div>
    );
  }
} */}

export default Regist;
