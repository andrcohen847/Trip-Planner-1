console.log('Is this running?');

import mapboxgl from "mapbox-gl";
import buildMarker from "../src/marker";

// const ourMap = document.getElementById('map').setLngLat([-74.009151, 40.705086]).addto(map);


mapboxgl.accessToken = "pk.eyJ1IjoiYW5kcmNvaGVuODQ3IiwiYSI6ImNrZndwcHhjMDF0YjIycm53ams1M3M2MGYifQ.JMgdTB8ThsAqI1JRJKRwYA";


const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";


new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);
buildMarker('restaurants', [-87.641, 41.895]).addTo(map);
