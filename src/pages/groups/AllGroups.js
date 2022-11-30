import React, { useState, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../../context/TaskContext";
import { Button, Card, Container, H1, Input } from "../auth/styles";

const AllGroups = () => {
    console.log('abriu')
    return (
      <Container>
        <Card>
          <form >
            <div>
              <H1>Login</H1>
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                id="email"
                autoComplete="email"
               
  
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Senha"
                id="password"
                autoComplete="current-password"
              
             
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

export default AllGroups();
