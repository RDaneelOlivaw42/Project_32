class Polygon{
    constructor(x, y){
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, 80, options);
        this.x = x;
        this.y = y;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        image(this.image, 0, 0, 80, 80);
        pop();
    }
}