const arena = document.querySelector(".arenas");
const randomButton = document.querySelector(".button");

// можно (лучше) использовать конструктор

function Player(name, hp, img, weapon) {
  this.name = name;
  this.hp = hp;
  this.img = img;
  this.weapon = weapon;
  this.attack = () => {
    console.log(name + " Fight");
  };
}
let player = new Player("Subzero", 100, "img/subzero.gif", [
  "Ice",
  "Ice but",
  "Ice shield",
]);

let player1 = {
  player: 1,
  name: "Subzero",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["Ice", "Ice but", "Ice shield"],
  attack(name) {
    // лучше так
    // console.log(this.name + 'Fight...');
    console.log(name + " Fight");
  },
};

let player2 = {
  player: 2,
  name: "Sonya",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  weapon: ["Gun", "Knife"],
  attack(name) {
    // лучше так
    // console.log(this.name + 'Fight...');
    console.log(name + " Fight");
  },
};

arena.appendChild(createPlayer(player1));
arena.appendChild(createPlayer(player2));

randomButton.addEventListener("click", () => {
  changeHp(player1);
  changeHp(player2);

  if (player1.hp === 0 && player2.hp === 0) {
    arena.appendChild(playerResultFight("draw"));
  } else if (player1.hp <= 0) {
    arena.appendChild(playerResultFight(player2.name));
  } else if (player2.hp <= 0) {
    arena.appendChild(playerResultFight(player1.name));
  }
});

function createElement(tag, className) {
  const tagElement = document.createElement(tag);

  if (className) tagElement.classList.add(className);

  return tagElement;
}

function createPlayer(obj) {
  const player1 = createElement("div", `player${obj.player}`);
  const progressBar = createElement("div", "progressbar");
  const character = createElement("div", "character");
  const life = createElement("div", "life");
  const name = createElement("div", "name");
  const img = createElement("img");

  life.style.width = `${obj.hp}%`;
  name.innerText = `${obj.name}`;
  img.src = `${obj.img}`;

  progressBar.appendChild(life);
  progressBar.appendChild(name);
  character.appendChild(img);
  player1.appendChild(progressBar);
  player1.appendChild(character);

  return player1;
}

function changeHp(player) {
  const playerLife = document.querySelector(`.player${player.player} .life`);
  player.hp -= getRandom(1, 20);

  if (player.hp <= 0) player.hp = 0;

  playerLife.style.width = `${player.hp}%`;
}

function playerResultFight(name) {
  const winTitle = createElement("div", "loseTitle");

  randomButton.disabled = true;
  winTitle.innerText = name === "draw" ? "Draw" : `${name} wins`;

  return winTitle;
}

function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min + 1) + min);
}
