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
      
      if(grid[x][y] === 0){
        fill(color(255, 255, 255));
      }else if (grid[x][y] === 1) {
          fill(color(255, 0, 0));
      }

      rect(
        positionY+y*rectWidth,
        positionX+x*rectHeight,
        rectWidth,
        rectHeight
      )
      
    }
  }
  return [positionX, positionY, gridWidth, gridHeight]
}


function drawGrid(){

  background(220);
  stroke(0)

  // récupérer le maximum de cases possible dans le canvas
  let [maxNumberCasesX, maxNumberCasesY] = getNumberOfCasesInRect(
    windowWidth,
    windowHeight,
    rectWidth,
    rectHeight
  )

  // générer un tableau avec le maximum de cases possible
  // let grid = createTable(maxNumberCasesX, maxNumberCasesY)
  // let grid = createTable(10, 10)
  let grid = Maps.map1.layers[1]
  fill(255)

  // afficher le tableau sous forme de grille en position 0,0
  let [gridX1, gridY1, gridX2, gridY2] = displayGrid(grid, 0, 0, rectWidth, rectHeight)


  return [grid, gridX1, gridY1,gridX2, gridY2]
}
