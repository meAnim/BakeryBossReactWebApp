import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  form,
  button,
} from "reactstrap";

import { Link } from "react-router-dom";
class NavBar extends Component {
  state = {};
  //   isOpen: false,
  //   setIsOpen: false,
  // };

  // toggle = () => {
  //   this.setState(!this.state.isOpen);
  // };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">BakeryBoss</NavbarBrand>
          <NavbarToggler onClick={} />
          <Collapse isOpen={} navbar>
            <Nav className="ml-auto" navbar>
              <form className="form-inline my-2 my-lg-0">
                <Link className="nav-link" to={"signup"}>
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="button"
                  >
                    Sign up
                  </button>
                </Link>
                <Link className="nav-link" to={"login"}>
                  <button
                    className="btn btn-outline-primary my-2 my-sm-0"
                    type="button"
                  >
                    Log in
                  </button>
                </Link>
              </form>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
