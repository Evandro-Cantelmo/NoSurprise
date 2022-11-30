import React, { useContext, useEffect, useState } from "react";
import { Task } from "./Task";
import { TaskContext } from "../../context/TaskContext";
import { Div } from "./styles";
import { GroupTaskContext } from "../../context/GroupTaskContext";

export const Tasks = () => {
  const { Tasks } = useContext(GroupTaskContext);
  const [result, setResult] = useState();

  return (
    <>
      <Div>
        {Tasks.map((task) => {
          return <Task key={task.id} task={task} />;
        })}
      </Div>
    </>
  );
};
