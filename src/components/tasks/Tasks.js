import React, { useContext, Fragment } from "react";
import { Task } from "./Task";
import { TaskContext } from "../../context/TaskContext";

export const Tasks = () => {
  const { Tasks } = useContext(TaskContext);

  return (
    <div
      responsive
      style={{ width:'50vw', height:'60vh', display:'flex', justifyContent:"start", alignItems:'center', overflow:'auto', flexDirection:'column', boxSizing:'border-box' }}
    >
        {Tasks.map((task) => {
          return (
          <Task key={task.id} task={task} />)
        })}

    </div>
  );
};
