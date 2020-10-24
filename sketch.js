//Create variables here
var dog,happyDog;
var database,foodS;;
var foodStock,dog1;

function preload()
{
  //load images here
  dog1=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readStock);

	createCanvas(800, 800);
  
  dog=createSprite(400,400,40,40);
  dog.addImage(dog1);
  dog.scale=0.25;
}


function draw() { 
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here
  text("Food Remaining:")

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
   })
}


