import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Imas from '../img/Tiramisu.jpg'

const Footer = (props) => {
  return (
    <div>
      <Container>
        <Row className="saber-mas">
          <Col xs="1"></Col>
          <Col xs="5" className="col-ima"><img className="imas" src={Imas}/></Col>
          <Col xs="5" className="col-text">
            <h3>Lorem Ipsum</h3>
            <p>Nulla sed sodales magna, a euismod justo. Aenean posuere nisi quis tellus fermentum, a ullamcorper magna placerat. Mauris consequat bibendum eros quis rhoncus. Aenean dictum porta tempus. Nulla facilisi. Vestibulum sed efficitur nisi. Cras fermentum ante sit amet odio consequat ornare. Vestibulum in ultrices lacus. Aenean ut ipsum augue. Nulla lobortis diam at pellentesque commodo. Aenean malesuada metus eget purus porttitor vehicula. Pellentesque varius dictum elementum.</p>
          </Col>
          <Col xs="1"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;