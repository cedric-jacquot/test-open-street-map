// cities
let cities = {
    "Paris": { "lat": 48.852969, "lon": 2.349903, "project": "Plantation d'arbres" },
    "Rouen": { "lat": 49.4412454, "lon": 1.0211339, "project": "Potager partagé" },
    "Blois": { "lat": 47.5813096, "lon": 1.2698761, "project": "Nettoyage nature" },
    "Nancy": { "lat": 48.688108, "lon": 6.1559274, "project": "Sortie pédagogique" },
};
// center map on France
let lat = 46.927638;
let lon = 2.213749;
let mymap = null;

// map initialization
function initMap() {
    // icon path
    let iconBase = "file:///C:/Users/usuario/Documents/Déveleppoment/Test%20Open%20Street%20Map/img/";

    // create map object in div id and center on Paris with zoom 5
    myMap = L.map('mapid').setView([lat, lon], 6);

    // markers group
    markerClusters = L.markerClusterGroup();

    // connect to open street map
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        // link to open street map for copyrights
        attribution: 'données © <a href="https://www.openstreetmap.org/copyright"</a>/ODbL - rendu <a href="http://www.openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
    }).addTo(myMap);

    for (city in cities) {
        // icon define
        let myIcon = L.icon({
            iconUrl: iconBase + "marker.png",
            iconSize: [28,40],
            iconAnchor: [14,40],
            popupAnchor: [0, -35],
        });

        // add marker on city + icon
        let marker = L.marker([cities[city].lat, cities[city].lon], { icon: myIcon });

        // add popup on marker
        marker.bindPopup(city + ": " + cities[city].project);

        // add marker
        markerClusters.addLayer(marker);
    }
    myMap.addLayer(markerClusters);
}

document.addEventListener('DOMContentLoaded', initMap);
