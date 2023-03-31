//~ Affichage d'une grille à la position x et y, de la taille N par M;
function displayGrid(grid, positionY, positionX, rectWidth, rectHeight){
  let gridWidth = 0
  let gridHeight = 0
  
  gridWidth = positionX + grid.length * rectWidth;
  gridHeight = positionY + grid[0].length * rectHeight;

  
  for (let x=0; x<grid.length; x++){
    for(let y=0; y<grid[x].length; y++){

      image(tilesList[grid[x][y]], positionY+y*rectWidth, positionX+x*rectHeight, rectWidth, rectHeight)
      
    }
  }
  return [positionX, positionY, gridWidth, gridHeight]
}


//~ Map normale 
function drawGrid(){

  arrayMap = []

  let currentMap = findIndexOfPositionIn2dArray(characterPositionX, characterPositionY, World.worldsMap, rectWidth*Maps.numberOfRow, rectHeight*Maps.numberOfColumns)

  //* Dessiner la map et les chunks autour
    
  //? Milieu Milieu
  arrayMap.push(World.worldsMap[currentMap[1]][currentMap[0]])

  //? Milieu Gauche 
  if (currentMap[0]-1 >= 0){
    arrayMap.push(World.worldsMap[currentMap[1]][currentMap[0]-1])
  }

  //? Milieu Droite
  if (currentMap[0]+1 < World.worldsMap[0].length ){
    arrayMap.push(World.worldsMap[currentMap[1]][currentMap[0]+1])
  }

  //? Milieu Bas
  if(currentMap[1]+1 < World.worldsMap.length){
    arrayMap.push(World.worldsMap[currentMap[1]+1][currentMap[0]])
  }

  //? Milieu Haut
  if (currentMap[1]-1 >= 0){
    arrayMap.push(World.worldsMap[currentMap[1]-1][currentMap[0]])
  }

  //? Milieu Haut Gauche
  if (currentMap[1]-1 >= 0 && currentMap[0]-1 >= 0){
    arrayMap.push(World.worldsMap[currentMap[1]-1][currentMap[0]-1])
  }

  //? Milieu Haut Droite
  if (currentMap[1]-1 >= 0 && currentMap[0]+1 < World.worldsMap[0].length){
    arrayMap.push(World.worldsMap[currentMap[1]-1][currentMap[0]+1])
  }

  //? Milieu Bas Droite
  if (currentMap[1]+1 < World.worldsMap.length && currentMap[0]+1 < World.worldsMap[0].length){
    arrayMap.push(World.worldsMap[currentMap[1]+1][currentMap[0]+1])
  }

  //? Milieu Bas Gauche
  if (currentMap[1]+1 < World.worldsMap.length && currentMap[0]-1 >= 0){
    arrayMap.push(World.worldsMap[currentMap[1]+1][currentMap[0]-1])
  }
  
  arrayMap.forEach(element => {
    
    let indexMap = findIndexValueIn2dArray(World.worldsMap, Maps[element].name)
    
    let gridWidthPx = rectWidth*Maps.numberOfRow
    let gridHeightPx = rectHeight*Maps.numberOfColumns

    //?  Afficher l'arrière plan
    displayGrid(Maps[element].layers[0], xStartWorld+(gridWidthPx*indexMap[1]), yStartWorld+(gridHeightPx*indexMap[0]), rectWidth, rectHeight)
    
    //? Afficher le plan du millieu
    displayGrid(Maps[element].layers[1], xStartWorld+(gridWidthPx*indexMap[1]), yStartWorld+(gridHeightPx*indexMap[0]), rectWidth, rectHeight)
  
  });
}


//~ dessine le premier plan de la grille
function drawGridForeground(){
  arrayMap.forEach(element => {
    let indexMap = findIndexValueIn2dArray(World.worldsMap, Maps[element].name)
    let gridWidthPx = rectWidth*Maps.numberOfRow
    let gridHeightPx = rectHeight*Maps.numberOfColumns
    
    displayGrid(Maps[element].layers[2], xStartWorld+(gridWidthPx*indexMap[1]), yStartWorld+(gridHeightPx*indexMap[0]), rectWidth, rectHeight)
  })
}


//~ Maison 
function drawHouse(){
  fill(0)
  rect(
    0,
    0,
    width,
    height
  )
  displayGrid(Houses["house1"].layers[0], xStartHouse, yStartHouse, rectWidth, rectHeight)
  
  displayGrid(Houses["house1"].layers[1], xStartHouse, yStartHouse, rectWidth, rectHeight)

}


//~ dessine le premier plan de la maison
function drawHouseForeground(){
    displayGrid(Houses["house1"].layers[2], xStartHouse, yStartHouse, rectWidth, rectHeight)
}