$(document).ready(function () {
    // This is the ajax page
    console.log("loaded ajax file")

    //variables needed to pull information from api
    // var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=2"
    // var searchQueryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=" + searchValue; "&number=2"
    var apiKey = "46a4bca137msh8d35c096a6b18f1p114dfdjsn060845846032"
    var limits = ''
    var types = ''
    // var searchValue = $("input").val()
    // $.ajax({
    //     url: queryURL,
    //     method: "GET",
    //     headers: {
    //         "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    //         "X-RapidAPI-Key": apiKey
    //     }
    // }).then(function (response) {
    //     // console.log(response)
    //     console.log(response.recipes)

    //     //submit button to take the value of the submit
    //     generateRecipes()

    //     function generateRecipes() {
    //         // this function has to be used to generate the recipes on the page
    //         for (var i = 0; i < response.recipes.length; i++) {
    //             console.log(response.recipes[i])
    //             var card = $("<div>")
    //             var cardBody = $("<div>")
    //             var cardTitle = $("<h5>")
    //             var cardServings = $("<p>")
    //             var cardCookingMinutes = $("<p>")
    //             var cardImage = $("<img>")
    //             var cardButton = $("<button>")
    //             var cardTimeIcon = $("<i>")
    //             var cardServingsIcon = $("<i>")

    //             // adding classes to match bootstrap
    //             card.addClass("card")
    //             cardBody.addClass("card-body")
    //             cardImage.addClass("card-img-top")
    //             cardTitle.addClass("card-title")
    //             cardServings.addClass("card-text servings")
    //             cardCookingMinutes.addClass("card-text cooking-time")
    //             cardButton.addClass("expand")
    //             cardTimeIcon.addClass("fas fa-clock")
    //             cardServingsIcon.addClass("fas fa-utensils")

    //             // attr section
    //             card.css("width", "18rem")
    //             card.attr("recipe-id", response.recipes[i].id)
    //             card.attr("array-num", [i])
    //             cardImage.attr("src", response.recipes[i].image)
    //             cardTitle.attr("title", response.recipes[i].title)

    //             //display text
    //             cardTitle.text(response.recipes[i].title)
    //             cardServings.text(" Serving Size: " + response.recipes[i].servings)
    //             cardCookingMinutes.text(" Cooking Time: " + response.recipes[i].readyInMinutes + " min")
    //             cardButton.text("More")

    //             // append into card structure
    //             $(".recipes").append(card)
    //             card.append(cardImage)
    //             card.append(cardBody)
    //             card.append(cardButton)
    //             cardBody.append(cardTitle)
    //             cardBody.append(cardServings)
    //             cardServings.prepend(cardServingsIcon)
    //             cardBody.append(cardCookingMinutes)
    //             cardCookingMinutes.prepend(cardTimeIcon)
    //         }
    //     }
    // });


    $("#submit-value").on("click", function (event) {
        event.preventDefault();
        var searchValue = $("#input").val().trim();
        var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=" + searchValue + "&number=2"
        console.log(searchValue)

        $.ajax({
            url: queryURL,
            method: "GET",
            headers: {
                "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "X-RapidAPI-Key": apiKey
            }
        }).then(function (response) {
            console.log(response)

            for (var i = 0; i < response.results.length; i++) {
                console.log(response.results[i])
                var card = $("<div>")
                var cardBody = $("<div>")
                var cardTitle = $("<h5>")
                var cardServings = $("<p>")
                var cardCookingMinutes = $("<p>")
                var cardImage = $("<img>")
                var cardButton = $("<button>")
                var cardTimeIcon = $("<i>")
                var cardServingsIcon = $("<i>")

                // adding classes to match bootstrap
                card.addClass("card")
                cardBody.addClass("card-body")
                cardImage.addClass("card-img-top")
                cardTitle.addClass("card-title")
                cardServings.addClass("card-text servings")
                cardCookingMinutes.addClass("card-text cooking-time")
                cardButton.addClass("expand")
                cardTimeIcon.addClass("fas fa-clock")
                cardServingsIcon.addClass("fas fa-utensils")

                // attr section
                card.css("width", "18rem")
                card.attr("recipe-id", response.results[i].id)
                card.attr("array-num", [i])
                cardImage.attr("src", "https://spoonacular.com/recipeImages/" + response.results[i].image)
                cardTitle.attr("title", response.results[i].title)
                cardButton.attr("data-toggle", "modal")
                cardButton.attr("data-target", "#exampleModalCenter")

                //display text
                cardTitle.text(response.results[i].title)
                cardServings.text(" Serving Size: " + response.results[i].servings)
                cardCookingMinutes.text(" Cooking Time: " + response.results[i].readyInMinutes + " min")
                cardButton.text("More")

                // append into card structure
                $(".recipes").append(card)
                card.append(cardImage)
                card.append(cardBody)
                card.append(cardButton)
                cardBody.append(cardTitle)
                cardBody.append(cardServings)
                cardServings.prepend(cardServingsIcon)
                cardBody.append(cardCookingMinutes)
                cardCookingMinutes.prepend(cardTimeIcon)
            }

            //on click function that calls that infomation on the page
            $(".expand").on("click", function () {
                var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" + $(card).attr("recipe-id") + "/information"
                var recipeId = $(card).attr("recipe-id")
                var title = $(card).find(".card-title").text()
                var ingredients = $(card).find("recipe-id").val()
                var servingSize = $(card).find(".servings").text()
                var cookingTime = $(card).find(".cooking-time").text()
                console.log($(this).find(".card-title").text())
                console.log(recipeId)
                console.log()


                $("#recipe-title-modal").text(title)
                $("#servings-size-modal").text(servingSize)
                $("#cooking-time-modal").text(cookingTime)

                $.ajax({
                    url: queryURL,
                    method: "GET",
                    headers: {
                        "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                        "X-RapidAPI-Key": apiKey
                    }
                }).then(function (response) {
                    console.log(response)
                    console.log(response.extendedIngredients)
                    console.log(response.analyzedInstruction)


                    for (var i = 0; i < response.extendedIngredients.length; i++) {
                        console.log(response.extendedIngredients[i].name)
                        var ingredientsItem = $("<div>");
                        ingredientsItem.attr("ingredient-name", response.extendedIngredients[i].name)
                        $("#ingredients-box-modal").append(response.extendedIngredients[i].name)
                    }

                    for (var i = 0; i < response.analyzedInstructions.length; i++) {
                        for (var j = 0; j < response.analyzedInstructions[i].steps.length; j++) {
                            console.log(response.analyzedInstructions[i].steps[j].step)
                            $("#instructions-box-modal").append(response.analyzedInstructions[i].steps[j].step)
                        }
                    }
                })
            });
        })
    })
});



