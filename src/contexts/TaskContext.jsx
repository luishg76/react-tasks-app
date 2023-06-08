import { createContext } from "react"

const TaskContext=createContext()
function TaskContext(props) {
  return (
    <>
      <h1>Component Context</h1>
      {props.children}
    </>
  )
}

export default TaskContext