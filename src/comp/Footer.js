import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Imasfoo from '../img/Tiramisu.jpg'
import Logo from '../img/Diente_Fino_Logo.png'

const Footer = (props) => {
  return (
    <div>
      <Container>
        <Row className="footer">
          <Col className="foo1"><img className="imasfoo" src={Logo}/></Col>
          <Col className="foo1">
            <h3>Menu Footer 1</h3>
            <ul>
                <li>Nulla sed</li>
                <li>Sodales magna</li>
                <li>Euismod justo</li>
            </ul>
          </Col>
          <Col className="foo1">
            <h3>Menu Footer 2</h3>
            <ul>
                <li>Nulla sed</li>
                <li>Sodales magna</li>
                <li>Euismod justo</li>
            </ul>
          </Col>
          <Col className="foo1">
            <h3>Menu Footer 3</h3>
            <p>Nulla sed sodales magna, a euismod justo. Aenean, a euismod justo. Aenean .</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;