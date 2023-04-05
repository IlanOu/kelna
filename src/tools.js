//~ Obtenir le nombre maximum de cases dans le rectangle
function getNumberOfCasesInRect(bigRectWidth, bigRectHeight, rectWidth, rectHeight) {
    let numberOfCasesX = Math.floor(bigRectWidth / rectWidth)
    let numberOfCasesY = Math.floor(bigRectHeight / rectHeight)

    return [numberOfCasesX, numberOfCasesY]
}


//~ création d'une grille de N colonnes et M lignes 
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


//~ Trouve la valeur de l'index de la 2eme array 
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


//~ Trouve l'index de la position du 2eme array
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


//~ Rect is in Rect
function rectIsInRect(rect1X, rect1Y, rect1Width, rect1Height, rect2X, rect2Y, rect2Width, rect2Height) {
    return (rect1X < rect2X + rect2Width &&
        rect1X + rect1Width > rect2X &&
        rect1Y < rect2Y + rect2Height &&
        rect1Height + rect1Y > rect2Y);
}


//~ Point dans le rect
function pointIsInRect(x, y, rectX, rectY, rectW, rectH) {
    return x >= rectX && x <= rectX + rectW && y >= rectY && y <= rectY + rectH;
}


//~ contraindre les position X, Y dans le containeur
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


//~ ajouter la gravité à la positionY !! ATTENTION, la velocité doit être ACTUALISEE !
function getPositionWithGravity(positionY, velocityY, gravityForce, objectMass) {
    velocityY += (gravityForce * objectMass) / 20;
    positionY += velocityY;
    return [positionY, velocityY]
}


//~ Est mis à la terre
function isGrounded(objectPositionX, objectPositionY, objectWidth, objectHeight, groundX1, groundY1, groundX2) {
    return rectIsInRect(objectPositionX, objectPositionY + objectHeight - 1, objectWidth, objectHeight, groundX1, groundY1, groundX2, groundY1)
}


//~ supprimer les doublons
function removeDuplicates(array) {
    return array.filter((item,
        index) => array.indexOf(item) === index);
}


//~ nombre limite dans la plage
function limitNumberWithinRange(number, minimum, maximum) {
    let parsed = parseInt(number)
    return Math.min(Math.max(parsed, minimum), maximum)
}



//~ Joue de la music 
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


//~ Joue les songs
let PlaySong = () => {

    if (SongIsActivate === false && Pressing === false) {
        SongIsActivate = true
        ColorForRectSong = 50
        Pressing = true

    }
    else if (SongIsActivate === true && Pressing === false) {
        SongIsActivate = false
        ColorForRectSong = 255
        Pressing = true

    }

}


//~ interact health
let ForInteract = () => {

    //? Interaction avec les pavés tactiles
    if (gettingHurt) {
        Degat(1);
        gettingHurt = false;
    }
    if (gettingHeal) {
        Regen(1);
        gettingHeal = false;
    }
    if (addHeart) {
        OneHeart(1);
        addHeart = false;
    }
    if (removeHeart) {
        DownHeart(1);
        removeHeart = false;
    }
}


//~ Degat
let Degat = (NbreDeDegat) => {
    healthPlayer -= NbreDeDegat; //& Enlever point de vie
    healthPlayer = constrain(healthPlayer, 0, maxHealth); //& Depasse pas la vie, de 0 et de la vie max
}


//~ Regeneration
let Regen = () => {
    if (healthPlayer < maxHealth) {
        healthPlayer += 1;
        healthPlayer = constrain(healthPlayer, 0, maxHealth);
    }
}


//~ Ajout des coeurs
let OneHeart = () => {
    healthPlayer += 1;
    maxHealth += 1;
    healthPlayer = constrain(healthPlayer, 0, maxHealth);
}


//~ Supprime des coeurs
let DownHeart = () => {
    healthPlayer -= 1;
    maxHealth -= 1;
    healthPlayer = constrain(healthPlayer, 0, maxHealth);
}


//~ Au clic de la souris pressing est lis a false automatiquement
function mouseClicked() {
    if (Pressing === true) {
        Pressing = false;
    }
}


//~ obtenir des cartes à vérifier
function getMapsToCheck(characterPositionX, characterPositionY) {
    let mapsToCheck = []


    //? map actuelle
    let currentMapInWorld = findIndexOfPositionIn2dArray(characterPositionX, characterPositionY, World.worldsMap, rectWidth * Maps.numberOfRow, rectHeight * Maps.numberOfColumns)
    mapsToCheck.push(currentMapInWorld)

    //? map à DROITE du perso
    let atRightMapInWorld = findIndexOfPositionIn2dArray(characterPositionX + (rectWidth * Maps.numberOfRow) / 2, characterPositionY, World.worldsMap, rectWidth * Maps.numberOfRow, rectHeight * Maps.numberOfColumns)
    mapsToCheck.push(atRightMapInWorld)

    //? map à GAUCHE du perso
    let atLeftMapInWorld = findIndexOfPositionIn2dArray(characterPositionX - (rectWidth * Maps.numberOfRow) / 2, characterPositionY, World.worldsMap, rectWidth * Maps.numberOfRow, rectHeight * Maps.numberOfColumns)
    mapsToCheck.push(atLeftMapInWorld)

    //? map en HAUT du perso
    let atTopMapInWorld = findIndexOfPositionIn2dArray(characterPositionX, characterPositionY - (rectHeight * Maps.numberOfColumns) / 2, World.worldsMap, rectWidth * Maps.numberOfRow, rectHeight * Maps.numberOfColumns)
    mapsToCheck.push(atTopMapInWorld)

    //? map en BAS du perso
    let atBottomMapInWorld = findIndexOfPositionIn2dArray(characterPositionX, characterPositionY + (rectHeight * Maps.numberOfColumns) / 2, World.worldsMap, rectWidth * Maps.numberOfRow, rectHeight * Maps.numberOfColumns)
    mapsToCheck.push(atBottomMapInWorld)

    //? map en BAS à DROITE du perso
    let atBottomRightMapInWorld = findIndexOfPositionIn2dArray(characterPositionX + (rectWidth * Maps.numberOfRow) / 2, characterPositionY + (rectHeight * Maps.numberOfColumns) / 2, World.worldsMap, rectWidth * Maps.numberOfRow, rectHeight * Maps.numberOfColumns)
    mapsToCheck.push(atBottomRightMapInWorld)

    //? map en BAS à GAUCHE du perso
    let atBottomLeftMapInWorld = findIndexOfPositionIn2dArray(characterPositionX - (rectWidth * Maps.numberOfRow) / 2, characterPositionY + (rectHeight * Maps.numberOfColumns) / 2, World.worldsMap, rectWidth * Maps.numberOfRow, rectHeight * Maps.numberOfColumns)
    mapsToCheck.push(atBottomLeftMapInWorld)

    //? map en HAUT à DROITE du perso
    let atTopRightMapInWorld = findIndexOfPositionIn2dArray(characterPositionX + (rectWidth * Maps.numberOfRow) / 2, characterPositionY - (rectHeight * Maps.numberOfColumns) / 2, World.worldsMap, rectWidth * Maps.numberOfRow, rectHeight * Maps.numberOfColumns)
    mapsToCheck.push(atTopRightMapInWorld)

    //? map en HAUT à GAUCHE du perso
    let atTopLeftMapInWorld = findIndexOfPositionIn2dArray(characterPositionX - (rectWidth * Maps.numberOfRow) / 2, characterPositionY - (rectHeight * Maps.numberOfColumns) / 2, World.worldsMap, rectWidth * Maps.numberOfRow, rectHeight * Maps.numberOfColumns)
    mapsToCheck.push(atTopLeftMapInWorld)


    mapsToCheck = removeDuplicates(mapsToCheck)

    return mapsToCheck
}


// ~ Agrandir un carré
function expandRect(x, y, width, height, valueX = 1, valueY = 1) {
    let NewWidth = width * valueX
    let NewHeight = height * valueY
    x = x - (NewWidth / 2) + (width / 2)
    y = y - (NewHeight / 2) + (height / 2)

    return [x, y, NewWidth, NewHeight]
}


//~ positions d'un caré en x et y, pas en pixel.
function getPositionAt(mapName = "", positionX = 0, positionY = 0) {
    let mapExist = false;
    let numberOfCasesX = Maps.numberOfRow
    let numberOfCasesY = Maps.numberOfColumns
    let indexMapX = 0;
    let indexMapY = 0;

    World.worldsMap.forEach(row => {
        if (row.includes(mapName)) {
            mapExist = true;
            indexMapX = row.indexOf(mapName);
        } else {
            indexMapY++
        }
    });

    if (!mapExist) {
        Object.entries(Houses).forEach(row => {
            row = row[0]
            if (row.includes(mapName)) {
                mapExist = true;
                indexMapX = row.indexOf(mapName);
            } else {
                indexMapY++
            }
        });
    }

    if (mapExist) {
        let pixelsX = (indexMapX * numberOfCasesX * rectWidth) + (positionX * rectWidth)
        let pixelsY = (indexMapY * numberOfCasesY * rectHeight) + (positionY * rectHeight)

        return { "pixelX": pixelsX, "pixelY": pixelsY }
    } else {
        throw new Error("Map name not found in World.json : " + mapName);
    }
}


//~ Dessine les touches pour les interactions
function drawKey(key) {
    let keyBackground = [(characterPositionX),
    characterPositionY - 50,
        interactionWidth,
        interactionHeight]

    let textKey = [characterPositionX + (keyBackground[2] / 2),
    characterPositionY - 50 + (keyBackground[3] / 8)]

    fill(255)
    drawButton(keyBackground)
    drawText(key, 20, textKey, "center")
}


//~ Dessine les touches pour les interactions
function drawKeyAt(key, positionX, positionY, haveBackground = false) {
    let keyBackground = [(positionX),
    positionY - 50,
        interactionWidth,
        interactionHeight]

    let textKey = [positionX + (keyBackground[2] / 2),
    positionY - 50 + (keyBackground[3] / 8)]

    if (haveBackground) {
        drawButton(keyBackground, undefined, false)
    }

    if (key == "!") {
        drawText(key, 30, textKey, "center", [255, 0, 0])

    } else {
        drawText(key, 20, textKey, "center", [0, 0, 0])
    }

}


//~ Recupere le nom du PNJ a l'interaction 
function getPNJName() {
    let namePNJ = ""

    Object.entries(ForPNJ.PNJS).forEach(PNJ => {
        if (PNJ[1].seePlayer) {
            namePNJ = PNJ[0]
        }
    });
    return namePNJ
}


//~ Recupere si le PNJ regarde le joueur
function getPNJSeePlayer(namePNJ) {
    let echangePNJ = false

    Object.entries(ForPNJ.PNJS).forEach(PNJ => {
        if (PNJ[0] == namePNJ) {
            echangePNJ = PNJ[1].seePlayer
        }
    });
    return echangePNJ
}


//~ Recupere si le PNJ peut faire un echange 
function getEchangePNJ(namePNJ) {

    let echangePNJ = []

    Object.entries(ForPNJ.PNJS).forEach(PNJ => {
        if (PNJ[0] == namePNJ) {
            echangePNJ = PNJ[1].echange
        }
    });
    return echangePNJ
}


//~ Recupere les items et son nom
function getItems(nameItem) {

    let item = {}

    Object.entries(ForItems.Items).forEach(element => {
        if (element[0] == nameItem) {
            item = element[1]
        }
    });
    return item
}


//~ Coupe un tileset
function cutTileset(tileset, tileResolution = [0, 0], tilesetResolution = [1, 1]) {
    let tilesList = []

    horizontalSquareCount = tilesetResolution[0] / tileResolution[0];
    verticalSquareCount = tilesetResolution[1] / tileResolution[1];

    for (let y = 0; y < tilesetResolution[1]; y += tileResolution[1]) {
        for (let x = 0; x < tilesetResolution[0]; x += tileResolution[0]) {
            tilesList.push(tileset.get(x, y, tileResolution[0], tileResolution[1]));
        }
    }
    return tilesList
}



function getIndexOfItemCategory(itemCategory) {

    let index = null;

    switch (itemCategory) {
        case 'weapon':

            index = 0;

            break;

        case "food":

            index = 1

            break;

        case "other":

            index = 2

            break;

    }

    return index

}




//~ Troc
function troc(requis, gain) {
    let canTradeThisObject = false

    requis.every(objRequis => {
        if (Inventory.includes(objRequis)) {
            canTradeThisObject = true
        } else {
            canTradeThisObject = false
            return false
        }
    })

    if (canTradeThisObject) {

        popUp("Voulez-vous vraiment échanger cet objet ?", "choice")
        if (playerAnswersYes) {

            requis.forEach(objRequis => {
                console.log(objRequis)
                removeItemFromInventory(getIndexOfItemCategory(objRequis.category))
            })

            gain.forEach(objGain => {
                addItemToInventory(objGain)
            })

            playerAnswersYes = false
            haveToTrade = false
        }
    }
    else {
        popUp("Vous n'avez pas les objets requis !")
    }

}

//~ Pop up
function popUp(message, options = "info") {



    let interfacePopUpWidth = 400
    let interfacePopUpHeight = 400
    let interfacePopUpX = (viewportDisplayWidth / 2) - (interfacePopUpWidth / 2)
    let interfacePopUpY = (viewportDisplayHeight / 2) - (interfacePopUpHeight / 2)
    // let interfacePopUp = [interfacePopUpX, interfacePopUpY, interfacePopUpWidth, interfacePopUpHeight]


    image(BackPop, interfacePopUpX, interfacePopUpY, interfacePopUpWidth, interfacePopUpHeight)


    if (options == "info") {

        waitingAnswer = true;

        let buttonPopUpW = 150
        let buttonPopUpH = 20
        let buttonPopUpX = interfacePopUpX + (interfacePopUpWidth / 2) - (buttonPopUpW / 2)
        let buttonPopUpY = interfacePopUpY + (interfacePopUpHeight / 1.8)
        let textPopUpX = buttonPopUpX + (buttonPopUpW / 2)

        let buttonPopUp = [buttonPopUpX, buttonPopUpY, buttonPopUpW, buttonPopUpH]

        fill(128, 128, 128)
        drawButton(buttonPopUp)
        drawText("OK", 15, [textPopUpX, buttonPopUpY], "center")

        drawText(message, 15, [interfacePopUpX, interfacePopUpY], "left")


        if (buttonClicked(buttonPopUp)) {
            waitingAnswer = false
            PressInteractPNJ = false
            popUpShown = false
        }


    }
    else if (options == "choice") {

        waitingAnswer = true;

        let buttonPopUpWYes = 150
        let buttonPopUpHYes = 20
        let buttonPopUpXYes = interfacePopUpX + (interfacePopUpWidth / 2) - (buttonPopUpWYes / 2)
        let buttonPopUpYYes = interfacePopUpY + (interfacePopUpHeight / 1.8)
        let textPopUpXYes = buttonPopUpXYes + (buttonPopUpWYes / 2)

        let buttonPopUpYes = [buttonPopUpXYes, buttonPopUpYYes, buttonPopUpWYes, buttonPopUpHYes]


        let buttonPopUpWNo = 150
        let buttonPopUpHNo = 20
        let buttonPopUpXNo = interfacePopUpX + (interfacePopUpWidth / 2) - (buttonPopUpWNo / 2)
        let buttonPopUpYNo = interfacePopUpY + (interfacePopUpHeight / 1.8) + buttonPopUpHYes + 15
        let textPopUpXNo = buttonPopUpXNo + (buttonPopUpWNo / 2)

        let buttonPopUpNo = [buttonPopUpXNo, buttonPopUpYNo, buttonPopUpWNo, buttonPopUpHNo]


        fill(128, 128, 128)
        drawButton(buttonPopUpYes)
        drawText("YES", 15, [textPopUpXYes, buttonPopUpYYes], "center")
        //

        fill(128, 128, 128)
        drawButton(buttonPopUpNo)
        drawText("NO", 15, [textPopUpXNo, buttonPopUpYNo], "center")


        drawText(message, 15, [interfacePopUpX, interfacePopUpY], "left")
        // pour qu'il sois au milieu faut qu'il fasse : 800

        if (buttonClicked(buttonPopUpYes)) {
            playerAnswersYes = true
            waitingAnswer = false
            popUpShown = false
            PressInteractPNJ = false
        }
        if (buttonClicked(buttonPopUpNo)) {
            waitingAnswer = false
            popUpShown = false
            PressInteractPNJ = false
        }
    }
}