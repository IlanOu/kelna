// Obtenir le nombre maximum de cases dans le rectangle
function getNumberOfCasesInRect(bigRectWidth, bigRectHeight, rectWidth, rectHeight){
  let numberOfCasesX = Math.floor(bigRectWidth/rectWidth)
  let numberOfCasesY = Math.floor(bigRectHeight/rectHeight)
  
  return [numberOfCasesX, numberOfCasesY]
}


// création d'une grille de N colonnes et M lignes 
function createTable(columnNumber, rowNumber){
  let grid = []
  
  for (let x=0; x<columnNumber; x++){
    let row = []
    for(let y=0; y<rowNumber; y++){
      row.push(0)
    }
    grid.push(row)
  }
  return grid
}


// Affichage d'une grille à la position x et y, de la taille N par M;
function displayGrid(grid, positionX, positionY, rectWidth, rectHeight){
  let gridWidth = 0
  let gridHeight = 0
  
  gridWidth = positionX + grid.length * rectWidth;
  gridHeight = positionY + grid[0].length * rectHeight;
  
  for (let x=0; x<grid.length; x++){
    for(let y=0; y<grid[x].length; y++){
      rect(
        positionX+x*rectWidth,
        positionY+y*rectHeight,
        rectWidth,
        rectHeight
      )
      
    }
  }
  return [positionX, positionY, gridWidth, gridHeight]
}