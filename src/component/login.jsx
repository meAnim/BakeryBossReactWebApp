import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import NavBar from "./navBar";
class Login extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <div class="col-md-6">
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Username</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password"
              />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
