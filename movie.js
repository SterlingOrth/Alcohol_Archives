$("document").ready(function () {

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

})

// we need to create buttons of these 
// add data-code="18"
var drama = document.querySelector("drama")

drama.addEventListener('click', function(){
    movieCode = this.getAttribute("data-code")
    console.log(movieCode)

    movieGenreRequest()

})

// add data-code="27"
var horror = document.querySelector("horror")

horror.addEventListener('click', function(){
    movieCode = this.getAttribute("data-code")
    console.log(movieCode)

    movieGenreRequest()

})

// add data-code="35"
var comedy = document.querySelector("comedy")

comedy.addEventListener('click', function(){
    movieCode = this.getAttribute("data-code")
    console.log(movieCode)

    movieGenreRequest()

})

// add data-code="10749"
var romance = document.querySelector("romance")

romance.addEventListener('click', function(){
    movieCode = this.getAttribute("data-code")
    console.log(movieCode)

    movieGenreRequest()

})

// add data-code="878"
var syfy = document.querySelector("syfy")

syfy.addEventListener('click', function(){
    movieCode = this.getAttribute("data-code")
    console.log(movieCode)

    movieGenreRequest()

})

// add data-code="53"
var thriller = document.querySelector("thriller")

thriller.addEventListener('click', function(){
    movieCode = this.getAttribute("data-code")
    console.log(movieCode)

    movieGenreRequest()

})


movieBtn.addEventListener('click', movieGenreRequest)

});