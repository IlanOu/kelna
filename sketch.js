function setup() {
  

  if (windowWidth < viewportDisplayWidth || windowHeight < viewportDisplayHeight) {
    viewportDisplayWidth = windowWidth
    viewportDisplayHeight = windowHeight
  }

  createCanvas(viewportDisplayWidth, viewportDisplayHeight);
  // PositionButtons()


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
  IMGTest = loadImage("assets/PNJ.png");
  WantedPoster = loadImage("assets/WantedPoster.png")

  // Textures
  stone = loadImage("assets/textures/Pierre.jpg")
  stoneBrick = loadImage("assets/textures/BriqueRouge.png")
  sky = loadImage("assets/textures/Sky.jpg")

  // Personnage
  characterTexture_Idle = loadImage("assets/animations/IdleBase.png")
  characterTexture_Walk = loadImage("assets/animations/WalkBaseNew.png")
  characterTexture_Jump = loadImage("assets/animations/JumpBase.png")
  characterTexture_Dash = loadImage("assets/animations/RollBase.png")

  // JSON preload
  ForPNJ = loadJSON("json/PNJ.json");
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

  

  if (gameIsPlaying){
    inGame = true
    noSmooth()
    drawGrid()
    character() 
  }
  setupUI()

}


