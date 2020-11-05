// $(document).ready(function () {

var movieBtn = document.getElementById("movie")
var drinkBtn = document.getElementById("drinks")

// var movieCode = "";

// if (movieCode === "") {
//     movieBtn.style.display = "none";
// } else {
//     movieBtn.style.display = "show";
// }

var movieCode = 18
var movieDiv = document.querySelector(".Movie-display")
var APIkey = "b16247e3c7a3350acf15d3581ce27109&language=en-US"

// conditionals, onclicks

// Movie or TV onclick - choose the data fetch
// Genre onclick 
// Movie Button function
function movieGenreRequest(){


var movieApi = 'https://api.themoviedb.org/3/discover/movie?with_genres=' + movieCode + '&api_key=b16247e3c7a3350acf15d3581ce27109&language=en-US';

fetch (movieApi)
.then(function(response){
    return response.json();
}).then (function(results){
    console.log(results)
  // variables containing elements
   var table = document.createElement("table");
    var tablePoster = document.createElement("th")
    var tableTitle = document.createElement("th")
    var tableRow = document.createElement("tr");
    // appending elements to html
    tableRow.appendChild(tablePoster);
    tableRow.appendChild(tableTitle);
    table.appendChild(tableRow);
    movieDiv.appendChild(table);

    for(var i = 10; i < results.results.length; i++) {

        

        var title = results.results[i].original_title;
        console.log(title)
        // table row and data
        var postImg  = results.results[i].poster_path;

        var posterData = document.createElement("td")
        var row = document.createElement("tr")
        var titleData = document.createElement("td")

        var poster = document.createElement("img")
        var posterImgURL = 'https://image.tmdb.org/t/p/w500' + postImg;
       
        var itemDisplay = document.createElement("h3")
        var description = results.results[i].overview;
        var textDesc = document.createElement("p")
        var rating = document.createElement("h4")
        var ratingScore = results.results[i].vote_average;
       
        itemDisplay.textContent = title
       
        textDesc.textContent = description
        
        rating.textContent = "Voter Rating: " + ratingScore + " / 10"

        titleData.appendChild(itemDisplay)
        titleData.appendChild(textDesc)
        titleData.appendChild(rating)
        poster.setAttribute("src", posterImgURL);
        posterData.appendChild(poster)
        row.appendChild(titleData)
        row.appendChild(posterData)
        table.appendChild(row)

       
        // document.querySelector(".Movie-display").appendChild(title)
    }
})
console.log()
}

var action = document.querySelector(".action")

action.addEventListener('click', function(){ 
    movieCode = this.getAttribute("data-code")
    console.log(movieCode);



})

// we need to create buttons of these 
// add data-code="18"
var drama = document.querySelector(".drama")

drama.addEventListener('click', function(){
    movieCode = this.getAttribute("data-code")
    console.log(movieCode)


})

// add data-code="27"
var horror = document.querySelector(".horror")

horror.addEventListener('click', function(){
    movieCode = this.getAttribute("data-code")
    console.log(movieCode)


})

// add data-code="35"
var comedy = document.querySelector(".comedy")

comedy.addEventListener('click', function(){
    movieCode = this.getAttribute("data-code")
    console.log(movieCode)


})

// add data-code="10749"
var romance = document.querySelector(".romance")

romance.addEventListener('click', function(){
    movieCode = this.getAttribute("data-code")
    console.log(movieCode)


})

// add data-code="878"
var syfy = document.querySelector(".syfy")

syfy.addEventListener('click', function(){
    movieCode = this.getAttribute("data-code")
    console.log(movieCode)


})

// add data-code="53"
var thriller = document.querySelector(".thriller")

thriller.addEventListener('click', function(){
    movieCode = this.getAttribute("data-code")
    console.log(movieCode)


})


// random drink pair function

movieBtn.addEventListener('click', movieGenreRequest)


