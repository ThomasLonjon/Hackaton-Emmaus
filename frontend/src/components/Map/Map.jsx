import PropTypes from "prop-types";
import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.scss";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

function Map({ setClickedAgencyIndex, filteredPhones, phones }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  // ---------------------------------------- Add map----------------------------------------
  useEffect(() => {
    if (map.current) {
      map.current.remove();
    }

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/thomaslonjon/clhgjrlk901d601pg3xxj6p4v",
      center: [2.5152007724586496, 46.60410199308436],
      zoom: 4.9,
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

    map.current.on("click", "agencies", (e) => {
      const id = e.features[0].properties.agencyId;
      setClickedAgencyIndex(parseInt(id));
    });

    map.current.on("mouseenter", "agencies", () => {
      map.current.getCanvas().style.cursor = "pointer";
    });

    // Change it back to a pointer when it leaves.
    map.current.on("mouseleave", "agencies", () => {
      map.current.getCanvas().style.cursor = "";
    });
  }, []);

  useEffect(() => {
    const geojson = [];
    if (filteredPhones.length !== phones.length) {
      filteredPhones.map((element) => {
        geojson.push({
          type: "Feature",
          properties: { agencyId: element.agency_id },
          geometry: {
            type: "Point",
            coordinates: [element.long, element.lat],
          },
        });
      });
      map.current.getSource("agencies").setData({
        type: "FeatureCollection",
        features: geojson,
      });
    }
  }, [filteredPhones]);

  // ---------------------------------------- RETURN----------------------------------------

  return <div ref={mapContainer} className="map" />;
}

export default Map;

Map.propTypes = {};
