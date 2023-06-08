import TaskContext from "../contexts/TaskContext";

function TaskCard({ task, deleteTask }) {
  return (
    <TaskContext>
      <div>
        <h2>{task.title}</h2>
        <p>{task.descripcion}</p>
        <button onClick={() => deleteTask(task.id)}>Eliminar</button>
      </div>
    </TaskContext>
  );
}

export default TaskCard;
