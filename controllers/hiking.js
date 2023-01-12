require('dotenv').config();
const fetch = require('node-fetch');


exports.getHikingDatas = (coords) => {
    // [43.28403200089498, 5.371308351623643]
    return new Promise((resolve, reject) => {
        fetch(`https://magosm.magellium.com/geoserver/wfs?request=GetFeature&version=2.0.0&count=10&outputFormat=application/json&typeName=magosm:france_hiking_foot_routes_line&srsName=EPSG:3857&bbox=-1538728.3025657746,4558105.012117158,2570526.338045301,6805965.139927621`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const filteredData = data.features.map((hike) => {
                console.log(hike.geometry.coordinates[0]);
                return {
                    name: hike.properties.name,
                    // coords: hike.geometry.coordinates,
                    coords: [43.28403200089498, 5.371308351623643],
                    code_country: 'fr',
                    category: 'hiking',
                    schedule: 'En Journée',
                    description: `${hike.properties.name} d'une distance de ${hike.properties.distance}`,
                }
            })
            resolve(filteredData);
        })
        .catch(error => reject(error));
    })
}