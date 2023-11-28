import React, { useState, useEffect } from 'react'
import Crudto_do from './To_do'
import CrudLista from './Lista'

const CrudApp = () => {

  const [editData, setEditData] = useState(null);
  const [Tasks, setTasks] = useState(() => {
    const saveTasks = window.localStorage.getItem("TasksData");
    if (saveTasks) {
      return JSON.parse(saveTasks);
    } else {
      return []
    }
  });

  useEffect(() => {
    window.localStorage.setItem("TasksData", JSON.stringify(Tasks))
  }, [Tasks])

  // inserción de un Task
  const addTask = (Task) => {
    setTasks([
      ...Tasks,
      Task
    ])
  }

  // editar un Task
  const editTask = (Task) => {
    const newTasks = Tasks.map(el => el.id === Task.id ? Task : el)
    setTasks(newTasks)
    setEditData(null)
  }

  // Eliminar un Task
  const deleteTask = id => {
    const isDelete = window.confirm(`¿Deseas eliminar el Task?`)

    if (isDelete) {
      const newTasks = Tasks.filter(el => el.id !== id)
      setTasks(newTasks);
    }
  }

  return <>
    <h2>Agrega Tasks!</h2>
    <Crudto_do addTask={addTask} editTask={editTask} editData={editData}/>
    <CrudLista Tasks={Tasks} setEditData={setEditData} deleteTask={deleteTask}/>
  </>
}

export default CrudApp