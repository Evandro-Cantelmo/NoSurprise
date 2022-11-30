import React, { createContext, useState, useEffect } from "react";
// import { AuthContext } from './AuthContext'
import firebase from "../firebase";

export const GroupTaskContext = createContext();

export const GroupTaskContextProvider = (props) => {
  const [Tasks, setTasks] = useState([]);
  // const { User } = useContext(AuthContext)
  const [User, setUser] = useState(null);
  const [groupIntegrations, setGroupIntegrations] = useState();
  const [groupName, setGroupName] = useState();
  const [asd, setasd] = useState([]);
  const [firstDoc, setFirstDoc] = useState();
  const [secondDoc, setSecondDoc] = useState();
  const [groupLabel, setGroupLabel] = useState();
  const [groupUsers, setGroupUsers] = useState();

  firebase.auth().onAuthStateChanged((user) => {
    setUser(user);
  });

  // useEffect(() => {
  //   if (User) {
  //     firebase
  //       ?.firestore()
  //       ?.collection("Users")
  //       ?.doc(User?.uid)
  //       ?.collection(groupName)
  //       ?.orderBy("groupName", "desc")
  //       ?.onSnapshot((snapshot) => {
  //         const newtask = snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           ...doc.data(),
  //         }));

  //         setTasks(newtask.groupName);
  //       });
  //   }
  //   // eslint-disable-next-line
  // }, [User]);
  const tst =
    "6yirNEEFWARuJIsgB69s5Dhywfw1" + "-" + "aPaGIAxYYUQQjf2gTHnTD4pHRxq1";
  const usingSplit = tst?.split("-");
  console.log(tst);
  useEffect(() => {
    console.log(usingSplit.includes(User?.uid));
    if (usingSplit.includes(User?.uid) === true) {
      firebase
        .firestore()
        .collection("Groups")
        .doc("6yirNEEFWARuJIsgB69s5Dhywfw1-aPaGIAxYYUQQjf2gTHnTD4pHRxq1")
        .collection("aaaccc")
        .onSnapshot((snapshot) => {
          const newtask = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setasd(newtask);
        });
    } else {
      console.log("foi agora");
    }
  }, [User]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("Users")
      .doc(User?.uid)
      .collection("GroupsInformation")
      .onSnapshot((snapshot) => {
        const newtask = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setTasks(newtask);
      });
  }, [User]);

  console.log(asd);

  useEffect(() => {
    setFirstDoc(Math.random() * 10);
    setSecondDoc(Math.random() * 10);
  }, []);
  const getGroup = (groupLabel, groupUsers) => {
    console.log(groupName);
    firebase
      .firestore()
      .collection("Groups")
      .doc(groupUsers)
      .collection(groupName)
      .doc()
      .collection("GroupDescription")
      .add();
  };

  const AddGroupFireBase = (groupNamed) => {
    const d = new Date();
    let date =
      d.getDate() +
      "-" +
      (parseInt(d.getUTCMonth()) + 1).toString() +
      "-" +
      d.getFullYear();

    const info = {
      groupName: `${groupNamed}`,
    };

    const obj = {
      task: `Bem-vindo ao ${groupNamed}`,
      completed: false,
      addedon: date,
    };

    firebase
      .firestore()
      .collection("Groups")
      .doc(tst)
      .collection(`${groupNamed}`)
      .doc()
      .collection("GroupDescription")
      .add(info);

    firebase
      .firestore()
      .collection("Groups")
      .doc(tst)
      .collection(`${groupNamed}`)
      .doc()
      .collection("Tasks")
      .add(obj);
  };

  const GroupsInfo = (groupNamed) => {
    const obj = {
      groupName: `${groupNamed}`,
      groupUsers: `${tst}`,
    };

    firebase
      ?.firestore()
      ?.collection("Users")
      ?.doc(User?.uid)
      ?.collection("GroupsInformation")
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
  const PriceTaskFireBase = (id, editprice) => {
    firebase
      .firestore()
      .collection("Users")
      .doc(User.uid)
      .collection("Tasks")
      .doc(id)
      .update({
        price: editprice,
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
    <GroupTaskContext.Provider
      value={{
        Tasks,
        AddGroupFireBase,
        DeleteTaskFireBase,
        EditTaskFireBase,
        UpdateTaskFireBase,
        PriceTaskFireBase,
        GroupsInfo,
        numeros,
        groupName,
        setGroupName,
        getGroup,
        groupLabel,
        setGroupLabel,
        groupUsers,
        setGroupUsers,
      }}
    >
      {props.children}
    </GroupTaskContext.Provider>
  );
};
