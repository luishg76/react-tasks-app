import React, { useEffect, useState } from 'react'
import {tasks as data} from './tasks.js'

function TaskList() {
  const [taskslist, setTaskslist] = useState([])
  useEffect(() => {
    setTaskslist(data)
  },[])
  
  return (
    <div>
       <h1>TaskList</h1> 
       {
        taskslist.map((task)=>{
           return (
            <div>
               <p>{task.title}</p>
               <p>{task.descripcion}</p> 
           </div>
           )           
        })
       }
    </div>
  )
}

export default TaskList