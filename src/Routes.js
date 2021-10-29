import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import { Navbar } from "./layout/Navbar";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            
            <Route exact path="/" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            
          </Switch>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
