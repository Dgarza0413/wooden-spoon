var queryURL = "https://api.unsplash.com/photos/?client_id=adf1276beb83d0d9e4d4e7d77a4f5853d5864ac74debcbb7c8220c84bea6f7a5";
function addPicture(response, i){
    var pictureLink = response[i].urls.regular;
    var user = response[i].user.first_name;
    var description = response[i].alt_description;
    // var img = new Image();
    var recipes = $(".recipes")
    var flipCard = $(`
        <div class="flip-card card">
        </div>
    `);
    recipes.append(flipCard);
    flipCard.append(`
        <div class="flip-card-inner">
            <div class="flip-card-front">
            </div>
            <div class="flip-card-back">
                <h1>' + user + '</h1>
                <p>' + description + '</p>
            </div>
        </div>
    `);

    
    var img = new Image();
    img.onload = function(){
        // measure the height of the load
        // and adapt the 
        console.log(img.height)
        flipCard.css("height", img.height + "px")
    }
    img.width = 300;
    img.src = pictureLink


    var flipCardFront = flipCard.find(".flip-card-front")
    // add the class whatever
    flipCardFront.append($(img));
    


    // img.onload = function () {
    //     var height = pictureLink.height;
    //     var width = pictureLink.width;            
    // }
    // img.src = url;
    // $(".recipes").addClass("newCard")
    // $(".newCard").append('<div class="card masonry" style="width: 18rem;"><img src="' + pictureLink + '"class="card-img-top image-food" alt="food"><div class="card-body"><h5 class="card-title">' + user + '</h5><p class="card-text">' + description + '</p></div><button class="expand">More</button></div>');
}

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    for (var i = 0; i < 10; i++) {
        addPicture(response, i);
    }
        
})

$(window).on("load", function () {
    $(".recipes").masonry({
        columnWidth: ".recipes",
        itemSelector: ".recipes",

    });
})
