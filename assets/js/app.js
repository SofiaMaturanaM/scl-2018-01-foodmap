fetch(`https://developers.zomato.com/api/v2.1/search?apikey=5f5a913462093a0dd31e6abfbc3022f1&entity_id=83&entity_type=city&start=11&count=30&lat=-33.4188152&lon=-70.64228059999999&radius=200&cuisines=134%2C4%2C151%2C3%2C159%2C141%2C229%2C25%2C287%2C40%2C143%2C67%2C153%2C316%2C391%2C89%2C45%2C156%2C168%2C148%2C55%2C60%2C70%2C73%2C300%2C162%2C83%2C82%2C1005%2C304%2C177%2C95%2C641%2C99&sort=real_distance&order=desc`)
    .then(response => response.json())
    .then(data => {

        // consume(data);
        console.log(data);
    })

// const consume = data => {
//     data.data.forEach(element => {
//         let locationPoint = element.restaurant.location.latitude;
//         console.log(locationPoint);


//     });
// }

let typeOfFood = document.getElementsByClassName("foodType").value;

window.onload = function mostrarMapa(puntos) {
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


        document.getElementById('printMap').style.display = 'block';
        const mymap = L.map('map').setView([latitud, longitud], 50);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZ3V0ZWZjbyIsImEiOiJjampjdXlqaG0zbXR3M3FvaGU5cG93ZXdlIn0.6b_Z9AeAgi1U7J4wiiX87w', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 15,
            id: 'mapbox.streets',
            accessToken: 'your.mapbox.access.token'
        }).addTo(mymap);
        var marker = L.marker([latitud, longitud]).addTo(mymap);
        marker.bindPopup("<b>¡Estás aquí!</b>").openPopup();


        var greenIcon = new L.Icon({
            iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });



        // typeOfFood.forEach(location => {
        //     L.marker([location.latitude, location.longitude], { icon: greenIcon }).addTo(mymap);
        // });
    })
};



// fetch(`curl -X GET --header "Accept: application/json" --header "user-key: 5f5a913462093a0dd31e6abfbc3022f1" "https://developers.zomato.com/api/v2.1/search?count=50&lat=-33.4188152&lon=-70.64228059999999&radius=300&cuisines=4%2C151%2C3%2C159%2C168%2C30%2C229%2C25%2C153%2C391%2C40%2C45%2C134%2C156%2C181%2C143%2C169%2C148%2C55%2C60%2C67%2C70%2C300%2C73%2C162%2C82%2C304%2C177%2C641&sort=real_distance&order=asc`")
//     .then(())




// function filterByTypeOfFood() {
//     let typeOfFood = document.getElementsByClassName("foodType").value
//     console.log(data.value)
// }



// let restaurantPoint = (object) => {
// let id = object.response.data.objeto_id;
// console.log(id)
// fetch(`https://developers.zomato.com/api/v2.1/search?apikey=5f5a913462093a0dd31e6abfbc3022f1&entity_id=83&entity_type=city&start=11&count=30&lat=-33.4188152&lon=-70.64228059999999&radius=200&cuisines=134%2C4%2C151%2C3%2C159%2C141%2C229%2C25%2C287%2C40%2C143%2C67%2C153%2C316%2C391%2C89%2C45%2C156%2C168%2C148%2C55%2C60%2C70%2C73%2C300%2C162%2C83%2C82%2C1005%2C304%2C177%2C95%2C641%2C99&sort=real_distance&order=desc`)
//     .then(response => response.json())
//     .then(data => {

//         // filterByTypeOfFood(data);
//         console.log(data)
//     })


// fetch(`restaurantes.json`)
// .then((response) => response.json())
// .then((responseJson) => {
//     $('#mostrarMap').on('click', function() {
//         mostrarMapa(responseJson.response.data);
//         console.log(id)

//     });
// responseJson.response.data.forEach(element => {
//     console.log(element);
// });
// console.log(responseJson)
// })
//     .catch((error) => {
//         console.log(error)
//     });
// }
// restaurantPoint()