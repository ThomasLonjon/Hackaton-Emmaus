import { useEffect, useState } from "react";
import Map from "../../components/Map";
import "../../App.scss";
import "./MapPage.scss";

function MapPage() {
  const [phoneIsChosen, setPhoneIsChosen] = useState(false);
  const [clickedAgencyIndex, setClickedAgencyIndex] = useState("");
  const [agencies, setAgencies] = useState([]);

  async function getAgencies() {
    try {
      const response = await fetch("http://localhost:8000/agencies/2");
      const data = await response.json();
      setAgencies(data);
    } catch (err) {
      console.error(err);
    }
  }

  const handleClick = () => {
    setPhoneIsChosen(true);
  };

  useEffect(() => {
    if (phoneIsChosen) {
      getAgencies();
    }
  }, [phoneIsChosen]);

  return (
    <>
      <div className="mapPage">
        <h1>Map page</h1>
        <div className="map-table-container">
          <div className="mapContainer">
            <Map agencies={agencies} setClickedAgencyIndex={setClickedAgencyIndex} phoneIsChosen={phoneIsChosen} />
          </div>

          <div className={!clickedAgencyIndex ? "info" : "infoHidden"}>
            <h3>{agencies[clickedAgencyIndex]?.agency_name}</h3>
            <span>Phone number : {agencies[clickedAgencyIndex]?.phone_number}</span>
            <span>Smartphone : {agencies[clickedAgencyIndex]?.name}</span>
            <span>Ram : {agencies[clickedAgencyIndex]?.ram} Go</span>
            <span>Stockage : {agencies[clickedAgencyIndex]?.storage} Go</span>
          </div>
        </div>
        <div className="setButton" onClick={handleClick}>
          setter
        </div>
      </div>
    </>
  );
}

export default MapPage;
