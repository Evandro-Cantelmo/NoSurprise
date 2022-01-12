import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import LogoutIcon from "@mui/icons-material/Logout";

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
    <div style={{display:'flex', justifyContent:'center', alignItems:"center"}}>
      <div></div>

      <Link
        style={{ textDecoration: "none", color: "black", cursor: "pointer" }}
        to="/SignIn"
        onClick={SignOutFirebase}
      >
        <LogoutIcon />
      </Link>
    </div>
  );
};
