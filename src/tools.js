// function getCurrentMap(Array , x,y){
//     let currentMapPosX = Math.floor(x/(Array.numberOfRow*rectWidth));
//     let currentMapPosY = Math.floor(y/(Array.numberOfColumns*rectHeight));

//     let currentMap = World.worldsMap[currentMapPosY][currentMapPosX]
//     return Array[currentMap]
// }



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


function findIndexValueIn2dArray(array, value){
      for (let row = 0; row < array[0].length; row++) {
        for (let column = 0; column < array.length; column++) {
            // alert(array)      
            if (value === array[column][row]) {
                return [column,row];
                  
            }    
        }  
    }  
    return null;
}


let previous_index_pos;
function findIndexOfPositionIn2dArray(posX,posY,array,sideArrayX,sideArrayY){
    for (let row = 0; row < array.length; row++) {
        for (let column = 0; column < array[0].length; column++) {
            let minX = xStartWorld + sideArrayX * column;
            let minY = yStartWorld + sideArrayY * row ;
            let maxX = xStartWorld + sideArrayX * (column + 1);
            let maxY = yStartWorld + sideArrayY * (row + 1);

                  
            if (posX > minX && posX < maxX && posY > minY && posY < maxY) {
                previous_index_pos = [column, row];
                return [column, row];  
            }    
        }  
    }
    return previous_index_pos;
}

