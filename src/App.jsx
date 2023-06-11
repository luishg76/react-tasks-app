import "./App.css";
import React from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-zinc-900 h-screen px-10 pt-5">      
        <h1 className="text-white text-center text-2xl mb-5">Lista de Tareas</h1>
        <TaskForm />             
        <TaskList />     
    </main>
  );
}

export default App;
