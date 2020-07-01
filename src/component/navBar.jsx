import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  form,
  a,
  button,
} from "reactstrap";
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
                <a class="nav-link" href="/signup">
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    type="button"
                  >
                    Sign up
                  </button>
                </a>
                <a class="nav-link" href="/login">
                  <button
                    class="btn btn-outline-primary my-2 my-sm-0"
                    type="button"
                  >
                    Log in
                  </button>
                </a>
              </form>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
