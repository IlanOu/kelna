function setup() {


  if (windowWidth < viewportDisplayWidth || windowHeight < viewportDisplayHeight) {
    viewportDisplayWidth = windowWidth
    viewportDisplayHeight = windowHeight
  }

  createCanvas(viewportDisplayWidth, viewportDisplayHeight);
  // PositionButtons()


  // Ma tileset fait 256x256 px et chaque tile fait du 16x16
  tilesList = cutTileset(tileSet, [16, 16], [tileSet.width, tileSet.height])


}


function preload() {

  //^ Interfaces
  GUIParameters = loadImage("assets/GUIParameters.png")
  GUIForEscape = loadImage("assets/GUIForEscape.png")
  GUIOfDeath = loadImage("assets/GUIOfDeath.png")
  Background = loadImage("assets/Background.gif")
  IMGPlay = loadImage("assets/Play.png")
  IMGSet = loadImage("assets/Settings.png")
  GamerHeart = loadImage("assets/GamerHeart.webp")
  // WantedPoster = loadImage("assets/WantedPoster.png")
  GUIForStats = loadImage("assets/GUIForStats.png")
  GUIInteract = loadImage("assets/GUIInt.png")

  //^ Background

  backgroundImage = loadImage('assets/Background/Sky2.jpg');

  //^ Animation PNJ
  PNJTextures = loadImage("assets/animations/spriteSheetGuards.png")



  //^ Textures
  stone = loadImage("assets/textures/Pierre.jpg")
  stoneBrick = loadImage("assets/textures/BriqueRouge.png")
  sky = loadImage("assets/textures/Sky.jpg")
  tileSet = loadImage("assets/textures/tilesetUgo3.png")

  //^ Personnage
  characterTextures = loadImage("assets/animations/spritesheetYvo.png")
  

  //^ Items
  Sword = loadImage("assets/sword.png")

  //^ JSON preload
  Maps = loadJSON("json/Maps.json");
  World = loadJSON("json/World.json");
  Houses = loadJSON("json/Houses.json");
  ForPNJ = loadJSON("json/PNJ.json");
  ForEnnemis = loadJSON("json/Ennemis.json");
  allDoors = loadJSON("json/Doors.json");
  Items = loadJSON("json/Items.json")

  // SONG
  SongBackground = loadSound("music/SongBackground.mp3")


  //CINEMATIC
  // StartCinematic = createVideo('assets/cinematic/StartCinematic.mp4');
  // StartCinematic.hide();
  // StartCinematic.volume(0);
}




function draw() {
  noSmooth()

  if (gameIsPlaying) {
    inGame = true
    //playerDead = false
    playerStat = false
    
    if (engineOne) {

      //* Afficher le fond du jeu
      drawBackgroundImage(backgroundImage)
      
      //* Afficher la map
      drawGrid()

      //* Afficher les entités
      doorsManager()
      PNJManager()
      MobManager()
      //* Afficher le joueur (le perso passe devant les entités)
      character()
      
      //* Afficher l'avant plan de la map
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


