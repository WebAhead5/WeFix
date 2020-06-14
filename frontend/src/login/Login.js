import React from "react";
import "../login/style.css";

export class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit(event) {
    event.preventDefault();
    fetch(process.env.REACT_APP_API_URL + "authenticate", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    }).then((response)=>{
      console.log(process.env.REACT_APP_API_URL)
      localStorage.setItem("email",this.state.email)    

      if(!response.ok)
      {
        console.log("gggggggggggggggggggggggg")
      }
      else {  
       console.log( response)      
     window.location.pathname = '/Dashboard'
}    })
    }


  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  render() {
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    return (
      <div className="base-container" ref={this.props.containerRef}>
        <h1 className="login">Please Login</h1>
        <div className="form-group">
          <form class="login-form" onSubmit={this.handleSubmit} method="POST">
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

            <div className="footer">
          {" "}
          <input className="addcarttext" type="submit" value="Login"></input>

          <p> Dont have an account?</p>
          <a href="/Regist">Sign Up</a>
        </div>


          </form>
        </div>
       
      </div>
    );
  }
}
