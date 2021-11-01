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
      <form
        autoComplete="off"
        style={{ marginTop: "30px" }}
        onSubmit={handleSubmit}
      >
        <div>
          <Input
            type="text"
            id="task"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
        </div>
        <Button type="submit">Add Task</Button>
      </form>
    </div>
  );
};
