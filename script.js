var xp = 0;
var health = 100;
var gold = 50;
var currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ['stick', 'dagger', 'sword'];
// let newWeapon = weapons[currentWeapon].name;
// New Inventory from weapons array using push method

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');

const text = document.querySelector('#text');
const xpText = document.querySelector('#xpText');
const healthText = document.querySelector('#healthText');
const goldText = document.querySelector('#goldText');
const monsterStats = document.querySelector('#monsterStats');
const monsterName = document.querySelector('#monsterName');
const monsterHealthText = document.querySelector('#monsterHealth');

const weapons = [
  { name: 'stick', power: 5 },
  { name: 'dagger', power: 30 },
  { name: 'claw hammer', power: 50 },
  { name: 'sword', power: 20 },
];

const monsters = [
  { name: 'slime', level: 2, health: 15 },
  { name: 'fanged beast', level: 8, health: 60 },
  { name: 'dragon', level: 20, health: 300 },
];

const locations = [
  {
    name: 'town square',
    'button text': ['Go to store', 'Go to cave', 'Fight dragon'],
    'button functions': [goStore, goCave, fightDragon],
    text: 'You are in the town square. You see a sign that says "Store"',
  },
  {
    name: 'store',
    'button text': [
      'Buy 10 health (10 gold)',
      'Buy weapon (30 gold)',
      'Go to town square',
    ],
    'button functions': [buyHealth, buyWeapon, goTown],
    text: 'You enter the store.',
  },
  {
    name: 'cave',
    'button text': ['Fight slime', 'Fight fanged beast', 'Go to town square'],
    'button functions': [fightSlime, fightBeast, goTown],
    text: 'You enter the cave. You see some monsters.',
  },
  {
    name: 'fight',
    'button text': ['Attack', 'Dodge', 'Run'],
    'button functions': [attack, dodge, goTown],
    text: 'You are fighting a monster.',
  },
];

// initialize buttons

// Set the onclick property using dot notation
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
  console.log('Going to town.');
  // button1.innerText = 'Go to store';
  button1.innerText = location['button text'][0];
  // button2.innerText = 'Go to cave';
  button2.innerText = location['button text'][1];
  // button3.innerText = 'Fight dragon';
  button3.innerText = location['button text'][2];
  // button1.onclick = goStore;
  button1.onclick = location['button functions'][0];
  // button2.onclick = goCave;
  button2.onclick = location['button functions'][1];
  // button3.onclick = fightDragon;
  button3.onclick = location['button functions'][2];
  // text.innerText =
  // ('You are in the town square. You see a sign that says "Store"');
  text.innerText = location.text;
}

function goTown() {
  update(locations[0]);
}
// Define the goStore function (replace this with your actual function)
function goStore() {
  /* console.log('Going to store.');
  button1.innerHTML = 'Buy 10 health (10 gold)';
  button2.innerText = 'Buy weapon (30 gold)';
  button3.innerText = 'Go to town square';
  button1.onclick = buyHealth;
  button2.onclick = buyWeapon;
  button3.onclick = goTown;
  text.innerText = 'You enter the store.'; */
  update(locations[1]);
}
function goCave() {
  // console.log('Going to cave.');
  update(locations[2]);
}
function fightDragon() {
  // console.log('Fighting Dragon.');
  fighting = monsters[2];
  goFight();
}

function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    updateStats();
    goldText.innerText = 'Gold: ' + gold;
    healthText.innerText = 'Health: ' + health;
  } else {
    text.innerText = 'You do not have enough gold to buy health.';
    button2.innerText = 'Sell weapon for 15 gold nuggets';
    button2.onclick = sellWeapon;
  }
}

function buyWeapon() {
  // console.log('Buying weapon.');
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      updateStats();
      goldText.innerText = 'Gold: ' + gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = 'You bought a ' + newWeapon + '.';
      inventory.push(newWeapon);
      text.innerText += ' You now have ' + inventory;
    } else {
      text.innerText = 'You do not have enough gold to buy a weapon.';
    }
  } else {
    text.innerText = 'You already have the most powerful weapon!';
  }
}

function sellWeapon() {
  // console.log('Selling weapon.');
  if (inventory.length > 1) {
    gold += 15;
    // inventory.pop();
    updateStats();
    goldText.innerText = 'Gold: ' + gold;
    text.innerText = 'You sold your ' + inventory + '.';
    // Use shift() to get the first element from the inventory array
    let currentWeapon = inventory.shift();
    // Now, currentWeapon holds the value of the removed element
    console.log('Sold weapon:', currentWeapon);
    text.innerText = 'You sold your ' + currentWeapon + '.';
    text.innerText += ' In your inventory you now have ' + inventory;
  } else {
    text.innerText = 'Do not sell your only weapon!';
  }
}

function fightSlime() {
  // console.log('Fighting Slime.');
  fighting = monsters[0];
  goFight();
}
function fightBeast() {
  // console.log('Fighting Beast.');
  fighting = monsters[1];
  goFight();
}

function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = 'block';
  /* monsterName.innerText = fighting.name;
  monsterHealth = fighting.health;
  monsterHealthText.innerText = 'Health: ' + monsterHealth;
  monsterStats.style.display = 'block';
  text.innerText = 'You are fighting a ' + fighting.name + '.';
  button1.innerText = 'Attack';
  button2.innerText = 'Run';
  button3.innerText = 'Use potion';
  button1.onclick = attack;
  button2.onclick = run;
  button3.onclick = usePotion; */
}

function attack() {}

function dodge() {}
