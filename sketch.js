
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine , world ;

var ball ;

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new Ball();

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);

  rectMode(CENTER);
  rect(600,660,1200,10);

  ball.display();

 mousePressed();

  drawSprites();
 
}
function mousePressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(ball.body, ball.body.position , {x:85,y:-85});
	}
}


