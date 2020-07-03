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

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">BakeryBoss</NavbarBrand>
          <NavbarToggler onClick="" />
          <Collapse isOpen="" navbar>
            <Nav className="ml-auto" navbar>
              <form class="form-inline my-2 my-lg-0">
                <Link class="nav-link" to={"signup"}>
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    type="button"
                  >
                    Sign up
                  </button>
                </Link>
                <Link class="nav-link" to={"login"}>
                  <button
                    class="btn btn-outline-primary my-2 my-sm-0"
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
