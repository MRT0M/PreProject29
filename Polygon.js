class Polygon {
    constructor(x,y,diameter) {
      this.body = Bodies.circle(x,y,diameter);
      this.diameter=diameter;
      World.add(world,this.body)
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      image(polygonImg,pos.x,pos.y,40);
    }
  };
  


