
var drinkBtn = document.getElementById("drinks")

var movieDive = document.querySelector(".Movie-display")

function randomDrinkRequest(){
    var drinkApi = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    fetch (drinkApi)
.then(function(response){
    return response.json();
}).then (function(results){
    console.log(results)

    movieDiv.innerHTML = "";

//   variables containing elements
   var table = document.createElement("table");
    var tableDrinkPoster = document.createElement("th")
    var tableDrinkTitle = document.createElement("th")
    var tableRow = document.createElement("tr");
    // appending elements to html
    tableRow.appendChild(tableDrinkPoster);
    tableRow.appendChild(tableDrinkTitle);
    table.appendChild(tableRow);
    movieDiv.appendChild(table);

    
    // for(var i = 1; i < results.drinks.length; i++) {
        
        var drinkTitle = results.drinks[0].strDrink;
        console.log(drinkTitle)
    //     // table row and data
        var drinkImg  = results.drinks[0].strDrinkThumb;
        console.log(drinkImg)

        var posterData = document.createElement("td")
        var row = document.createElement("tr")
        var titleData = document.createElement("td")

        var drinkPoster = document.createElement("img")
        // var posterImgURL = 'https://image.tmdb.org/t/p/w500' + drinkImg;
       
        var itemDisplay = document.createElement("h3")
       
        itemDisplay.textContent = drinkTitle

        titleData.appendChild(itemDisplay)
        // titleData.appendChild(textDesc)
        // titleData.appendChild(rating)
        // drinkPoster.setAttribute("src", drinkImg);
        // drinkPoster.appendChild(drinkImg)
        // posterData.appendChild(drinkImg)
        posterData.appendChild(drinkPoster)
        row.appendChild(titleData)
        row.appendChild(posterData)
        table.appendChild(row)

       
    //     // document.querySelector(".Movie-display").appendChild(title)
    // }
})
}
// // random drink pair function

drinkBtn.addEventListener('click', randomDrinkRequest)
