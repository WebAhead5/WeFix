import React from "react";
import "../login/style.css";

export class Login extends React.Component {

  state = {
    email:"",
    password :""
  };

  handleSubmit(event){ 
    event.preventDefault();
    fetch(process.env.REACT_APP_API_URL + '/authenticate', {
     method: 'post',
     headers: {'Content-Type':'application/json'},
     body: JSON.stringify({
      "email":this.state.email,
      "password":this.state.password     })
    }).then(()=> {
      window.location.pathname = '/Dashboard'
    });
    }
  
   handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  } 
  render() {
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    return (
      <div className="base-container" ref={this.props.containerRef}>
        <h1 className="login">Please Login</h1>
        <div className="content">
        <form class="login__form" onSubmit={this.handleSubmit} method="POST">
        <div className="form-group">
            <label>    Email    </label>
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
            </div>
            <div className="form-group">
            <label>    password    </label>
            <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
            </div>
            <input className="button" type="submit" value="Submit"></input>

          </form>
        </div>
        <div className="footer">
          {" "}
          
          <button type="button " className="button">
            Login
          </button>

          <p> Dont have an account?</p>
          <a href="/Regist">Sign Up</a>
        </div>
      </div>
    );
  }
}
