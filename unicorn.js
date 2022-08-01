class Unicorn {
    constructor() {
        this.size = 100;
        this.x = 50;
        this.y = height - this.size;
        this.gravity = 2;
        this.vy = 0; //jump height
    }

    jump() {
        if (this.y == height - this.size) {
            this.vy = -35;
        }
    }

    hits(train) {

        /* ----------------------------------- transform from square to circle ---------------------------------- */
        let x1 = this.x + this.size * 0.5;
        let y1 = this.y + this.size * 0.5;
        let x2 = train.x + train.size * 0.5;
        let y2 = train.y + train.size * 0.5;
        return collideCircleCircle(x1, y1, this.size, x2, y2, train.size);
    }

    move() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - this.size);
    }

    show() {
        image(character, this.x, this.y, this.size, this.size);
        fill(255,50);
        // ellipseMode(CORNER);
        // ellipse(this.x, this.y, this.size);
        // rect(this.x, this.y, this.size, this.size);
    }
}