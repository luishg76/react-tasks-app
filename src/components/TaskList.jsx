import React, { useEffect, useState } from "react";
import { tasks as data } from "../data/tasks.js";
import TaskForm from "./TaskForm.jsx";
import TaskCard from "./TaskCard.jsx";

function TaskList() {
  //estado
  let content;
  const [taskslist, setTaskslist] = useState([]);
  useEffect(() => {
    setTaskslist(data);
  }, []);

  //funcionalidades
  function addTask(title, descripcion) {
    setTaskslist([
      ...taskslist,
      {
        id: taskslist.length,
        title: title,
        descripcion: descripcion,
      },
    ]);
  }

  function deleteTask(idTask){
    let newtasks=taskslist.filter(t=>t.id!=idTask)
    setTaskslist(newtasks)    
  }

  if (taskslist.length === 0) content = <h2>No existen tareas que mostrar</h2>;
  else {
    content = taskslist.map((task) => {
      return (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask}/>
      );
    });
  }
  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskForm addTask={addTask} />
      {content}
    </div>
  );
}

export default TaskList;
