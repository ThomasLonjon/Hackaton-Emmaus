import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./filter.scss";

function Filter({ filters, setFilters }) {
  const [models, setModels] = useState([]);
  const [brands, setBrands] = useState([]);

  const ram = [2, 4, 6, 8, 10];
  const stockage = [16, 32, 64, 128, 256, 512, 1024];

  const [isOpen, setIsOpen] = useState({
    filter1: false,
    filter2: false,
    filter3: false,
    filter4: false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/evaluation")
      .then((result) => setModels(result.data));

    axios
      .get("http://localhost:8000/evaluation/brands")
      .then((result) => setBrands(result.data));
  }, []);

  const handleClick = (nb) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [nb]: !prevState[nb],
    }));
  };

  const handleBrand = (e) => {
    if (e.target.checked) {
      setFilters((prevFilters) => {
        const updatedFilters = [...prevFilters];
        updatedFilters[0].push(e.target.value);
        return updatedFilters;
      });
    } else {
      setFilters((prevFilters) => {
        const updatedFilters = [...prevFilters];
        updatedFilters[0] = updatedFilters[0].filter(
          (item) => item !== e.target.value
        );
        return updatedFilters;
      });
    }
  };

  const handleModel = (e) => {
    if (e.target.checked) {
      setFilters((prevFilters) => {
        const updatedFilters = [...prevFilters];
        updatedFilters[1].push(e.target.value);
        return updatedFilters;
      });
    } else {
      setFilters((prevFilters) => {
        const updatedFilters = [...prevFilters];
        updatedFilters[1] = updatedFilters[1].filter(
          (item) => item !== e.target.value
        );
        return updatedFilters;
      });
    }
  };

  const handleRAM = (e) => {
    if (e.target.checked) {
      setFilters((prevFilters) => {
        const updatedFilters = [...prevFilters];
        updatedFilters[2].push(e.target.value);
        return updatedFilters;
      });
    } else {
      setFilters((prevFilters) => {
        const updatedFilters = [...prevFilters];
        updatedFilters[2] = updatedFilters[2].filter(
          (item) => item !== e.target.value
        );
        return updatedFilters;
      });
    }
  };
  const handleStorage = (e) => {
    if (e.target.checked) {
      setFilters((prevFilters) => {
        const updatedFilters = [...prevFilters];
        updatedFilters[3].push(e.target.value);
        return updatedFilters;
      });
    } else {
      setFilters((prevFilters) => {
        const updatedFilters = [...prevFilters];
        updatedFilters[3] = updatedFilters[3].filter(
          (item) => item !== e.target.value
        );
        return updatedFilters;
      });
    }
  };
  return (
    <div className="filter-bar">
      <p>Trier par filtres</p>
      <div className="dropdown">
        <span>Marque</span>
        <span
          className={!isOpen.filter1 ? "cross" : "closed"}
          onClick={() => handleClick("filter1")}
        ></span>
      </div>
      {isOpen.filter1 && (
        <div className="checkboxes">
          {brands.map((e) => {
            return (
              <div key={brands.indexOf(e)}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  value={e.brand}
                  onChange={handleBrand}
                />
                <label htmlFor={e.brand}>{e.brand}</label>
              </div>
            );
          })}
        </div>
      )}
      <div className="dropdown">
        <span>Models</span>
        <span
          className={!isOpen.filter2 ? "cross" : "closed"}
          onClick={() => handleClick("filter2")}
        ></span>
      </div>
      {isOpen.filter2 && (
        <div className="checkboxes">
          {models.map((e) => {
            return (
              <div key={models.indexOf(e)}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  value={e.name}
                  onChange={handleModel}
                />
                <label htmlFor={e.name}>{e.name}</label>
              </div>
            );
          })}
        </div>
      )}
      <div className="dropdown">
        <span>RAM</span>
        <span
          className={!isOpen.filter3 ? "cross" : "closed"}
          onClick={() => handleClick("filter3")}
        ></span>
      </div>
      {isOpen.filter3 && (
        <div className="checkboxes">
          {ram.map((e) => {
            return (
              <div key={ram.indexOf(e)}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  value={e}
                  onChange={handleRAM}
                />
                <label htmlFor={e}>{e} GO</label>
              </div>
            );
          })}
        </div>
      )}
      <div className="dropdown">
        <span>Stockage</span>
        <span
          className={!isOpen.filter4 ? "cross" : "closed"}
          onClick={() => handleClick("filter4")}
        ></span>
      </div>
      {isOpen.filter4 && (
        <div className="checkboxes">
          {stockage.map((e) => {
            return (
              <div key={stockage.indexOf(e)}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  value={e}
                  onChange={handleStorage}
                />
                <label htmlFor={e}>{e} GO</label>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Filter;
