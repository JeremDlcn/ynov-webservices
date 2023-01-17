require('dotenv').config();
const fetch = require('node-fetch');


exports.getClimbingDatas = (coords) => {
    // [43.28403200089498, 5.371308351623643]
    return new Promise((resolve, reject) => {
        fetch(`https://api.oblyk.org/api/v1/public/crags/crags_around?latitude=${coords[0]}&longitude=${coords[1]}&distance=30`, {
                method: 'GET',
                headers: {
                    'HttpApiAccessToken': process.env.CLIMB_API_TOKEN
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const filteredData = data.map((crag) => {
                    return {
                        name: crag.name,
                        coords: [crag.latitude, crag.longitude],
                        code_country: crag.code_country,
                        category: 'climbing',
                        schedule: 'En Journée',
                        description: `${crag.name} d'une altitude de ${crag.elevation} est situé en ${crag.country} dans la région ${crag.region}, le type de roche est : ${crag.rocks[0] ? crag.rocks[0] : 'Inconnu'}`,
                    }
                })
                resolve(filteredData);
            })
            .catch(error => reject(error));
    })
}