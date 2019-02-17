$( document ).ready(function() 

//click events for each image div
    {function initializeGame () {

    $("#hanSolo").on("click", function(selected) {
        selected = true;
    }
        );

    $("#yoda").on("click", function(selected) {
        selected = true;
    }
        );

    $("#darthVader").on("click", function(selected) {
        selected = true;
    }
        );

    $("#bobaFett").on("click", function(selected) {
        selected = true;
    }
        );

//contain all options of characters in an object
var allCharacters = {
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

//call functions to start the game
initializeGame()

selectCharacter()


//loop through the object to select player for playing



//declare function for attacks
function attack () {
    if ($("#attackButton").on("click", function() {
        for (this.character in allCharacters){
            if (character.selected(true));
                character.new_health_points = (character.health_points - character.attack_loss)
                $(".HP").text(character.new_health_points);
            }


//declare function for checking the score

if (this.character.new_health_points >= 0)
    playGame()
}

else if, (this.character.new_health_points <=0)
    winsVsLosses()
}


//if...else for wins vs. losses

function winsVsLosses () {
    if win = true; {
        $("#resultdiv").text("You WIN!!!!!!");
    }

    else if win = false; {
        $("#resultdiv").text("Sorry, you lost.  Reset and choose another attacker.")
    }
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
