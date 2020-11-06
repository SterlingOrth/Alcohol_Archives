var movieBtn = document.getElementById("movie")
var movieCode = 18
var movieDiv = document.querySelector(".Movie-display")
var APIkey = "b16247e3c7a3350acf15d3581ce27109&language=en-US"


// FUNCTION to run the entire movie on click 

function movieGenreRequest(){

// REQUESTED API + The GENRE ID provided by MOVIE-DB
var movieApi = 'https://api.themoviedb.org/3/discover/movie?with_genres=' + movieCode + '&api_key=b16247e3c7a3350acf15d3581ce27109&language=en-US';

fetch (movieApi)
.then(function(response){
    return response.json();
}).then (function(results){
    console.log(results)

    movieDiv.innerHTML = "";

// DYNAMICALLY create table elements used to display
   var table = document.createElement("table");
    var tablePoster = document.createElement("th")
    var tableTitle = document.createElement("th")
    var tableRow = document.createElement("tr");

 // APPEND table
    tableRow.appendChild(tablePoster);
    tableRow.appendChild(tableTitle);
    table.appendChild(tableRow);
    movieDiv.appendChild(table);


// FOR LOOP dynamically creates the DYNAMIC elements and append movie data

    for(var i = 10; i < results.results.length; i++) {

// DATA/RESULTS pulled from API object
        var title = results.results[i].original_title;
        var postImg  = results.results[i].poster_path;
        var description = results.results[i].overview;
        var ratingScore = results.results[i].vote_average;

// DYNAMICALLY creating elements 
        var posterData = document.createElement("td")
        var row = document.createElement("tr")
        var titleData = document.createElement("td")
        var likeBtn = document.createElement("button")
        var poster = document.createElement("img")
        var itemDisplay = document.createElement("h3")
        var textDesc = document.createElement("p")
        var rating = document.createElement("h4")

        var posterImgURL = 'https://image.tmdb.org/t/p/w500' + postImg;
       
       
// SET text/attributes to created elements
        likeBtn.textContent = "Favorite"
        likeBtn.id = "favoriteBtn"
        likeBtn.setAttribute("data-title", title);
        poster.setAttribute("src", posterImgURL);

        itemDisplay.textContent = title
        textDesc.textContent = description
        rating.textContent = "Voter Rating: " + ratingScore + " / 10"

// APPEND all items to dynamically created elements
        titleData.appendChild(itemDisplay)
        titleData.appendChild(textDesc)
        titleData.appendChild(rating)
        posterData.appendChild(poster)
        titleData.appendChild(likeBtn)
        row.appendChild(titleData)
        row.appendChild(posterData)
        table.appendChild(row)

       
        // document.querySelector(".Movie-display").appendChild(title)
    }
    var favBtn = document.getElementById("favoriteBtn")
    
    var favorites = JSON.parse(localStorage.getItem("favoritesList")) || []
    
    favBtn.addEventListener('click',function() {
    console.log("clicked")
    
    var favoritesClicked = this.getAttribute("data-title")
    favorites.push(favoritesClicked)
    
    localStorage.setItem("favoritesList", JSON.stringify(favorites))
    
    console.log(favoritesClicked)
})
})
}

var action = document.querySelector(".action")
action.addEventListener('click', function(){ 
    movieCode = this.getAttribute("data-code")
    console.log(movieCode);
})

var drama = document.querySelector(".drama")
drama.addEventListener('click', function(){
    movieCode = this.getAttribute("data-code")
    console.log(movieCode)

})

var horror = document.querySelector(".horror")
horror.addEventListener('click', function(){
    movieCode = this.getAttribute("data-code")
    console.log(movieCode)
})

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


