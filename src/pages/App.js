import React from 'react';
import '../css/App.css';
import Navegacion from '../comp/NavBar'
import Carrusel from '../comp/Carrusel'
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <div className="App">
        <div className="navegacion"><Navegacion/></div>
        <div className="carrusel"><Carrusel/></div>
    </div>
  );
}

export default App;
