// This is the ajax page

//variables needed to pull information from api
//i will match 

var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer"
var limits = ''
var types = ''

$.ajax({
    url: queryURL,
    method: "GET"
}).then(
    function (response) {
        console.log(response)
    }
)