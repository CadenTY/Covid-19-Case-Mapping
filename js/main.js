mapboxgl.accessToken =
    'pk.eyJ1IjoiY3RoMjMiLCJhIjoiY2xzNnRqamx3MHU2YjJqbzc5dnJwZDBwciJ9.TNE4ZpGv__f5i3hTfNPlkQ';
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom: 3,
    minZoom: 0,
    center: [-100, 38]
});

map.setProjection({
    name: 'albers',
    center: [-100, 38],
    parallels: [30, 50]
});
