
import React, { useState } from "react";
import emmaus from "../../images/emmaus.png";
import hand from "../../images/hand.png";
import "../../App.scss";
import Connect from "../composant/Connect";
import Navbar from "../../components/Navbar/Navbar";
import Navout from "../../components/NavOut/Navout";
import axios from "axios";
import useStore from "../../store";


import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {

    navigate("/evaluation");
  };

  const [openLogin, setOpenLogin] = useState(false);

  const handleFindPhone = () => {
    navigate("/phones");
  };

  const { auth } = useStore();


  return (
    <>
      {openLogin && <Connect setOpenLogin={setOpenLogin} />}
      {auth?.isLogged ? (
        <Navbar />
      ) : (
        <Navout setOpenLogin={setOpenLogin} openLogin={openLogin} />
      )}

      <div className='block-home'>
        <div className='title-home'>
          <div className='title-description'>
            <h1>
              L'accès à la technologie
              <br />
              pour tous,
              <span className='hightlight'> un smartphone</span>
              <br />à la fois.
            </h1>
          </div>
          <div className='title-paragraphe'>
            <p className='para-title'>
              Ensemble, nous sommes déterminés à faire une différence dans la
              vie <br />
              des personnes exclues en leur offrant des opportunités et des
              outils nécessaires <br />
              pour s'épanouir dans le monde de demain.{' '}
            </p>
          </div>
          <div className='home-button'>
            <button className='home-btn-1' onClick={handleClick}>
              Ajoutez un smartphone
            </button>
            <button className='home-btn-2' onClick={handleFindPhone}>
              Trouvez un smartphone
            </button>
          </div>
        </div>
        <div className='emmaus-hand'>
          <img src={hand} className='dirty-hand' alt='' />
        </div>
      </div>
    </>
  );
}

export default Home;
