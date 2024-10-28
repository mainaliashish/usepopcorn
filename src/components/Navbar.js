import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import NumResults from "./NumResults";

function NavBar({ movieLength }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults movieLength={movieLength}/>
    </nav>
  );
}

export default NavBar;
