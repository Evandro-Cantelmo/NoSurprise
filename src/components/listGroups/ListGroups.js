import React, { useContext } from "react";
import { AddGroup, AddTask } from "../Groups/AddGroup";
import { Tasks } from "../Groups/Tasks";
import { AuthContext } from "../../context/AuthContext";
import { TaskContextProvider } from "../../context/TaskContext";
import { Redirect } from "react-router-dom";
import { Container } from "../../pages/auth/styles";
import { GroupTaskContextProvider } from "../../context/GroupTaskContext";

export const ListGroups = () => {
  const { LogOn } = useContext(AuthContext);

  if (!LogOn) {
    return <Redirect to="/SingnIn" />;
  }

  return (
    <GroupTaskContextProvider>
      <Container>
        <AddGroup />
        <Tasks />
      </Container>
    </GroupTaskContextProvider>
  );
};
