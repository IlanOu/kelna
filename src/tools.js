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
function findIndexOfPositionIn2dArray(posX,posY,array,ArrayWidth,ArrayHeight){
    for (let row = 0; row < array.length; row++) {
        for (let column = 0; column < array[0].length; column++) {
            let minX = xStartWorld + ArrayWidth * column;
            let minY = yStartWorld + ArrayHeight * row ;
            let maxX = xStartWorld + ArrayWidth * (column + 1);
            let maxY = yStartWorld + ArrayHeight * (row + 1);

                  
            if (posX > minX && posX < maxX && posY > minY && posY < maxY) {
                previous_index_pos = [column, row];
                return [column, row];  
            }    
        }  
    }
    return previous_index_pos;
}


function rectIsInRect(Object1X, Object1Y, Object1Width, Object1Height, Object2X, Object2Y, Object2Width, Object2Height) {
    // Vérifier si les boîtes se chevauchent

    return (Object1X + Object1Width >= Object2X &&
    Object2X + Object2Width >= Object1X &&
    Object1Y + Object1Height >= Object2Y &&
    Object2Y + Object2Height >= Object1Y);
    
}
