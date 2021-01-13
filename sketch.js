// game State 
var PLAY = 1; 
var END = 0 ;
var gameState = PLAY ;
var sword ,  swordI ;
var score ;
var Enemy , enemyG , monster , monsterI;
var fruit , fruit1Image ;
var swordSound , gameOverSound ;


function preload(){
  swordI = loadImage ("sword.png");
  monsterI = loadImage ("alien1.png","alien2.png");
  fruit1Image = loadImage ("fruit1.png");
  fruit2Image = loadImage ("fruit2.png");
   fruit3Image = loadImage ("fruit3.png");
   fruit4Image = loadImage ("fruit4.png");
  gameOverImage = loadImage ("gameover.png");
  gameOverSound = loadSound ("gameover.mp3");
  swordSound = loadSound ("knifeSwooshSound.mp3");
}
function setup() {
 createCanvas(600, 600);

  // create sword
   sword = createSprite (40,200,20,20);
   sword.addImage(swordI);
   sword.scale = 0.8;

   enemyG = new Group ();
   fruitG = new Group ();

   score = 0 ;
}


function draw(){

  
  background ("lightblue");
  
   sword.y=World.mouseY;
   sword.x=World.mouseX;
  
  if ( gameState === PLAY){
   sword.y=World.mouseY;
   sword.x=World.mouseX;
      var r = Math.round(random(1,5));
  if (World.frameCount%100===0){
   if (r === 1) {
      fruit1()
    } else if (r === 2) {
      Enemy()
    } else if (r === 3) {
      fruit2()
    } else if (r === 4){
      fruit3()
   } else {
      fruit4()
    }
     }
    if (sword.isTouching(fruitG)){
      fruitG.destroyEach ();
      score = score + 1 ;
      swordSound.play ();
    }
    else if(sword.isTouching(enemyG)){
     enemyG.destroyEach()
    gameState=END;
     fruitG.destroyEach()
     enemyG.setVelocityXEach(0)
     fruitG.setVelocityXEach(0)
     sword.addImage(gameOverImage)
     gameOverSound.play ();
     
     
     }
 }
  
  if (gameState === END ){
    
    
    sword.scale=2
     sword.x=300
     sword.y=200
    
     
  }
  
   text ("Score:" + score ,500,30 );
   
    drawSprites();
}

   function Enemy (){
     if (frameCount %100 === 0){
     monster = createSprite (600,334,45,67);
     monster.addAnimation ("moving", monsterI);
     monster.y=Math.round(random(100,300)) ;
     monster.velocityX=-(10 + (score / 10) );
     monster.setLifetime = 150; 
     enemyG.add(monster);
     }
   }
   

  
 function fruit1(){
   var fruit1=createSprite(600,Math.round(random(30,550)),10,10) 
   var position=Math.round(random(1,2));
  if (position===1){
    fruit1.x=400;
    fruit1.velocityX=-(6+(score/4));
    }else{
      fruit1.x=0;
      fruit1.velocityX=6+(score/4)
    }
   fruit1.addImage(fruit1Image)
  fruit1.velocityX=-10;
  fruit1.scale=0.2
  fruit1.lifetime=150
  fruitG.add(fruit1)
  }

function fruit2(){
   var fruit2=createSprite(600,Math.round(random(30,550)),10,10)
   var position=Math.round(random(1,2));
  if (position===1){
    fruit1.x=400;
    fruit1.velocityX=-(6+(score/4));
    }else{
      fruit1.x=0;
      fruit1.velocityX=6+(score/4)
    }
   fruit2.addImage(fruit2Image)
  fruit2.velocityX=-6
  fruit2.scale=0.2
  fruit2.lifetime=150
  fruitG.add(fruit2)
  }

function fruit3(){
   var fruit3=createSprite(600,Math.round(random(30,550)),10,10)
    var position=Math.round(random(1,2));
  if (position===1){
    fruit3.x=400;
    fruit3.velocityX=-(6+(score/4));
    }else{
      fruit3.x=0;
      fruit3.velocityX=6+(score/4)
    }
   fruit3.addImage(fruit3Image)
  fruit3.velocityX=-6
  fruit3.scale=0.2
  fruit3.lifetime=150
  fruitG.add(fruit3)
  }

function fruit4(){
   var fruit4=createSprite(600,Math.round(random(30,550)),10,10)
    var position=Math.round(random(1,2));
  if (position===1){
    fruit4.x=400;
    fruit4.velocityX=-(6+(score/4));
    }else{
      fruit4.x=0;
      fruit4.velocityX=-(6+(score/4))
    }
   fruit4.addImage(fruit3Image)
  fruit4.velocityX=-6
  fruit4.scale=0.2
  fruit4.lifetime=150
  fruitG.add(fruit4)
  }


