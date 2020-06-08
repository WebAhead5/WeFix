import React from "react";
import carTable from "../data/carTable.json";
import DropDown from "../components/DropDown";

export class Regist extends React.Component {
  state = {
    car: "",
  };

  render() {
    const onCarchange = (car) => this.setState({ car });
    const onModelchange = (model) => this.setState({ model });
    const onYearChange = (year) => this.setState({ year });
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="reg-header">Registration Page</div>
        <div className="content">
          <div className="form">
            <div className="reg-header">Please Fill your Information</div>
            <div className="form-group">
              <input
                type="text"
                name="FullName"
                className="fulname"
                placeholder="FullName"
              />
            </div>

            <div className="form-group">
              <input type="text" name="Email" placeholder="Email" />
            </div>

            <div className="form-group">
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="CNPassword"
                placeholder="Confirm Password"
              />
            </div>
          </div>
        </div>

        <div className="car-details">
          <div className="reg-header"> What Car Do You Drive?</div>
          <div className="car-details button">
            <DropDown data={carTable} name="title" onChange={onCarchange} />
          </div>
          <div className="car-details button">
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

        <div className="footer">
          <button type="button" className="button">
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
}

export default Regist;
