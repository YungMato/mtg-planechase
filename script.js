// Options

    // Player Life
    var player1Life = 40;
    var player2Life = 40;
    var player3Life = 40;
    var player4Life = 40;

    //MapSize
    var mapSize = 20;

// Variables

var xAkt, yAct;
var moveState = false;

// Fields

    // Card Decks
        var cards = [];
        var activeCards = [];

    // Map
        var cardMap = [];
        var tempMap = [];

$( document ).ready(function() {

    setUpMap();
    initGame();
    setUpButtons();


});

function setUpMap(){

    // set up the Card Decks

    for(var i = 1; i < 151; i++){
       cards.push("/plane/plane (" + i + ").png");
    }
   
   activeCards = cards;

    // mix cards and save it to the active Playcards

    cards = cards.sort((a, b) => 0.5 - Math.random());

   // create a mapSize*mapSize 2D Array as Map
   
   for(var i = 0; i < mapSize; i++){
   
        for(var k = 0; k < mapSize;k++){
        tempMap.push("/plane/default.png");
    }
    
    cardMap.push(tempMap);
    tempMap = [];  
   }
}


function initGame(){

    // find all cardplaces and fill in all the places with default cards
    
    for(var i = 0; i < 9;i++){

        var defaultCard = "<img src='/plane/default.png' class='card'>"

        $(".cardfield:eq(" + i + ")").append(defaultCard);
    }

    // flip the middle card

    $(".cardfield:eq(4)").children(".card").attr("src", activeCards[0]);

    // Save Card to current Gamemap and delete it from activeCards     

    cardMap[10][10] = activeCards.shift(); 
    xAkt = 10;
    yAkt = 10; 

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

    console.log("INIT >>>");
    console.log(cardMap);
}

function setUpButtons(){

    // onClick change life

    $(".chLife").on('click', function (e) {
        changeLife(e); 
    });

    // onClick move to clicked field

    $("#move").on('click', function (e) {
        toggleMove(e);
    });  

    // onClick turn field 180°

    $("#turnField").on('click', function (e) {
        turnField();
    });  

    // onClick Show card in Big

    $(".cardfield").on('click', function (e) {
        if(!moveState){
            toggleHighlightCard(e);        
        }
    });
}

function changeLife(e){

    switch ($(e.target).parent().parent().parent().attr("id")) {

        case "player1":
            player1Life = player1Life + (parseInt($(e.target).parent().attr("id")));
            $("#player1").children("h1").text(player1Life + " HP");
            break;
    
        case "player2":
            player2Life = player2Life + (parseInt($(e.target).parent().attr("id")));
            $("#player2").children("h1").text(player2Life + " HP");
            break;
        
        case "player3":
            player3Life = player3Life + (parseInt($(e.target).parent().attr("id")));
                $("#player3").children("h1").text(player3Life + " HP");    
            break;
        
        case "player4":
            player4Life = player4Life + (parseInt($(e.target).parent().attr("id")));
                $("#player4").children("h1").text(player4Life + " HP");
            break;
        default:
            break;
    }
}

function toggleMove(e){
    
    // check if movestate=false (move button was pressed) and start the move menu

    if(!moveState){
        moveState = true;
        moveMenu(e);   
    } 
}

function moveMenu(e){

    //give all Buttons and Fonts opacity 0.5

    var cardFields = document.getElementsByClassName("cardfield");

    $("button").css("opacity","0.5");
    $("h1").css("opacity","0.5");
    $(".chLife").css("opacity","0.5");

    // border yellow for every possible normal move, red for hellride and opacity 0.5 for the middle card

    for(var i = 0; i < cardFields.length; i++){
        
        if($(cardFields[i]).attr("id") == "left" || $(cardFields[i]).attr("id") == "top" || $(cardFields[i]).attr("id") == "right" || $(cardFields[i]).attr("id") == "bottom"){
            $(cardFields[i]).children("img").css("border","solid yellow 3px");
        } else if($(cardFields[i]).attr("id") == "topleft" && $(cardFields[i]).children("img").attr("src") == "/plane/default.png"|| $(cardFields[i]).attr("id") == "topright" && $(cardFields[i]).children("img").attr("src") == "/plane/default.png" || $(cardFields[i]).attr("id") == "bottomright" && $(cardFields[i]).children("img").attr("src") == "/plane/default.png" || $(cardFields[i]).attr("id") == "bottomleft" && $(cardFields[i]).children("img").attr("src") == "/plane/default.png") {
            $(cardFields[i]).children("img").css("border","solid red 3px");
        } else {
            $(cardFields[i]).css("opacity","0.5");
        }
    
    }

    // if clicked on possible move -> gameMove() and turn opacity back to 1; set moveState false

    $(".move").on('click', function (e) {

        if(moveState){
            gameMove(e);

            $("button").css("opacity","1");
            $("h1").css("opacity","1");
            $(".chLife").css("opacity","1");

            moveState = false;

            $(".cardfield").css("opacity","1");
            $(".cardfield").children("img").css("border","none");
        } 
    });
}

function gameMove(card){

    // shift the field dependent on pressed Card (pressed card gets moved to the middle)

    switch ($(card.target).parent().attr("id")) {

        case "left":
            
            $(".card:eq(0)").attr("src", cardMap[xAkt-2][yAkt-1]);
            $(".card:eq(1)").attr("src", cardMap[xAkt-2][yAkt]);
            $(".card:eq(2)").attr("src", cardMap[xAkt-2][yAkt+1]);
            
            $(".card:eq(3)").attr("src", cardMap[xAkt-1][yAkt-1]);
            $(".card:eq(4)").attr("src", cardMap[xAkt-1][yAkt]); // gameCords (middle card)
            $(".card:eq(5)").attr("src", cardMap[xAkt-1][yAkt+1]);

            $(".card:eq(6)").attr("src", cardMap[xAkt][yAkt-1]);
            $(".card:eq(7)").attr("src", cardMap[xAkt][yAkt]);
            $(".card:eq(8)").attr("src", cardMap[xAkt][yAkt+1]);       

            xAkt--;
            break;
            
        case "top":

            $(".card:eq(0)").attr("src", cardMap[xAkt-1][yAkt-2]);
            $(".card:eq(1)").attr("src", cardMap[xAkt-1][yAkt-1]);
            $(".card:eq(2)").attr("src", cardMap[xAkt-1][yAkt]);
            
            $(".card:eq(3)").attr("src", cardMap[xAkt][yAkt-2]);
            $(".card:eq(4)").attr("src", cardMap[xAkt][yAkt-1]); // gameCords (middle card)
            $(".card:eq(5)").attr("src", cardMap[xAkt][yAkt]);

            $(".card:eq(6)").attr("src", cardMap[xAkt+1][yAkt-2]);
            $(".card:eq(7)").attr("src", cardMap[xAkt+1][yAkt-1]);
            $(".card:eq(8)").attr("src", cardMap[xAkt+1][yAkt]);       

            yAkt--;
            
            break;

        case "bottom":
            
            $(".card:eq(0)").attr("src", cardMap[xAkt-1][yAkt]);
            $(".card:eq(1)").attr("src", cardMap[xAkt-1][yAkt+1]);
            $(".card:eq(2)").attr("src", cardMap[xAkt-1][yAkt+2]);
            
            $(".card:eq(3)").attr("src", cardMap[xAkt][yAkt]);
            $(".card:eq(4)").attr("src", cardMap[xAkt][yAkt+1]); // gameCords (middle card)
            $(".card:eq(5)").attr("src", cardMap[xAkt][yAkt+2]);

            $(".card:eq(6)").attr("src", cardMap[xAkt+1][yAkt]);
            $(".card:eq(7)").attr("src", cardMap[xAkt+1][yAkt+1]);
            $(".card:eq(8)").attr("src", cardMap[xAkt+1][yAkt+2]);       

            yAkt++;

            break;
        
        case "right":
            
            $(".card:eq(0)").attr("src", cardMap[xAkt][yAkt-1]);
            $(".card:eq(1)").attr("src", cardMap[xAkt][yAkt]);
            $(".card:eq(2)").attr("src", cardMap[xAkt][yAkt+1]);
            
            $(".card:eq(3)").attr("src", cardMap[xAkt+1][yAkt-1]);
            $(".card:eq(4)").attr("src", cardMap[xAkt+1][yAkt]); // gameCords (middle card)
            $(".card:eq(5)").attr("src", cardMap[xAkt+1][yAkt+1]);

            $(".card:eq(6)").attr("src", cardMap[xAkt+2][yAkt-1]);
            $(".card:eq(7)").attr("src", cardMap[xAkt+2][yAkt]);
            $(".card:eq(8)").attr("src", cardMap[xAkt+2][yAkt+1]);       

            xAkt++;
            break;
        
        case "topleft":


        if($(card.target).attr("src") == "/plane/default.png"){
            $(".card:eq(0)").attr("src", cardMap[xAkt-2][yAkt-2]);
            $(".card:eq(1)").attr("src", cardMap[xAkt-2][yAkt-1]);
            $(".card:eq(2)").attr("src", cardMap[xAkt-2][yAkt]);
            
            $(".card:eq(3)").attr("src", cardMap[xAkt-1][yAkt-2]);
            $(".card:eq(4)").attr("src", cardMap[xAkt-1][yAkt-1]); // gameCords (middle card)
            $(".card:eq(5)").attr("src", cardMap[xAkt-1][yAkt]);

            $(".card:eq(6)").attr("src", cardMap[xAkt][yAkt-2]);
            $(".card:eq(7)").attr("src", cardMap[xAkt][yAkt-1]);
            $(".card:eq(8)").attr("src", cardMap[xAkt][yAkt]);   
            
            xAkt--;
            yAkt--;


        }

            break;

        case "topright":
            if($(card.target).attr("src") == "/plane/default.png"){
                $(".card:eq(0)").attr("src", cardMap[xAkt][yAkt-2]);
                $(".card:eq(1)").attr("src", cardMap[xAkt][yAkt-1]);
                $(".card:eq(2)").attr("src", cardMap[xAkt][yAkt]);
                
                $(".card:eq(3)").attr("src", cardMap[xAkt+1][yAkt-2]);
                $(".card:eq(4)").attr("src", cardMap[xAkt+1][yAkt-1]); // gameCords (middle card)
                $(".card:eq(5)").attr("src", cardMap[xAkt+1][yAkt]);

                $(".card:eq(6)").attr("src", cardMap[xAkt+2][yAkt-2]);
                $(".card:eq(7)").attr("src", cardMap[xAkt+2][yAkt-1]);
                $(".card:eq(8)").attr("src", cardMap[xAkt+2][yAkt]);   
                
                xAkt++;
                yAkt--;

            }
            break;

        case "bottomleft":
            if($(card.target).attr("src") == "/plane/default.png"){
                $(".card:eq(0)").attr("src", cardMap[xAkt-2][yAkt]);
                $(".card:eq(1)").attr("src", cardMap[xAkt-2][yAkt-1]);
                $(".card:eq(2)").attr("src", cardMap[xAkt-2][yAkt-2]);
                
                $(".card:eq(3)").attr("src", cardMap[xAkt-1][yAkt]);
                $(".card:eq(4)").attr("src", cardMap[xAkt-1][yAkt+1]); // gameCords (middle card)
                $(".card:eq(5)").attr("src", cardMap[xAkt-1][yAkt+2]);

                $(".card:eq(6)").attr("src", cardMap[xAkt][yAkt]);
                $(".card:eq(7)").attr("src", cardMap[xAkt][yAkt+1]);
                $(".card:eq(8)").attr("src", cardMap[xAkt][yAkt+2]);    

                xAkt--;
                yAkt++;

            }
            break;

        case "bottomright":
            if($(card.target).attr("src") == "/plane/default.png"){
                $(".card:eq(0)").attr("src", cardMap[xAkt][yAkt]);
                $(".card:eq(1)").attr("src", cardMap[xAkt][yAkt+1]);
                $(".card:eq(2)").attr("src", cardMap[xAkt][yAkt+2]);
                
                $(".card:eq(3)").attr("src", cardMap[xAkt+1][yAkt]);
                $(".card:eq(4)").attr("src", cardMap[xAkt+1][yAkt+1]); // gameCords (middle card)
                $(".card:eq(5)").attr("src", cardMap[xAkt+1][yAkt+2]);

                $(".card:eq(6)").attr("src", cardMap[xAkt+2][yAkt]);
                $(".card:eq(7)").attr("src", cardMap[xAkt+2][yAkt+1]);
                $(".card:eq(8)").attr("src", cardMap[xAkt+2][yAkt+2]);    

                xAkt++;
                yAkt++;
            }
            break;
    
        default:
            break;
    }

    loadNewCards();
}

function loadNewCards(){
       
    // check if top,right,left,bottom img is default, if true: load new card, delete from activeCards and save it to the Map


    if($(".card:eq(1)").attr("src") == "/plane/default.png"){

            $(".card:eq(1)").attr("src", activeCards[0]);
            cardMap[xAkt-1][yAkt] = activeCards.shift(); 

    }

    if($(".card:eq(3)").attr("src") == "/plane/default.png"){
        $(".card:eq(3)").attr("src", activeCards[0]);
        cardMap[xAkt][yAkt-1] = activeCards.shift(); 
    }

    if($(".card:eq(5)").attr("src") == "/plane/default.png"){
        $(".card:eq(5)").attr("src", activeCards[0]);
        cardMap[xAkt][yAkt+1] = activeCards.shift(); 
    }


    if($(".card:eq(7)").attr("src") == "/plane/default.png"){
        $(".card:eq(7)").attr("src", activeCards[0]);
        cardMap[xAkt+1][yAkt] = activeCards.shift(); 
    }

    // check if middle card img is default

    if($(".card:eq(4)").attr("src") == "/plane/default.png"){
        $(".card:eq(4)").attr("src", activeCards[0]);
        cardMap[xAkt][yAkt] = activeCards.shift(); 
    }
}

function turnField(){

    if($("#fieldwrapper").css("rotate") == "180deg"){
        $("#fieldwrapper").removeClass("flip");
        $("#highlightCard").removeClass("flipH");
        $("#highlightCard").attr("class","transformH")
    } else {
        $("#fieldwrapper").attr("class","flip");
        $("#highlightCard").attr("class","flipH");
    }
}

function toggleHighlightCard(card){

    // openHighlightCard if there ist no on screen

    if($(card.target).attr("src") != "/plane/default.png"){
        
        if($("#highlightCard").length == 0){
            openHighlightCard(card);
        }      
    }
}

function openHighlightCard(card){

    // add highlightcard with onClick remove

    var showSrc = $(card.target).attr("src");
        
    $("body").prepend("<img src='" + showSrc + "' id='highlightCard' class='transformH' onclick='this.remove()'>");
             
    // if the field is turned right now, turn the Highlightcard too

    if($("#fieldwrapper").css("rotate") == "180deg"){
        $("#highlightCard").removeClass("transoformH")
        $("#highlightCard").attr("class","flipH");
    }
}

















        