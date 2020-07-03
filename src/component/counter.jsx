import React, { Component } from "react";
import { Table } from "reactstrap";

class Counter extends Component {
  state = {
    isLoading: true,
    Feedback: [],
  };

  async componentDidMount() {
    const response = await fetch("/BakeryBoss/");
    const body = await response.json();
    this.setState({ Feedback: body, isLoading: false });
  }

  render() {
    const { Feedback, isLoading } = this.state;

    if (isLoading) {
      return <h1> Data Loading...</h1>;
    } else {
      return (
        <div>
          <h1>List of FeedBack</h1>
          <Table striped hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Regarding</th>
                <th>Code</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {Feedback.map((feedback) => (
                <tr id={feedback.id}>
                  <td>{feedback.name}</td>
                  <td>{feedback.email}</td>
                  <td>{feedback.message}</td>
                  <td>{feedback.regarding}</td>
                  <td>{feedback.code}</td>
                  <td>{feedback.rating}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }
  }
}

export default Counter;
