 var cards = ["/cards/planech_1.jpg",
            "/cards/planech_2.jpg",
            "/cards/planech_3.jpg",
            "/cards/planech_4.jpg",
            "/cards/planech_5.jpg",
            "/cards/planech_6.jpg",
            "/cards/planech_7.jpg",
            "/cards/planech_8.jpg",
            "/cards/planech_9.jpg",
            "/cards/planech_10.jpg",
            "/cards/planech_11.jpg",
            "/cards/planech_12.jpg"];

var activeCards;

var cardMap = new Map;
var gameCords = "00";

$( document ).ready(function() {
    startGame();

    console.log("Script ended.");
});

function startGame(){
    // mix cards and save it to the active Playcards

    cards = cards.sort((a, b) => 0.5 - Math.random());
    activeCards = cards;

    // find all cardplaces and fill in all the places with default cards
    
    for(var i = 0; i < 9;i++){

        var defaultCard = "<img src='/cards/default.jpg' class='card'>"

        $(".cardfield:eq(" + i + ")").append(defaultCard);
    }

    // Wait a small time and then flip the first middle card
    
    setTimeout(function() {
        $(".cardfield:eq(4)").children(".card").attr("src", activeCards[0]);
      }, 2000);

    // Save Card to current Gamemap and delete it from activeCards

    cardMap[gameCords] = activeCards.shift(); 

    // Add functions to shift the Map (You can only go top,right,bottom,left)

    
    $( ".move" ).on( "click", function() {
        gameMove(this);
    } );
}

function gameMove(card){

    switch ($(card).attr("id")) {

        case "top":
            
            break;
            
        case "left":
            
            break;

        case "right":
            
            break;
        
        case "bottom":
            
            break;
    
        default:
            break;
    }


}


        