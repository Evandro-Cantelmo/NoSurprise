import React, { useContext, useState, Fragment } from "react";
import { TaskContext } from "../../context/TaskContext";
import { Modal, Button, ModalBody, ModalTitle, ModalFooter } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

export const Task = (props) => {
  const { id, addedon, task, completed } = props.task;
  const { DeleteTaskFireBase, UpdateTaskFireBase, EditTaskFireBase } =
    useContext(TaskContext);

  const [show, setShow] = useState(false);

  const [EditText, setEditText] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    DeleteTaskFireBase(id, completed);
  };

  const handleUpdate = (e) => {
    UpdateTaskFireBase(id, completed);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setShow(false);
    if (EditText !== "") {
      EditTaskFireBase(id, EditText);
      setEditText("");
    }
  };

  return (
    <div
      style={{
        background: "white",
        margin: "10px 0",
        width: "40vw",
        height: "7vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <p>{task}</p>
      <p>{addedon}</p>

      <span
        className="material-icons"
        style={{ color: "#66ffe1", cursor: "pointer" }}
        variant="primary"
        onClick={handleShow}
      >
        create
      </span>

      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <ModalTitle>{task} </ModalTitle>
        </ModalHeader>
        <ModalBody>
          <input
            type="text"
            className="col-12 form-control"
            placeholder="Change To"
            value={EditText}
            onChange={(e) => setEditText(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>

      <span
        onClick={handleUpdate}
        style={
          completed
            ? { cursor: "pointer", color: "#51f542" }
            : { cursor: "pointer" }
        }
      >
        check_circle
      </span>

      <span style={{ cursor: "pointer" }} onClick={handleDelete}>
        delete
      </span>
    </div>
  );
};
