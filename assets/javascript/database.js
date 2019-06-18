src = "https://www.gstatic.com/firebasejs/6.1.1/firebase-app.js"

var firebaseConfig = {
    apiKey: "AIzaSyAQeEaiWH5dLtHD3YVTdGWZOPwYRULkP2c",
    authDomain: "woodenspoon-ebc9d.firebaseapp.com",
    databaseURL: "https://woodenspoon-ebc9d.firebaseio.com",
    projectId: "woodenspoon-ebc9d",
    storageBucket: "woodenspoon-ebc9d.appspot.com",
    messagingSenderId: "172782486684",
    appId: "1:172782486684:web:5a76102130993a8e"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var clickCounter = 0;

$(".click").on("click", function () {
    clickCounter++;
    database.ref("clickcount").set({
        clickCount: clickCounter
    })
    console.log(clickCounter);
})

database.ref("clickcount").on("value", function (snapshot) {
    clickCounter = snapshot.val().clickCount;
    $(".counter").text(clickCounter);
})

