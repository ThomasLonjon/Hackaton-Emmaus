import { useEffect, useState } from "react";
import Map from "../../components/Map/Map";
import Filter from "../../components/filters/Filter";
import axios from "axios";
import "../../App.scss";
import "./MapPage.scss";

function MapPage() {
  const [phones, setPhones] = useState([]);
  const [search, setSearch] = useState("");
  const [clickedAgencyIndex, setClickedAgencyIndex] = useState("");
  const [agencies, setAgencies] = useState([]);
  const [filters, setFilters] = useState([[], [], [], []]);
  const [filteredPhones, setFilteredPhones] = useState([]);
  const [selectedAgency, setSelectedAgency] = useState([]);
  const [filteredPhonesInAgency, setFilteredPhonesInAgency] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/phones").then((result) => setPhones(result.data));
    axios.get(`http://localhost:8000/agencies/`).then((result) => setAgencies(result.data));
  }, []);

  useEffect(() => {
    if (filters[0].length === 0 && filters[1].length === 0 && filters[2].length === 0 && filters[3].length === 0) {
      setFilteredPhones(phones);
      return;
    }

    setFilteredPhones(
      phones.filter((phone) => {
        const { brand, name, ram, storage } = phone;
        return (
          (filters[0].length === 0 || filters[0].includes(brand)) &&
          (filters[1].length === 0 || filters[1].includes(name)) &&
          (filters[2].length === 0 || filters[2].includes(ram.toString())) &&
          (filters[3].length === 0 || filters[3].includes(storage.toString()))
        );
      })
    );
  }, [filters, phones]);

  useEffect(() => {
    setSelectedAgency(
      agencies.filter((agency) => {
        return agency.id === clickedAgencyIndex;
      })
    );
    setFilteredPhonesInAgency(
      filteredPhones.filter((phone) => {
        return phone.agency_id === clickedAgencyIndex;
      })
    );
  }, [clickedAgencyIndex]);

  useEffect(() => {
    console.log(filteredPhonesInAgency);
  }, [filteredPhonesInAgency]);

  return (
    <>
      <div className="mapPage">
        <Filter
          setFilteredPhones={setFilteredPhones}
          filteredPhones={filteredPhones}
          setFilters={setFilters}
          filters={filters}
        />
        <div className="map-table-container">
          <div className="mapContainer">
            <Map filteredPhones={filteredPhones} setClickedAgencyIndex={setClickedAgencyIndex} phones={phones} />
          </div>

          <div className={clickedAgencyIndex ? "info" : "infoHidden"}>
            <h3>{selectedAgency[0]?.name}</h3>
            <span>Ville : {selectedAgency[0]?.location}</span>
            <span>Numéro de téléphone : {selectedAgency[0]?.phone_number}</span>
          </div>
          <table className={clickedAgencyIndex ? "maptable" : "maptableHidden"}>
            <tr>
              <th>Marque</th>
              <th>Modèle</th>
              <th>RAM</th>
              <th>Stockage</th>
              <th>État</th>
              <th>Chargeur</th>
              <th>Prix</th>
              <th></th>
            </tr>
            {filteredPhonesInAgency
              .filter((item) => item?.name.toLowerCase().includes(search.toLowerCase()))
              .map((e) => {
                return (
                  <tr>
                    <td>{e.brand}</td>
                    <td>{e.name}</td>
                    <td>{e.ram}</td>
                    <td>{e.storage}</td>
                    <td>{e.condition}</td>
                    <td>{e["charger_in"] ? "Oui" : "Non"}</td>
                    <td>{e.price}</td>
                  </tr>
                );
              })}
          </table>
        </div>
      </div>
    </>
  );
}

export default MapPage;
