import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, Redirect } from "react-router-dom";
import "../../style.css";
import { Button, Card, Container, H1, Input } from "./styles";

const SignIn = () => {
  const { SignInFirebase, LogOn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    SignInFirebase(email, password);
  };

  if (LogOn) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Card>
        <form onSubmit={handleSubmit}>
          <div>
            <H1>Login</H1>
          </div>
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
          <Button type="submit">Entrar</Button>

          <Button>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/signup"
            >
              Cadastrar
            </Link>
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default SignIn;
