class Player{
    constructor(x,y,width,height){
   var options={
        density:0.001,
        friction:0
    }
    this.width=width;
    this.height=height;
   this.body =Matter.Bodies.rectangle(x,y,width,height,options);
   this.img=loadImage("player.png")
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
         rotate(this.body.angle);
image(this.img,0,0,this.width,this.height);
   pop();
    }
    moveRight(){
        translate(60,540);
        Matter.Body.setPosition(this.body,{x:60,y:540})
    }
    moveLeft(){
        Matter.Body.setPosition(this.body,{x:-60,y:0})
    }
    moveUp(){
        Matter.Body.setPosition(this.body,{x:0,y:-60})
    }
}