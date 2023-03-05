function setup() {


  if (windowWidth < viewportDisplayWidth || windowHeight < viewportDisplayHeight) {
    viewportDisplayWidth = windowWidth
    viewportDisplayHeight = windowHeight
  }

  createCanvas(viewportDisplayWidth, viewportDisplayHeight);
  // PositionButtons()


  // Ma tileset fait 256x256 px et chaque tile fait du 32x32px
  tilesList = cutTileset(tileSet, [32, 32], [256, 256])

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
  WantedPoster = loadImage("assets/WantedPoster.png")

  // Animation PNJ
  PNJTextures = loadImage("assets/animations/spriteSheetGuards.png")

  // WalkPNJ = loadImage("assets/animations/PNJWalk.png")
  // IdlePNJ = loadImage("assets/animations/IdleBoi.png")

  // Textures
  stone = loadImage("assets/textures/Pierre.jpg")
  stoneBrick = loadImage("assets/textures/BriqueRouge.png")
  sky = loadImage("assets/textures/Sky.jpg")
  tileSet = loadImage("assets/textures/floortilesetTransparent.png")

  // Personnage
  characterTextures = loadImage("assets/animations/spriteSheetCharacter.png")
  
  // characterTexture_Idle = loadImage("assets/animations/IdleBase.png")
  // characterTexture_Walk = loadImage("assets/animations/WalkBaseNew.png")
  // characterTexture_Jump = loadImage("assets/animations/JumpBase.png")
  characterTexture_Dash = loadImage("assets/animations/RollBase.png")

  

  // JSON preload
  ForPNJ = loadJSON("json/PNJ.json");
  Maps = loadJSON("json/Maps.json");
  World = loadJSON("json/World.json");
  Houses = loadJSON("json/Houses.json");
  ForEnnemis = loadJSON("json/Ennemis.json");

  // SONG
  SongBackground = loadSound("music/SongBackground.mp3")


  //CINEMATIC
  StartCinematic = createVideo('assets/cinematic/StartCinematic.mp4');
  StartCinematic.hide();
  StartCinematic.volume(0);
}




function draw() {
  noSmooth()

  if (gameIsPlaying) {
    inGame = true
    
    if (engineOne) {
      
      drawGrid()
      PNJManager()
      character()
      ennemiManager()
      drawGridForeground()

    }else{
      drawHouse()
      PNJManager()
      characterView2()
      drawHouseForeground()
    }
    

  }
  setupUI()

}


