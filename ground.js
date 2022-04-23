class Ground{
    //properties
    constructor(x,y,w,h){
        let options = {
        isStatic: true
        }
    this.body = Bodies.rectangle(x,y,w,h, options);
    this.w = w;
    this.h = h;

    //add that to the world
    World.add(world, this.body);

    }
    //function
    show(){
        let pos=this.body.position;
        push();
        rectMode(CENTER);
        noStroke();
        fill(148,127,146);
        rect(pos.x, pos.y, this.w, this.h)
        pop();

    }

    

}