import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
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
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
