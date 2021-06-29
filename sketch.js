
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper
var dustbin1,dustbim2,dustbin3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,650,800,20)
paper=new Paper(350,650,20)
dustbin1=new Dustbin(580,650,30,10)
dustbin2=new  Dustbin(780,650,30,10)
dustbin3=new Dustbin (580,650,30,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  paper.display()
  dustbin1.dislay()
  dustbin2.dislay()
  dustbin2.dislay()
  drawSprites();
 keyPressed()
}


function keyPressed(){
	if(keyCode===UP_ARROW){
	matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})	
	}
	
}
