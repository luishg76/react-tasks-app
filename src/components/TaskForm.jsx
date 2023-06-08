import { useState } from "react";
function TaskForm({addTask}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  function handleSubmit(){    
    addTask(title,description)
    setTitle('')
    setDescription('')
  };
  return (
    <form onSubmit={(e)=>{
       e.preventDefault()
       handleSubmit()
    }}>
      <input type="text" placeholder="Entre el Titulo" value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
      <textarea placeholder="Entre la Descripción" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default TaskForm;
