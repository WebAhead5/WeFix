import React from "react";
import "../login/style.css";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <h1 className="login">Please Login</h1>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="form-group">
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
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
