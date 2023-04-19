p5.disableFriendlyErrors = true;

//~ Setup 
function setup() {
  
  initVariables()

  //? Viewport
  if (windowWidth < viewportDisplayWidth || windowHeight < viewportDisplayHeight) {
    viewportDisplayWidth = windowWidth
    viewportDisplayHeight = windowHeight
  }

  //? Canvas
  createCanvas(viewportDisplayWidth, viewportDisplayHeight);


  //& Ma tileset fait 256x256 px et chaque tile fait du 16x16
  // tilesList = cutTileset(tileSet, [16, 16], [tileSet.width, tileSet.height])
  // itemList = cutTileset(tilesetItems, [16, 16], [tilesetItems.width, tilesetItems.height])
  // tileSetForTaverne = cutTileset(tileSetTaverne, [16, 16], [tileSetTaverne.width, tileSetTaverne.height])


  frameRate(fpsLevel);
}

//~ Adapte l'écran à la page
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  viewportDisplayWidth = windowWidth
  viewportDisplayHeight = windowHeight
}

//~ Preload 
function preload() {

  //? Interfaces
  GUIParameters = loadImage("assets/GUI/GUIParameters.png");
  GUIForEscape = loadImage("assets/GUI/GUIForEscape.png");
  GUIOfDeath = loadImage("assets/GUI/GUIOfDeath.png");
  Background = loadImage("assets/Background/Background.gif");
  GamerHeart = loadImage("assets/GUI/heart.png");
  GamerHeartBlack = loadImage("assets/GUI/heartBlack.png");

  GUIForStats = loadImage("assets/GUI/GUIForStats.png");
  GUIInteract = loadImage("assets/GUI/GUIInt.png");
  GUITroc = loadImage("assets/GUI/GUIForTrocV3.png");
  GUIStart = loadImage("assets/GUI/start.png");
  talkBackground = loadImage("assets/GUI/talkBackground.png");

  //? Background
  backgroundImage = loadImage('assets/Background/Sky2.jpg');


  //? Animation PNJ
  marjoTexture = loadImage("assets/entities/marjoSprite.png");
  charleTexture = loadImage("assets/entities/charleSprite.png");
  malade1Sprite = loadImage("assets/entities/malade1.png");
  malade2Sprite = loadImage("assets/entities/spritesheetgraveyardTest2.png");


  //? Tileset
  tilesetItems = loadImage("assets/items/TileSetItems.png");
  tileSetTaverne = loadImage("assets/textures/taverne2.png");


  //? Textures
  tileSet = loadImage("assets/textures/Tilesetgeneu.png");
  sky = loadImage("assets/textures/Sky.jpg");
  BackTroc = loadImage("assets/textures/planches.png");
  Slot = loadImage("assets/textures/slot.png");
  BackPop = loadImage("assets/textures/BackPop.png");
  pointEnnemis = loadImage("assets/textures/pointEnnemis.png");


  //? Personnage
  characterTextures = loadImage("assets/entities/spritesheetYvoTestAtk4.png")


  //? JSON preload
  adminJSON = loadJSON("json/Admin.json");
  allDoors = loadJSON("json/Doors.json");
  ForEnnemis = loadJSON("json/Ennemis.json");
  Houses = loadJSON("json/Houses.json");
  ForItems = loadJSON("json/Items.json");
  Maps = loadJSON("json/Maps.json");
  ForPNJ = loadJSON("json/PNJ.json");
  World = loadJSON("json/World.json");
  creditsJson = loadJSON("json/Credits.json");
  
  init_ForPNJ = ForPNJ

  //? SONG
  // SongBackground = loadSound("music/SongBackground.mp3");


}


//~ Draw 
function draw() {
  noSmooth()

  //* Effet de tremblement de la caméra
  if (shakeDuration > 0 && cameraShakeEnabled) {
    translate(random(-shakeForce, shakeForce), random(-shakeForce, shakeForce));
    shakeDuration--;
  }
  
  //? Si le jeu joue
  if (gameIsPlaying) {

    //~ Si le jeu n'est pas en pause
    if (!gameIsPaused){
      if (engineOne) {
        statistiques.timeSpentInGame = Math.floor(millis() / 1000)
        statistiques.playerSpeed = getSpeed(statistiques.timeSpentInGame, statistiques.distanceWalked)


        //? Afficher le fond du jeu
        drawBackgroundImage(backgroundImage)
        
        //? Afficher la map
        drawGrid()

        //? Afficher les entités
        doorsManager()
        PNJManager()
        MobManager()
        
        //? Afficher le joueur (le perso passe devant les entités)
        character()
        
        //? Afficher l'avant plan de la map
        drawGridForeground()
  
      }else{
        drawHouse()
        doorsManager()
        PNJManager()
        characterView2()
        drawHouseForeground()
      }
    }
  }
  setupUI()
}