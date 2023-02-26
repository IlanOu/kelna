function setup() {
  let viewportDisplayWidth = 1920
  let viewportDisplayHeight = 1080
  if (windowWidth < viewportDisplayWidth || windowHeight < viewportDisplayHeight) {
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
  IMGPlay = loadImage("assets/Play.png")
  IMGSet = loadImage("assets/Settings.png")
  PNJ1.IMG = loadImage("assets/PNJ.png");
  WantedPoster = loadImage("assets/WantedPoster.png")

  // Textures
  stone = loadImage("assets/textures/Pierre.jpg")
  stoneBrick = loadImage("assets/textures/BriqueRouge.png")
  sky = loadImage("assets/textures/Sky.jpg")

  // Personnage
  characterTextureIdle = loadImage("assets/animations/IdleBase.png")
  characterTextureWalk = loadImage("assets/animations/WalkBase.png")
  characterTextureJump = loadImage("assets/animations/JumpBase.png")
  characterTextureDash = loadImage("assets/animations/RollBase.png")

  // JSON preload
  Maps = loadJSON("json/Maps.json");
  World = loadJSON("json/World.json");
  Houses = loadJSON("json/Houses.json");

  // SONG
  SongBackground = loadSound("music/SongBackground.mp3")


  //CINEMATIC
  StartCinematic = createVideo('assets/cinematic/StartCinematic.mp4');
  StartCinematic.hide();
  StartCinematic.volume(0);
}




function draw() {
  if (PlayerIsInPlay === false) {
    WaitToPlay()
  }
  if (PlayerIsInPaused === false && PlayerIsInPlay === true && CinematicIsStart === true) {
    StartOpeningCinematic()
  }
  if (PlayerIsInPaused === false && PlayerIsInPlay === true && CinematicIsStart === false) {
    if (EngineOne) {
      drawGrid()
      ForPNJ1()
      displayVie();
      PlayerCanBeSearched()
      displayInventory()
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
  if (HealthPlayer === 0 && PlayerIsInPlay === true) {
    PlayerIsDie()
  }
  if (isStats === true && HealthPlayer === 0) {
    Stats()
  }


  
    
        

}


