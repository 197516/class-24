class Pig{
    constructor(x,y){
    var some = {
    restitution:0.7,
    friction:0.3,
    density:1
    }
    this.body = Bodies.rectangle(x,y,50,50,some)
    this.width= 50;
    this.height=50;
    World.add(myworld,this.body);
    }
    display(){
       var pos = this.body.position
       var angle = this.body.angle
       push()
       translate(pos.x,pos.y)
       rotate(angle)
       rectMode(CENTER);
       fill("red");
        rect(0,0,this.width,this.height)
        pop()
    }
}
