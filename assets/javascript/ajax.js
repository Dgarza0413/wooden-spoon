// This is the ajax page
console.log("loaded ajax file")

//variables needed to pull information from api
//i will match 

// var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer"
// var queryURL = " https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1"
var apiKey = "46a4bca137msh8d35c096a6b18f1p114dfdjsn060845846032"
var limits = ''
var types = ''

$.ajax({
    url: queryURL,
    method: "GET",
    headers: {
        "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "X-RapidAPI-Key": apiKey
    }
}).then(function (response) {
    console.log(response)
    console.log(response.recipes)
    console.log(response.recipes[0].title)

    // function generateRecipes (){}
    // this function has to be used to generate the recipes on the page
    for (var i = 0; i < response.recipes.length; i++) {
        console.log(response.recipes[i])
        var card = $("<div>")
        var cardBody = $("<div>")
        var cardTitle = $("<div>")
        var cardServings = $("<div>")
        var cardCookingMinutes = $("<div>")
        var cardImage = $("<img>")

        // adding classes to match bootstrap
        card.addClass("card")
        cardBody.addClass("card-body")
        cardImage.addClass("card-img-top")
        cardTitle.addClass("card-title")
        cardServings.addClass("card-text")
        cardCookingMinutes.addClass("card-text")

        // attr section
        cardImage.attr("width", "18rem")
        cardImage.attr("src", response.recipes[i].image)

        //display text
        cardTitle.text(response.recipes[i].title)
        cardServings.text(response.recipes[i].servings)
        cardCookingMinutes.text(response.recipes[i].readyInMinutes)

        // append into card structure
        $(".card-container").append(card)
        card.append(cardImage)
        card.append(cardBody)
        cardBody.append(cardTitle)
        cardBody.append(cardServings)
        cardBody.append(cardCookingMinutes)




        // $("#title-card").text(response.title)
        // $("#servings-card").text(response.servings)
        // $("#prep-time-card").text(response.cookingMinutes)
        // $("#diet-type-card").text(response.diets[0])
        // $("#recipe-img-card").text(response.images)
    }

    // function generateSingleRecipe (){}
    // this function has to be used when a reciep is clicked on
}
)