import React, { useEffect, useState } from 'react';
import '../styles/TareasLista.css';

const TareasLista = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const tasksData = localStorage.getItem('TasksData');

    if (tasksData) {
      setTasks(JSON.parse(tasksData));
    }
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectedTaskIndex !== null && !event.target.closest('.task')) {
        setSelectedTaskIndex(null);
      }
    };
  
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [selectedTaskIndex]);
  
  const handleEditChange = (event, field) => {
    const newEditingTask = { ...editingTask };
    newEditingTask[field] = event.target.value;
    setEditingTask(newEditingTask);
  };

  const handleEditSubmit = () => {
    if (!editingTask.Task || !editingTask.Hora || !editingTask.Descripcion) {
      alert('Los campos no pueden estar vacíos');
      return;
    }

    const newTasks = [...tasks];
    newTasks[selectedTaskIndex] = editingTask;
    setTasks(newTasks);
    localStorage.setItem('TasksData', JSON.stringify(newTasks));
    setEditingTask(null);
  };

  const handleEditCancel = () => {
    setEditingTask(null);
  };

  const handleEditClick = (index) => {
    setEditingTask({ ...tasks[index] });
  };

  const handleStatusChange = (index, status) => {
    if (status === 'eliminado') {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
      localStorage.setItem('TasksData', JSON.stringify(newTasks));
    } else {
      const newTasks = [...tasks];
      newTasks[index].status = status;
      setTasks(newTasks);
      localStorage.setItem('TasksData', JSON.stringify(newTasks));
    }
  };

  const handleSelectTask = (index) => {
    setSelectedTaskIndex(index);
  };

  const tasksTemplate = tasks.map((task, index) => (
    <div
      key={index}
      className={`task ${task.status} ${selectedTaskIndex === index ? 'selected' : ''}`}
      onClick={() => handleSelectTask(index)}
    >
      <p>Task: {task.Task}</p>
      <p>Hora: {task.Hora}</p>
      <p>Descripcion: {task.Descripcion}</p>

      {selectedTaskIndex === index && (
        <>
          {editingTask ? (
            <>
              <input
                type="text"
                value={editingTask.Task}
                onChange={(e) => handleEditChange(e, 'Task')}
                placeholder="Task"
              />
              <input
                type="time"
                value={editingTask.Hora}
                onChange={(e) => handleEditChange(e, 'Hora')}
                placeholder="Hora"
              />
              <input
                type="text"
                value={editingTask.Descripcion}
                onChange={(e) => handleEditChange(e, 'Descripcion')}
                placeholder="Descripcion"
              />

              <button onClick={handleEditSubmit}>Aceptar</button>
              <button onClick={handleEditCancel}>Cancelar</button>
            </>
          ) : (
            <>
              <button onClick={(e) => { e.stopPropagation(); handleEditClick(index); }}>Editar</button>
              <button onClick={() => handleStatusChange(index, 'completado')}>Completado</button>
              <button onClick={() => handleStatusChange(index, 'enprogreso')}>En Progreso</button>
              <button onClick={() => handleStatusChange(index, 'eliminado')}>Eliminar</button>
            </>
          )}
        </>
      )}
    </div>
  ));

  return <div className="container tareas-lista">{tasksTemplate}</div>;
};

export default TareasLista;
