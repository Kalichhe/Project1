import React,{useEffect, useState} from "react";
import './Dropdown.css';

function App() {


  
  return (
    
    <div className="btn-group" style={{width:'100%'}}>
  <button type="button"  style={{backgroundColor: '#00a0a0', textColor:''}} className="btn dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">
  ¿Cómo usamos tu información ?
  </button>

    <div className="dropdown-menu p-4 text-body-secondary" style={{width: '100%', backgroundColor: '#00fafa',margin: '0 auto',textAlign: 'center'}}>
      <p>
      Usamos la información que recopilamos para ofrecerte una experiencia personalizada,
 incluidos anuncios, además de los otros fines que se detallan más adelante.  
      </p> <br/>
      <p> Para ofrecer servicios de medición, de análisis y comerciales:
Mucha gente confía en nuestros Productos para dirigir o promover sus negocios. 
Los ayudamos a medir qué tan bien están funcionando sus anuncios y otro contenido.
 Para comunicarnos contigo:
Nos comunicamos contigo mediante los datos que nos proporcionaste, como la 
información de contacto que ingresaste en tu perfil.
Para realizar investigaciones e innovar para el bienestar social:
Utilizamos la información que tenemos, la información de investigadores y conjuntos 
de datos de fuentes públicas, grupos profesionales y grupos sin fines de lucro para 
realizar y respaldar la investigación.</p>
    </div>

    </div>
  );
  }

export default App;