
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic : true
  }


  var holder_options={
    isStatic: true
  }

  ground = Bodies.rectangle(200,330,400,20,ground_options)
  World.add(world,ground);

holder = Bodies.rectangle(200,100,200,20,holder_options);
World.add(world,holder);

var ball_options = {

  restitution : 4.0,
  density : 1.0

}

ball  = Bodies.circle(220,200,40,ball_options);
World.add(world,ball);


var options = {
  bodyA : ball,
  bodyB : holder,
  stiffness: 1,
  length : 100
}
var string = Constraint.create(options);
World.add(world,string);

fill("White");
}


function draw() {
background("brown"); 
Engine.update(engine);

text("Press space to bring the ball to mouse",100,20);
text("Press arrow keys < or > to oscillate",100,80);
text("Press enter and the pendulum will stop in the middle",100,50);

fill ("black");
rectMode(CENTER);
rect(holder.position.x,holder.position.y,400,20);

fill("brown");
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);


fill(212,175,55);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20);

strokeWeight(8);
stroke(212,175,55);
line(ball.position.x,ball.position.y,holder.position.x,holder.position.y)




if(keyCode===32){
ball.position.y = mouseY;
ball.position.x = mouseX;
}

else if (keyCode === ENTER){
ball.position.x = 200;

}

}








