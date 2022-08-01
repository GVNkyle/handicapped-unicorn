class Bird {
    constructor() {
        this.size = 50;
        this.x = 0;
        this.y = height - this.size -200;
    }

    move() {
        this.x += 9;
    }

    show() {
        image(bird, this.x, this.y, this.size, this.size);

        //debugger
        // fill(255, 50);
        // ellipseMode(CORNER);
        // ellipse(this.x, this.y, this.size);
        // rect(this.x, this.y, this.size, this.size);
    }
}