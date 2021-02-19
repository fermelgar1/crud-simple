import React from 'react'

const FormTareas = (props) => {
    return (
        <>
         <form onSubmit = { props.modoEditar ? props.agregarTarea : props.editarTarea }>
            <input 
            type="text" className="form-control mb-2"
            placeholder='ingrese tarea'
            value= { props.value }
            onChange = {(e) => props.onChange(e.target.value) }
            />
            {
              props.modoEditar ? 
              (<button type='submit' className="btn-block btn btn-dark ">Agregar</button>)
              :
              (<button type='submit' className="btn-block btn btn-warning ">Editar</button>)
            }
            
          </form>   
        </>
    )
}

export default FormTareas
