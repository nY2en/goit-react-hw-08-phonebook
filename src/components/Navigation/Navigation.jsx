import { Nav, Ul, Li, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <StyledLink to="/register">Register</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/login">Login</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/contacts">Contacts</StyledLink>
        </Li>
      </Ul>
    </Nav>
  );
};
