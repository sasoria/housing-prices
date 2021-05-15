import listOfLocations from "./locations.json";

let locations = new Map();

listOfLocations.forEach((location) =>
  locations.set(location.district, locations.code)
);

export default locations;
