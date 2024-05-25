//import { Link } from "react-router-dom";
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

const feather = require('feather-icons');

function Header() {
  setTimeout(() => {
    feather.replace();
  }, 1000);

  return (
    <Container fluid>

      <div className="center-image">
         <a href="#PaginaInicial">
           <Image src="https://i.imgur.com/5Z9wd0w.jpeg"  fluid />
         </a>
      </div>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid className='barra-navegacion'>
          <Navbar.Brand href="#InicioPagina" style={{ color: '#333', fontFamily: 'Trebuchet MS' }}>ESSENCE</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#regalo" className='text-navbar-1'><i data-feather="gift"></i> Regalos</Nav.Link>
              <Nav.Link href="#tienda" className='text-navbar-1'><i data-feather="shopping-bag"></i>Tienda</Nav.Link>
              <NavDropdown title={<span className='text-navbar-1'><i data-feather="menu"></i> Maquillaje</span>} id="navbarScrollingDropdown">
                <NavDropdown.Item href="#Ojos" className='text-navbar-1'>
                  Ojos
                </NavDropdown.Item>
                <NavDropdown.Item href="#Labios" className='text-navbar-1'>
                  Labios
                </NavDropdown.Item>
                <NavDropdown.Item href="#Rostro" className='text-navbar-1'>
                  Rostro
                </NavDropdown.Item>
                <NavDropdown.Item href="#Cejas" className='text-navbar-1'>
                  Cejas
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#Otros" className='text-navbar-1'>
                  Otros
                </NavDropdown.Item>
              </NavDropdown>

              {/*Menu para skincare */}
              <NavDropdown title={<span className='text-navbar-1'><i data-feather="menu"></i>Skincare</span>} id="navbarScrollingDropdown">
                <NavDropdown.Item href="#Productos/Hidrantantes" className='text-navbar-1'>
                  Hidrantantes
                </NavDropdown.Item>
                <NavDropdown.Item href="#Productos/Tratamiento" className='text-navbar-1'>
                  Tratamientos
                </NavDropdown.Item>
                <NavDropdown.Item href="#Productos/Proteccion" className='text-navbar-1'>
                  Protección
                </NavDropdown.Item>
                <NavDropdown.Item href="#Productos/Limpieza" className='text-navbar-1'>
                  Limpieza
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#Productos/Antiedad" className='text-navbar-1'>
                  Antiedad
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#Ayuda" className='text-navbar-1'><i data-feather="info"></i>Ayuda</Nav.Link>
            </Nav>

            <Form className="d-flex ">
              <Form.Control 
                type="search"
                placeholder="¿Que deseas buscar?"
                className="me-1 barra-busqueda" 
                aria-label="¿Que deseas buscar?"
              />
              {/*BOTON BUSCAR */}
              <Button className='search-button'><i data-feather="search"></i>Buscar</Button>
            </Form>

            {/*carrito de compras*/}
            <nav className=' carrito-compras'>
            <NavDropdown title={<span><i data-feather="shopping-cart"></i></span>} align="end">
              <NavDropdown.Item>
                <div>
                  <p>CARRITO DE COMPRAS</p>
                    <hr />
                  </div>
                    <div className='cart-text-conteiner'>
                      <p>Set escritorio + archivador 2 cajones Delta Blanco</p>
                      <p>S/ 189 <span>- 1 +</span></p>
                    </div>
                    <div className='cart-text-conteiner'>
                      <p>Mueble dispensero Dalia MDP 80x182cm Blanco</p>
                      <p>S/ 359 <span>- 2 +</span></p>
                    </div>
                  <div>
                  <hr />
                  <p>Subtotal productos: S/ 548</p>
                  </div>

                  <div className='container-button'>
                  <Button variant="info" type="Submit" className='cart-button'>Ir a mi carrito</Button>
                </div>
              </NavDropdown.Item>
            </NavDropdown>
            </nav>

            {/*Perfil del usuario*/}
            <Nav className="ml-auto" >
              <NavDropdown title={<span className='text-navbar-1'><i data-feather="user"></i></span>} align="end">
                <NavDropdown.Item disabled>MI CUENTA</NavDropdown.Item>
                <NavDropdown.Item href="#perfil">Perfil</NavDropdown.Item>
                <NavDropdown.Item href="#pedidos">Mis Pedidos</NavDropdown.Item>
                  <NavDropdown.Divider />
                <NavDropdown.Item href="#cerrar">Cerrar Sesión</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container >
      </Navbar>

    </Container >
  );
}

export default Header;
