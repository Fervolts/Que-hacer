import React, { useState, useEffect } from 'react'

const Crudto_do = ({ addTask, editTask, editData }) => {
  
  const [formData, setFormData] = useState({
    Task: '',
    Hora: '',
    Descripcion: '', // Añadido
    id: null
  })

  useEffect(() => {
    if (editData !== null){
      setFormData(editData)
    } else {
      setFormData({
        Task: '',
        Hora: '',
        Descripcion: '', // Añadido
        id: null
      })
    }
  }, [editData])

  const handleSubmit = (e) => {
    e.preventDefault(); // Evitar que se recarge la página
    
    if (formData.Task !== '' && formData.Hora !== '' && formData.Descripcion !== '') { // Modificado
      if (editData !== null) {
        editTask(formData)
      } else { 
        formData.id = Date.now()
        addTask(formData)
        setFormData({
          Task: '',
          Hora: '',
          Descripcion: '', // Añadido desc
          id: null
        })
      }
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

  return <>
    <form className='m-3' onSubmit={handleSubmit}>
      <label htmlFor="Task">Task:</label>
      <input type="text" name="Task" onChange={handleChange} value={formData.Task}/>
      <label htmlFor="Hora">Hora:</label>
      <input type="time" name="Hora" onChange={handleChange} value={formData.Hora}/>
      <label htmlFor="Descripcion">Descripcion:</label>
      <input type="text" name="Descripcion" onChange={handleChange} value={formData.Descripcion}/>
      <input className='btn btn-success mx-1' type="submit" value="Enviar" />
      <input className='btn btn-danger mx-1' type="reset" value="Cancelar" />
    </form>
  </>
}

export default Crudto_do
