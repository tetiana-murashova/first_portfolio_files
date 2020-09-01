
const score = document.querySelector('.score');
const restartBtn = document.getElementById('restartButton');
const myRoad = document.querySelector('.rode');
const gameArea = document.querySelector('.gameArea');
const winningMessage = document.getElementById('winningMessage');

const winningMessageTextElement = document.querySelector('[data-winning-message-text]');

const arrLeft = document.querySelector('.left-arrow');
const arrRight = document.querySelector('.right-arrow');




let player = {speed: 5, score: 0};
let keys = {
    ArrowUp:false,
    ArrowDown:false,
    ArrowRight:false,
    ArrowLeft:false
};



arrLeft.addEventListener('click',() => {player.x -= player.speed*7});
arrRight.addEventListener('click',() => {player.x += player.speed*7});





restartBtn.addEventListener('click',start);
document.addEventListener('keydown',pressOn);
document.addEventListener('keyup',pressOff);

function moveLines() {
    let lines = document.querySelectorAll('.line');
    lines.forEach(item => {
        if(item.y > 1500) {
            item.y -= 1500;
        }
        item.y += player.speed;
        item.style.top = item.y + "px"
    })
}

function isCollide(a,b) {
    let aRect = a.getBoundingClientRect();
    let bRect = b.getBoundingClientRect();

    return !(
        (aRect.bottom < bRect.top) ||
        (aRect.top > bRect.bottom) ||
        (aRect.right < bRect.left) ||
        (aRect.left > bRect.right)
    )
}


function moveEnemy(car) {
    let ele = document.querySelectorAll('.enemy');
    ele.forEach(item => {
        if(isCollide(car,item)) {
            console.log('Hit');
            endGame();
        }
        if(item.y > 1500) {
            item.y = -600;
            item.style.left = Math.floor(Math.random()*230) + "px";
            item.style.backgroundColor = randomColor();
        }
        item.y += player.speed;
        item.style.top = item.y + "px"
    })
}


function playGame() {
    let car = document.querySelector('.car');
    moveLines();
    moveEnemy(car);
    let road = myRoad.getBoundingClientRect();

    if (player.start) {

        if(keys.ArrowUp && player.y > road.top) { player.y -= player.speed }
        if(keys.ArrowDown && player.y < road.bottom) { player.y += player.speed }
        if(keys.ArrowLeft && player.x > 0) { player.x -= player.speed }
        if(keys.ArrowRight && player.x < (road.width-50)) { player.x += player.speed }

        if(arrLeft && player.x > 0) { player.x -= player.speed }
        if(arrRight && player.x < (230)) { player.x += player.speed }


        car.style.left = player.x + 'px';
        car.style.top = player.y + 'px';
    window.requestAnimationFrame(playGame);
    player.score ++;
    score.innerText = "Score: " + player.score;
     }
}

function pressOn(e) {
    e.preventDefault();
    keys[e.key] = true;
    console.log("on", e.key);
}

function pressOff(e) {
    e.preventDefault();
    keys[e.key] = false;
    console.log("off", e.key);
}

function endGame() {
    winningMessage.classList.remove('hide');
    winningMessageTextElement.innerHTML = "Game Over <br>Score was " + player.score;
    gameArea.classList.add('hide');
    player.start = false;
    restartBtn.innerText = "Restart"
}



function start() {
        winningMessage.classList.add('hide');
        gameArea.classList.remove('hide');
        myRoad.innerHTML = "";
        player.start = true;
        player.score = 0;
        for(let x = 0; x < 10; x++) {
            let div = document.createElement('div');
            div.classList.add('line');
            div.y = x*150;
            div.style.top = (x*150)+ "px";
            myRoad.appendChild(div);
        }
        window.requestAnimationFrame(playGame);
        let car = document.createElement('div');
        car.setAttribute('class','car');
        myRoad.appendChild(car);
        player.x =car.offsetLeft;
        player.y =car.offsetTop;


        for(let x = 0; x < 3; x++) {
            let enemy = document.createElement('div');
            enemy.classList.add('enemy');
            enemy.innerHTML = (x+1);
            enemy.y = ((x+1)*600)*-1;
            enemy.style.top = enemy.y + "px";
            enemy.style.left = Math.floor(Math.random()*230) + "px";
            enemy.style.backgroundColor = randomColor();
            myRoad.appendChild(enemy);
    }
}

function randomColor() {
    function c() {
        let hex = Math.floor(Math.random()*256).toString(16);
        return('0'+String(hex)).substr(-2);
    }
    return "#"+c() +c() +c();
}









