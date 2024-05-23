//import { Link } from "react-router-dom";
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const feather = require('feather-icons');

function Header() {
  setTimeout(() => {
    feather.replace();
  }, 1000);

  return (
    <Container fluid>
      <div className="text-center mb-10 py-3 color-text">
        <h1>BIENVENIDO A NUESTRO SITIO WEB</h1>
      </div>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid className='barra-navegacion'>
          <Navbar.Brand href="#">ESSENCE</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1" className='text-navbar-1'><i data-feather="home"></i> Inicio</Nav.Link>
              <Nav.Link href="#action2" className='text-navbar-1'><i data-feather="shopping-bag"></i>Tienda</Nav.Link>
              <NavDropdown title={<span className='text-navbar-1'><i data-feather="menu"></i> Maquillaje</span>} id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3" className='text-navbar-1'><i data-feather="shopping-bag"></i>Ojos</NavDropdown.Item>
                <NavDropdown.Item href="#action4" className='text-navbar-1'>
                  Labios
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5" className='text-navbar-1'>
                  Rostro
                </NavDropdown.Item>
                <NavDropdown.Item href="#action6" className='text-navbar-1'>
                  Cejas
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action7" className='text-navbar-1'>
                  Otros
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" className='text-navbar-1'>
                Consejos y tutoriales
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control 
                type="search"
                placeholder="¿Que deseas buscar?"
                className="me-1 barra-busqueda" 
                aria-label="¿Que deseas buscar?"
              />
              <Button variant="outline-info" className='search-button'><i data-feather="search"></i>Buscar</Button>
            </Form>
            
            {/*carrito de compras*/}
            <NavDropdown title={<span><i data-feather="shopping-cart"></i></span>} align="end">
              <NavDropdown.Item>
                <div>
                  <p>CARRITO DE COMPRAS</p>
                  <p>Tienes 2 productos agregados a tu carrito</p>
                  <hr />
                  <div>
                    <div>
                      <p>Set escritorio + archivador 2 cajones Delta Blanco</p>
                      <p>S/ 189 <span>- 1 +</span></p>
                    </div>
                    <div>
                      <p>Mueble dispensero Dalia MDP 80x182cm Blanco</p>
                      <p>S/ 359 <span>- 2 +</span></p>
                    </div>
                  </div>
                  <hr />
                  <p>Subtotal productos: S/ 548</p>
                  <Button variant="warning">Ir a mi carrito</Button>
                </div>
              </NavDropdown.Item>
            </NavDropdown>

            {/*Perfil del usuario*/}
            <Nav className="ml-auto" >
              <NavDropdown title={<span><i data-feather="user"></i></span>} align="end">
                <NavDropdown.Item disabled>MI CUENTA</NavDropdown.Item>
                <NavDropdown.Item href="#perfil"><i data-feather="user"></i>Perfil</NavDropdown.Item>
                <NavDropdown.Item href="#pedidos">Mis Pedidos</NavDropdown.Item>
                  <NavDropdown.Divider />
                <NavDropdown.Item href="#cerrar"><i data-feather="log-out"></i>Cerrar Sesión</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </Container>
  );
}

export default Header;
