import React from "react";
import { Marker } from "react-leaflet";
import { VenueLocationIcon } from "./VenueLocationIcon";

const VenueMarkers = (props) => {
  const { venues } = props;
  const markers = venues.map((venue, i) => (
    <Marker
      key={i}
      position={venue.geometry}
      icon={VenueLocationIcon}
      eventHandlers={{ click: () => props.showRoute(venue.route, i) }}
    >
    </Marker>
  ));
  return <>{markers}</>;
};

export default VenueMarkers;
