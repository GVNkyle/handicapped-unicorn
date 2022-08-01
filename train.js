class Train {
    constructor(gap, speed) {
        this.size = 100;
        this.x = gap ? width + gap : width;
        this.y = height - this.size;
        this.speed = -speed;
    }

    move() {
        this.x += this.speed;
    }

    show() {
        image(obstacle, this.x, this.y, this.size, this.size);
        
        //debugger
        // fill(255, 50);
        // ellipseMode(CORNER);
        // ellipse(this.x, this.y, this.size);
        // rect(this.x, this.y, this.size, this.size);
    }
}