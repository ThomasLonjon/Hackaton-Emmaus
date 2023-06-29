import React, { useEffect, useState } from "react";
import axios from "axios";
import Filter from "../../components/filters/Filter";
import "./phones.scss";
import cross from "../../assets/close.png"

function Phones() {
  const [phones, setPhones] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredPhones, setFilteredPhones] = useState([]);
  const [filters, setFilters] = useState([[], [], [], []]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/phones")
      .then((result) => setPhones(result.data));
  }, []);

  useEffect(() => {
    console.log(phones);
  }, [phones]);

  useEffect(() => {
    if (
      filters[0].length === 0 &&
      filters[1].length === 0 &&
      filters[2].length === 0 &&
      filters[3].length === 0
    ) {
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

  return (
    <div className="phone-page">
      <Filter
        setFilteredPhones={setFilteredPhones}
        filteredPhones={filteredPhones}
        setFilters={setFilters}
        filters={filters}
      />
      <div className="phones-container">
        <div>
          {" "}
          <h1>Nos téléphones</h1>
          <input
            className="searchbar"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Chercher un téléphone"
          />
        </div>
        <table>
          <tr>
            <th>Marque</th>
            <th>Model</th>
            <th>RAM</th>
            <th>Stockage</th>
            <th>État</th>
            <th>Chargeur</th>
            <th>Prix</th>
            <th></th>
          </tr>
          {filteredPhones
            .filter((item) =>
              item?.name.toLowerCase().includes(search.toLowerCase())
            )
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
                  <td>
                    <button><img src={cross} alt="" /></button>
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
}

export default Phones;
