import {
  Form,
  Label,
  FormInput,
  Button,
  InputWrap,
} from './ContactForm.styled';

import { Component } from 'react';
import { nanoid } from 'nanoid';

const formNameId = nanoid();
const fornNumberId = nanoid();

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: `${value}`,
    });
  };

  reset = () => {
    this.setState(() => ({
      name: '',
      number: '',
    }));
  };

  render() {
    const { name, number } = this.state;
    const { onSubmit } = this.props;

    return (
      <Form
        onSubmit={e => {
          onSubmit(e, name, number);
          this.reset();
        }}
      >
        <InputWrap>
          <Label htmlFor={formNameId}>Name</Label>
          <FormInput
            onChange={this.handleChange}
            id={formNameId}
            type="text"
            name="name"
            value={name}
            required
          />
        </InputWrap>
        <InputWrap>
          <Label htmlFor={fornNumberId}>Number</Label>
          <FormInput
            onChange={this.handleChange}
            id={fornNumberId}
            type="tel"
            name="number"
            value={number}
            required
          />
        </InputWrap>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
