if (urlParams.get('name') == 'climbing') {
    document.querySelector('h1').textContent = 'Sélectionnez la zone des spots d\'escalade';
    map.on('click', function(e) {
        console.log(e.lngLat.lat, e.lngLat.lng);
        urlParams.set('lat', e.lngLat.lat)
        urlParams.set('lng', e.lngLat.lng)
        window.location.search = urlParams;
    });
}