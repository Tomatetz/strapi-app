import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavlink = styled(NavLink)`
  display: block;
  padding: 0 20px;
  text-decoration: none;
  color: #000;
  font-weight: 100;
  &.active {
    font-weight: 400;
  }
`;

export const Logo = styled.img`
  opacity: 0;
  ${({ visible }) =>
    visible &&
    `
    transition: all 0.3s ease-in;
    opacity:1;
  `}
`;

export const NavigationStyled = styled(Navbar)`
  position: fixed;
  width: 100%;
  background: #fff;
  z-index: 1;
  top: 0;
  padding: 0;
`;
