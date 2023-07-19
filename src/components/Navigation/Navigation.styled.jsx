import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;/
`;

export const Li = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: black;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: teal;
  }
`;
