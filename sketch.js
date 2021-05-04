//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImg
function preload()
{ 
  dogImg=loadImage("dogImg.png");
  happyDog=loadImage("dogImg1.png");
 	//load images here

}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}

 

function draw() {  

  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  }

  )
}

