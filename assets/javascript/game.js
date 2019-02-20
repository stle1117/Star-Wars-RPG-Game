$(document).ready(function(){

    var hanStartingHP = 120
    var yodaStartingHP = 100
    var darthStartingHP = 80
    var bobaStartingHP = 70


    function startGame() {
            $("#hHP").text(hanStartingHP);
            
            $("#yHP").text(yodaStartingHP);
            
            $("#dHP").text(darthStartingHP);
            
            $("#bHP").text(bobaStartingHP);
    }


//contain all options of characters in nested objects
var allCharacters = {
    id1:  {
           img: "assets/images/Han_Solo.jpg",
           health_points: 120,
           attack_loss: 5,
           attack_points: 10,
           attacked_text: "Han Solo lost 5 health points.",
           attack_text: "Han Solo attacked for 10 points.",
           attacker: false
        
        },
    
    
    id2: {
            img: "assets/images/Yoda.jpg",
            health_points: 100,
            attack_loss: 10,
            attack_points: 15,
            attacked_text: "Yoda lost 10 health points.",
            attack_text: "Yoda attacked for 15 points.",
            attacker: false
    
         },
    
    id3: {
            img: "assets/images/Darth_Vader.jpg",
            health_points: 80,
            attack_loss: 20,
            attack_points: 5,
            attacked_text: "Darth Vader lost 5 health points.",
            attack_text: "Darth Vader attacked for 10 points.",
            attacker: false
    
         },
    
    id4: {
            img: "assets/images/Boba_Fett.jpg",
            health_points: 70,
            attack_loss: 15,
            attack_points: 10,
            attacked_text: "Bobba Fett lost 15 health points.",
            attack_text: "Bobba Fett attacked for 10 points.",
            attacker: false
    
         }
        }



    var HanHealthPoints = allCharacters.id1.health_points;
    var YodaHealthPoints = allCharacters.id2.health_points;
    var DarthHealthPoints = allCharacters.id3.health_points;
    var BobaHealthPoints = allCharacters.id4.health_points;
    
    
    function initializeGame() {
        $("#hHP").text(HanHealthPoints);
        
        $("#yHP").text(YodaHealthPoints);
        
        $("#dHP").text(DarthHealthPoints);
        
        $("#bHP").text(BobaHealthPoints);
    }
    initializeGame();

    selectCharacter();

function selectCharacter() {
        $("#hImg").click(function() {
            chosenCharacter = allCharacters.id1;
            
        $("#yImg").click(function() {
            chosenCharacter = allCharacters.id2;
            console.log("hello");

        $("#dImg").click(function() {
            chosenCharacter = allCharacters.id3;
            console.log("hello");

        $("#bImg").click(function() {
            chosenCharacter = allCharacters.id4;
            console.log("hello");


    })


})



/*declare function for attacks:  on clicking the attack button, for the selected character,
if the selected character=true, update healthpoints, write the new healthpoint number to the UI,
and show the attack text for that specific character*/
function attack () {
    ($("#attackButton").click(function() {
            chosenCharacter.characterNew_health_points = (chosenCharacter.health_points - chosenCharacter.attack_loss)
                $(".HP").text(chosenCharacterNew_health_points);
                $("attacktext").text(chosenCharacter.attack_text);
                checkScore();
            })

//declare function for checking the score each time
(function checkScore() {
if (chosenCharacter.characterNew_health_points >= 0) {
    attack()}

if (chosenCharacter.characterNew_health_points > 0 && this.enemyNew_health_points <= 0) {
    win = true;
    winsVsLosses();}

if (chosenCharacter.characterNew_health_points <= 0){
    win = false;
    winsVsLosses();}
}
//if...else for wins vs. losses

(function winsVsLosses() {
if (win === true); {
            $("#resultdiv").text("You WIN!!!!!!")}

if (win === false); {
        $("#resultdiv").text("Sorry, you lost.  Reset and choose another attacker.")}
}))

//reset moveToStart

    (function moveToStart() {
        $("#startButton").click(function() {
            $("#fade").fadeIn(10000);
            initializeGame();
        });

    }


//reset button visible

    ,$("#resetButton").click(function() {
    if (win === true); {
        moveToStart();
    }
}))


//call functions tostart and initialize the game

(startGame())

(initializeGame())

(selectCharacter())

(attack()

))}})})}})