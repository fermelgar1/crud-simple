import React from 'react'

const Tareas = (props) => {
    return (
        <>
            <li className="list-group-item">
              <span className="lead">{ props.tarea }</span>
              <button onClick={()=>props.eliminar(props.tarea)} className="btn btn-danger btn-sm float-end mx-2">Eliminar</button>
              <button onClick={props.editar} className="btn btn-warning btn-sm float-end mx-2">Editar</button>
            </li>
        </>
    )
}

export default Tareas
