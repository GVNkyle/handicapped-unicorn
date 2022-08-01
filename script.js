let unicorn;
let backgroundImage;
let character;
let obstacle;
let trains = [];
let birds = [];
let x1 = 0;
let x2;
let scrollSpeed = 2;
let score;
let gap = 50;
let speed;
let lvl;
let numberToCompare;
let isLvlup;
let lvArray = [];
let isStarted = false;
let gif;
let bird;

function preload() {
    backgroundImage = loadImage('./backgrounds/Background.jpg');
    character = loadImage('./characters/pikachu.gif');
    obstacle = loadImage('./characters/truck.png');
    bird = loadImage('./characters/angry-bird.png');
}

function setup() {
    createCanvas(800, 450);
    unicorn = new Unicorn();
    x2 = width;
    score = 0;
    speed = 9;
    lvl = 0;
    isLvlup = false;
    numberToCompare = 0.005;
    lvArray = [1000, 3000, 5000, 6000, 7000, 9000, 10000];
    noLoop();
}

function keyPressed() {
    if (key == ' ') {
        if (isStarted === false) {
            isStarted = true;
            loop();
        } else {
            unicorn.jump();
        }
    } else if (keyCode === UP_ARROW)
        unicorn.jump();
}
function draw() {
    character_move();
    /* -------------------------------------- random push train ------------------------------------- */
    if (random(1) < numberToCompare) {
        (trains.length > 0 && trains[trains.length - 1].x >= width && trains[trains.length - 1].x <= width + 100) ? trains.push(new Train(gap, speed)) : trains.push(new Train(null, speed));
        // trains.push(new Train(speed));
    }

    if (lvl > 0) {
        if (random(1) < 0.00125) {
            birds.push(new Bird());
        }
    }

    parallaxBackgroud();

    if (isStarted) {
        gameStart();
    }
    else {
        textAlign(CENTER, CENTER);
        textSize(32);
        fill(255);
        text("Press 'Space' to play", 400, 200);
    }

    unicorn.show();
    unicorn.move();
}

function gameOver() {
    textAlign(CENTER, CENTER);
    textSize(40);
    fill(0, 102, 153);
    text("Game over", 400, 200);
}

function reset() {
    location.reload();
}

function parallaxBackgroud() {
    image(backgroundImage, x1, 0, width, height);
    image(backgroundImage, x2, 0, width, height);

    textSize(24);
    fill(0, 102, 153);
    text("Score:" + score, 600, 50); //score

    x1 -= scrollSpeed;
    x2 -= scrollSpeed;

    if (x1 < -width) x1 = width;
    if (x2 < -width) x2 = width;
}

function gameStart() {
    for (let t of trains) {
        t.move();
        t.show();
        if (unicorn.hits(t)) {
            noLoop();
            gameOver();
        }
    }

    for (let bird of birds) {
        bird.show();
        bird.move();
        if (unicorn.hits(bird)) {
            noLoop();
            gameOver();
        }
    }

    score += scrollSpeed;

    if (score > lvArray[lvl]) { //compare score to lvlup xD
        lvl++;
        numberToCompare += 0.003;
        speed += 3;
        isLvlup = true;
        setTimeout(() => {
            isLvlup = false;
        }, 1000);
    }

    if (isLvlup) {
        fill(50, 55, 100);
        textSize(24);
        text('Level Up', 350, 200);
    }
}

function character_move() {
    if (keyIsDown(LEFT_ARROW)) {
        if (unicorn.y == height - unicorn.size)
            unicorn.x -= 5;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        if (unicorn.y == height - unicorn.size)
            unicorn.x += 5;
    }

    if (keyIsDown(DOWN_ARROW)) {
        unicorn.y = height - unicorn.size;
    }
}