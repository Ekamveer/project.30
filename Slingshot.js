class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
       // polygon.Bodies.circle(x, y, radius, [options], [6]) 
        

        
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(145,145,50);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
           // line(pointA.x-20, pointA.y-30, pointB.x, pointB.y);
           
        }
    }
    
}