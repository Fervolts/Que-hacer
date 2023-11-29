import React, { useEffect, useState } from 'react';
import '../styles/Inicio.css';

const Intro = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const users = ['JustKillu', 'Fervolts'];
    Promise.all(users.map(user => 
      fetch(`https://api.github.com/users/${user}`)
        .then(response => response.json())
    ))
    .then(data => setProfiles(data))
    .catch(err => console.error(err));
  }, []);

  return (
    <div className="intro">
      <h1>Bienvenido a nuestra aplicación To Do</h1>
      <p>Esta es una aplicación simple de To Do que te ayudará a mantener un registro de tus tareas pendientes. Puedes agregar nuevas tareas, editar tareas existentes y eliminar tareas que ya hayas completado. ¡Esperamos que encuentres esta aplicación útil!</p>
      <h2>Creadores:</h2>
      <div className="profiles">
        {profiles.map(profile => (
          <div key={profile.id} className="profile-card">
            <h2>{profile.name}</h2>
            <p>{profile.bio}</p>
            <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
              <img src={profile.avatar_url} alt={profile.name} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Intro;