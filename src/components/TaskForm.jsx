import { useState } from "react";
import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

function TaskForm() {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  function handleSubmit() {
    addTask(title, description);
    setTitle("");
    setDescription("");
  }
  return (
    <div className="max-w-md mx-auto">      
      <form
        className="bg-slate-800 p-5 mb-4 rounded-sm"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <h2 className="text-white text-xl text-left pb-2">Crear Tarea</h2>
        <input className="bg-slate-300 p-2 w-full mb-2 rounded"
          type="text"
          placeholder="Entre el Titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <textarea className="bg-slate-300 p-2 w-full mb-2 rounded"
          placeholder="Entre la Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-700 rounded-md text-white px-2 py-1 mx-2 hover:bg-green-500"
        >
          Agregar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
