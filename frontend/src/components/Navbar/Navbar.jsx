import React from "react";
import "./navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import emmaus from "../../images/emmaus.png";
import avatar from "../../assets/Vector.png";
function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={emmaus} alt="" />
      </Link>

      <div className="list">
        <Link to="/evaluation">
          <p>Ajouter un smartphone</p>
        </Link>
        <Link to="/phones">
          <p>Nos smartphones</p>
        </Link>
        <Link to="/network">
          <p>Réseau Emmaus</p>
        </Link>
      </div>
      <div className="profile">
        <img src={avatar} alt="" />
        <p>John Doe</p>
      </div>
    </div>
  );
}

export default Navbar;
