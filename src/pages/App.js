import React from 'react';
import '../css/App.css';
import Navegacion from '../comp/NavBar'
import Carrusel from '../comp/Carrusel'
import Mas from '../comp/Mas'
import Footer from '../comp/Footer'

function App() {
  return (
    <div className="App">
        <div className="navegacion"><Navegacion/></div>
        <div className="carrusel"><Carrusel/></div>
        <div className="sabermas"><Mas/></div>
        <div className="footer"><Footer/></div>
    </div>
  );
}

export default App;
