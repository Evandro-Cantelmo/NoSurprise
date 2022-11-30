import React, { useContext, useState, useEffect } from "react";
import { TaskContext } from "../../context/TaskContext";
import { Box, Button, Modal, Typography } from "@mui/material";
import { spacing } from "@mui/system";
import { Input } from "../../pages/auth/styles";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";

export const Task = (props) => {
  const { id, addedon, task, completed, price, quant } = props.task;
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

  const [Quant, setQuant] = useState("1");
  console.log(typeof Quant);
  console.log(typeof EditPrice);
  console.log(Quant * EditPrice);

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
      setQuant("");
    }
  };

  const handleEditPrice = (e) => {
    e.preventDefault();
    setShow(false);
    if (EditPrice !== "") {
      PriceTaskFireBase(id, Quant * EditPrice, Quant);
      setEditPrice({});
      setQuant(1);
    }
  };

  useEffect(() => {
    if (price == null) {
      setPricet(`R$0`);
    } else if (price === undefined) {
      setPricet(0);
    } else {
      setPricet(`R$${price.toFixed(2)}`);
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

      <p onClick={handleShowPrice}>
        R${quant == undefined ? "0" : price / quant} x
        {quant == undefined ? "1" : quant}
      </p>

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
          width: "45vw",
          height: "100vh",
        }}
        open={show}
        onClose={handleClose}
      >
        <Box
          style={{
            width: "45vw",
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
            style={{ border: "1px solid black", width: "90%" }}
            type="text"
            placeholder="Mudar para..."
            value={EditText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <hr />

          <Button
            style={{ width: "90%" }}
            size="small"
            variant="contained"
            onClick={handleEdit}
          >
            Salvar alteração
          </Button>

          <Button style={{ width: "90%" }} size="small" onClick={handleClose}>
            fechar
          </Button>
        </Box>
      </Modal>

      <Modal
        style={{
          width: "45vw",
          height: "100vh",
        }}
        open={showPrice}
        onClose={handleClosePrice}
      >
        <Box
          style={{
            width: "45vw",
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
          <br />
          <Input
            type="number"
            style={{ border: "1px solid black", width: "90%" }}
            placeholder="Preço"
            value={EditPrice}
            onChange={(e) => setEditPrice(e.target.value)}
          />

          <br />
          <Input
            type="number"
            style={{ border: "1px solid black", width: "20%" }}
            placeholder="Quantidade"
            value={Quant}
            onChange={(e) => setQuant(e.target.value)}
          />

          <br />
          <Button
            style={{ width: "90%" }}
            size="small"
            variant="contained"
            onClick={handleEditPrice}
          >
            Salvar alteração
          </Button>
          <Button
            style={{ width: "90%" }}
            size="small"
            onClick={handleClosePrice}
          >
            Fechar
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
