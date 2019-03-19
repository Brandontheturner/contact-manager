import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@email.com",
        phone: "512-954-7854"
      },
      {
        id: 2,
        name: "Jane Doe",
        email: "janedoe@email.com",
        phone: "512-777-7777"
      },
      {
        id: 3,
        name: "James Does",
        email: "jamesdoes@email.com",
        phone: "512-111-1111"
      }
    ]
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
