//Global Variables
 var banana,monkey,stone;
  var bananaGroup;
var score = 0

function preload(){
  backImage = loadImage("jungle.jpg");
  player_running = 
    loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  
  bananaImage = loadImage("Banana.png");
  obstacle_img = loadImage("stone.png");
  
}


function setup() {
  createCanvas(600,300);
  
  bg = createSprite(300,50,20,20);
  bg.addImage(backImage);
  bg.scale = 1.5;
  bg.velocityX = -5; 
  monkey = createSprite(100,250,20,20);
  monkey.addAnimation("Monkey",player_running); 
  monkey.scale = 0.15;
  bananaGroup = new Group();
}



function draw(){
 background(255);
  edges = createEdgeSprites();
  if(bg.x<0){
   bg.x = bg.width/2; 
  } 
  if(keyDown("space")){
     monkey.velocityY = -10
     }
  food();
  
  if(monkey.isTouching(bananaGroup)){
   bananaGroup.destroyEach();
    score = score+2;
  }
  
  
  
  
  monkey.collide(edges[3]);
  monkey.velocityY = monkey.velocityY+0.8;
 switch(score){
   case 10: monkey.scale=0.20;
     break;
     case 20: monkey.scale=0.30;
     break;
     case 30: monkey.scale=0.40;
     break;
     case 40: monkey.scale=0.50;
     break;
     default: break;
 }  
drawSprites();
  text("Score"+score,300,50);
  textSize(20);
  fill("White");
}
function food(){
if(frameCount%60===0){
banana = createSprite(600,100,20,20);
  banana.addImage(bananaImage);
  banana.scale = 0.05
 banana.velocityX = -5
 bananaGroup.add(banana);
} 
}



  