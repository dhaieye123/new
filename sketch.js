var box


function setup() {
  createCanvas(500,500);
  box=createSprite(200,200,20,20);
 box.shapeColor="blue"
}

function draw() 
{
  background(30);
  if(keyDown(LEFT_ARROW)){
    box.position.x=box.position.x-2;
  }
  if(keyDown(RIGHT_ARROW)){
    box.position.x=box.position.x+2;
  }
  
  drawSprites()
}

