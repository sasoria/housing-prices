import listOfLocations from "./locations-list.json";

let locations = new Map();

listOfLocations.forEach((location) => {
  locations.set(location.district, location.code);
});

export default locations;
