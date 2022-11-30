import React, { useContext, useState } from "react";
import { NavItems } from "./NavItems";
import "../style.css";
import { AuthContext } from "../context/AuthContext";
import { HeadBar, SideBar } from "./styles";
import MenuIcon from "@mui/icons-material/Menu";

export const Navbar = () => {
  const [open, setOpen] = useState();
  const { LogOn } = useContext(AuthContext);
  if (!LogOn) {
    return <div style={{ display: "none" }}></div>;
  }
  const effect = () => {
    if (open === "flex") {
      setOpen("none");
    } else {
      setOpen("flex");
    }
  };
  window.onresize = function (event) {
    if (window.innerWidth > 768) {
      setOpen("flex");
    } else {
      setOpen("none");
    }
  };

  return (
    <>
      <HeadBar style={{ zIndex: "2" }}>
        <MenuIcon style={{ cursor: "pointer" }} onClick={() => effect()} />
      </HeadBar>

      <SideBar style={{ display: `${open}` }}>
        <nav onClick={() => effect()}>
          <NavItems />
        </nav>
      </SideBar>
    </>
  );
};
