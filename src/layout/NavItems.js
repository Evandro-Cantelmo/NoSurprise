import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import LogoutIcon from "@mui/icons-material/Logout";
import GroupIcon from "@mui/icons-material/Group";
import BallotIcon from "@mui/icons-material/Ballot";

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <Link
          style={{ textDecoration: "none", color: "black", cursor: "pointer" }}
          to="/"
        >
          <BallotIcon />
          Lista
        </Link>
      </div>
      <div>
        <Link
          style={{ textDecoration: "none", color: "black", cursor: "pointer" }}
          to="/groups"
        >
          <GroupIcon />
          Grupos
        </Link>
      </div>
      <Link
        style={{ textDecoration: "none", color: "black", cursor: "pointer" }}
        to="/SignIn"
        onClick={SignOutFirebase}
      >
        <LogoutIcon /> Sair
      </Link>
    </div>
  );
};
