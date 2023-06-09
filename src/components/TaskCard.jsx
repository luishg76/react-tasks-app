import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

function TaskCard({ task }) { 
  const {deleteTask}=useContext(TaskContext)
  return (    
      <div>
        <h2>{task.title}</h2>
        <p>{task.descripcion}</p>
        <button onClick={() => deleteTask(task.id)}>Eliminar</button>
      </div>    
  );
}

export default TaskCard;
