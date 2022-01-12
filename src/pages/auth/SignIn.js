import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, Redirect } from "react-router-dom";
import "../../style.css";
import { Button, ButtonAuth, Card, Container, H1, Input } from "./styles";
import firebase from "firebase";
import GoogleIcon from "@mui/icons-material/Google";
import { spacing } from "@mui/system";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { SignInFirebase, LogOn } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    SignInFirebase(email, password);
  };

  if (LogOn) {
    return <Redirect to="/" />;
  }

  const signInWithGoogle = async () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        localStorage.setItem("LogOn", true);
        window.location.reload();

        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

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

        <ButtonAuth onClick={() => signInWithGoogle()}>
          <GoogleIcon fontSize="small" /> Entrar com Google
        </ButtonAuth>
      </Card>
    </Container>
  );
};

export default SignIn;
