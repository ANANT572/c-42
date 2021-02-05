var backImage,backgr;
var player, player_running;
var ground,ground_img;
var foodGroup;
var obstacles;
var END =0;
var PLAY =1;
var gameState = PLAY;
var gameState = End;

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bi= loadImage("banana.png");
  oi = loadImage("stone.png");
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
  foodGroup = new Group();
  obstacles = new Group();
  
}

function draw() { 
  background(0);

  if(gameState===PLAY){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);
    spawnFood();
    spawnObstacles();

  }
  if(gameState===END){
    player.isTouching = obstacles 
     gameState = 0 ;
  }

  drawSprites();
}
  function spawnFood(){
    if(frameCount % 80 === 0){
      var b = createSprite(600,250,40,10);
      b.y = random(120,200);
      b.addImage(bi);
      b.scale = 0.05;
      b.velocityX = -4;
      b.lifeTime = 300;
      player.depth = b.depth+1;
      foodGroup.add(b);

    }
  }
  function spawnObstacles(){
    if(frameCount % 80 === 0){
      var o = createSprite(800,350,10,40);
      o.x = random(200,600);
      o.addImage(oi);
      o.scale = 0.2;
      o.velocityX = -4;
      o.lifeTime = 300;
      player.depth = o.depth+1;
      obstacles.add(o);

    }
  }