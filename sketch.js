const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var fruit;
var fruitconstraint;

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  

 var fruitoptions={
   density: 0.001
 }


 fruit = Bodies.circle(300,300,15,fruitoptions)


  myGround = new Ground(200,690,610,30)
  myRope = new Rope(6,{x:250,y:40})

  Matter.Composite.add(myRope.body, fruit)
  fruitconstraint = new Link(myRope, fruit)
  rectMode(CENTER);
  ellipseMode(RADIUS);
 textSize(50)
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  myGround.show()
  myRope.show()
  fruitconstraint.show()

  ellipse(fruit.position.x, fruit.position.y, 15, 15)
   
}




