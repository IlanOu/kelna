function setup() {
  createCanvas(windowWidth, windowHeight);
  PositionButtons()
}


function preload() {
  imgset = loadImage("images/img.webp")
  menu = loadImage("images/menu.jpg")
  ingame = loadImage("images/echap.jpg")
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