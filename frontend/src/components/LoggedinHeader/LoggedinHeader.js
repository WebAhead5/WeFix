import React from "react";
import Logo from "../../img/WeFix.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";

export class LoggedinHeader extends React.Component {
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
            <ReactBootstrap.Nav.Link href="/Diagnose">
              DIAGNOSE & FIX
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="/Tires">
              TIRES
            </ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
          <ReactBootstrap.Nav>
            <ReactBootstrap.Nav.Link href="/Prepurches">
              PREPURCHASE INSPECTION
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link eventKey={2} href="/home">
              LOGOUT
            </ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    );
  }
}

export default LoggedinHeader;
