window.onload = function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        showError();
    }
}

function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("El usuario no da permiso para obtener su ubicación.")
            break;
        case error.POSITION_UNAVAILABLE:
            alert("La información de ubicación no está disponible.")
            break;
        case error.TIMEOUT:
            alert("Ha expirado el tiempo de la solicitud.")
            break;
        case error.UNKNOWN_ERROR:
            alert("Ha ocurrido un error inesperado.")
            break;
    }
}




let restaurantPoint = (object) => {
    // let id = object.response.data.objeto_id;
    // console.log(id)
    fetch(`https://developers.zomato.com/api/v2.1/search?apikey=5f5a913462093a0dd31e6abfbc3022f1&entity_id=83&entity_type=city&q=${object}`)
        .then((response) => response.json())
        .then((responseJson) => {
            // $('#mostrarMap').on('click', function() {
            //     mostrarMapa(responseJson.response.data);
            //     console.log(id)

            // });
            // responseJson.response.data.forEach(element => {
            //     console.log(element);
            // });
            console.log(responseJson)
        })
        .catch((error) => {
            console.log(error)
        });
}
restaurantPoint()

mostrarMapa = (puntos) => {
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(function(pos) {
        const latitud = pos.coords.latitude;
        const longitud = pos.coords.longitude;

        console.log(latitud);
        console.log(longitud);


        document.getElementById('third').style.display = 'block';
        const mymap = L.map('map').setView([latitud, longitud], 50);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZ3V0ZWZjbyIsImEiOiJjampjdXlqaG0zbXR3M3FvaGU5cG93ZXdlIn0.6b_Z9AeAgi1U7J4wiiX87w', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'your.mapbox.access.token'
        }).addTo(mymap);
        var marker = L.marker([latitud, longitud]).addTo(mymap);
        marker.bindPopup("<b>Estás aquí!</b>").openPopup();

        var greenIcon = new L.Icon({
            iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });

        // puntos.forEach(punto => {
        //     L.marker([punto.latitud, punto.longitud], { icon: greenIcon }).addTo(mymap);
        // });
    })
};

// fetch(`curl -X GET --header "Accept: application/json" --header "user-key: 5f5a913462093a0dd31e6abfbc3022f1" "https://developers.zomato.com/api/v2.1/search?count=50&lat=-33.4188152&lon=-70.64228059999999&radius=300&cuisines=4%2C151%2C3%2C159%2C168%2C30%2C229%2C25%2C153%2C391%2C40%2C45%2C134%2C156%2C181%2C143%2C169%2C148%2C55%2C60%2C67%2C70%2C300%2C73%2C162%2C82%2C304%2C177%2C641&sort=real_distance&order=asc`")
//     .then(())