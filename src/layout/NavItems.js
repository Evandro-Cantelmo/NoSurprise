import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const NavItems = () => {
  const { LogOn, SignOutFirebase } = useContext(AuthContext);

  if (!LogOn) {
    return (
      <div style={{ display: "none" }}>
        <Link to="/">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }

  return (
    <Link to="/" onClick={SignOutFirebase}>
      Sign Out
    </Link>
  );
};
