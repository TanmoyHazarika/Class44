var bodyguard,bodyguardImage;
var backgroundImage;

function preload(){
  bodyguardImage = loadAnimation("Animation/Man1.png","Animation/Man2.png","Animation/Man3.png","Animation/Man4.png","Animation/Man5.png","Animation/Man6.png")
  backgroundImage = loadImage("Animation/Background.png")
}
function setup() {
  createCanvas(1500,700);
  background = createSprite(0,0,1500,700)
  background.addImage(backgroundImage)
 bodyguard =  createSprite(150, 590, 40, 40);
 bodyguard.addAnimation("Image",bodyguardImage)

}

function draw() {
  //background(backgroundImage); 
  
  background.velocityX = -3;

  drawSprites();
}