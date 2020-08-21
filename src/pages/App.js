import React from 'react';
import '../css/App.css';
import Navegacion from '../comp/NavBar'
import Carrusel from '../comp/Carrusel'
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col><Navegacion/></Col>
        </Row>
        <Row className="carrusel">
          <Col><Carrusel/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
