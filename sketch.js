var bgImg;
var player


function preload() {
  bgImg = loadImage("bg.jpg");

}



function drawDie(x, y, side) {
  fill("brown");
  rectMode(CENTER);
  rect(555,665, 100,100,20 );
  strokeWeight(3);
  fill("black")
  if (side === 1) {
    circle(x, y, 20);
console.log("side=1");
  }
  else if (side === 2) {
    circle(x, y, 20);
    circle(x + 25, y + 25, 20);
  }
  else if (side === 3) {
    circle(x, y, 20);
    circle(x + 25, y + 25, 20);
    circle(x - 25, y - 25, 20);
  }
  else if (side === 4) {
    circle(x - 25, y + 25, 20);
    circle(x + 25, y + 25, 20);
    circle(x - 25, y - 25, 20);
    circle(x + 25, y - 25, 20);
  }
  else if (side === 5) {
    circle(x - 25, y + 25, 20);
    circle(x + 25, y + 25, 20);
    circle(x - 25, y - 25, 20);
    circle(x + 25, y - 25, 20);
    circle(x, y, 20);
  }
  else if (side === 6) {
    circle(x - 25, y + 25, 20);
    circle(x + 25, y + 25, 20);
    circle(x - 25, y - 25, 20);
    circle(x + 25, y - 25, 20);
    circle(x - 25, y, 20);
    circle(x + 25, y, 20)
  }
}
function playersUpsAndDowns() {
if(space===2){
  Matter.body.setVelocity(player.body,{x:6,y:-30})
  space=23;
}
if(space===20){
  Matter.body.setVelocity(player.body,{x:3,y:-10})
  space=59;
}
if(space===6){
  Matter.body.setVelocity(player.body,{x:3,y:-10})
  space=45;
}
if(space===52){
  Matter.body.setVelocity(player.body,{x:3,y:-10})
  space=72;

}
if(space===71){
  Matter.body.setVelocity(player.body,{x:3,y:-10})
  space=92;
}
if(space===57){
  Matter.body.setVelocity(player.body,{x:3,y:-10})
  space=96;
}
//snakes
if(space===43){
  Matter.body.setVelocity(player.body,{x:3,y:-10})
  space=17;
}
if(space===98){
  Matter.body.setVelocity(player.body,{x:3,y:-10})
  space=40;
}
if(space===84){
  Matter.body.setVelocity(player.body,{x:3,y:-10})
  space=58;
}
if(space===56){
  Matter.body.setVelocity(player.body,{x:3,y:-10})
  space=8;
}
if(space===50){
  Matter.body.setVelocity(player.body,{x:3,y:-10})
  space=5;
}
if(space===87){
  Matter.body.setVelocity(player.body,{x:3,y:-10})
  space=49;
}
}
function setup() {
  createCanvas(1000, 1000);
  player = new Player(20, 560, 40, 40);
  space = 1
  move = false;
  die = [false, 1, 0, false, 0]
}
function draw() {
  background("white")
  image(bgImg, 0, 0, 600, 600)
  
  player.display();
  //Matter.Body.setPosition(player.body,{x:120,y:560});
  fill("black");
  if (die[3] === false) {
    drawDie(555,665, die[1])
  }
  
  else {
    if (die[4] % 2 === 0) {
      drawDie(555,665, die[1])
    }
    if (move === false && space !== 100) {
      if (space % 10 === 0) {
        player.moveUp();
      }
      else {
        var num = Math.floor(space / 10);
        if (num === 0 || num === 2 || num === 4 || num === 6 || num === 8) {
          player.moveRight();
          console.log("posx=",player.body.position.x);

        }
        else {
          player.moveLeft();
        }

      }
      move = true;
      space++;
      console.log(space);
    }
  }
  if (frameCount % 15 === 0) {
    die[4]--;
    move = false;
    if (die[4] == 0) {
      die[3] = false;
      die[0] = false;
      playersUpsAndDowns();
    }
  }
  if(die[0]===true&&die[2]>0&&frameCount%5===0){
     die[2]--
     die[1]++
     if(die[2]===0){
       die[3]=true;
       die[4]=die[1]*2;
     }
     if(die[1]>6){
       die[1]=1;
     }
  }



}
function keyPressed(){
  if(keyCode===32&&die[0]===false){
    die[0]=true
    die[2]=round(random(12,18));

  }
}