class Ground{
    constructor(x,y,width,height){
        var gr={
     isStatic : true
        }
        this.body=Bodies.rectangle(x,y,width,height,gr)
        this.width=width;
        this.height=height;
        World.add(myworld,this.body)
    }
  display(){
  var  pos= this.body.position

    rectMode(CENTER)
    fill ("green")
    rect(pos.x,pos.y,this.width,this.height)
  }
}