import React from 'react';
import './Navigation.css';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand style={{ color: "rgb(140, 236, 183)" }} href="#home">_MYPortfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link className="tggle" style={{ margin: "auto 5px", textDecoration: "none", color: "lightgray" }} to="/home">Home</Link>

            <Nav.Link className="tggle" style={{ margin: "auto 5px", textDecoration: "none", color: "lightgray" }} href="/home/#about">About</Nav.Link>

            <Link className="tggle" style={{ margin: "auto 5px", textDecoration: "none", color: "lightgray" }} to="/blogs">Blogs</Link>
            <Link className="tggle" style={{ margin: "auto 5px", textDecoration: "none", color: "lightgray" }} to="/contact">Contact Me</Link>
            <Nav.Link className="tggle" style={{ margin: "auto 0", color: "lightgray" }} target="_blank" href="https://drive.google.com/file/d/1S1BFaHbYYtZCx1ZVD8Up04TtCtLOhBjK/view?usp=sharing" download>Resume</Nav.Link>
            <Nav.Link >
              <Button style={{ borderRadius: "40px", padding: "10px 30px" }} className="clr-code" >Case Studies</Button>{' '}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default Navigation;