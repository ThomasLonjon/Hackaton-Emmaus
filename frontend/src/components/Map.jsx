import PropTypes from "prop-types";
import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.scss";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

function Map({ phoneIsChosen }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  async function getAgencies() {
    const geojson = [];

    try {
      const response = await fetch("http://localhost:8000/agencies/2");
      const data = await response.json();
      data.map((element) =>
        geojson.push({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [data[data.indexOf(element)].long, data[data.indexOf(element)].lat],
          },
        })
      );

      map.current.getSource("agencies").setData({
        type: "FeatureCollection",
        features: geojson,
      });
    } catch (err) {
      console.error(err);
    }
  }

  // ---------------------------------------- Add map----------------------------------------
  useEffect(() => {
    if (map.current) {
      map.current.remove();
    }

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/thomaslonjon/clhgjrlk901d601pg3xxj6p4v",
      center: [2.5152007724586496, 46.60410199308436],
      zoom: 5.1,
      antialias: true,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps

    map.current.on("load", () => {
      //  --------------create source markers --------------
      map.current.addSource("agencies", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [],
        },
      });

      map.current.addLayer({
        id: "agencies",
        type: "circle",
        source: "agencies",
        paint: {
          "circle-radius": 10,
          "circle-color": "#FCBD42",
          "circle-opacity": 1,
        },
      });

      //   map.current.moveLayer("agencies", "country");
    });
  }, []);

  // ---------------------------------------- Get Agencies ----------------------------------------

  useEffect(() => {
    if (phoneIsChosen) {
      getAgencies();
    }
  }, [phoneIsChosen]);

  // ---------------------------------------- RETURN----------------------------------------

  return <div ref={mapContainer} className="map" />;
}

export default Map;

Map.propTypes = {
  phoneIsChosen: PropTypes.bool.isRequired,
};
