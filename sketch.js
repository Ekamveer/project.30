const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var  platform,platform2;
var polygon, slingShot;
var ball;

function preload() {
   polygon=loadImage("pentagon.png");
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ball = Bodies.circle(50,200,20);
     World.add(world,ball);
    
   
    platform = new Ground(480, 280, 300, 20);
    platform2 = new Ground(840, 200, 300, 20);
    
    


    // Level Two
    box1 = new Box(330,235,30,40);
    box2 = new Box(360,235,30,40);
    box3 = new Box(390,235,30,40);
    box4 = new Box(420,235,30,40);
    box5 = new Box(450,235,30,40);
    // Level three
    box6 = new Box(360,195,30,40);
    box7 = new Box(390,195,30,40);
    box8 = new Box(420,195,30,40);
    // Top
    box9 = new Box(390,155,30,40);

    // Platform 2
    box10 = new Box(745,165,30,40);
    box11 = new Box(780,165,30,40);
    box12= new Box(785,165,30,40);
    box13 = new Box(825,165,30,40);
    box14 = new Box(850,165,30,40);
    box15 = new Box(880,165,30,40);
    // 
    box16 = new Box(740,145,30,40);
    box17 = new Box(820,145,30,40);
    box18 = new Box(785,145,30,40);
    box19 = new Box(785,125,30,40);
    slingshot = new Slingshot(box1.body,{x:100, y:250});

   
    
}

function draw(){
    background(0);
    Engine.update(engine);
   
    strokeWeight(4);
    fill (255);
    //box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
   
   
   
    
    //Text("Drag the Hexagonal Stone and Release it,to launch towards the blocks",10,5);


    platform.display();
    platform2.display();

    imageMode(CENTER) 
    image(polygon ,ball.position.x,ball.position.y,40,40);
    
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}