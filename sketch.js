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
  Maps = loadJSON("json/Maps.json", (e) => {
    arrayMap.push(e.map1)
    arrayMap.push(e.map2)
    arrayMap.push(e.map8)
  });
  World = loadJSON("json/World.json");
}


function draw() {

  if (isInPaused === false) {
    // Si le joueur appuie sur echap :
    drawGrid()
    
    character()
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