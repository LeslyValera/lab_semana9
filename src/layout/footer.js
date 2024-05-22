import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <footer className="bg-dark text-white mt-4">
      <Container className='color-letras'>
        <Row className="py-3">
          <Col>
            <h3>Comunidad</h3>
            <p>¡Únete a nuestra vibrante comunidad de amantes del maquillaje! En nuestra sección de "Comunidad", no solo encontrarás productos de belleza excepcionales, sino también un espacio donde compartir, aprender y conectarte con otros apasionados del maquillaje.</p>
          </Col>
          <Col>
            <h3>Enlaces</h3>
            <ul>
              <li><a href="#">Teminos y comdiciones</a></li>
              <li><a href="#">Nuestras políticas de privacidad</a></li>
              <li><a href="#">Descargar catálogo virtual</a></li>
            </ul>
          </Col>
          <Col>
            <h3>Contacto</h3>
              <p><a href=""><i data-feather="facebook"></i>facebook</a></p>
              <p><a href=""><i data-feather="instagram"></i>Instagram</a></p>
              <p><a href="tel:+51 912 345 678"><i data-feather="phone"></i>WhatsApp</a></p>
            </Col>

        </Row>
      </Container>
    </footer>
  );
}

export default Footer;