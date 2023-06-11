import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

function TaskCard({ task }) { 
  const {deleteTask}=useContext(TaskContext)
  return (    
      <div className="bg-gray-800 text-white p-4 rounded-md">
        <h2 className="text-md capitalize">{task.title}</h2>
        <p className="text-sm text-gray-500">{task.descripcion}</p>
        <button type="button" className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400" onClick={() => deleteTask(task.id)}>Eliminar</button>
      </div>    
  );
}

export default TaskCard;
