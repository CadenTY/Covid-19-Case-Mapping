mapboxgl.accessToken = 'pk.eyJ1IjoiY3RoMjMiLCJhIjoiY2xzNnRqamx3MHU2YjJqbzc5dnJwZDBwciJ9.TNE4ZpGv__f5i3hTfNPlkQ';

let map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/light-v10', // style URL
    zoom: 3, // starting zoom
    center: [-100, 40] // starting center
});

map.setProjection({
    name: 'albers',
    center: [-100, 40],
    parallels: [30, 50]
});
async function geojsonFetch() {
    const response = await fetch('assets/us-covid-2020-rates.json');
    cData = await response.json();
}
geojsonFetch();

map.on('load', function loadingData() {
    map.addSource('cData', {
        type: 'geojson',
        data: cData
    });
    map.addLayer({
        'id': 'cData-layer',
        'type': 'fill',
        'source': 'cData',
        'paint': {
            'fill-color': [
                'step',
                ['get', 'rates'],
                '#FFEDA0',   // stop_output_0
                20,          // stop_input_0
                '#FED976',   // stop_output_1
                40,          // stop_input_1
                '#FEB24C',   // stop_output_2
                60,          // stop_input_2
                '#FD8D3C',   // stop_output_3
                80,         // stop_input_3
                '#FC4E2A',   // stop_output_4
                100,         // stop_input_4
                '#E31A1C',   // stop_output_5
                120,         // stop_input_5
                '#BD0026',   // stop_output_6
                140,        // stop_input_6
                "#800026"    // stop_output_7
            ],
            'fill-outline-color': '#BBBBBB',
            'fill-opacity': 0.7,
        }
    });
});

map.on('click', (e) => {
    const county = map.queryRenderedFeatures(e.point, {
        layers: ['cData-layer']
    });

    if (county.length > 0) {
        const popupContent = `<h3>${county[0].properties.county}</h3><p><strong><em>${county[0].properties.rates}</strong> case rate in the county</em></p>`
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(popupContent)
            .addTo(map);
    }
    //console.log(county[0])
    // console.log(county[0].properties.rates)
});

const layers = [
    '0-19',
    '20-39',
    '40-59',
    '60-79',
    '80-99',
    '100-119',
    '120-139',
    '140 and more'
];
const colors = [
    '#FFEDA070',
    '#FED97670',
    '#FEB24C70',
    '#FD8D3C70',
    '#FC4E2A70',
    '#E31A1C70',
    '#BD002670',
    '#80002670'
];

const legend = document.getElementById('legend');
legend.innerHTML = "<b>Covid-19 case rates<br></b><br><br>";

layers.forEach((layer, i) => {
    const color = colors[i];
    const item = document.createElement('div');
    const key = document.createElement('span');
    key.className = 'legend-key';
    key.style.backgroundColor = color;

    const value = document.createElement('span');
    value.innerHTML = `${layer}`;
    item.appendChild(key);
    item.appendChild(value);
    legend.appendChild(item);
});
map.on('mousemove', ({ point }) => {
    const county = map.queryRenderedFeatures(point, {
        layers: ['cData-layer']
    });

    const textDescription = document.getElementById('text-description');
    textDescription.innerHTML = county.length ?
        generateHoverContent(county[0].properties) :
        '<p>Hover over a County!</p>';
});

function generateHoverContent(properties) {
    return `<h3>${properties.county}</h3><p><strong><em>${properties.rates}</strong> Covid-19 case rates in each county.</em></p>`;
}

const dataSource = '<p style="text-align: right; font-size:10pt">Source: <a href="https://github.com/nytimes/covid-19-data/blob/43d32dde2f87bd4dafbb7d23f5d9e878124018b8/live/us-counties.csv">New York Times Covid Data</a></p>';
legend.innerHTML += dataSource;