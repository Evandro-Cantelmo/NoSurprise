import React, { useState, useContext, Fragment } from "react";
import {
  GroupsTaskContext,
  GroupTaskContext,
} from "../../context/GroupTaskContext";
import { TaskContext } from "../../context/TaskContext";
import { Button, Input } from "../../pages/auth/styles";

export const AddGroup = () => {
  const [task, setTask] = useState("");
  const { AddGroupFireBase, GroupsInfo, setGroupName } = useContext(GroupTaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task !== "") {
      AddGroupFireBase(task);
      setTask("");

      setTimeout(() => {
        GroupsInfo(task);
      }, 1000);
    }
  };
  console.log(task);
  setGroupName(task)
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
              placeholder=""
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />
          </div>
          <Button type="submit">Adicionar Grupo</Button>
        </span>
      </form>
    </div>
  );
};
