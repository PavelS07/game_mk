// Task0

// можно (лучше) использовать конструктор
function Player(name, hp, img, weapon){
    this.name = name;
    this.hp = hp;
    this.img = img;
    this.weapon = weapon;
    this.attack = () => {
        console.log(name + ' Fight');
    };
}
let player = new Player('Subzero', 100, 'img/subzero.gif', ['Ice', 'Ice but', 'Ice shield']);

let player1 = {
    name: 'Subzero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Ice', 'Ice but', 'Ice shield'],
    attack(name) {
        // лучше так
        // console.log(this.name + 'Fight...');
        console.log(name + ' Fight');
    },
}

let player2 = {
    name: 'Sonya',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Gun', 'Knife'],
    attack(name) {
        // лучше так
        // console.log(this.name + 'Fight...');
        console.log(name + ' Fight');
    },
}

// Task1, Task2, Task3*
createPlayer('player1', player1);
createPlayer('player2', player2);

function createPlayer(classCharacter, obj) {
    const arena = document.querySelector('.arenas');

    const player1 = document.createElement('div');
    const progressBar = document.createElement('div');
    const character = document.createElement('div');
    const life = document.createElement('div');
    const name = document.createElement('div');
    const img = document.createElement('img');

    player1.classList.add(`${classCharacter}`);
    progressBar.classList.add('progressbar');
    character.classList.add('character');
    life.classList.add('life');
    name.classList.add('name');
    img.classList.add('img');

    life.style.width = `${obj.hp}%`;
    name.innerText = `${obj.name}`;
    img.src = `${obj.img}`;

    progressBar.appendChild(life);
    progressBar.appendChild(name);
    character.appendChild(img);
    player1.appendChild(progressBar);
    player1.appendChild(character);
    arena.appendChild(player1);
}