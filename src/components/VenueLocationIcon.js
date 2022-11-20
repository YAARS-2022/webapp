import L from "leaflet";
import venue_location_icon from "../assets/venue_location_icon.svg"

export const VenueLocationIcon = L.icon({
  iconUrl: venue_location_icon,
  iconRetinaUrl: venue_location_icon,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});
