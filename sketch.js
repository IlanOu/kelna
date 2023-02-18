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
  Maps = loadJSON("json/Maps.json", (e) => {
    arrayMap.push(e.map1)
    arrayMap.push(e.map2)
    arrayMap.push(e.map8)
  });
  World = loadJSON("json/World.json");
}


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
    // Si le joueur appuie sur echap :
    drawGrid()
    character()
  }
        

}