import React, { useState }from 'react'
import FormTareas from './components/FormTareas'
import Tareas from './components/Tareas'

function App() {

  const [tareas, setTareas] = useState([])  
  const [neuvaTarea, setNuvaTarea] = useState('')
  const [id, setId] = useState(0)
  const [modoEdicion, setModoEdicion] = useState(true) 
  const [idEditar, setIdEditar] = useState(0)
  const [error, setError] = useState(null)

  const agregarTarea = (e) => {
    e.preventDefault()
    if(!neuvaTarea.trim()){
      setError('necesitas llenar el campo')
      return
    }
    setError(null)
    setTareas([...tareas, {id, tarea:neuvaTarea}])
    setId(id+1);
    setNuvaTarea('');
  }

  const eliminarTarea = (dropedTask) => {
    const nuevaLista = tareas.filter(item =>(item.tarea !== dropedTask));
    setTareas(nuevaLista);
  } 
   const modoEditar = (item) => {
    setModoEdicion(false)
    setNuvaTarea(item.tarea)
    setIdEditar(item.id)
   }
   
   const editarTarea = (e) => {
     e.preventDefault()
     if (!neuvaTarea.trim()) {
      setError('necesitas llenar el campo')
       return 
     }
     setError(null)
     const nuevoArray = tareas.map( item => (
       item.id === idEditar ? 
       { id:idEditar, tarea:neuvaTarea} : 
       item) 
     )
     setTareas(nuevoArray)
     setModoEdicion(true)
     setNuvaTarea('')
   }
   

  return (
    <div className='container mt-5'>
      <h1 className='text-center'>CRUD Simple</h1>
      <hr/>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">lista de tarea</h4>
          <ul className="list-group">
           {
             tareas.length === 0 ? 
             (
               <li className="list-group-item">No hay Tareas!!!</li>
             ) :
             (tareas.map(item =>( 
                <Tareas 
                  key = {item.id}
                  tarea = {item.tarea}
                  eliminar = {eliminarTarea}
                  editar = {()=>modoEditar(item)}
                />
              )))
            }
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">
            {
              modoEdicion ? `Agregar tarea` :`Editar tarea`
            }
          </h4>
          {
            error ? 
            <span className="text-danger">{ error }</span> : null
          }
          <FormTareas
            onChange = { setNuvaTarea }
            agregarTarea = { agregarTarea }
            editarTarea = { editarTarea }
            value = { neuvaTarea }
            modoEditar = { modoEdicion }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
