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

var cardMap = [
    ["/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg"],
    ["/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg"],
    ["/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg"],
    ["/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg"],
    ["/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg"],
    ["/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg"],
    ["/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg"],
    ["/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg"],
    ["/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg"],
    ["/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg"],
    ["/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg"],
    ["/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg"],
    ["/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg"],
    ["/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg"],
    ["/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg"],
    ["/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg"],
    ["/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg"],
    ["/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg"],
    ["/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg"],
    ["/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg","/cards/default.jpg"],
];

var xAkt, yAct;

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

    // Wait a small time and then flip the 4 outer cards and delete them from activeCards
    
    setTimeout(function() {
        $(".cardfield:eq(1)").children(".card").attr("src", activeCards[0]);
        cardMap[9][10] = activeCards.shift(); 

        $(".cardfield:eq(3)").children(".card").attr("src", activeCards[0]);
        cardMap[10][9] = activeCards.shift();

        $(".cardfield:eq(5)").children(".card").attr("src", activeCards[0]);
        cardMap[10][11] = activeCards.shift();

        $(".cardfield:eq(7)").children(".card").attr("src", activeCards[0]);
        cardMap[11][10] = activeCards.shift();        
    }, 2000);

    // flip the middle card

    $(".cardfield:eq(4)").children(".card").attr("src", activeCards[0]);
    
    // Save Card to current Gamemap and delete it from activeCards        
    cardMap[10][10] = activeCards.shift(); 
    xAkt = 10;
    yAkt = 10;



    // Add functions to shift the Map (You can only go top,right,bottom,left)

    // gameMove(this);
    

    // OnClick Show card in Big

    $(".cardfield").on('click', function (e) {
        openHighlightCard(e);        
       });   
}

function openHighlightCard(card){

    if($(card.target).attr("src") != "/cards/default.jpg"){
        
        var showSrc = $(card.target).attr("src");
        
        $("body").append("<div>").attr("id","highlightCard").append($("<img src='" + showSrc + "'>")
            .on("click", function (e) {
                closeHighlightCard(e);
            }
            
        ));     
    }

}


function closeHighlightCard(card){

    console.log($(card.target).parent());
    $(card.target).remove();
}

function gameMove(card){

    switch ($(card).attr("id")) {

        case "top":
            
            $(".card:eq(0)").attr("src", cardMap[xAkt-2][yAkt-1]);
            $(".card:eq(1)").attr("src", cardMap[xAkt-2][yAkt]);
            $(".card:eq(2)").attr("src", cardMap[xAkt-2][yAkt+1]);
            
            $(".card:eq(3)").attr("src", cardMap[xAkt-1][yAkt-1]);
            $(".card:eq(4)").attr("src", cardMap[xAkt-1][yAkt]); // gameCords
            $(".card:eq(5)").attr("src", cardMap[xAkt-1][yAkt+1]);

            $(".card:eq(6)").attr("src", cardMap[xAkt][yAkt-1]);
            $(".card:eq(7)").attr("src", cardMap[xAkt][yAkt]);
            $(".card:eq(8)").attr("src", cardMap[xAkt][yAkt+1]);       

            xAkt = xAkt -1;
            break;
            
        case "left":

        $(".card:eq(0)").attr("src", cardMap[xAkt-1][yAkt-2]);
        $(".card:eq(1)").attr("src", cardMap[xAkt-1][yAkt-1]);
        $(".card:eq(2)").attr("src", cardMap[xAkt-1][yAkt]);
        
        $(".card:eq(3)").attr("src", cardMap[xAkt][yAkt-2]);
        $(".card:eq(4)").attr("src", cardMap[xAkt][yAkt-1]); // gameCords
        $(".card:eq(5)").attr("src", cardMap[xAkt][yAkt]);

        $(".card:eq(6)").attr("src", cardMap[xAkt+1][yAkt-2]);
        $(".card:eq(7)").attr("src", cardMap[xAkt+1][yAkt-1]);
        $(".card:eq(8)").attr("src", cardMap[xAkt+1][yAkt]);       

        yAkt = yAkt -1;
            
            break;

        case "right":
            
        $(".card:eq(0)").attr("src", cardMap[xAkt-1][yAkt]);
        $(".card:eq(1)").attr("src", cardMap[xAkt-1][yAkt+1]);
        $(".card:eq(2)").attr("src", cardMap[xAkt-1][yAkt+2]);
        
        $(".card:eq(3)").attr("src", cardMap[xAkt][yAkt]);
        $(".card:eq(4)").attr("src", cardMap[xAkt][yAkt+1]); // gameCords
        $(".card:eq(5)").attr("src", cardMap[xAkt][yAkt+2]);

        $(".card:eq(6)").attr("src", cardMap[xAkt+1][yAkt]);
        $(".card:eq(7)").attr("src", cardMap[xAkt+1][yAkt+1]);
        $(".card:eq(8)").attr("src", cardMap[xAkt+1][yAkt+2]);       

        yAkt = yAkt +1;

            break;
        
        case "bottom":
            
            $(".card:eq(0)").attr("src", cardMap[xAkt][yAkt-1]);
            $(".card:eq(1)").attr("src", cardMap[xAkt][yAkt]);
            $(".card:eq(2)").attr("src", cardMap[xAkt][yAkt+1]);
            
            $(".card:eq(3)").attr("src", cardMap[xAkt+1][yAkt-1]);
            $(".card:eq(4)").attr("src", cardMap[xAkt+1][yAkt]); // gameCords
            $(".card:eq(5)").attr("src", cardMap[xAkt+1][yAkt+1]);

            $(".card:eq(6)").attr("src", cardMap[xAkt+2][yAkt-1]);
            $(".card:eq(7)").attr("src", cardMap[xAkt+2][yAkt]);
            $(".card:eq(8)").attr("src", cardMap[xAkt+2][yAkt+1]);       

            xAkt = xAkt +1;
            break;
    
        default:
            break;
    }

    loadNewCards();

}

function loadNewCards(){

    setTimeout(function() {
              
    // check if top,right,left,bottom img is default, if true: load new card and delete from active
    if($(".card:eq(1)").attr("src") == "/cards/default.jpg"){

            $(".card:eq(1)").attr("src", activeCards[0]);
            cardMap[xAkt-1][yAkt] = activeCards.shift(); 

    }

    if($(".card:eq(3)").attr("src") == "/cards/default.jpg"){
        $(".card:eq(3)").attr("src", activeCards[0]);
        cardMap[xAkt][yAkt-1] = activeCards.shift(); 
    }

    if($(".card:eq(5)").attr("src") == "/cards/default.jpg"){
        $(".card:eq(5)").attr("src", activeCards[0]);
        cardMap[xAkt][yAkt+1] = activeCards.shift(); 
    }

    if($(".card:eq(7)").attr("src") == "/cards/default.jpg"){
        $(".card:eq(7)").attr("src", activeCards[0]);
        cardMap[xAkt+1][yAkt] = activeCards.shift(); 
    }
}, 2000);

}


        