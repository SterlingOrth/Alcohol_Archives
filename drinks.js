function randomDrinkRequest(){
    var drinkApi = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    
    fetch (drinkApi)
.then(function(response){
    return response.json();
}).then (function(results){
    console.log(results)

    var table = document.createElement("table");
    var tablePoster = document.createElement("th")
    var tableTitle = document.createElement("th")
    var tableRow = document.createElement("tr");
    // appending elements to html
    tableRow.appendChild(tablePoster);
    tableRow.appendChild(tableTitle);
    table.appendChild(tableRow);
    movieDiv.appendChild(table);

})
for(var i = 10; i < 11; i++) {
    var title = results.results[i].original_title;
    console.log(title)
    // table row and data
    var postImg  = results.results[i].poster_path;

    var posterData = document.createElement("td")
    var row = document.createElement("tr")
    var titleData = document.createElement("td")

    var poster = document.createElement("img")
    var posterImgURL = 'https://image.tmdb.org/t/p/w300' + postImg;
   
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

}

};
drinkBtn.addEventListener('click', randomDrinkRequest)
