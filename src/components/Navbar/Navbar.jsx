import React from "react";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Searchbar from "../Searchbar/Searchbar";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <Searchbar />
      <Button className="button" text={"Give Feedback"} />
    </nav>
  );
};

export default Navbar;
