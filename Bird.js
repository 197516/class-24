class Bird{
    constructor(x,y){
    var some = {
    restitution:0.5,
    friction:1,
    density:1.5
    }
    this.body = Bodies.rectangle(x,y,50,50,some)
    this.width= 50;
    this.height= 50;
    World.add(myworld,this.body);
    }
    display(){
       var pos = this.body.position
       pos.x= mouseX
       pos.y=mouseY
       var angle = this.body.angle
       push()
       translate(pos.x,pos.y)
       rotate(angle)
       rectMode(CENTER);
       strokeWeight(3)
       stroke("black")
       fill("orange");
        rect(0,0,this.width,this.height)
        pop()
    }
}