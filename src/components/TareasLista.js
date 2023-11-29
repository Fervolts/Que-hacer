import React, { useEffect, useState } from 'react';

const TareasLista = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const tasksData = localStorage.getItem('TasksData');

    if (tasksData) {
      setData(JSON.parse(tasksData));
    }
  }, []);

  return (
    <div>
      {data.length > 0 && data.map((task, index) => (
        <div key={index}>
          <p>Task: {task.Task}</p>
          <p>Hora: {task.Hora}</p>
          <p>Descripcion: {task.Descripcion}</p>
          <p>ID: {task.id}</p>
        </div>
      ))}
    </div>
  );
};

export default TareasLista;
