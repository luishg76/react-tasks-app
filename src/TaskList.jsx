import React, { useEffect, useState } from 'react'
import {tasks as data} from './tasks.js'

function TaskList() {
  let content;
  const [taskslist, setTaskslist] = useState([])
  useEffect(() => {    
    return alert('Se cargaron: '+taskslist.length+' tareas')    
  },[taskslist])
 
  if(taskslist.length===0)
    content=<h2>No existen tareas que mostrar</h2>
  else
  {
    content=taskslist.map((task)=>{
      return (
      <div>
          <h2>{task.title}</h2>
          <p>{task.descripcion}</p> 
      </div>
      )           
    })
  }
  return (
    <div>
       <h1>TaskList</h1> 
       <button onClick={()=>{
        setTaskslist(data)
       }}>
        Cargar Datos
       </button>
       {content}      
    </div>
  )
}

export default TaskList