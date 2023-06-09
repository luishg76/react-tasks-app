import { useState, useEffect, createContext } from "react";
import { tasks as data } from "../data/tasks.js";

export const TaskContext = createContext();
export function TaskContextProvider(props) {
  //estados
  const [taskslist, setTaskslist] = useState([]);

  //funcionalidades
  useEffect(() => {
    setTaskslist(data);
  }, []);

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

  function deleteTask(idTask) {
    let newtasks = taskslist.filter((t) => t.id != idTask);
    setTaskslist(newtasks);
  }
  return (
    <TaskContext.Provider
      value={{
        taskslist,
        addTask,
        deleteTask,
      }}
    >      
      {props.children}
    </TaskContext.Provider>
  );
}
