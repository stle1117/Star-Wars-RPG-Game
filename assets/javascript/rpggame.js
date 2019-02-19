$(function() {


//hide reset button on page load
    $("#fade").fadeIn("slow");


//contain all options of characters in an array
var allCharacters = [
    {  id: 1,
       name: Han,
       img: "assets/images/Han_Solo.jpg",
       health_points: 120,
       attack_loss: 5,
       attack_points: 10,
       attacked_text: "Han Solo lost 5 health points.",
       attack_text: "Han Solo attacked for 10 points.",
       attacker: false

    },

    {   id: 2,
        name: yoda,
        img: "assets/images/Yoda.jpg",
        health_points: 100,
        attack_loss: 10,
        attack_points: 15,
        attacked_text: "Yoda lost 10 health points.",
        attack_text: "Yoda attacked for 15 points.",
        attacker: false

     },

    {   id: 3,
        name: darthV,
        img: "assets/images/Darth_Vader.jpg",
        health_points: 80,
        attack_loss: 20,
        attack_points: 5,
        attacked_text: "Darth Vader lost 5 health points.",
        attack_text: "Darth Vader attacked for 10 points.",
        attacker: false

     },

     {  id: 4,
        name: bobbaF,
        img: "assets/images/Boba_Fett.jpg",
        health_points: 70,
        attack_loss: 15,
        attack_points: 10,
        attacked_text: "Bobba Fett lost 15 health points.",
        attack_text: "Bobba Fett attacked for 10 points.",
        attacker: false

     }
]


var chosenCharacter


function displayInitalCharacters(){
    $('#characters').empty()
    for (let i = 0; i < characters.length; i++) {
        var newImage = $('<img>')
        newImage.attr('src', characters[i].image)
        newImage.attr('data-name', characters[i].name)
        newImage.addClass('each-characters')
        $('#characters').append(newImage)
    }
}

displayInitalCharacters()


function displayChosenCharacter(){
    var newImage = $('<img>')
    newImage.attr('src', chosenCharacter.image)
    // newImage.attr('data-id', [i])
    // newImage.addClass('each-characters')
    $('#chosen-character').append(newImage)
}

function displayDefendingCharacter(){
    var newImage = $('<img>')
    newImage.attr('src', chosenCharacter.image)
    // newImage.attr('data-id', [i])
    // newImage.addClass('each-characters')
    $('#defending-character').append(newImage)
}


$(document).on('click', '.each-characters', function(){
    var name = $(this).attr('data-name')
    console.log(name);   
     
    // Use for loop to remove character from initl array
     var index = characters.findIndex(name)
    
    if(!chosenCharacter){
        chosenCharacter = characters.splice(index, 1)[0]
        displayChosenCharacter()
    } else {
        defendingCharacter = characters.splice(index, 1)[0]
        displayDefendingCharacter()
    }

    displayInitalCharacters()
    
})


/*declare function for attacks:  on clicking the attack button, for the selected character,
if the selected character=true, update healthpoints, write the new healthpoint number to the UI,
and show the attack text for that specific character*/
function attack () {
    if ($("#attackButton").click(function() {
        for (this.chosenCharacter in allCharacters){
            if (chosenCharacter.selected(true));
                characterNew_health_points = (chosenCharacter.health_points - chosenCharacter.attack_loss)
                $(".HP").text(chosenCharacterNew_health_points);
                $("attacktext").text(chosenCharacter.attack_text);
                checkScore();
            }


//declare function for checking the score each time
function checkScore() {
if (this.characterNew_health_points >= 0) {
    playGame()}

if (this.characterNew_health_points > 0 && this.enemyNew_health_points <= 0) {
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

    }