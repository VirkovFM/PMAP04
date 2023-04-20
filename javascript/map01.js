var map = new maplibregl.Map({
    container: 'map',
    //style:'https://api.maptiler.com/maps/basic-v2/style.json?key=gEwTz8EZKm1Uu0GCcZVM',
    style:'https://api.maptiler.com/maps/bright-v2/style.json?key=8ygd54cYLUoCX7DMoZu0',
    //style:'https://api.maptiler.com/maps/hybrid/style.json?key=8ygd54cYLUoCX7DMoZu0',
    //center: [-101.6313894764541, 21.166128124361702],
    center: [-101.71130247375336, 21.15260434696904],
    zoom: 15
});
var london = new maplibregl.Marker()
//.setLngLat([-0.11,51.49])
//.setLngLat([-101.6313894764541, 21.166128124361702])
.setLngLat([-101.71130247375336, 21.15260434696904])
.addTo(map);