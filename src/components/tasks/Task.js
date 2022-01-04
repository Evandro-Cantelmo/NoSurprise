import React, { useContext, useState, useEffect } from "react";
import { TaskContext } from "../../context/TaskContext";
import { Box, Button, Modal, Typography } from "@mui/material";
import { spacing } from "@mui/system";
import { Input } from "../../pages/auth/styles";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";

export const Task = (props) => {
  const { id, addedon, task, completed, price } = props.task;
  const {
    DeleteTaskFireBase,
    UpdateTaskFireBase,
    EditTaskFireBase,
    PriceTaskFireBase,
  } = useContext(TaskContext);

  const [show, setShow] = useState(false);

  const [showPrice, setShowPrice] = useState(false);

  const [EditText, setEditText] = useState("");

  const [pricet, setPricet] = useState("Valor");

  const [EditPrice, setEditPrice] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClosePrice = () => setShowPrice(false);
  const handleShowPrice = () => setShowPrice(true);

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
      setEditPrice("");
    }
  };

  const handleEditPrice = (e) => {
    e.preventDefault();
    setShow(false);
    if (EditPrice !== "") {
      PriceTaskFireBase(id, EditPrice);
      setEditPrice({});
    }
  };

  useEffect(() => {
    if (price == null) {
      setPricet(`R$0`);
    } else if (price === undefined) {
      setPricet(0);
    } else {
      setPricet(`R$${price}`);
    }
  });

  return (
    <div
      style={{
        background: "white",
        margin: "10px 0",
        width: "100%",
        height: "7vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <p>{task}</p>

      <p onClick={handleShowPrice}>{pricet}</p>

      <span
        style={{ color: "#66ffe1", cursor: "pointer" }}
        onClick={handleShow}
      >
        <EditIcon style={{ color: "black", width: "5vw" }} />
      </span>
      <span
        onClick={handleUpdate}
        style={
          completed
            ? { cursor: "pointer", color: "#51f542" }
            : { cursor: "pointer" }
        }
      >
        <CheckCircleOutlineIcon style={{ width: "5vw" }} />
      </span>

      <span style={{ cursor: "pointer" }} onClick={handleDelete}>
        <DeleteIcon style={{ width: "5vw" }} />
      </span>

      <Modal
        style={{
          width: "25vw",
          height: "100vh",
        }}
        open={show}
        onClose={handleClose}
      >
        <Box
          style={{
            width: "25vw",
            height: "100vh",
            background: "white",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography>{task}</Typography>
          <hr />
          <Input
            style={{ border: "1px solid black" }}
            type="text"
            placeholder="Mudar para..."
            value={EditText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <hr />

          <Button variant="contained" onClick={handleEdit}>
            Salvar alteração
          </Button>

          <Button onClick={handleClose}>fechar</Button>
        </Box>
      </Modal>

      <Modal
        style={{
          width: "25vw",
          height: "100vh",
        }}
        open={showPrice}
        onClose={handleClosePrice}
      >
        <Box
          style={{
            width: "25vw",
            height: "100vh",
            background: "white",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography>{task}</Typography>
          <hr />
          <Input
            type="number"
            style={{ border: "1px solid black" }}
            placeholder="Preço"
            value={EditPrice}
            onChange={(e) => setEditPrice(e.target.value)}
          />
          <hr />
          <Button variant="contained" onClick={handleEditPrice}>
            Salvar alteração
          </Button>
          <Button onClick={handleClosePrice}>Fechar</Button>
        </Box>
      </Modal>
    </div>
  );
};
