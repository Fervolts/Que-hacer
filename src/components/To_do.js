import React, { useState, useEffect } from 'react'
import '../styles/To_do.css';

const Crudto_do = ({ addTask, editTask, editData }) => {
  
  const [formData, setFormData] = useState({
    Task: '',
    Hora: '',
    Descripcion: '',
    id: null
  })

  useEffect(() => {
    if (editData !== null){
      setFormData(editData)
    } else {
      setFormData({
        Task: '',
        Hora: '',
        Descripcion: '',
        id: null
      })
    }
  }, [editData])

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.Task !== '' && formData.Hora !== '' && formData.Descripcion !== '') {
      if (editData !== null) {
        editTask(formData)
      } else { 
        formData.id = Date.now()
        addTask(formData)
        setFormData({
          Task: '',
          Hora: '',
          Descripcion: '',
          id: null
        })
      }
      alert('Formulario enviado'); // Muestra una alerta
      window.location.reload(); // Actualiza la página
    } else {
      alert("Por favor agrega Informacion")
    }
  }
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form className='task-form' onSubmit={handleSubmit}>
      <label htmlFor="Task" className='task-label'>Task:</label>
      <input type="text" name="Task" onChange={handleChange} value={formData.Task} className='task-input'/>
      <label htmlFor="Hora" className='task-label'>Hora:</label>
      <input type="time" name="Hora" onChange={handleChange} value={formData.Hora} className='task-input'/>
      <label htmlFor="Descripcion" className='task-label'>Descripcion:</label>
      <input type="text" name="Descripcion" onChange={handleChange} value={formData.Descripcion} className='task-input'/>
      <input className='btn btn-success task-submit mx-1' type="submit" value="Enviar" />
      <input className='btn btn-danger task-reset mx-1' type="reset" value="Cancelar" />
    </form>
  )
}

export default Crudto_do
