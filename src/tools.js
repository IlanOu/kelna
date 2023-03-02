// Obtenir le nombre maximum de cases dans le rectangle
function getNumberOfCasesInRect(bigRectWidth, bigRectHeight, rectWidth, rectHeight) {
    let numberOfCasesX = Math.floor(bigRectWidth / rectWidth)
    let numberOfCasesY = Math.floor(bigRectHeight / rectHeight)

    return [numberOfCasesX, numberOfCasesY]
}


// création d'une grille de N colonnes et M lignes 
function createTable(columnNumber, rowNumber) {
    let grid = []

    for (let x = 0; x < columnNumber; x++) {
        let row = []
        for (let y = 0; y < rowNumber; y++) {
            row.push(0)
        }
        grid.push(row)
    }
    return grid
}


function findIndexValueIn2dArray(array, value) {
    for (let row = 0; row < array[0].length; row++) {
        for (let column = 0; column < array.length; column++) {
            if (value === array[column][row]) {
                return [column, row];

            }
        }
    }
    return null;
}


let previous_index_pos;
function findIndexOfPositionIn2dArray(posX, posY, array, ArrayWidth, ArrayHeight) {
    for (let row = 0; row < array.length; row++) {
        for (let column = 0; column < array[0].length; column++) {
            let minX = xStartWorld + ArrayWidth * column;
            let minY = yStartWorld + ArrayHeight * row;
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


function rectIsInRect(rect1X, rect1Y, rect1Width, rect1Height, rect2X, rect2Y, rect2Width, rect2Height) {
    return (rect1X < rect2X + rect2Width &&
        rect1X + rect1Width > rect2X &&
        rect1Y < rect2Y + rect2Height &&
        rect1Height + rect1Y > rect2Y);
}

function pointIsInRect(x, y, rectX, rectY, rectW, rectH) {
    return x >= rectX && x <= rectX + rectW && y >= rectY && y <= rectY + rectH;
}


// contraindre les position X, Y dans le containeur
function containedPositionsIn(objectPositionX,
    objectPositionY,
    objectWidth,
    objectHeight,
    containerWidth,
    containerHeight) {
    return [constrain(objectPositionX,
        0,
        containerWidth - objectWidth),
    constrain(objectPositionY,
        0,
        containerHeight - objectHeight)]
}

// ajouter la gravité à la positionY !! ATTENTION, la velocité doit être ACTUALISEE !
function getPositionWithGravity(positionY, velocityY, gravityForce, objectMass) {
    velocityY += (gravityForce * objectMass) / 20;
    positionY += velocityY;
    return [positionY, velocityY]
}

function isGrounded(objectPositionX, objectPositionY, objectWidth, objectHeight, groundX1, groundY1, groundX2) {
    return rectIsInRect(objectPositionX, objectPositionY + objectHeight - 1, objectWidth, objectHeight, groundX1, groundY1, groundX2, groundY1)
}

function removeDuplicates(array) {
    return array.filter((item,
        index) => array.indexOf(item) === index);
}

function limitNumberWithinRange(number, minimum, maximum) {
    let parsed = parseInt(number)
    return Math.min(Math.max(parsed, minimum), maximum)
}



// PLAY MUSIC 

let PlayMusic = () => {

    if (MusicIsActivate === false && Pressing === false) {
        MusicIsActivate = true
        SongBackground.loop()
        ColorForRectMusic = 50
        Pressing = true

    } 
    else if (MusicIsActivate === true && Pressing === false) {
        MusicIsActivate = false
        SongBackground.pause()
        ColorForRectMusic = 255
        Pressing = true

    }

}


function mouseClicked() {
    if (Pressing === true) {
        Pressing = false;
    }
}



// ~ Agrandir un carré
function expandRect(x,y,width,height,value){
    let NewWidth = width * value
    let NewHeight = height * value
    x = x - (NewWidth / 2) + (width / 2)
    y = y - (NewHeight / 2) + (height / 2)

    return [x, y, NewWidth, NewHeight]
}