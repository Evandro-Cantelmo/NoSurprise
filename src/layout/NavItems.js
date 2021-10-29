import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const NavItems = () => {
  const { LogOn, SignOutFirebase } = useContext(AuthContext);

  if (!LogOn) {
    return (
      <div className="d-flex">
        <Link
          to="/"
          activeClassName="border-bottom border-top border-primary rounded"
          className="nav-link"
        >
          Sign In
        </Link>
        <Link
          to="/signup"
          activeClassName="border-bottom border-top border-primary rounded"
          className="nav-link mr-md-5"
        >
          Sign Up
        </Link>
      </div>
    );
  }

  return (
    <Link to="/" className="nav-link mr-md-5" onClick={SignOutFirebase}>
      Sign Out
    </Link>
  );
};
