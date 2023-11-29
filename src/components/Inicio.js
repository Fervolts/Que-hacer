import React from 'react';
import algo from '../img/galaxyeyeswallpaper.jpg'; 

const Intro = () => {
  return (
    <div>
      <h1>Bienvenido a nuestra aplicación To Do</h1>
      <p>Esta es una aplicación simple de To Do que te ayudará a mantener un registro de tus tareas pendientes. Puedes agregar nuevas tareas, editar tareas existentes y eliminar tareas que ya hayas completado. ¡Esperamos que encuentres esta aplicación útil!</p>
      <img src={algo} alt="Imagen" />
    </div>
  );
}

export default Intro;
