import React from 'react';
import algo from '../img/galaxyeyeswallpaper.jpg'; 
import '../styles/Index.css';
import App from './Gitusers';
const Intro = () => {
  return (
    <div>
      <div className='Box'>
      <h1 className='Title'>¡Bienvenido a nuestra aplicación!</h1>
      <p className='Text'>Esta es una aplicación simple de To Do que te ayudará a mantener un registro de tus tareas pendientes. Puedes agregar nuevas tareas, editar tareas existentes y eliminar tareas que ya hayas completado. ¡Esperamos que encuentres esta aplicación útil!</p>
      <App />
      </div>
      
      <img className='Img' src={algo} alt="Imagen" />

    </div>
    
  );
}

export default Intro;