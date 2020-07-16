//Global Variables
var monkey, monkey_running, monkey_collided;
var ground, invisibleGround, groundImage;

function preload(){
  monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png");
  bananaImage = loadImage("Banana.png");
  obstacleImg = loadImage("stone.png");
  groundImage = loadImage("ground.jpg");
  jungleImage= loadImage("jungle.jpg");
}


function setup() {
  createCanvas(600,300);
bkground = createSprite(200,380,400,20);
  bkground.addImage("ground",jungleImage) ; 
  monkey = createSprite(50,250,20,50);
monkey.addAnimation("running" ,monkey_running);
 invisibleGround = createSprite(200,300,400,10);
  invisibleGround.visible = false;  
  monkey.scale = 0.1;
}


function draw(){
  background(255);
  var score = 0
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score, 200,200);
   var score = 0
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score, 200,200);
  switch(score) {
case 10: monkey.scale = 0.12
    break;
case 20: monkey.scale = 0.14
    break;
case 30: monkey.scale = 0.16
    break;
case 40: monkey.scale = 0.18
    break;
  }
  
  if (keyDown("space")) {
monkey.velocityY = -5;
 }
monkey.velocityY = monkey.velocityY + 0.2 
  monkey.collide(invisibleGround)
  spawnBananas();
  spawnObstacles();
drawSprites();
}

function spawnBananas() {
  if (World.frameCount % 60 === 0) {
    var bananas = createSprite(200,200,40,10);
    bananas.y = random(200,150);
    bananas.addImage("Banana.png", bananaImage);
    bananas.scale = 0.1;
    bananas.velocityX = -3;
    
     //assign lifetime to the variable
    bananas.lifetime = 134;
    
    //adjust the depth
    bananas.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    var BananasGroup = createGroup();
BananasGroup.add(bananas);
  }
  
}

function spawnObstacles() {
  if (World.frameCount % 160 === 0) {
    var rocks = createSprite(200,275,40,10);
   // rocks.y = random(200,150);
rocks.addImage("stone.png", obstacleImg);
rocks.scale = 0.1;
rocks.velocityX = -3;
rocks.lifetime = 134;
rocks.depth = monkey.depth;
monkey.depth = monkey.depth + 1;
var ObstaclesGroup = createGroup();
ObstaclesGroup.add(rocks)

  }
  
}
