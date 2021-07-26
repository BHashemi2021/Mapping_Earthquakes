// Add console.log to check to see if our code is working.
console.log("working");


// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);




//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);



// ! adding  circle to the map instead of the marker
// L.circle([34.0522, -118.2437], {
//    radius: 100
// }).addTo(map);


// ! Alternative way to draw a circle on the map. Default radius is set at 10 pixels. 
// L.circleMarker([34.0522, -118.2437]).addTo(map);



// // ! SKILL DRILL: create a light-yellow circle with black lines indicating a 300-meter radius 
// // of Central Los Angeles on a dark map

// L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: 'black',
//     fillColor: '#ffffal'
    
// }).addTo(map);



//! (The cities array was moved to the cities.js file and we will call them through the next code
// We replace the marker variable from single marker map with the following cities variable
// An array containing each city's location, state, and population.
// let cities = [{
//     location: [40.7128, -74.0059],
//     city: "New York City",
//     state: "NY",
//     population: 8398748
//   },
//   {
//     location: [41.8781, -87.6298],
//     city: "Chicago",
//     state: "IL",
//     population: 2705994
//   },
//   {
//     location: [29.7604, -95.3698],
//     city: "Houston",
//     state: "TX",
//     population: 2325502
//   },
//   {
//     location: [34.0522, -118.2437],
//     city: "Los Angeles",
//     state: "CA",
//     population: 3990456
//   },
//   {
//     location: [33.4484, -112.0740],
//     city: "Phoenix",
//     state: "AZ",
//     population: 1660272
//   }
//   ];



// Get data from cities.js
let cityData = cities;



// Loop through (iterate) the cities array and create one marker for each city.
// cities.forEach(function(city) {
//     console.log(city)
//    });



// Add the location of each city to the map when you iterate through the cities array. 
//    cities.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location).addTo(map);
// });


// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location).addTo(map);
// });


// We added circleMarker and set the radius relative to the cities populations
// We edited the above code to add pop-up to each marker too
// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/100000,
        color: "#C1A32D", weight: 4
})
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});



// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);



