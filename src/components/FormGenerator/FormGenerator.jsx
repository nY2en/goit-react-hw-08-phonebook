import { H1, Form, Label, Inpt, Btn, P, Span } from './FormGenerator.styled';
import { NavLink } from 'react-router-dom';

export const FormGenerator = ({ type, onSubmit, onFilterChange }) => {
  if (type === 'login') {
    return (
      <Form autoComplete="off">
        <H1>Welcome Back</H1>

        <Label>
          Email
          <Inpt name="email" variant="flushed" />
        </Label>

        <Label>
          Password
          <Inpt name="password" variant="flushed" />
        </Label>

        <Btn colorScheme="blackAlpha" type="submit">
          Login
        </Btn>

        <P>
          Do not have an account?
          <Span>
            <NavLink to="/register">Register</NavLink>
          </Span>
        </P>
      </Form>
    );
  }

  if (type === 'register') {
    return (
      <Form autoComplete="off">
        <H1>Create an account</H1>
        <Label>
          Name
          <Inpt name="name" variant="flushed" />
        </Label>

        <Label>
          Email
          <Inpt name="email" variant="flushed" />
        </Label>

        <Label>
          Password
          <Inpt name="password" variant="flushed" />
        </Label>

        <Btn colorScheme="blackAlpha" type="submit">
          Create Account
        </Btn>

        <P>
          Already have an account?
          <Span>
            <NavLink to="/login">Sign in</NavLink>
          </Span>
        </P>
      </Form>
    );
  }
  if (type === 'contacts') {
    return (
      <Form onSubmit={onSubmit} autoComplete="off">
        <Label>
          Name
          <Inpt
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            variant="flushed"
          />
        </Label>

        <Label>
          Number
          <Inpt
            type="tel"
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            variant="flushed"
          />
        </Label>

        <Btn
          type="submit"
          colorScheme="blackAlpha"
          style={{ margin: '0 auto' }}
        >
          Add contact
        </Btn>
      </Form>
    );
  }

  if (type === 'filter') {
    return (
      <Form>
        <Label>
          Find contacts by name
          <Inpt type="text" variant="flushed" onChange={onFilterChange} />
        </Label>
      </Form>
    );
  }
};
