class Slingshot{
    constructor(bodyA, pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 15
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

   fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }

    display() {

        if(this.sling.bodyA){
            var posA = this.sling.bodyA.position;
            var posB = this.sling.pointB;
            stroke(106,226,180);
            strokeWeight(7);
            var Anchor1X = posA.x;
            var Anchor1Y = posA.y;
            line(Anchor1X, Anchor1Y, posB.x, posB.y);
        }    
    }

}   