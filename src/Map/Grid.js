//~ Affichage d'une grille à la position x et y, de la taille N par M;
function displayGrid(grid, positionY, positionX, rectWidth, rectHeight, showCollisions = false) {
  let gridWidth = 0
  let gridHeight = 0
  let thisTileSet;

  gridWidth = positionX + grid.length * rectWidth;
  gridHeight = positionY + grid[0].length * rectHeight;

  if (engineOne) {
    thisTileSet = tilesList

  } else {
    thisTileSet = tileSetForTaverne
  }

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {

      image(thisTileSet[grid[x][y]], positionY + y * rectWidth, positionX + x * rectHeight, rectWidth, rectHeight)
      
      if (debugMod) {
        stroke(50, 50, 50, 50)
        noFill()
        rect(positionY + y * rectWidth, positionX + x * rectHeight, rectWidth, rectHeight)
        if (showCollisions && grid[x][y] > 0){
          fill(255,0,0, 100)
          rect(positionY + y * rectWidth, positionX + x * rectHeight, rectWidth, rectHeight)
        }
      }
    }
  }

  return [positionX, positionY, gridWidth, gridHeight]
}


//~ Map normale 
function drawGrid() {

  arrayMap = []

  //* Vérifier à partir du centre du personnage dans quelle map on est
  let currentMap = findIndexOfPositionIn2dArray(characterPositionX + characterWidth / 2, characterPositionY + characterHeight / 2, World.worldsMap, rectWidth * Maps.numberOfRow, rectHeight * Maps.numberOfColumns)

  //* Dessiner la map et les chunks autour

  //? Milieu Milieu
  arrayMap.push(World.worldsMap[currentMap[1]][currentMap[0]])

  //? Milieu Gauche 
  if (currentMap[0] - 1 >= 0) {
    arrayMap.push(World.worldsMap[currentMap[1]][currentMap[0] - 1])
  }

  //? Milieu Droite
  if (currentMap[0] + 1 < World.worldsMap[0].length) {
    arrayMap.push(World.worldsMap[currentMap[1]][currentMap[0] + 1])
  }

  //? Milieu Bas

  if (currentMap[1] + 1 < World.worldsMap.length) {
    arrayMap.push(World.worldsMap[currentMap[1] + 1][currentMap[0]])
  }


  //? Milieu Haut
  if (currentMap[1] - 1 >= 0) {
    arrayMap.push(World.worldsMap[currentMap[1] - 1][currentMap[0]])
  }

  //? Milieu Haut Gauche
  if (currentMap[1] - 1 >= 0 && currentMap[0] - 1 >= 0) {
    arrayMap.push(World.worldsMap[currentMap[1] - 1][currentMap[0] - 1])
  }

  //? Milieu Haut Droite
  if (currentMap[1] - 1 >= 0 && currentMap[0] + 1 < World.worldsMap[0].length) {
    arrayMap.push(World.worldsMap[currentMap[1] - 1][currentMap[0] + 1])
  }

  //? Milieu Bas Droite
  if (currentMap[1] + 1 < World.worldsMap.length && currentMap[0] + 1 < World.worldsMap[0].length) {
    arrayMap.push(World.worldsMap[currentMap[1] + 1][currentMap[0] + 1])
  }

  //? Milieu Bas Gauche
  if (currentMap[1] + 1 < World.worldsMap.length && currentMap[0] - 1 >= 0) {
    arrayMap.push(World.worldsMap[currentMap[1] + 1][currentMap[0] - 1])
  }




  //* 1st Layer
  arrayMap.forEach(element => {
    let indexMap = findIndexValueIn2dArray(World.worldsMap, Maps[element].name)

    let gridWidthPx = rectWidth * Maps.numberOfRow
    let gridHeightPx = rectHeight * Maps.numberOfColumns


    //?  Afficher l'arrière plan
    displayGrid(Maps[element].layers[0], xStartWorld + (gridWidthPx * indexMap[1]), yStartWorld + (gridHeightPx * indexMap[0]), rectWidth, rectHeight)

  });


  //^------------------------------
  //^ Effet de lumières et d'ombres
  //^------------------------------
  lightsManager()



  //* 2nde Layer
  arrayMap.forEach(element => {
    let indexMap = findIndexValueIn2dArray(World.worldsMap, Maps[element].name)

    let gridWidthPx = rectWidth * Maps.numberOfRow
    let gridHeightPx = rectHeight * Maps.numberOfColumns


    //? Afficher le plan du millieu
    displayGrid(Maps[element].layers[1], xStartWorld + (gridWidthPx * indexMap[1]), yStartWorld + (gridHeightPx * indexMap[0]), rectWidth, rectHeight, true)


    if (debugMod) {
      fill(0, 0, 255)
      noStroke()
      textSize(15);
      textAlign("left")
      text(Maps[element].name, xStartWorld + (gridWidthPx * indexMap[1]) + 15, yStartWorld + (gridHeightPx * indexMap[0]) + 15)
      noFill()
      stroke(0, 0, 255)
      rect(xStartWorld + (gridWidthPx * indexMap[1]), yStartWorld + (gridHeightPx * indexMap[0]), gridWidthPx, gridHeightPx)
      fill(255)
    }

  });
}


//~ dessine le premier plan de la grille
function drawGridForeground() {
  arrayMap.forEach(element => {
    let indexMap = findIndexValueIn2dArray(World.worldsMap, Maps[element].name)
    let gridWidthPx = rectWidth * Maps.numberOfRow
    let gridHeightPx = rectHeight * Maps.numberOfColumns


    displayGrid(Maps[element].layers[2], xStartWorld + (gridWidthPx * indexMap[1]), yStartWorld + (gridHeightPx * indexMap[0]), rectWidth, rectHeight)
  })
}


//~ Maison 
function drawHouse(house) {
  //? Fond noir de la maison
  fill(0)
  rect(
    0,
    0,
    width,
    height
  )

  displayGrid(Houses.Houses[house].layers[0], xStartHouse, yStartHouse, rectWidth, rectHeight)
  displayGrid(Houses.Houses[house].layers[1], xStartHouse, yStartHouse, rectWidth, rectHeight, true)
}


//~ dessine le premier plan de la maison
function drawHouseForeground(house) {
  displayGrid(Houses.Houses[house].layers[2], xStartHouse, yStartHouse, rectWidth, rectHeight)
}