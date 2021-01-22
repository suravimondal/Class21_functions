var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  wall= createSprite(800,200,20,80);
  wall.shapeColor="blue";
  car= createSprite(600,200,30,30);
  car.shapeColor="white";
  car.velocityX= 4;
}

function draw() {
  background(0);  
 // movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;

  if(isTouching(car, wall)){
    car. shapeColor="yellow";
    textSize(30);
    fill("yellow");
    text("TOUCHED!",200,200);
  }
  else{
    car. shapeColor="white";
  }
  bounceOff(car, wall);
  drawSprites();
}
