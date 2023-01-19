function setup() {
  createCanvas(windowWidth, windowHeight);
  PositionButtons()
}


function preload() {
  imgset = loadImage("assets/img.webp")
  menu = loadImage("assets/menu.jpg")
  ingame = loadImage("assets/echap.jpg")
}


function draw() {

  // Si le joeuur appuie sur echap : 
  if (isInPaused === false) {
    let gridReturns = drawaGrid()
    character(gridReturns[1], gridReturns[3], gridReturns[4])
  }
  if (isInPaused === true) {
    MenuEchap()
    // Menu echap apparait
  }
  if (isSettings === true) {
    Settings()
    // Menu setting
  }      

}