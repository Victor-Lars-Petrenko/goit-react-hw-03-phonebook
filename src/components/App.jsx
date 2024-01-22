import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Div, Heading } from './App.styled';

import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';

export class App extends Component {
  state = {
    contacts: [],
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts?.length) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleSubmit = (e, name, number) => {
    e.preventDefault();

    const { contacts } = this.state;
    const isExist = contacts
      .map(({ name }) => name.toLowerCase())
      .includes(name.toLowerCase());

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [
        ...contacts,
        { id: `${nanoid()}`, name: `${name}`, number: `${number}` },
      ],
    }));
  };

  handleClick = e => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter(({ id }) => id !== e.target.id);
    this.setState({
      contacts: [...updatedContacts],
    });
  };

  render() {
    const { contacts } = this.state;
    const { handleSubmit, handleClick } = this;
    return (
      <Div>
        <Heading>Phonebook</Heading>
        <ContactForm onSubmit={handleSubmit} />

        {contacts[0] && <Heading>Contacts</Heading>}
        <ContactList items={contacts} onClick={handleClick} />
      </Div>
    );
  }
}
