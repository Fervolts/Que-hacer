import React from 'react';
import algo from '../img/galaxyeyeswallpaper.jpg'; 
import './Index.css'
const Intro = () => {
  return (
    <div>
    <div className='Box'>
      <h1 className='Title'>¡Bienvenido a nuestra aplicación!</h1>
      <p className='Text'>Esta es una aplicación simple de To Do que te ayudará a mantener un registro de tus tareas pendientes. Puedes agregar nuevas tareas, editar tareas existentes y eliminar tareas que ya hayas completado. ¡Esperamos que encuentres esta aplicación útil!</p>
    </div>
    <img src={algo} alt="Imagen" className='Img' />
    </div>
  );
}

export default Intro;
