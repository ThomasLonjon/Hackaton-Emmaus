import "./navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import emmaus from "../../images/emmaus.png";
import avatar from "../../assets/Vector.png";
import useStore from "../../store";
import { useEffect, useState } from "react";
import api from "../../services/api";
function Navbar() {
  const { auth, setAuth } = useStore();
  const [isVisible, setIsVisible] = useState(false);

  const logout = () => {
    return api.get("users/logout");
  };

  const handleSubmit = async () => {
    await logout();
    setAuth({ user: null, isLogged: false });
  };

  useEffect(() => {
    console.log("sdqsd", auth);
  }, [auth]);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
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
          <Link to="/map">
            <p>Réseau Emmaus</p>
          </Link>
        </div>
        <div className="profile" onClick={handleClick}>
          <img src={avatar} alt="" />
          <p>{auth.user?.firstname} {auth.user?.lastname}</p>
        </div>
      </div>
      {isVisible && (
        <div className="profile-panel">
          <a onClick={handleSubmit}>Se déconnecter</a>
        </div>
      )}
    </>
  );
}

export default Navbar;
