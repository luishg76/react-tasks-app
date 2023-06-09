import TaskForm from "./TaskForm.jsx";
import TaskCard from "./TaskCard.jsx";
import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext.jsx";

function TaskList() {
  const {taskslist}=useContext(TaskContext)
  //estado
  let content;

  if (taskslist.length === 0) content = <h2>No existen tareas que mostrar</h2>;
  else {
    content = taskslist.map((task) => {
      return (
        <TaskCard key={task.id} task={task}/>
      );
    });
  }
  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskForm />
      {content}
    </div>
  );
}

export default TaskList;
