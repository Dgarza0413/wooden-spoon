// This is the ajax page
console.log("loaded ajax file")

//variables needed to pull information from api
//i will match 

// var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer"
var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information"
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
    console.log(response.title)
    console.log(response.servings)
    console.log(response.instructions)
    console.log(response.image)
    // id will be used to call this particular recipe item
    console.log(response.id)

    // function generateRecipes (){}
    // this function has to be used to generate the recipes on the page
    for (var i = 0; i < response.length; i++) {
        console.log(response)
        $("#title-card").text(response.title)
        $("#servings-card").text(response.servings)
        $("#prep-time-card").text(response.cookingMinutes)
        $("#diet-type-card").text(response.diets[0])
        $("#recipe-img-card").text(response.images)
    }

    // function generateSingleRecipe (){}
    // this function has to be used when a reciep is clicked on
}
)