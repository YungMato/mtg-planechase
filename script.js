 var cards = [];

 for(var i = 1; i < 151; i++){
    cards.push("/plane/plane (" + i + ").png");
 }

var activeCards = cards;

var cardMap = [
    ["/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png"],
    ["/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png"],
    ["/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png"],
    ["/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png"],
    ["/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png"],
    ["/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png"],
    ["/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png"],
    ["/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png"],
    ["/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png"],
    ["/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png"],
    ["/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png"],
    ["/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png"],
    ["/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png"],
    ["/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png"],
    ["/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png"],
    ["/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png"],
    ["/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png"],
    ["/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png"],
    ["/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png"],
    ["/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png","/plane/default.png"],
];

var xAkt, yAct, player1Life, player2Life, player3Life, player4Life;

var moveState = false;

$( document ).ready(function() {
    startGame();


});

function startGame(){
    // setup Players lifes

    player1Life = 40;
    player2Life = 40;
    player3Life = 40;
    player4Life = 40;

    // mix cards and save it to the active Playcards

    cards = cards.sort((a, b) => 0.5 - Math.random());

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


    
 

    // OnClick Show card in Big

    $(".cardfield").on('click', function (e) {
        if(!moveState){
            toggleHighlightCard(e);        
        }
       });   

    

    setUpButtons();
}

function toggleHighlightCard(card){


    if($(card.target).attr("src") != "/plane/default.png"){
        
        if($("#highlightCard").length == 0){
            openHighlightCard(card);
        }
         
    }

}


function closeHighlightCard(card){

    $("#highlightCard").remove();
}

function openHighlightCard(card){

    var showSrc = $(card.target).attr("src");
        
    $("body").prepend("<img src='" + showSrc + "' id='highlightCard' class='transformH' onclick='this.remove()'>");
               
    
    if($("#fieldwrapper").css("rotate") == "180deg"){
        $("#highlightCard").removeClass("transoformH")
        $("#highlightCard").attr("class","flipH");
    }
}

function gameMove(card){


    switch ($(card.target).parent().attr("id")) {

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
}, 2000);

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



function moveMenu(e){

    // border yellow for every possible move and opacity 0.5 for every other

    var cardFields = document.getElementsByClassName("cardfield");

    $("button").css("opacity","0.5");
    $("h1").css("opacity","0.5");
    $(".chLife").css("opacity","0.5");

    for(var i = 0; i < cardFields.length; i++){
        
        if($(cardFields[i]).attr("class") == "cardfield"){
            $(cardFields[i]).css("opacity","0.5");
        } else {
            $(cardFields[i]).children("img").css("border","solid yellow 1px");
        }
    
    }

    // if clicked on possible move -> gamemove and turn opacity back to 1

    $(".move").on('click', function (e) {

        if(moveState){
            gameMove(e);

            $("button").css("opacity","1");
            $("h1").css("opacity","1");
            $(".chLife").css("opacity","1");

            moveState = false;
            for(var i = 0; i < cardFields.length; i++){
                
                if($(cardFields[i]).attr("class") == "cardfield"){
                    $(cardFields[i]).css("opacity","1");
                } else {
                    $(cardFields[i]).children("img").css("border","none");
                }
                    
            } 
        } 

    });
    

}

function setUpButtons(){

    $(".chLife").on('click', function (e) {
        changeLife(e); 
    });

    $("#move").on('click', function (e) {
        toggleMove(e);
    });  

    $("#turnField").on('click', function (e) {
        turnField();
    });  

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

function toggleMove(e){

        var cardFields = document.getElementsByClassName("cardfield");

        if(!moveState){
            moveState = true;
            moveMenu(e); 
            
            
        } 
}


        