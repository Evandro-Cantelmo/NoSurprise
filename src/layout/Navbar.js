import React from "react";
import { Link } from "react-router-dom";
import { NavItems } from "./NavItems";

export const Navbar = () => {
  return (
    <div>
      <nav>
        <NavItems />
      </nav>
    </div>
  );
};
