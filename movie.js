// $("document").ready(function () {

var movieBtn = document.getElementById("movie")
// var tvBtn = document.getElementById("tv")

// var movieCode = "";

// if (movieCode === "") {
//     movieBtn.style.display = "none";
// } else {
//     movieBtn.style.display = "show";
// }

var movieCode = 18
// conditionals, onclicks

// Movie or TV onclick - choose the data fetch
// Genre onclick 
function movieGenreRequest(){

var movieApi = 'https://api.themoviedb.org/3/discover/movie?with_genres=' + movieCode + '&api_key=b16247e3c7a3350acf15d3581ce27109&language=en-US';

fetch (movieApi)
.then(function(response){
    return response.json();
}).then (function(data){
    console.log(data)
})
}


var action = document.querySelector(".action")

action.addEventListener('click', function(){

    
    movieCode = this.getAttribute("data-code")
    console.log(movieCode)

    movieGenreRequest()

            // if (movieCode === "") {
            //     movieBtn.style.display = "none";
            // } else {
            //     movieBtn.style.display = "show";
            // }

})





movieBtn.addEventListener('click', movieGenreRequest)
// var genres = {
//     Action: "28"
// }

// Action =28 
// Comedy =35
// Horror =27
// Romance =10749
// SyFy =878
// Thriller =53
// Drama=18



// $("#search-btn").click(function (event) {
//         event.preventDefault();

//         var cityInput = $("#search-input").val().trim();
//         fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityInput + '&appid=1a201dc845b8d910adc7977e4bac7b00&units=imperial',
//             {
//                 method: "GET",
//                 cache: "reload",
//             })
//             .then(function (response) {
//                 return response.json();
//             }).then(function (data) {
//                 console.log(data)
//                 $(".current-city").append("<h2>" + (data.name));
//                 $(".current-temp-text").append("<h5>" + "Actual: " + (data.main.temp) + "&#8457");
//                 $(".current-temp-text").append("<h5>" + "Feels Like: " + (data.main.feels_like) + "&#8457");
//                 // $(".current-temp-text").append("<h5>" + (data.weather.main));
//             })








// })