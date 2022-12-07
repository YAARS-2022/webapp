import React, { useState, useEffect, useRef } from "react";
import { MapContainer as Map, TileLayer } from "react-leaflet";
import data from "../../assets/data.json";
import Markers from "./VenueMarkers";
import "./mapView.css";
import { getBussesData } from "../../firebase";
import { Navbar } from "../Navbar/Navbar";
import Carts from "../Carts";

import RoutingMachine from "./RoutingMachine";

import "leaflet/dist/leaflet.css";

const MapView = (props) => {
  const [state, setState] = useState({
    currentLocation: { lat: 27.691025218551726, lng: 85.33932172849848 },
    zoom: 13,
    data,
  });
  const [busRoutingData, setBusRoutingData] = useState([]);


  function showRoute(data) {
    if (data) {
      const parsedData = data.map((m) => [m._lat, m._long]);
      setBusRoutingData(() => {
        return parsedData;
      });
    }
  }

  const rMachine = useRef();
  useEffect(() => {
    if (rMachine.current) {
      console.log(rMachine.current)
      rMachine.current.setWaypoints(busRoutingData);
    }
  }, [busRoutingData, rMachine]);


  useEffect(() => {
    async function updateLocations(position) {
      const busses = await getBussesData();
      setState(state => {
        return {
          ...state,
          currentLocation: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
          data: {
            venues: busses,
          },
        }
      });
    }
    async function updateMap() {
      const busses = await getBussesData();
      setState((state) => {
        return {
          ...state,
          data: {
            venues: busses,
          },
        };
      });
    }
    navigator.geolocation.getCurrentPosition(
      async function(position) {
        updateLocations(position);
      },
      function(error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      },
      {
        enableHighAccuracy: true,
      }
    );
    setInterval(() => updateMap(), 10000);
  }, []);

  return (
    <>
      <Navbar />
      <Carts />

      <div className="map__home">
        {/* <div className="sidebar">
          <Sidebar data={childernData} />
        </div> */}
        <div className="map">
          <Map center={state.currentLocation} zoom={state.zoom}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Markers venues={state.data.venues} showRoute={showRoute} />
            <RoutingMachine ref={rMachine} waypoints={busRoutingData} />
            {/* <routingOverlay /> */}
          </Map>
        </div>
      </div>
    </>
  );
};

export default MapView;
