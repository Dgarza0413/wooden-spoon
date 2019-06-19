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

// database.ref().on("value", function (snapshot) {
//     console.log(snapshot)
//     likeButton = snapshot.val().likeButton
//     recipeId = snapshot.val().recipeId
// })

$(document).on("click", ".fa-heart", function () {
    var recipeId = $(this).attr("recipe-id")

    event.preventDefault();
    $(this).toggleClass("fas fa-heart", "far fa-heart")
    $(this).addClass("fa-heart")

    database.ref().on("value", function (snapshot) {
        // console.log(snapshot.val())
    })
    if (likeButton === false) {
        likeButton = true;
        database.ref().push({
            recipeId: recipeId,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
    } else if (likeButton === true) {
        likeButton = false;
        database.ref(recipeId).remove()
    }
    console.log(favorite);
    console.log(likeButton);
    console.log(recipeId)

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