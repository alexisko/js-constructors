function createCharacters() {
  //characters
  var characterArr = [];

  var cow, frog, pig, chicken, cat;
  cow = new Spellcaster('COW', 1000, 500, 'https://s-media-cache-ak0.pinimg.com/736x/5d/71/31/5d713170077a14ad438f88d0cac42541.jpg');
  frog = new Spellcaster('FROG', 700, 500, 'http://orig09.deviantart.net/d844/f/2010/141/6/2/cartoon_frog_by_shirlz_sugar.jpg');
  pig = new Spellcaster('PIG', 700, 500, 'https://s-media-cache-ak0.pinimg.com/originals/5f/6b/64/5f6b64420bbb41837b8d540ac325fb37.jpg');
  chicken = new Spellcaster('CHICKEN', 500, 800, 'https://cdn.dribbble.com/users/660336/screenshots/2538640/__-_____-3.png');
  cat = new Spellcaster('CAT', 999, 999, 'http://stuffpoint.com/cats/image/398105-cats-cute-digital-cat.jpg');
  characterArr.push(cow, frog, pig, chicken, cat);

  var opponentArr = [];

  var troll, furby, trump, monkey, coinbank;
  troll = new Spellcaster('INTERNET TROLL', 500, 500, 'http://i0.kym-cdn.com/photos/images/newsfeed/000/096/044/trollface.jpg?1296494117');
  furby = new Spellcaster('1999 FURBY', 500, 300, 'http://i1.kym-cdn.com/entries/icons/original/000/012/395/furby.jpg');
  trump = new Spellcaster('JABBA THE TRUMP', 350, 1000, 'http://img.pr0gramm.com/2016/03/29/23405648f76fba7a.jpg');
  monkey = new Spellcaster('EVIL MONKEY', 700, 500, 'https://pbs.twimg.com/profile_images/3627886664/9a5fc62a9653304ff412fda2dfd5c453.jpeg');
  coinbank = new Spellcaster('COIN BANK WITH FACE', 666, 666, 'https://orion-uploads.openroadmedia.com/lg_59f53a-scary-toys-facebank.jpg');
  opponentArr.push(troll, furby, trump, monkey, coinbank);

  //player spells
  var spellArr = [];

  var fart, sleep, scratch, quickAttack, bite, stomp, crunch,
  peck, acid, roar, bodySlam, takeDown, slam, headbutt, pound;
  fart = new DamageSpell('Fart', 0, 0, 'test');
  sleep = new DamageSpell('Sleep', 50, 0, 'test');
  scratch = new DamageSpell('Scratch', 50, 50, 'test');
  quickAttack = new DamageSpell('Quick Attack', 100, 100, 'test');
  bite = new DamageSpell('Bite', 50, 70, 'test');
  stomp = new DamageSpell('Stomp', 60, 120, 'test');
  crunch = new DamageSpell('Crunch', 60, 120, 'test');
  peck = new DamageSpell('Peck', 20, 40, 'test');
  acid = new DamageSpell('Acid', 30, 80, 'test');
  roar = new DamageSpell('Roar', 50, 0, 'test');
  bodySlam = new DamageSpell('Body Slam', 100, 300, 'test');
  takeDown = new DamageSpell('Take Down', 100, 200, 'test');
  slam = new DamageSpell('Slam', 80, 80, 'test');
  headbutt = new DamageSpell('Headbutt', 50, 50, 'test');
  pound = new DamageSpell('Pound', 30, 10, 'test');
  spellArr.push(fart, sleep, scratch, quickAttack, bite, stomp, crunch,
  peck, acid, roar, bodySlam, takeDown, slam, headbutt, pound);

  //opponent spells
  var trolling, laser, buildWall, monkeySlap, demonicPowers;
  trolling = new DamageSpell('Trolling', 50, 50, '');
  laser = new DamageSpell('Laser', 50, 70, '');
  buildWall = new DamageSpell('Build Wall', 100, 200, '');
  monkeySlap = new DamageSpell('Monkey Slap', 50, 50, '');
  demonicPowers = new DamageSpell('Demonic Powers', 100, 300, '');

  var player, opponent, playerSpell, opponentSpell;

  function getRandom(arr) {
    return arr[Math.floor(Math.random() * ((arr.length-1) - 0 + 1)) + 0];
  }

  function getOpponentSpell(opponent) {
    if(opponent.name === 'INTERNET TROLL') {
      opponentSpell = trolling;
    } else if(opponent.name === '1999 FURBY') {
      opponentSpell = laser;
    } else if(opponent.name === 'JABBA THE TRUMP') {
      opponentSpell = buildWall;
    } else if(opponent.name === 'EVIL MONKEY') {
      opponentSpell = monkeySlap;
    } else if(opponent.name === 'COIN BANK WITH FACE') {
      opponentSpell = demonicPowers;
    }
  }

  player = getRandom(characterArr);
  playerSpell = getRandom(spellArr);
  opponent = getRandom(opponentArr);
  getOpponentSpell(opponent);

  function getNewOpponent() {
    var newOpponent = getRandom(opponentArr);
    return newOpponent;
  }

  return {
    player: player,
    opponent: opponent,
    playerSpell: playerSpell,
    opponentSpell: opponentSpell,
    getNewOpponent: getNewOpponent
  };
}

