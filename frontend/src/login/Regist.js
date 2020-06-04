import React from 'react';
import loginImg from "../login/logo.png"
import carTable from "../data/carTable.json"
import DropDown from "../components/DropDown"






export class Regist extends React.Component {

  state = {
    car: ''
  }


  render() {
    const onCarchange = (car) => this.setState({ car })
    const onModelchange=(model)=> this.setState({model})
    const onYearChange =(year)=>this.setState({year})
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Regist Page</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="header">Fill your Information</div>
            <div className="form-group">
              <input type="text" name="FullName" className="fulname" placeholder="FullName" />
              <i className="contact-icon"></i>

            </div>

            <div className="form-group">
              <input type="text" name="Email" placeholder="Email" />
            </div>

            <div className="form-group">
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <input type="password" name="CNPassword" placeholder="CNPassword" />
            </div>
          </div>
        </div>


        <div className="car-details">
          <div className="header"> Fill your car information</div>
          <div className="car-details">
            <DropDown data={carTable} name="title" onChange={onCarchange} />
          </div>
          {/* <div className="car-details">
                  <ModelMangment/>
                </div> */}
          <div className="car-details">
            {/* <label htmlFor="password">Password</label> */}
            <div className="car-details">
            { this.state.car &&  <DropDown data={this.state.car.model} name="name" onChange={onModelchange} />}
            </div>
          </div>
          <div className="car-details">
            { this.state.model &&  <DropDown data={this.state.car.year} name="year" onChange={onYearChange} />}
            </div>
        </div>

        <div className="footer">
          <button type="button" className="btn">
            SIGN UP
              </button>
        </div>
        <div className="header1">Already have an account</div>
        <button type="button" className="logtext" >
          Log in
            </button>

      </div>

    );
  }



}


