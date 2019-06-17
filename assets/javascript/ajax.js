// This is the ajax page
console.log("loaded ajax file")

//variables needed to pull information from api
//i will match 

// var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer"
var queryURL = " https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1"
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
        var cardTitle = $("<h5>")
        var cardServings = $("<p>")
        var cardCookingMinutes = $("<p>")
        var cardImage = $("<img>")
        var cardButton = $("<button>")

        // adding classes to match bootstrap
        card.addClass("card")
        cardBody.addClass("card-body")
        cardImage.addClass("card-img-top")
        cardTitle.addClass("card-title")
        cardServings.addClass("card-text")
        cardCookingMinutes.addClass("card-text")
        cardButton.addClass("click")

        // attr section
        card.css("width", "18rem")
        cardImage.attr("src", response.recipes[i].image)

        //display text
        cardTitle.text("Title: " + response.recipes[i].title)
        cardServings.text("Serving Size: " + response.recipes[i].servings)
        cardCookingMinutes.text("Cooking Time: " + response.recipes[i].readyInMinutes)

        // append into card structure
        $(".card-container").append(card)
        card.append(cardImage)
        card.append(cardBody)
        card.append(cardButton)
        cardBody.append(cardTitle)
        cardBody.append(cardServings)
        cardBody.append(cardCookingMinutes)
    }

    //on click function that calls that infomation on the page
    $(".card-container").on("click", function () {
        //toggle the display of the model
        $(".modal").show()
    })
}
)


var queryURL = "https://api.unsplash.com/photos/?client_id=adf1276beb83d0d9e4d4e7d77a4f5853d5864ac74debcbb7c8220c84bea6f7a5";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    for (var i = 0; i < 10; i++) {
        var pictureLink = response[i].urls.regular;
        var user = response[i].user.first_name;
        var description = response[i].alt_description;
        // var img = new Image();
        $(".recipes").addClass("newCard");
        $(".newCard").append('<div class="flip-card card"><div class="flip-card-inner"><div class="flip-card-front"><img src="' + pictureLink + '"alt="Avatar" style="width:300px;height:auto;"></div><div class="flip-card-back"><h1>' + user + '</h1><p>' + description + '</p></div></div></div>');



        // img.onload = function () {
        //     var height = pictureLink.height;
        //     var width = pictureLink.width;            
        // }
        // img.src = url;
        // $(".recipes").addClass("newCard")
        // $(".newCard").append('<div class="card masonry" style="width: 18rem;"><img src="' + pictureLink + '"class="card-img-top image-food" alt="food"><div class="card-body"><h5 class="card-title">' + user + '</h5><p class="card-text">' + description + '</p></div><button class="expand">More</button></div>');

    }
})

$(window).on("load", function () {
    $(".recipes").masonry({
        columnWidth: ".recipes",
        itemSelector: ".recipes",

    });
})