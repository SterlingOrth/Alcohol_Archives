
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

        var alcoholOrNon = results.drinks[0].strAlcoholic;
        var drinkImg  = results.drinks[0].strDrinkThumb;
        var instructions = results.drinks[0].strInstructions;
        var drinkGlass = results.drinks[0].strGlass;

        console.log(drinkImg)

        var posterData = document.createElement("td")
        var row = document.createElement("tr")
        var titleData = document.createElement("td")

        var drinkPoster = document.createElement("img")
        drinkPoster.style.height="auto"
        drinkPoster.style.width="50%"
        drinkPoster.style.float="right"
       
        var itemDisplay = document.createElement("h3")
        itemDisplay.style.textAlign = "center"
        itemDisplay.style.marginLeft = "20vw"
        itemDisplay.textContent = drinkTitle

        var alcoholDesc = document.createElement("p")
        alcoholDesc.textContent = alcoholOrNon
        alcoholDesc.style.textAlign = "center"
        alcoholDesc.style.marginLeft = "20vw"

        var drinkGlassDisplay = document.createElement("p")
        drinkGlassDisplay.textContent = "Best Served in: " + drinkGlass
        drinkGlassDisplay.style.textAlign = "center"
        drinkGlassDisplay.style.marginLeft = "20vw"


        var instructionsDisplay = document.createElement ("h4")
        instructionsDisplay.textContent = instructions
        instructionsDisplay.style.textAlign = "center"
        instructionsDisplay.style.marginLeft = "20vw"


        titleData.appendChild(itemDisplay)
        titleData.appendChild(alcoholDesc)
        titleData.appendChild(drinkGlassDisplay)
        titleData.appendChild(instructionsDisplay)
        // titleData.appendChild(textDesc)
        // titleData.appendChild(rating)
        drinkPoster.setAttribute("src", drinkImg);
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
