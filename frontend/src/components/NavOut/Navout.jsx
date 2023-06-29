import React from "react";
import "./navout.scss";
import { Link } from "react-router-dom";
import emmaus from "../../images/emmaus.png";
function Navbar({ setOpenLogin, openLogin }) {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={emmaus} alt="" />
      </Link>

      <button
        className="connect"
        onClick={() => {
          setOpenLogin(!openLogin);
          localStorage.setItem("logged", true);
        }}
      >
        <span> Se connecter</span>
      </button>
    </div>
  );
}

export default Navbar;
