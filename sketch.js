p5.disableFriendlyErrors = true;


//~ Adapte l'écran à la page
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  viewportDisplayWidth = windowWidth
  viewportDisplayHeight = windowHeight
}

let bloomVert
let bloomFrag

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
  backgroundImage = loadImage('assets/Background/bg_final_normalement.png');


  //? Animation PNJ
  marjoTexture = loadImage("assets/entities/marjoSprite.png");
  charleTexture = loadImage("assets/entities/charleSprite.png");
  malade1Sprite = loadImage("assets/entities/malade1.png");
  malade2Sprite = loadImage("assets/entities/spritesheetgraveyardTest2.png");


  //? Tileset
  tilesetItems = loadImage("assets/items/TileSetItems.png");
  tileSetTaverne = loadImage("assets/textures/Engine2.png");


  //? Textures
  tileSet = loadImage("assets/textures/Tilesetgeneu.png");
  backgroundImageTroc = loadImage("assets/textures/planches.png");
  slot = loadImage("assets/textures/slot.png");
  backgroundImageTalk = loadImage("assets/textures/backgroundImageTalk.png");
  pointEnnemis = loadImage("assets/textures/pointEnnemis.png");


  //? Personnage
  characterTextures = loadImage("assets/entities/spritesheetYvo.png")
  


  //? JSON preload
  adminJSON = loadJSON("json/Admin.json");
  allDoors = loadJSON("json/Doors.json");
  ennemiesJSON = loadJSON("json/Ennemis.json");
  Houses = loadJSON("json/Houses.json");
  itemsJSON = loadJSON("json/Items.json");
  Maps = loadJSON("json/Maps.json");
  pnjJSON = loadJSON("json/PNJ.json");
  World = loadJSON("json/World.json");
  creditsJSON = loadJSON("json/Credits.json");
  
  init_pnjJSON = pnjJSON

  //? Cinématiques
  gameIntroductionVideo = createVideo("assets/cinematic/StartCinematic.mp4");

}


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

  frameRate(fpsLevel);

  //? Cinématiques
  gameIntroductionVideo.hide();
}


//~ Draw 
function draw() {


  noSmooth()

  //* Effet de tremblement de la caméra
  if (shakeDuration > 0 && cameraShakeEnabled) {
    translate(random(-shakeForce, shakeForce), random(-shakeForce, shakeForce));
    shakeDuration--;
  }
  
  if (startCinematicPlaying) {
    playStartCinematic()
  }else{
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
          itemsManager()
          PNJManager()
          MobManager()
          
          

          //? Afficher le joueur (le perso passe devant les entités)
          character()
          
          //? Afficher l'avant plan de la map
          drawGridForeground()
    
        }else{
          drawHouse(behindThisDoorHouse)
          doorsManager()
          PNJManager()
          characterView2()
          drawHouseForeground(behindThisDoorHouse)
        }
      }
    }
    setupUI()
  }

}