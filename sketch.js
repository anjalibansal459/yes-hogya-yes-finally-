var  issImage,spacebgImage,spacecraft1Image,spacecraft2Image,spacecraft3Image,spacecraft4Image
var iss,spaceCraft
var hasDocked=false
var h
function preload()
{
issImage=loadImage("iss.png")
spacebgImage=loadImage("spacebg.jpg")
spacecraft1Image=loadImage("spacecraft1.png")
spacecraft2Image=loadImage("spacecraft2.png")
spacecraft3Image=loadImage("spacecraft3.png")
spacecraft4Image=loadImage("spacecraft4.png")
}




function setup() {
  createCanvas(1000,600);
  iss=createSprite(500,200,500,50)
  iss.addImage(issImage)

  spaceCraft=createSprite(500,500,50,50)
  spaceCraft.addImage(spacecraft1Image)
  spaceCraft.scale=0.2

  h=createSprite(440,225,10,10)
  h.shapeColor="lightblue"
}

function draw() {
  background(spacebgImage); 
  if(!hasDocked) { spaceCraft.x = spaceCraft.x + random(-1,1) 
  if(keyDown(LEFT_ARROW))
  {
spaceCraft.addImage(spacecraft3Image)
spaceCraft.x=spaceCraft.x-2;
  }
  if(keyDown(RIGHT_ARROW))
  {
spaceCraft.addImage(spacecraft4Image)
spaceCraft.x=spaceCraft.x+2;
  }
  if(keyDown(DOWN_ARROW))
  {
spaceCraft.addImage(spacecraft2Image)

  }
  if(keyDown(UP_ARROW))
  {
spaceCraft.y=spaceCraft.y-2;

  }}
  if(spaceCraft.isTouching(h)){
    fill("red")
    textSize(30)
    text("DOCKED SUCCESSFULLY",300,500)
  hasDocked=true;
  }
  drawSprites();
}