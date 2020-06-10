import React from "react";
import Logo from "../../img/WeFix.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";

export class Header extends React.Component {
  render() {
    return (
      <ReactBootstrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <ReactBootstrap.Navbar.Brand href="/">
          <img src={Logo}></img>
        </ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto">
            <ReactBootstrap.Nav.Link href="/howItWorks">
              HOW IT WORKS
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="/pricing">
              PRICING
            </ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
          <ReactBootstrap.Nav>
            <ReactBootstrap.Nav.Link href="/service">
              SERVICES
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link eventKey={2} href="/login">
              LOGIN
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link eventKey={2} a href="/regist">
              SIGNUP
            </ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    );
  }
}

export default Header;
