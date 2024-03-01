import { Container, Nav } from 'react-bootstrap';
import logo from '../../assets/images/LREO_logo_black.png';
import { Logo, NavigationStyled, StyledNavlink } from './navigation.styled';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Navigation = () => {
  const { pathname } = useLocation();
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <NavigationStyled>
      <Container style={{ height: '93px' }}>
        <Nav className="me-auto d-flex justify-content-center align-items-center w-100 text-uppercase">
          <StyledNavlink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </StyledNavlink>
          <StyledNavlink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About us
          </StyledNavlink>
          <StyledNavlink to="/">
            <Logo src={logo} width="150px" visible={pathname !== '/' || scrollTop >= 200} />
          </StyledNavlink>
          {/* <Logo href="#home">LREO</Logo> */}
          <StyledNavlink to="/properties" className={({ isActive }) => (isActive ? 'active' : '')}>
            Properties
          </StyledNavlink>
          <StyledNavlink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact
          </StyledNavlink>
        </Nav>
      </Container>
    </NavigationStyled>
  );
};
