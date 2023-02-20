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
  GamerHeart = loadImage("assets/GamerHeart.webp")
  GUIParameters = loadImage("assets/GUIParameters.png")
  GUIForEscape = loadImage("assets/GUIForEscape.png")
  GUIOfDeath = loadImage("assets/GUIOfDeath.png")
  GUIForStats = loadImage("assets/GUIForStats.png")
  Background = loadImage("assets/Background.gif")

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

  // SONG
  SongBackground = loadSound("music/SongBackground.mp3")
}
let dashForce = 2;
let velocityX = 0;
let dashMaxLength = 5;

function draw() {

  if (PlayerIsInPlay === false) {
    WaitToPlay()
    // SongBackground.play()
  }
  if (PlayerIsInPaused === false && PlayerIsInPlay === true) {
    if (EngineOne) {
      drawGrid()
      displayVie();
      character()
    } else {
      drawHouse()
      characterView2()
    }

  }
  if (PlayerIsInPaused === true && PlayerIsInPlay === true && isSettingsEchap === false) {
    MenuEscape()
  }
  if (isSettingsEchap === true && PlayerIsInPlay === true) {
    Setting()
  }
  if (isSettingsWait === true && PlayerIsInPlay === false) {
    Setting()
  }
  if (HealthPlayer === 0 && PlayerIsInPlay === true && PlayerIsInPlay === true) {
    PlayerIsDie()
  }
  if (isStats === true && HealthPlayer === 0) {
    Stats()
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