const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
  polygonImg=loadImage("polygon.png");
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  groundObj=new Ground(0,790,800,10);
  stand=new Ground(400, 200, 50, 50);
  block1=new Box(330,235,30,40);
  block2=new Box(360,235,30,40);
  block3=new Box(390,235,30,40);
  block4=new Box(420,235,30,40);
  block5=new Box(450,235,30,40);
  block6=new Box(360,195,30,40);
  block7=new Box(390,195,30,40);
  block8=new Box(420,195,30,40);
  block9=new Box(390,155,30,40);
  polygon=new Polygon(50,200,20)
  slingshot=new SlingShot(polygon.body,{x:100,y:200});
  Engine.run(engine);
}

function draw() {
  background(0);  
  Engine.update(engine);
  groundObj.display();
  stand.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  polygon.display();
  
  slingshot.display();
  drawSrites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}