import React, { createContext, useState, useEffect } from "react";
// import { AuthContext } from './AuthContext'
import firebase from "../firebase";

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
  const [Tasks, setTasks] = useState([]);
  // const { User } = useContext(AuthContext)
  const [User, setUser] = useState(null);

  firebase.auth().onAuthStateChanged((user) => {
    setUser(user);
  });

  useEffect(() => {
    if (User) {
      firebase
        .firestore()
        .collection("Users")
        .doc(User.uid)
        .collection("Tasks")
        .orderBy("addedon", "desc")
        .onSnapshot((snapshot) => {
          const newtask = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setTasks(newtask);
        });
    }
    // eslint-disable-next-line
  }, [User]);
  console.log(Tasks);

  const AddTaskFireBase = (task) => {
    const d = new Date();
    let date =
      d.getDate() +
      "-" +
      (parseInt(d.getUTCMonth()) + 1).toString() +
      "-" +
      d.getFullYear();

    const obj = {
      task,
      completed: false,
      addedon: date,
    };
    firebase
      .firestore()
      .collection("Users")
      .doc(User.uid)
      .collection("Tasks")
      .add(obj);
  };

  const DeleteTaskFireBase = (id, completed) => {
    firebase
      .firestore()
      .collection("Users")
      .doc(User.uid)
      .collection("Tasks")
      .doc(id)
      .delete();
  };

  const UpdateTaskFireBase = (id, completed) => {
    firebase
      .firestore()
      .collection("Users")
      .doc(User.uid)
      .collection("Tasks")
      .doc(id)
      .update({
        completed: !completed,
      });
  };
  const PriceTaskFireBase = (id, editprice, quant) => {
    firebase
      .firestore()
      .collection("Users")
      .doc(User.uid)
      .collection("Tasks")
      .doc(id)
      .update({
        price: editprice,
        quant: quant
      });
  };

  const EditTaskFireBase = (id, edittext) => {
    firebase
      .firestore()
      .collection("Users")
      .doc(User.uid)
      .collection("Tasks")
      .doc(id)
      .update({
        task: edittext,
      });
  };

  let numeros = [];

  return (
    <TaskContext.Provider
      value={{
        Tasks,
        AddTaskFireBase,
        DeleteTaskFireBase,
        EditTaskFireBase,
        UpdateTaskFireBase,
        PriceTaskFireBase,
        numeros,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
