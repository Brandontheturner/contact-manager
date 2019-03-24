import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

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
    ],
    //this allows to call an action, this adds dispatch to state and consumer accesses the entire state
    dispatch: action => this.setState(state => reducer(state, action))
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
