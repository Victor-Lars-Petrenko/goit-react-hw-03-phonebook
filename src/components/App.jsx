import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Div, Heading } from './App.styled';

import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
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

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      filter: `${value}`,
    });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    if (filter === '') {
      return contacts;
    }
    const filtered = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    return filtered;
  };

  handleClick = e => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter(({ id }) => id !== e.target.id);
    this.setState({
      contacts: [...updatedContacts],
    });
  };

  render() {
    const { filter } = this.state;
    return (
      <Div>
        <Heading>Phonebook</Heading>
        <ContactForm onSubmit={this.handleSubmit} />

        <Heading>Contacts</Heading>
        <Filter onChange={this.handleChange} filterValue={filter} />
        <ContactList items={this.filterContacts()} onClick={this.handleClick} />
      </Div>
    );
  }
}
