import { useState } from "react";
import Map from "../../components/Map";
import "../../App.scss";
import "./MapPage.scss";

function MapPage() {
  const [phoneIsChosen, setPhoneIsChosen] = useState(false);

  const handleClick = () => {
    setPhoneIsChosen(true);
  };

  return (
    <>
      <div>MapPage</div>
      <div className="mapContainer">
        <Map phoneIsChosen={phoneIsChosen} />
      </div>
      <div className="setButton" onClick={handleClick}>
        {" "}
        setter
      </div>
    </>
  );
}

export default MapPage;
