
var drinkBtn = document.getElementById("drinks")
var movieDive = document.querySelector(".Movie-display")

// FUNCTION to run the entire drink on click 
function randomDrinkRequest(){
    var drinkApi = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    fetch (drinkApi)
.then(function(response){
    return response.json();
}).then (function(results){
    console.log(results)

// CLEARS Div on every load
    movieDiv.innerHTML = "";

// DYNAMICALLY create table elements 
    var table = document.createElement("table");
    table.style.backgroundColor = ""
    var tableDrinkPoster = document.createElement("th")
    var tableDrinkTitle = document.createElement("th")
    var tableRow = document.createElement("tr");

// APPEND table
    tableRow.appendChild(tableDrinkPoster);
    tableRow.appendChild(tableDrinkTitle);
    table.appendChild(tableRow);
    movieDiv.appendChild(table);

// DATA/RESULTS pulled from API object        
    var drinkTitle = results.drinks[0].strDrink;
    var alcoholOrNon = results.drinks[0].strAlcoholic;
    var drinkImg  = results.drinks[0].strDrinkThumb;
    var instructions = results.drinks[0].strInstructions;
    var drinkGlass = results.drinks[0].strGlass;

// DYNAMICALLY creating elements
    var posterData = document.createElement("td")
    var row = document.createElement("tr")
    var titleData = document.createElement("td")
    var drinkPoster = document.createElement("img")
    var itemDisplay = document.createElement("h3")
    var alcoholDesc = document.createElement("p")
    var drinkGlassDisplay = document.createElement("p")
    var instructionsDisplay = document.createElement ("h4")

// DYNAMICALLY set styling/attributes to elements
    drinkPoster.style.height="auto"
    drinkPoster.style.width="50%"
    drinkPoster.style.float="right"
    itemDisplay.style.textAlign = "center"
    itemDisplay.style.marginLeft = "20vw"
    itemDisplay.textContent = drinkTitle
    alcoholDesc.textContent = alcoholOrNon
    alcoholDesc.style.textAlign = "center"
    alcoholDesc.style.marginLeft = "20vw"
    drinkGlassDisplay.textContent = "Best Served in: " + drinkGlass
    drinkGlassDisplay.style.textAlign = "center"
    drinkGlassDisplay.style.marginLeft = "20vw"
    instructionsDisplay.textContent = instructions
    instructionsDisplay.style.textAlign = "center"
    instructionsDisplay.style.marginLeft = "20vw"
    drinkPoster.setAttribute("src", drinkImg);

// APPEND all items to dynamically created elements
    titleData.appendChild(itemDisplay)
    titleData.appendChild(alcoholDesc)
    titleData.appendChild(drinkGlassDisplay)
    titleData.appendChild(instructionsDisplay)
    posterData.appendChild(drinkPoster)
    row.appendChild(titleData)
    row.appendChild(posterData)
    table.appendChild(row)
})
}

// MAIN EVENT LISTENER to run the DRINK FUNCTION
drinkBtn.addEventListener('click', randomDrinkRequest)
