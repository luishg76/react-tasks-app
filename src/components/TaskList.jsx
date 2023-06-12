import TaskCard from "./TaskCard.jsx";
import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext.jsx";

function TaskList() {
  const { taskslist } = useContext(TaskContext);
  //estado

  return (
    <div>
      {taskslist.length === 0 ? (
        <h2 className="text-white text-3xl text-center">
          No existen tareas que mostrar
        </h2>
      ) : (
        <div className="grid grid-cols-4 gap-2">
          {taskslist.map((task) => {
            return <TaskCard key={task.id} task={task} />;
          })}
        </div>
      )}
    </div>
  );
}

export default TaskList;
