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
