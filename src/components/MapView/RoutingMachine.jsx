import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
// import venue_location_icon from "../assets/venue_location_icon.svg"
import "leaflet-routing-machine";

const createRoutineMachineLayer = (props) => {
  const { waypoints } = props;
  const instance = L.Routing.control({
    waypoints,
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 5 }]
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: false,
    draggableWaypoints: false,
    fitSelectedRoutes: false,
    showAlternatives: false,
    createMarker: () => { return null; }
    // createMarker: (i, start, n) => { return L.marker(start.latLng, { icon: venue_location_icon, draggable: false,shadowPane }) }
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
