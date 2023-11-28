import React from 'react'

const CrudList = ({ Tasks, setEditData, deleteTask }) => {

  return <>
    <h3>Tasks activas</h3>
    <table className='table'>
      <thead>
        <tr>
          <td>Task</td>
          <td>Hora estimada</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
      {
        Tasks.length === 0 ? <tr><td>No hay tasks activas, agrega una perezoso!</td></tr>
        : Tasks.map((Task, index) => {
          return <tr key={index}>
                  <td>{Task.Task}</td>
                  <td>{Task.Hora}</td>
                  <td>
                    <button
                    onClick={() => setEditData(Task)}>Editar</button>
                    <button
                    onClick={() => deleteTask(Task.id)}>Eliminar</button>
                  </td>
                </tr>
        })
      }
      </tbody>
    </table>
  </>
}

export default CrudList