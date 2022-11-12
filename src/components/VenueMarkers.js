import React from "react";
import { Marker } from "react-leaflet";
import { VenueLocationIcon } from "./VenueLocationIcon";
import MarkerPopup from "./MarkerPopup";

const VenueMarkers = (props) => {
  const { venues } = props;
  console.log(props)
  const markers = venues.map((venue, i) => (
    <Marker key={i} position={venue.geometry} icon={VenueLocationIcon} onclick={() => props.showRoute(venue.route)}>
      <MarkerPopup data={venue} />
    </Marker>
  ));
  return <>{markers}</>;
};

export default VenueMarkers;
