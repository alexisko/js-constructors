var characters = createCharacters();

//PLAYER
var player, playerName, playerHealth, playerMana, playerMaxHealth, playerImg,
playerMaxMana, playerSpell, playerSpellName, playerSpellCost, playerSpellDamage;

//static variables
player = characters.getNewPlayer();
playerImg = new Image();
playerImg.src = player.imgURL;
document.getElementById("player-image").appendChild(playerImg);

playerName = document.getElementById("player-name");
playerName.innerHTML = player.name;

//dynamic variables
playerHealth = document.getElementById("player-health");
playerMana = document.getElementById("player-mana");
playerHealth.innerHTML = player.health;
playerMana.innerHTML = player.mana;
playerMaxHealth = player.health;
playerMaxMana = player.mana;
playerSpell = characters.getPlayerSpell(player);
playerSpellName = document.getElementById("player-spell-one");
playerSpellCost = document.getElementById("player-spell-one-cost");
playerSpellDamage = document.getElementById("player-spell-one-damage");
playerSpellName.innerHTML = playerSpell.name;
playerSpellCost.innerHTML = playerSpell.cost;
playerSpellDamage.innerHTML = playerSpell.damage;

//OPPONENT
var opponent, opponentName, opponentHealth, opponentMana, opponentDesc,
opponentSpell, opponentSpellName, opponentSpellCost, opponentSpellDamage;

opponent = characters.getNewOpponent();
opponentSpell = characters.getOpponentSpell(opponent);

var opponentImg = new Image();
opponentImg.src = opponent.imgURL;
// document.getElementById("player-image").appendChild(opponentImg);

opponentName = document.getElementById("opponent-name");
opponentHealth = document.getElementById("opponent-health");
opponentMana = document.getElementById("opponent-mana");
opponentSpellName = document.getElementById("opponent-spell-one");
opponentSpellCost = document.getElementById("opponent-spell-one-cost");
opponentSpellDamage = document.getElementById("opponent-spell-one-damage");
opponentName.innerHTML = opponent.name;
opponentHealth.innerHTML = opponent.health;
opponentMana.innerHTML = opponent.mana;
opponentSpellName.innerHTML = opponentSpell.name;
opponentSpellCost.innerHTML = opponentSpell.cost;
opponentSpellDamage.innerHTML = opponentSpell.damage;

//functions
function updateStats() {
  playerHealth.innerHTML = player.health;
  playerMana.innerHTML = player.mana;
  opponentHealth.innerHTML = opponent.health;
  opponentMana.innerHTML = opponent.mana;
}

function newRound() {
  //player updates
  playerHealth.innerHTML = playerMaxHealth;
  playerMana.innerHTML = playerMaxMana;

  //opponent updates
  var temp = characters.getNewOpponent();
  while(temp === opponent) {
    console.log("temp"+temp);
    console.log("oppo"+opponent);
    temp = characters.getNewOpponent();
  }
}

function opponentDescription(opponent, description) {
  if(opponent.name === 'INTERNET TROLL') {
    description = 'Trollface is a rage comic character wearing a mischievous smile that is meant to represent the facial expression of an Internet troll.';
    document.getElementById("divDescription").innerHTML = description;
  } else if(opponent.name === '1999 FURBY') {
    description = 'A Furby is an American electronic robotic toy released in 1998 by Tiger Electronics. It resembles a hamster or owl-like creature.';
    document.getElementById("divDescription").innerHTML = description;
  } else if(opponent.name === 'JABBA THE TRUMP') {
    description = 'Jabba the trump, a science experiment gone terribly ... terribly wrong.';
    document.getElementById("divDescription").innerHTML = description;
  } else if(opponent.name === 'EVIL MONKEY') {
    description = "The Evil Monkey was a resident of the Griffin household who lived in Chris' bedroom closet.";
    document.getElementById("divDescription").innerHTML = description;
  } else if(opponent.name === 'COIN BANK WITH FACE') {
    description = 'Straight from hell.';
    document.getElementById("divDescription").innerHTML = description;
  }
}

opponentDescription(opponent, opponentDesc);

//button
var overlay = document.getElementsByClassName("overlay");
var attackBtn = document.getElementById("attackBtn");
attackBtn.addEventListener('click', function() {
  if(playerSpell.damage === 0) { //player can't attack
    //trigger pop up
    //get new spell
  } else { //player and opponent attack each other
    player.invoke(playerSpell, opponent);
    opponent.invoke(opponentSpell, player);
    if(player.health === 0) {
      newRound();
    } else if (player.mana === 0) {
      newRound();
    } else if(opponent.health === 0) {
      newRound();
    } else if(opponent.mana === 0) {
      newRound();
    } else {
      updateStats();
    }
  }
});

