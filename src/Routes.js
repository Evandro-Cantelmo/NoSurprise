import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import { Navbar } from "./layout/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import { Dashboard } from "./components/dashboard/Dashboard";


function App() {

  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/SignIn" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
