class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        };

        this.pointB = pointB;
        this.Slingshot = Constraint.create(options);
        World.add(world, this.Slingshot);
    }

    fly(){
        this.Slingshot.bodyA = null;
    }

    attach(body){
        this.Slingshot.bodyA=body;
    }

    display(){
        if(this.Slingshot.bodyA){
            var pointA = this.Slingshot.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8)
            if(pointA.x<220){
                strokeWeight(9); 
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y); 
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y);  
            } else{
                strokeWeight(1);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y); 
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y);  
            }
        }
        
    }
    
}