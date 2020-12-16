var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  demoRect= createSprite(400,200,80,30);
  demoRect.shapeColor = "green";
  obj1= createSprite(600,200,80,30);
  obj2= createSprite(600,600,80,30);
  obj1.velocityY=3;
  obj2.velocityY=-3;
  obj1.shapeColor = "yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  bounceoff(obj1,obj2);
if(istouching(movingRect,demoRect)){
  movingRect.shapeColor="red";
  demoRect.shapeColor="red";
}
else{
  movingRect.shapeColor="green";
  demoRect.shapeColor="green";
}
  
  

  drawSprites();
}
