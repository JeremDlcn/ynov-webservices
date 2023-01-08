const map = new maplibregl.Map({
    container: "map",
    style: "https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
    center: [2.3522, 48.8566],
    zoom: 5
});

function addMarkers(markers, coords, name) {
    markers.push(new maplibregl.Marker()
    .setLngLat(coords.reverse())
    .setPopup(new maplibregl.Popup({ offset: 25 }) // add popups
      .setHTML(`<h3>${name}</h3>`))
    .addTo(map))
}