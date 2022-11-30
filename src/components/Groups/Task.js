import React, { useContext, useState, useEffect } from "react";
import { GroupTaskContext } from "../../context/GroupTaskContext";

export const Task = (props) => {
  const { id, groupUsers, task, completed, groupName } = props.task;
  const {
    DeleteTaskFireBase,
    UpdateTaskFireBase,
    EditTaskFireBase,
    PriceTaskFireBase,
    getGroup
  } = useContext(GroupTaskContext);

  return (
    <div
    onClick={()=>getGroup(groupName, groupUsers)}
      style={{
        background: "white",
        margin: "10px 0",
        width: "100%",
        height: "7vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: "10px",
        cursor:'pointer'
      }}
    >
      <p>{groupName}</p>
    </div>
  );
};
