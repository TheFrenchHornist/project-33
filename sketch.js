var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score = 0;
var turn = 0;
var goal;

var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  goal = createSprite(400, 500, 800, 10);

  goal.shapeColor();


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(25);
 text("Score : "+score,20,30);
 text("500", 30, 600);
 text("500", 110, 600);
 text("100", 190, 600);
 text("100", 270, 600);
 text("100", 350, 600);
 text("100", 430, 600);
 text("100", 510, 600);
 text("100", 590, 600);
 text("300", 670, 600);
 text("300", 750, 600);

 mousePressed();
 
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   ground.display();

   text("x:" + mouseX + "y:" + mouseY, mouseX, mouseY);
   drawSprites();
}

function mousePressed(){
  if (gameState !=="end"){
    turn++;
    particle = new Particle(mouseX, 10, 10, 10);
  }
}