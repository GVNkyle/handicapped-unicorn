let unicorn;
let backgroundImage;
let character;
let obstacle;
let trains = [];
let x1 = 0;
let x2;
let scrollSpeed = 2;

function preload() {
    backgroundImage = loadImage('./backgrounds/Background.jpg');
    character = loadImage('./characters/Equals_Unicorn_Run.png');
    obstacle = loadImage('./characters/Dot_Train_Run.png');
}

function setup() {
    createCanvas(800, 450);
    unicorn = new Unicorn();
    x2 = width;
}

function mousePressed(){
    trains.push(new Train());
}

function keyPressed() {
    if (key == ' ') {
        unicorn.jump();
    }
}
function draw() {
    /* -------------------------------------- random push train ------------------------------------- */
    if (random(1) < 0.005) {
        trains.push(new Train());
    }

    /* ---------------------------------------- parallax background --------------------------------------- */
    image(backgroundImage, x1, 0, width, height);
    image(backgroundImage, x2, 0, width, height);

    x1 -= scrollSpeed;
    x2 -= scrollSpeed;

    if (x1 < -width) x1 = width;
    if (x2 < -width) x2 = width;
    /* ---------------------------------------- end parallax background --------------------------------------- */

    /* ------------------------------------------ train run ----------------------------------------- */
    for (let t of trains) {
        t.move();
        t.show();
        if (unicorn.hits(t)) {
            console.log('game over');
            noLoop();
        }
    }
    /* ------------------------------------------ end train run ----------------------------------------- */

    unicorn.show();
    unicorn.move();
}