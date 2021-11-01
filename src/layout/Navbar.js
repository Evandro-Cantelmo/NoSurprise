import React, { useContext } from "react";
import { NavItems } from "./NavItems";
import "../style.css"
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const { LogOn } = useContext(AuthContext);
  if (!LogOn) {
    return (
      <div style={{ display: "none" }}>

      </div>
    );
  }
  return (
    <div style={{ width: "4vw", height: "100vh", background:'red', position:'fixed'}}>
      <nav>
        <NavItems />
      </nav>
    </div>
  );
};
