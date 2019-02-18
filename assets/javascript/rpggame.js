$( document ).ready(function() 

//contain all options of characters in an object - connect the DOM element with each nested object
{var allCharacters = {
    han = {
       img: "assets/images/Han_Solo.jpg",
       health_points: 120,
       attack_loss: 5,
       attack_points: 10,
       attacked_text: "Han Solo lost 5 health points.",
       attack_text: "Han Solo attacked for 10 points."

    },

    yoda = {
        img: "assets/images/Yoda.jpg",
        health_points: 100,
        attack_loss: 10,
        attack_points: 15,
        attacked_text: "Yoda lost 10 health points.",
        attack_text: "Yoda attacked for 15 points.",

     },

     darthV = {
        img: "assets/images/Darth_Vader.jpg",
        health_points: 80,
        attack_loss: 20,
        attack_points: 5,
        attacked_text: "Darth Vader lost 5 health points.",
        attack_text: "Darth Vader attacked for 10 points.",

     },

     bobbaF = {
        img: "assets/images/Boba Fett.jpg",
        health_points: 70,
        attack_loss: 15,
        attack_points: 10,
        attacked_text: "Bobba Fett lost 15 health points.",
        attack_text: "Bobba Fett attacked for 10 points."

     },

}

//declare a variable to collect all characters into one variable
var allCharacters = han, yoda, darthV, bobbaF
var character = allCharacters

//click events for each image div for the user to select their attack player
//changes selected to true and moves player to attack player position
    function initializeGame () {

    $("#hImg").click(function(selected) {
        selected = true;
        $(function() {
            $("#hImg").css("margin-left");
            $("#hImg").css("margin-left: 150px");
        })
    }
        );

    $("#yImg").click(function(selected) {
        selected = true;
        $(function() {
            $("#yImg").css("margin-left");
            $("#yImg").css("margin-left: 20px");
    }
        );

    $("#dImg").click(function(selected) {
        selected = true;
        $(function() {
            $("#dImg").css("margin-left");
            $("#dImg").css("margin-left: -50px");
    }
        );

    $("#bImg").click(function(selected) {
        selected = true;
        $(function() {
            $("#bImg").css("margin-left");
            $("#bImg").css("margin-left: -100px");
    }
        );

//click events for each image div for the user to select their enemy to attack
//changes selected to true and moves player to attack player position
function chooseEnemy () {

    $("#hImg").click(function(selected) {
        selected = true;
        $(function() {
            $("#hImg").css("margin-left");
            $("#hImg").css("margin-left: 350px");
    }
        );

    $("#yImg").click(function(selected) {
        selected = true;
        $(function() {
            $("#yImg").css("margin-left");
            $("#yImg").css("margin-left: 150px");
    }
        );

    $("#dImg").click(function(selected) {
        selected = true;
        $(function() {
            $("#dImg").css("margin-left");
            $("#dImg").css("margin-left: 150px");
    }
        );

    $("#bImg").click(function(selected) {
        selected = true;
        $(function() {
            $("#bImg").css("margin-left");
            $("#bImg").css("margin-left: 150px");
    }
        );


//call functions to start the game
startDefaults()

initializeGame()

selectCharacter()

chooseEnemy()
//loop through the object to select player for playing based on on-click event




/*declare function for attacks:  on clicking the attack button, for the selected character,
if the selected character=true, update healthpoints, write the new healthpoint number to the UI,
and show the attack text for that specific character*/
function attack () {
    if ($("#attackButton").on("click", function() {
        for (this.character in allCharacters){
            if (character.selected(true));
                character.new_health_points = (character.health_points - character.attack_loss)
                $(".HP").text(character.new_health_points);
                $("attacktext").text(character.attack_text);
                checkScore();
            }


//declare function for checking the score each time
function checkScore() {
if (this.character.new_health_points >= 0) {
    playGame()}

if (this.character.new_health_points >=0), (this.enemy.new_health_points <= 0) {
    win = true;
    winsVsLosses();}

if (this.character.new_health_points <= 0){
    win = false;
    winsVsLosses();}
}
//if...else for wins vs. losses

function winsVsLosses() {
if (win = true); {
            $("#resultdiv").text("You WIN!!!!!!")}

if (win = false); {
        $("#resultdiv").text("Sorry, you lost.  Reset and choose another attacker.")}
}

//reset moveToStart

    function moveToStart() {

    }


//reset button visible

function reset(); {
    if (win = true) {
        moveToStart();
    }
}


//reset button resets the game

initializeGame();

selectCharacter();
