import React from "react";
import "./Header.css";
import Logo from "../../img/WeFix.svg";

class Header extends React.Component {
  render() {
    return (
      <header>
        <ul id="nav">
          <img src={Logo} />
          <li>
            <button>
              <a href="/login">LOGIN</a>
            </button>
          </li>
          <li>
            <button>
              <a href="/SignUp">SIGN UP</a>
            </button>
          </li>
          <li>
            <a href="/services">SERVICES</a>
          </li>
          <li>
            <a href="/pricing">PRICING</a>
          </li>
          <li>
            <a href="/howItWorks">HOW IT WORKS</a>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
