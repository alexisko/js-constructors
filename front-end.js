var characters = createCharacters();

//PLAYER
var playerName, playerHealth, playerMana;
playerName = document.getElementById("player-name");
playerHealth = document.getElementById("player-health");
playerMana = document.getElementById("player-mana");
playerName.innerHTML = characters.player.name;
playerHealth.innerHTML = characters.player.health;
playerMana.innerHTML = characters.player.mana;

//static
var playerImg = new Image();
playerImg.src = characters.player.imgURL;
document.getElementById("player-image").appendChild(playerImg);
document.getElementById("player-spell-one").innerHTML = characters.playerSpell.name;
document.getElementById("player-spell-one-cost").innerHTML = characters.playerSpell.cost;
document.getElementById("player-spell-one-damage").innerHTML = characters.playerSpell.damage;

//OPPONENT
var opponentName, opponentHealth, opponentMana;
opponentName = document.getElementById("opponent-name");
opponentHealth = document.getElementById("opponent-health");
opponentMana = document.getElementById("opponent-mana");
opponentName.innerHTML = characters.opponent.name;
opponentHealth.innerHTML = characters.opponent.health;
opponentMana.innerHTML = characters.opponent.mana;

//static
var opponentImg = new Image();
opponentImg.src = characters.opponent.imgURL;
// document.getElementById("player-image").appendChild(opponentImg);
document.getElementById("opponent-spell-one").innerHTML = characters.opponentSpell.name;
document.getElementById("opponent-spell-one-cost").innerHTML = characters.opponentSpell.cost;
document.getElementById("opponent-spell-one-damage").innerHTML = characters.opponentSpell.damage;

var description = '';
if(characters.opponent.name === 'INTERNET TROLL') {
    description = 'Trollface is a rage comic character wearing a mischievous smile that is meant to represent the facial expression of an Internet troll.';
    document.getElementById("divDescription").innerHTML = description;
  } else if(characters.opponent.name === '1999 FURBY') {
    description = 'A Furby is an American electronic robotic toy released in 1998 by Tiger Electronics. It resembles a hamster or owl-like creature.';
    document.getElementById("divDescription").innerHTML = description;
  } else if(characters.opponent.name === 'JABBA THE TRUMP') {
    description = 'Jabba the trump, a science experiment gone terribly ... terribly wrong.';
    document.getElementById("divDescription").innerHTML = description;
  } else if(characters.opponent.name === 'EVIL MONKEY') {
    description = "The Evil Monkey was a resident of the Griffin household who lived in Chris' bedroom closet.";
    document.getElementById("divDescription").innerHTML = description;
  } else if(characters.opponent.name === 'COIN BANK WITH FACE') {
    description = 'Straight from hell.';
    document.getElementById("divDescription").innerHTML = description;
  }

//button
var overlay = document.getElementsByClassName("overlay");
var attackBtn = document.getElementById("attackBtn");
attackBtn.addEventListener('click', function() {
  if(characters.playerSpell.damage === 0) { //player can't attack

  } else { //player and opponent attack each other
    characters.player.invoke(characters.playerSpell, characters.opponent);
    characters.opponent.invoke(characters.opponentSpell, characters.player);
    if(characters.player.health === 0) {
      console.log(characters.getNewOpponent());
    } else if (characters.player.mana === 0) {
      console.log(characters.getNewOpponent());
    } else if(characters.opponent.health === 0) {
      console.log(characters.getNewOpponent());
    } else if(characters.opponent.mana === 0) {
      console.log(characters.getNewOpponent());
    } else {
      updateStats();
    }
  }
});

function updateStats() {
  playerHealth.innerHTML = characters.player.health;
  playerMana.innerHTML = characters.player.mana;
  opponentHealth.innerHTML = characters.opponent.health;
  opponentMana.innerHTML = characters.opponent.mana;
}

function updateOpponent() {

}