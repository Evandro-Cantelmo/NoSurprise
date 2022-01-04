import React, { useContext, useEffect, useState } from "react";
import { Task } from "./Task";
import { TaskContext } from "../../context/TaskContext";
import { Div } from "./styles";

export const Tasks = () => {
  const { Tasks, numeros } = useContext(TaskContext);
  const [result, setResult] = useState();
  let arr = [];
  useEffect(() => {
    for (let i = 0; i < Tasks.length; i++) {
      if (Tasks[i]?.price === undefined) {
        arr.push(0);
      } else {
        arr.push(parseFloat(Tasks[i].price));
      }
    }
    var soma = 0;
    for (var i = 0; i < arr.length; i++) {
      soma += arr[i];
    }
    setResult(soma);
  });

  return (
    <>
      <p       style={{
        background: "white",
        margin: "10px 0",
        width: "50%",
        height: "7vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: "10px",
      }}>Valor total: R$ {result}</p>
      <Div>
        {Tasks.map((task) => {
          return <Task key={task.id} task={task} />;
        })}
      </Div>
    </>
  );
};
