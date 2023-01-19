function setup() {
  createCanvas(windowWidth, windowHeight);
  PositionButtons()
}


function preload() {
  // Images preload
  imgset = loadImage("assets/img.webp")
  menu = loadImage("assets/menu.jpg")
  ingame = loadImage("assets/echap.jpg")

  // JSON preload
  Maps = loadJSON("json/Maps.json");
  World = loadJSON("json/World.json");
}


function draw() {

  if (isInPaused === false) {
    // Si le joueur appuie sur echap : 
    let gridReturns = drawGrid()
    character(gridReturns[1], gridReturns[3], gridReturns[4])
  }
  if (isInPaused === true) {
    // Menu echap apparait
    MenuEchap()
  }
  if (isSettings === true) {
    // Menu setting
    Settings()
  }      

}