import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Redirect } from "react-router-dom";
import { Button, Card, Container, H1, Input } from "./styles";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { SignUpFirebase, LogOn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    SignUpFirebase(email, password);
  };

  if (LogOn) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Card>
        <form
          autoComplete="off"
          style={{ marginTop: "30px" }}
          onSubmit={handleSubmit}
        >
          <H1>Cadastro</H1>

          <div>
            <Input
              type="email"
              placeholder="Email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <Button type="submit">Cadastrar</Button>
          <Button ><Link              style={{ textDecoration: "none", color: "black" }}
              to="/">Voltar</Link></Button>
        </form>
      </Card>
    </Container>
  );
};

export default SignUp;
