class Rope
  {
    constructor(nlink, pointA)
    {
      this.nlink = nlink
  const group = Body.nextGroup(true);
  

  //create the multiple rectangular bodies and store it in rect variable
  const rects = Composites.stack(100, 100, this.nlink, 1, 5, 5, function(x, y) {
      return Bodies.rectangle(x, y, 30, 5, { collisionFilter: { group: group } });
  });
      
  this.pointA = pointA;

  //we are creating the chain of rectangles
  this.body = Composites.chain(rects, 0.1, 0, -0.6, 0, {stiffness: 0.1, length: 0.1, render: {type: 'line'}});
      
  World.add(engine.world, this.body);
  
      //adding the constraints to the chain which connects all the bodies of the chain together(eg: Necklace)
    Composite.add(rects, Constraint.create({
    pointA: this.pointA,
    bodyB: rects.bodies[0],
    pointB: {x: -25, y: 0},
    length:10,
    stiffness: 0.1
  }));
      
    }
    
    break()
    //breat the chain by making body as null.(no x and y)
    { //Matter.Composite.clear(this.rope,true);
      this.body = null;
    }
    
    show()
    {
      if(this.body!=null)
        {
          for (let i = 0; i < this.body.bodies.length-1; i++)
          {
              this.drawVertices(this.body.bodies[i].vertices);
             }
        }
    }
    
    drawVertices(vertices) 
    {
      beginShape();
      fill('#FFF717')
      noStroke();
      
      for (let i = 0; i < vertices.length; i++) 
      {
       vertex(vertices[i].x, vertices[i].y);
       }
      endShape(CLOSE);
   }

   showConstraints(constraints) 
   {
     if(constraints!=null)
     {
    for (let i = 0; i < constraints.length; i++) {
      this.drawConstraint(constraints[i]);
    }
  }
  }
  
  drawConstraint(constraint) {
    if(constraint!=null)
      {
    const offsetA = constraint.pointA;
    let posA = {x:0, y:0};
    if (constraint.bodyA) {
      posA = constraint.bodyA.position;
    }
    const offsetB = constraint.pointB;
    let posB = {x:0, y:0};
    if (constraint.bodyB) {
      posB = constraint.bodyB.position;
    }
    push()
    strokeWeight(4);
    stroke(255);
    line(
      posA.x + offsetA.x,
      posA.y + offsetA.y,
      posB.x + offsetB.x,
      posB.y + offsetB.y
    );
    pop();
      }
  }
  
    
  }