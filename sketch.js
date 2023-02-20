function setup() {
  let viewportDisplayWidth = 1920
  let viewportDisplayHeight = 1080
  if (windowWidth < viewportDisplayWidth || windowHeight < viewportDisplayHeight){
    viewportDisplayWidth = windowWidth
    viewportDisplayHeight = windowHeight
  }

  createCanvas(viewportDisplayWidth, viewportDisplayHeight);
  PositionButtons()

}


function preload() {
  // Images preload
  imgset = loadImage("assets/img.webp")
  menu = loadImage("assets/menu.jpg")
  ingame = loadImage("assets/echap.jpg")

  // Textures
  stone = loadImage("assets/textures/Pierre.jpg")
  stoneBrick = loadImage("assets/textures/BriqueRouge.png")
  sky = loadImage("assets/textures/Sky.jpg")

  // Personnage
  characterTextureIdle = loadImage("assets/animations/IdleBase.png")
  characterTextureWalk = loadImage("assets/animations/WalkBase.png")
  characterTextureJump = loadImage("assets/animations/JumpBase.png")

  // JSON preload
  Maps = loadJSON("json/Maps.json");
  World = loadJSON("json/World.json");
  Houses = loadJSON("json/Houses.json");
}
let dashForce = 2;
let velocityX = 0;
let dashMaxLength = 5;

function draw() {

  if (isInPaused) {
    // Menu echap apparait
    MenuEchap()
    if (isSettings) {
      // Menu setting
      Settings()
    }
  }
  else {
    if (EngineOne){
      drawGrid()
      character()
    }else{
      drawHouse()
      characterView2()
    }
    
  }

  if (isDashing){
    if (LeftArrowPressed || RightArrowPressed){

      velocityX += dashForce
      
      if (LeftArrowPressed){
        characterPositionX -= velocityX
      }else if (RightArrowPressed){
        
        characterPositionX += velocityX
      }

      

      if (velocityX > dashMaxLength){
          isDashing = false
      }
    }
      
  }else if (velocityX > 0){
    velocityX -= dashForce

    if (LeftArrowPressed){
      velocityX += dashForce
      characterPositionX -= velocityX
    }else if (RightArrowPressed){
      velocityX += dashForce
      characterPositionX += velocityX
    }
  }
        

}