import React, { useState, useContext, Fragment } from "react";
import { TaskContext } from "../../context/TaskContext";
import { Button, Input } from "../../pages/auth/styles";

export const AddTask = () => {
  const [task, setTask] = useState("");
  const { AddTaskFireBase } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task !== "") {
      AddTaskFireBase(task);
      setTask("");
    }
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <span
          style={{
            marginTop: "30px",
            
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <Input
              type="text"
              id="task"
              placeholder="Digite sua Task"
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />
          </div>
          <Button type="submit">Adicionar Task</Button>
        </span>
      </form>
    </div>
  );
};
