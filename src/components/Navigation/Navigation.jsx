import { useSelector } from 'react-redux';
import { Nav, Ul, Li, StyledLink } from './Navigation.styled';
import { selectIsLoggedIn } from 'redux/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Nav>
      <Ul>
        {isLoggedIn ? (
          <Li>
            <StyledLink to="/contacts">Contacts</StyledLink>
          </Li>
        ) : (
          <>
            <Li>
              <StyledLink to="/register">Register</StyledLink>
            </Li>
            <Li>
              <StyledLink to="/login">Login</StyledLink>
            </Li>
          </>
        )}
      </Ul>
    </Nav>
  );
};
