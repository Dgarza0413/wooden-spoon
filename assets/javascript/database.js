// $(dcoument).ready(function () {
var firebaseConfig = {
    apiKey: "AIzaSyAnXLn1HZYXp4nKnRRxuGiGYGx4vJx6FsA",
    authDomain: "wooden-spoon-b3608.firebaseapp.com",
    databaseURL: "https://wooden-spoon-b3608.firebaseio.com",
    projectId: "wooden-spoon-b3608",
    storageBucket: "",
    messagingSenderId: "531404044060",
    appId: "1:531404044060:web:2912dde85afc67ed"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

var favorite = false;
var string = "data"

//icon value
var likeButton = false

$(document).on("click", ".fa-heart", function () {
    var recipeId = $(this).attr("recipe-id")

    //attr assignment for a boolean of that recipe

    event.preventDefault();
    $(this).toggleClass("fas fa-heart", "far fa-heart")
    $(this).addClass("fa-heart")

    database.ref().on("value", function (snapshot) {
        console.log(snapshot.val())
        console.log(snapshot.val().recipeId)
        var rf = snapshot.val();
    })
    if (likeButton === false) {
        likeButton = true;
        database.ref().push({
            recipeId: recipeId,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
    } else if (likeButton === true) {
        console.log(this)
        var rootNode = database.ref().key
        console.log(rootNode)
        database.ref().remove()
        likeButton = false;
    }
    console.log(favorite);
    console.log(likeButton);
    console.log(recipeId)
    // })
})

database.ref().on("child_added", function (snapshot) {
    var apiKey = "46a4bca137msh8d35c096a6b18f1p114dfdjsn060845846032"
    var sv = snapshot.val();
    var card = this
    var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" + sv.recipeId + "/information"
    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {
            "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "X-RapidAPI-Key": apiKey
        }
    }).then(function (response) {
        console.log(response)
        var card = $("<div>")
        var cardBody = $("<div>")
        var cardTitle = $("<h5>")
        var cardServings = $("<p>")
        var cardCookingMinutes = $("<p>")
        var cardImage = $("<img>")
        var cardImageContainer = $("<div>")
        var cardButton = $("<button>")
        var cardTimeIcon = $("<i>")
        var cardServingsIcon = $("<i>")
        // var cardHeartIcon = $("<i>")

        // adding classes to match bootstrap
        card.addClass("card")
        cardBody.addClass("card-body")
        cardImage.addClass("card-img-top")
        cardImageContainer.addClass("img-container")
        cardTitle.addClass("card-title")
        cardServings.addClass("card-text servings")
        cardCookingMinutes.addClass("card-text cooking-time")
        cardButton.addClass("expand")

        // Icons from font awesome
        cardTimeIcon.addClass("fas fa-clock")
        cardServingsIcon.addClass("fas fa-utensils")
        // cardHeartIcon.addClass("far fa-heart fa-2x")

        // attr section
        card.css("width", "18rem")
        card.attr("recipe-id", response.title)
        // card.attr("array-num", [i])
        cardImage.attr("src", response.image)
        // cardTitle.attr("title", response.results[i].title)
        // cardButton.attr("data-toggle", "modal")
        cardButton.attr("recipe-id", response.id)
        // cardButton.attr("data-target", "#exampleModalCenter")
        // cardHeartIcon.attr("recipe-id", response.results[i].id)

        //display text
        cardTitle.text(response.title)
        cardServings.text(" Serving Size: " + response.servings)
        cardCookingMinutes.text(" Cooking Time: " + response.readyInMinutes + " min")
        cardButton.text("More")

        // append into card structure
        $(".owl-stage").append(card)
        $(".owl-stage").css("width", "max-content")
        // card.append(cardImage)
        card.append(cardImageContainer)
        card.append(cardBody)
        card.append(cardButton)
        cardImageContainer.append(cardImage)
        // cardImageContainer.append(cardHeartIcon)
        cardBody.append(cardTitle)
        cardBody.append(cardServings)
        cardServings.prepend(cardServingsIcon)
        cardBody.append(cardCookingMinutes)
        cardCookingMinutes.prepend(cardTimeIcon)

        // $recipies.append(card).masonry('appended', card);
    })
})
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        // margin: 10,
        // nav: true,
        // Number: 4,
        // responsive: {
        //     0: {
        //         items: 1
        //     },
        //     600: {
        //         items: 3
        //     },
        //     1000: {
        //         items: 5
        //     }
        // }
    })
})




$(".like-button").on("click", function (event) {
    event.preventDefault();
    database.ref("/data").once("value", function (snapshot) {
        console.log(snapshot.val())
    })
    if (favorite === false) {
        favorite = true;
        database.ref("/" + string).set({
            stringName: string
        });
    } else {
        favorite = false;
        database.ref("/data").remove()
    }
    database.ref("/clickCount").set({
        clickCount: favorite
    })
    console.log(favorite);
})


// var clickCounter = 0;

// $(".click").on("click", function () {
//     clickCounter++;
//     database.ref("clickcount").set({
//         clickCount: clickCounter
//     })
//     console.log(clickCounter);
// })

// database.ref("clickcount").on("value", function (snapshot) {
//     clickCounter = snapshot.val().clickCount;
//     $(".counter").text(clickCounter);
// })