
import mapboxgl from "mapbox-gl";


const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords) {
  // Your Code Here
const marker = document.createElement("div"); // Create a new, detached DIV
marker.style.width = "32px";
marker.style.height = "39px";
marker.style.backgroundImage = `url(${iconURLs[type]})`;

return new mapboxgl.Marker(marker).setLngLat(coords);

};

export default buildMarker;

