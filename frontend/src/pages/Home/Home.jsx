import React from "react";
import emmaus from "../../images/emmaus.png";
import hand from "../../images/hand.png";
import "../../App.scss";

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/evaluation')
  }
  const handleFindPhone = () => {
    navigate('/phones')
  }
  return (
    <>
      <div className="topbar">
        <div className="topbar-first">
          <div className="topbar-second">
            <img src={emmaus} className="emmaus-logo" alt="" />
            <button className="connect">Se connecter </button>
          </div>
        </div>
      </div>
      <div className="block-home">
        <div className="title-home">
          <div className="title-description">
            <h1>
              L'accès à la technologie
              <br />
              pour tous
              <br />
              <span className="hightlight">un smarthphone</span>
              <br />à la fois{" "}
            </h1>
          </div>
          <div className="title-paragraphe">
            <p className="para-title">
              Ensemble nous déterminer à faire une différence dans la vie <br />
              des personnes exclues en leur offrant des opportunités et des outils nécessaires <br />
              pour s'épanouir dans le monde de demain{" "}
            </p>
          </div>
          <div className="home-button">
            <div className="btn-1">
              <button className="home-btn-1" onClick={handleClick}>Ajoutez un smarthphone</button>
            </div>
            <div className="btn-2">
              <button className="home-btn-2" onClick={handleFindPhone}>Trouvez un smarthphone</button>
            </div>
          </div>
        </div>
        <div className="emmaus-hand">
          <img src={hand} className="dirty-hand" alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
