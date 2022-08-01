class Train {
    constructor() {
        this.size = 100;
        this.x = width;
        this.y = height - this.size;
    }

    move() {
        this.x -= 12;
    }

    show() {
        image(obstacle, this.x, this.y, this.size, this.size);
        fill(255, 50);
        // ellipseMode(CORNER);
        // ellipse(this.x, this.y, this.size);
        // rect(this.x, this.y, this.size, this.size);
    }
}