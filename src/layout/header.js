//import { Link } from "react-router-dom";
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; // Cambie BootstrapNavbar a Navbar
import NavDropdown from 'react-bootstrap/NavDropdown';


const feather = require('feather-icons');

function Header() {
  setTimeout(() => {
    feather.replace();
  }, 1000);

  return (
    <Container fluid>
      <div className="text-center mb-10 py-3 color-text">
        <br></br><h1>BIENVENIDO A NUESTRO SITIO WEB</h1>
      </div>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">ESSENCE</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1"><i data-feather="home"></i> Inicio</Nav.Link>
              <Nav.Link href="#action2"><i data-feather="shopping-bag"></i>Tienda</Nav.Link>
              <NavDropdown title={<><i data-feather="menu"></i> Maquillaje</>} id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3"><i data-feather="shopping-bag"></i>Ojos</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Labios
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Rostro
                </NavDropdown.Item>
                <NavDropdown.Item href="#action6">
                  Cejas
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action7">
                  Otros
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">
                Consejos y tutoriales
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="¿Que deseas buscar?"
                className="me-2"
                aria-label="¿Que deseas buscar?"
              />
              <Button variant="outline-success"><i data-feather="search"></i>Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Header;