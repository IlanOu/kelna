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



//~ Trouve l'index d'une map dans world 
function findIndexValueIn2dArray(array, mapName) {
    for (let row = 0; row < array[0].length; row++) {
        for (let column = 0; column < array.length; column++) {
            if (mapName === array[column][row]) {
                return [column, row];
            }
        }
    }
    return null;
}


//~ Trouver l'index d'une position dans un tableau 2d
let previous_index_pos = null;

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



//~ Chercher un tableau dans un tableau 2D
function entityMustBeShown(mob) {

    let mapsToCheck = getMapsToCheck(characterPositionX, characterPositionY);
    let positionMapMob = findIndexValueIn2dArray(World.worldsMap, mob.mapName)
    let invertedArrayMapPosition = []
    invertedArrayMapPosition[0] = positionMapMob[1]
    invertedArrayMapPosition[1] = positionMapMob[0]


    let inChunksCheck = false

    mapsToCheck.some(map => {
        if (!inChunksCheck) {
            inChunksCheck = invertedArrayMapPosition.every((v, i) => v === map[i])
        }
    })

    return inChunksCheck
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
            containerHeight - objectHeight)
    ]
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



//~ Joue / desactive de la music 
let PlayMusic = () => {
    if (!musicEnabled && !Pressing && !endTheGameCredits && !creditsInHome) {
        musicEnabled = true
        musicGame.loop()
        Pressing = true

    } else if (musicEnabled && !Pressing && !endTheGameCredits && !creditsInHome) {
        musicEnabled = false
        musicGame.pause()
        Pressing = true

    }
}


//~ Joue des voix dés le début du jeu
function startGameVoice() {
    if (soundEnabled) {
        let indexSong = Math.floor(Math.random() * VoiceStartSong.length);
        VoiceStartSong[indexSong].play()
    }
}



//~ Joue des voix a la mort du jouer
function DieGameVoice() {
    if (soundEnabled) {
        let indexSong = Math.floor(Math.random() * VoicesDieSong.length);
        VoicesDieSong[indexSong].play()
    }
}


//~ Joue des voix de PNJ
function pnjGameVoice() {
    /*
    if (soundEnabled) {
        let indexSong = Math.floor(Math.random() * soundPNJ.length);
        if (!soundPNJ[indexSong].isPlaying()) {
            if (aPNJCanTalk() || aPNJCanTrade()) {
                soundPNJ[indexSong].play()
            } else {
                soundPNJ[indexSong].pause()
            }
        }
    }
    */
}




//~ Joue / desactive les songs
let PlaySong = () => {

    if (!soundEnabled && !Pressing) {
        soundEnabled = true
        Pressing = true

    } else if (soundEnabled && !Pressing) {
        soundEnabled = false
        Pressing = true

    }

}


function soundEffects() {

    if (soundEnabled) {
        if (!soundHit.isPlaying()) {
            if (characterMovement == "getHit") {
                soundHit.play()
            } else {
                soundHit.pause()
            }
        }
        if (!soundDie.isPlaying()) {
            if (characterMovement === "die") {
                soundDie.play()
            } else {
                soundDie.pause()
            }
        }
        if (!soundSwordHit1.isPlaying()) {
            if (characterMovement == "hit") {
                soundSwordHit1.play()
            } else {
                soundSwordHit1.pause()
            }
        }
        if (!soundSwordHit2.isPlaying()) {
            if (characterMovement == "hit2") {
                soundSwordHit2.play()
            } else {
                soundSwordHit2.pause()
            }
        }
        if (!soundSwordHit3.isPlaying()) {
            if (characterMovement == "hit3") {
                soundSwordHit3.play()
            } else {
                soundSwordHit3.pause()
            }
        }
        if (!soundClick.isPlaying()) {
            if (buttonClickSound) {
                soundClick.play()
                buttonClickSound = false
            } else {
                soundClick.pause()
            }
        }
    }
}


//~ hurtPlayer
function hurtPlayer(amount) {
    if (!logged) {
        healthPlayer -= amount; //& Enlever point de vie
        healthPlayer = constrain(healthPlayer, 0, maxHealth); //& Depasse pas la vie, de 0 et de la vie max
    } else {
        healthPlayer += amount; //& Enlever point de vie
        healthPlayer = constrain(healthPlayer, 0, maxHealth);
    }
}


//~ regenPlayer
function regenPlayer(amount = 1) {
    if (healthPlayer + amount <= maxHealth) {
        healthPlayer += amount;
    } else {
        healthPlayer = maxHealth
    }
}


//~ Ajout des coeurs
function upgradePlayerHealth(amount) {
    maxHealth += amount;
    if (healthPlayer == maxHealth) {
        healthPlayer += amount;
    }
    healthPlayer = constrain(healthPlayer, 0, maxHealth);
}


//~ Supprime des coeurs
function downgradePlayerHealth(amount) {
    maxHealth -= amount;
    healthPlayer -= amount;

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
    let atTopMapInWorld = findIndexOfPositionIn2dArray(characterPositionX, characterPositionY - (rectHeight * Maps.numberOfColumns), World.worldsMap, rectWidth * Maps.numberOfRow, rectHeight * Maps.numberOfColumns)
    mapsToCheck.push(atTopMapInWorld)

    //? map en BAS du perso
    let atBottomMapInWorld = findIndexOfPositionIn2dArray(characterPositionX, characterPositionY + (rectHeight * Maps.numberOfColumns), World.worldsMap, rectWidth * Maps.numberOfRow, rectHeight * Maps.numberOfColumns)
    mapsToCheck.push(atBottomMapInWorld)

    //? map en BAS à DROITE du perso
    let atBottomRightMapInWorld = findIndexOfPositionIn2dArray(characterPositionX + (rectWidth * Maps.numberOfRow) / 2, characterPositionY + (rectHeight * Maps.numberOfColumns), World.worldsMap, rectWidth * Maps.numberOfRow, rectHeight * Maps.numberOfColumns)
    mapsToCheck.push(atBottomRightMapInWorld)

    //? map en BAS à GAUCHE du perso
    let atBottomLeftMapInWorld = findIndexOfPositionIn2dArray(characterPositionX - (rectWidth * Maps.numberOfRow) / 2, characterPositionY + (rectHeight * Maps.numberOfColumns), World.worldsMap, rectWidth * Maps.numberOfRow, rectHeight * Maps.numberOfColumns)
    mapsToCheck.push(atBottomLeftMapInWorld)

    //? map en HAUT à DROITE du perso
    let atTopRightMapInWorld = findIndexOfPositionIn2dArray(characterPositionX + (rectWidth * Maps.numberOfRow) / 2, characterPositionY - (rectHeight * Maps.numberOfColumns), World.worldsMap, rectWidth * Maps.numberOfRow, rectHeight * Maps.numberOfColumns)
    mapsToCheck.push(atTopRightMapInWorld)

    //? map en HAUT à GAUCHE du perso
    let atTopLeftMapInWorld = findIndexOfPositionIn2dArray(characterPositionX - (rectWidth * Maps.numberOfRow) / 2, characterPositionY - (rectHeight * Maps.numberOfColumns), World.worldsMap, rectWidth * Maps.numberOfRow, rectHeight * Maps.numberOfColumns)
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


//~ prend en param les positions d'un carré en x et y, pas en pixel. Ressort des pixels
function getPositionAt(mapName = "", positionX = 0, positionY = 0) {
    let mapExist = false;
    let numberOfCasesX = Maps.numberOfRow
    let numberOfCasesY = Maps.numberOfColumns
    let indexMapX = 0;
    let indexMapY = 0;



    Object.entries(World.worldsMap).forEach(row => {
        row = row[1]

        if (!mapExist) {
            if (row.includes(mapName)) {
                mapExist = true;
                indexMapX = row.indexOf(mapName);
            } else {
                indexMapY++
            }
        }
    })

    if (!mapExist) {
        mapExist = true;
        indexMapX = 0
        indexMapY = 0

        return {
            "pixelX": positionX * rectWidth,
            "pixelY": positionY * rectHeight
        }
    }

    if (mapExist) {
        let pixelsX = (indexMapX * numberOfCasesX * rectWidth) + (positionX * rectWidth)
        let pixelsY = (indexMapY * numberOfCasesY * rectHeight) + (positionY * rectHeight)

        return {
            "pixelX": pixelsX,
            "pixelY": pixelsY
        }
    } else {
        throw new Error("Map name not found in World.json : " + mapName);
    }
}


//~ Dessine les touches pour les interactions
function drawKey(key) {

    let PosX = 0
    let PosY = 0

    if (engineOne) {
        PosX = characterPositionX
        PosY = characterPositionY
    } else {
        PosX = characterInsidePosX + (characterWidth / 2) - (interactionWidth / 1.2)
        PosY = characterInsidePosY - (characterHeight / 3)
    }

    let keyBackground = [
        PosX,
        PosY - (interactionHeight * 1.5),
        interactionWidth,
        interactionHeight
    ]

    fill(255)
    drawButton(keyBackground, buttonE)
    // drawText(key, 20, textKey, [CENTER, BASELINE])

}


//~ Dessine les touches pour les interactions
function drawKeyAt(key, positionX, positionY, haveBackground = false) {
    /*let keyBackground = [(positionX),
        positionY - 50,
        interactionWidth,
        interactionHeight
    ]

    let textKey = [positionX + (keyBackground[2] / 2),
        positionY - 50 + (keyBackground[3] / 8)
    ]

    if (haveBackground) {
        drawButton(keyBackground, undefined, false)
    }

    if (key == "!") {
        drawText(key, 30, textKey, [CENTER, BASELINE], [255, 0, 0])

    } else {
        drawText(key, 20, textKey, [CENTER, BASELINE], [0, 0, 0])
    } */

    image(pointEnnemis, positionX + 15, positionY - 52, 50, 50);

}



function showMessage(message) {
    let popupMarginTop = 40

    let popupMessageWidth = 400
    let popupMessageHeight = 100
    let popupPositionX = (viewportDisplayWidth / 2) - (popupMessageWidth / 2)
    let popupPositionY = 0 + popupMarginTop

    let messageFontSize = 30

    let messagePositionX = popupPositionX + popupMessageWidth / 2
    let messagePositionY = popupPositionY + (popupMessageHeight / 2) - messageFontSize / 1.2

    let messageTextPosition = [messagePositionX, messagePositionY]

    image(longButton, popupPositionX, popupPositionY, popupMessageWidth, popupMessageHeight)
    drawText(message, 30, messageTextPosition, [CENTER, BASELINE], [0, 0, 0])

}



function tempMessage() {
    canShowMessage = true

    setTimeout(() => {
        canShowMessage = false
    }, 1000)
}

//~ Recupere le nom du PNJ a l'interaction 
function getPNJName() {
    let namePNJ = ""

    Object.entries(pnjJSON.PNJS).forEach(PNJ => {
        if (PNJ[1].seePlayer) {
            namePNJ = PNJ[0]
        }
    });
    return namePNJ
}


//~ Recupere si le PNJ regarde le joueur
function getPNJSeePlayer(namePNJ) {
    let echangePNJ = false



    Object.entries(pnjJSON.PNJS).forEach(PNJ => {
        if (PNJ[0] == namePNJ) {
            echangePNJ = PNJ[1].seePlayer
        }
    });
    return echangePNJ
}


//~ Recupere les echanges d'un PNJ 
function getEchangePNJ(namePNJ) {

    let echangePNJ = []

    Object.entries(pnjJSON.PNJS).forEach(PNJ => {
        if (PNJ[0] == namePNJ) {
            echangePNJ = PNJ[1].echange
        } else if (echangePNJ != undefined) {
            return undefined
        }
    });
    return echangePNJ
}

//~ Recupere les discussions d'un PNJ 
function getTalkPNJ(namePNJ) {

    let talkPNJ = []

    Object.entries(pnjJSON.PNJS).forEach(PNJ => {
        if (PNJ[0] == namePNJ) {
            talkPNJ = PNJ[1].discussions
        } else if (talkPNJ != undefined) {
            return undefined
        }
    });
    return talkPNJ
}
//~ Recupere les items avec nom
function getItems(nameItem) {

    let item = {}

    Object.entries(itemsJSON.Items).forEach(element => {
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


//~ Trouve la categorie de l'item et le met dans la slot pour
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
    cursor('default')
    textFont(pixelFont)
    let canTradeThisObject = false

    requis.every(objRequis => {
        Inventory.forEach(item => {
            if(objRequis.category == "other"){
                item = Inventory[2]
            } else if (objRequis.category == "weapon") {
                item = Inventory[0]
            } else if (objRequis.category == "food") {
                item = Inventory[1]
            }
            if (objRequis.name === item.name) {
                canTradeThisObject = true
            } else {
                canTradeThisObject = false
                return false
            }
        });

    })

    if (canTradeThisObject) {

        popUp("Voulez-vous vraiment \n échanger cet objet ?", "choice")
        if (playerAnswersYes) {

            requis.forEach(objRequis => {
                removeItemFromInventory(getIndexOfItemCategory(objRequis.category))
            })

            gain.forEach(objGain => {
                addItemToInventory(objGain)
            })

            playerAnswersYes = false
            haveToTrade = false
        }
    } else {
        popUp("Vous n'avez pas \n les objets requis !")
    }

}



//~ Pop up
function popUp(message, options = "info") {
    cursor('default')


    let interfacePopUpWidth = 66 * 5
    let interfacePopUpHeight = 35 * 5
    let interfacePopUpX = (viewportDisplayWidth / 2) - (interfacePopUpWidth / 2)
    let interfacePopUpY = (viewportDisplayHeight / 2) - (interfacePopUpHeight / 2)


    image(smallPopUp, interfacePopUpX, interfacePopUpY, interfacePopUpWidth, interfacePopUpHeight)


    if (options == "info") {

        waitingAnswer = true;

        let buttonPopUpW = 75
        let buttonPopUpH = 60
        let buttonPopUpX = interfacePopUpX + (interfacePopUpWidth / 2) - (buttonPopUpW / 2)
        let buttonPopUpY = interfacePopUpY + (interfacePopUpHeight / 2)
        let textPopUpX = buttonPopUpX + (buttonPopUpW / 2)

        let buttonPopUp = [buttonPopUpX, buttonPopUpY, buttonPopUpW, buttonPopUpH]


        if (buttonHover(buttonPopUp)) {
            drawButton(buttonPopUp, smallButtonHover, true, 255);
        } else {
            drawButton(buttonPopUp, smallButton, true, 255);
        }

        drawText("OK", 40, [textPopUpX, buttonPopUpY - 0.5], [CENTER, BASELINE], [0, 0, 0])

        drawText(message, 30, [textPopUpX, interfacePopUpY], [CENTER, BASELINE], [119, 54, 51])

        if (buttonClicked(buttonPopUp)) {
            waitingAnswer = false
            PressInteractPNJ = false
            popUpShown = false
        }


    } else if (options == "choice") {

        waitingAnswer = true;


        let textPopUpX = interfacePopUpX + (interfacePopUpWidth / 2)

        let buttonPopUpWYes = 75
        let buttonPopUpHYes = 60
        let buttonPopUpXYes = interfacePopUpX + (interfacePopUpWidth / 5)
        let buttonPopUpYYes = interfacePopUpY + (interfacePopUpHeight / 1.9)
        let textPopUpXYes = buttonPopUpXYes + (buttonPopUpWYes / 2)

        let buttonPopUpYes = [buttonPopUpXYes, buttonPopUpYYes, buttonPopUpWYes, buttonPopUpHYes]


        let buttonPopUpWNo = 75
        let buttonPopUpHNo = 60
        let buttonPopUpXNo = interfacePopUpX + (interfacePopUpWidth / 1.8)
        let buttonPopUpYNo = interfacePopUpY + (interfacePopUpHeight / 1.9)
        let textPopUpXNo = buttonPopUpXNo + (buttonPopUpWNo / 2)

        let buttonPopUpNo = [buttonPopUpXNo, buttonPopUpYNo, buttonPopUpWNo, buttonPopUpHNo]


        if (buttonHover(buttonPopUpYes)) {
            drawButton(buttonPopUpYes, smallButtonHover, true, 255);
        } else {
            drawButton(buttonPopUpYes, smallButton, true, 255);
        }
        drawText("OUI", 40, [textPopUpXYes, buttonPopUpYYes], [CENTER, BASELINE], [0, 0, 0])

        if (buttonHover(buttonPopUpNo)) {
            drawButton(buttonPopUpNo, smallButtonHover, true, 255);
        } else {
            drawButton(buttonPopUpNo, smallButton, true, 255);
        }
        drawText("NON", 40, [textPopUpXNo, buttonPopUpYNo], [CENTER, BASELINE], [0, 0, 0])


        drawText(message, 30, [textPopUpX, interfacePopUpY], [CENTER, BASELINE], [0, 0, 0])

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


//~ Avoir la vitesse du joueur (stats)
function getSpeed(seconds, meters) {
    const distanceEnKm = meters / 1000;
    const tempsEnHeures = seconds / 3600;
    const vitesseEnKmh = distanceEnKm / tempsEnHeures;
    return Math.round(vitesseEnKmh / 2);
}


//~ Remettre a 0 les JSONS
function resetJsons() {
    ennemiesJSON = loadJSON("json/Ennemis.json");
    pnjJSON = loadJSON("json/PNJ.json");

    //? Pas besoin de reload les json dont les donnees ne changent pas 
    // allDoors = loadJSON("json/Doors.json");
    // adminJSON = loadJSON("json/Admin.json");
    // Houses = loadJSON("json/Houses.json");
    itemsJSON = loadJSON("json/Items.json");
    // Maps = loadJSON("json/Maps.json");
    // World = loadJSON("json/World.json");
}


//~ Convertie le temps en heure / min / secondes
function timeConversion(seconds, mod = 0) {
    const heures = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondes = seconds % 60;

    const heuresFormatees = heures < 10 ? `0${heures}` : `${heures}`;
    const minutesFormatees = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secondesFormatees = secondes < 10 ? `0${secondes}` : `${secondes}`;


    let returnValue = "";

    switch (mod) {
        case 0:
            returnValue = `${heuresFormatees}h ${minutesFormatees}min et ${secondesFormatees}s`;
            break;
        case 1:
            returnValue = `${heuresFormatees}:${minutesFormatees}:${secondesFormatees}`;
            break;
    }

    return returnValue;
}


//~ Tremblement de la camera
function shakeCamera(durationSeconds, forcePixels) {
    shakeDuration = durationSeconds * 60; // Convertit la durée en secondes en frames
    shakeForce = forcePixels;
}


//~ Ajoute l'item present
function getCurrentItem() {
    if (itemsJSON.ItemsOnTheFloor[currentItemPointing]) {
        addItemToInventory(itemsJSON.Items[currentItemPointing], 1)
        itemsJSON.ItemsOnTheFloor[currentItemPointing].shown = false;
        currentItemPointing = ""

    }
}

//~ Retourn si l'inventaire est vide
function inventoryIsEmpty(slot) {
    return Object.keys(slot).length === 0;
}


//~ Fonction de tp
function tp(map = "") {


    switch (map) {

        case "spawn":

            xStartWorld = 0
            yStartWorld = -42

            break


        case "foret":

            xStartWorld = -4410
            yStartWorld = -1483

            break

        case "village":

            xStartWorld = -12300
            yStartWorld = -1648

            break


        case "citadelle":

            xStartWorld = -16206
            yStartWorld = -1604

            break
    }
}

//~ Initie les variables
function initVariables() {
    //& Debug Mod
    debugMod = init_debugMod;


    //& Moteur de jeu
    engineOne = init_engineOne;
    fpsLevel = init_fpsLevel;

    //& Le bloc qui tue (littéralement)
    killingBlocks = init_killingBlocks;


    //& Admins
    username = init_username;
    password = init_password;
    logged = init_logged


    //& Camera
    cameraShakeEnabled = init_cameraShakeEnabled;

    shakeDuration = init_shakeDuration
    shakeForce = init_shakeForce

    //~ ========= Mode SMOOTH ========= 
    smoothCamera = init_smoothCamera;
    smoothCameraSpeed = init_smoothCameraSpeed;
    cameraSpeedR = init_cameraSpeedR;
    newCharacterMovesSpeedR = init_newCharacterMovesSpeedR;
    cameraSpeedL = init_cameraSpeedL;
    newCharacterMovesSpeedL = init_newCharacterMovesSpeedL;
    backgroundSpeed = init_backgroundSpeed;
    backgroundSmoothSpeed = init_backgroundSmoothSpeed;


    //& Background
    backgroundX = init_backgroundX;


    //& Character
    //~ Textures / Outils du Personnage
    characterTextureList = init_characterTextureList;
    characterAnimationIndex = init_characterAnimationIndex;
    characterAnimationFramePassed = init_characterAnimationFramePassed;
    characterDirection = init_characterDirection;
    characterLastDirection = init_characterLastDirection;
    characterMovement = init_characterMovement;
    characterLastMovement = init_characterLastMovement;
    characterSpriteWidth = init_characterSpriteWidth;
    characterSpriteHeight = init_characterSpriteHeight;

    //~ caractéristiques du perso
    //? Positions
    characterInsidePosX = init_characterInsidePosX;
    characterInsidePosY = init_characterInsidePosY;
    characterPositionX = init_characterPositionX;
    characterPositionY = init_characterPositionY;
    previousPlayerX = init_previousPlayerX;
    previousPlayerY = init_previousPlayerY;
    characterWidth = init_characterWidth;
    characterHeight = init_characterHeight;
    characterBoundingBoxWidth = init_characterBoundingBoxWidth;
    characterBoundingBoxHeight = init_characterBoundingBoxHeight;
    characterBoundingBoxHeightInside = init_characterBoundingBoxHeightInside;
    characterBoundingBoxWidthInside = init_characterBoundingBoxWidthInside;
    characterMovesSpeed = init_characterMovesSpeed;
    characterHitting = init_characterHitting;
    characterComboHitting = init_characterComboHitting;
    characterComboHittingDouble = init_characterComboHittingDouble;
    lastHit = init_lastHit;

    //? Saut
    characterMass = init_characterMass;
    characterJumpHeight = init_characterJumpHeight;
    characterVelocityY = init_characterVelocityY;
    characterVelocityYMin = init_characterVelocityYMin;
    characterVelocityYMax = init_characterVelocityYMax;
    characterIsGrounded = init_characterIsGrounded;
    characterJumpCount = init_characterJumpCount;
    characterMaxJumps = init_characterMaxJumps;
    characterDoubleJumping = init_characterDoubleJumping;
    characterIsJumping = init_characterIsJumping;
    haveToJump = init_haveToJump;

    //? Dash
    dashSystem = init_dashSystem;
    characterIsDashing = init_characterIsDashing;
    lastDashTime = init_lastDashTime;
    dashCooldown = init_dashCooldown;
    dashTime = init_dashTime;
    dashForce = init_dashForce;


    //& Animations
    animationSpeed = init_animationSpeed;
    textDialogSpeed = init_textDialogSpeed;


    //& Grille
    rectWidth = init_rectWidth;
    rectHeight = init_rectHeight;

    xStartWorld = init_xStartWorld;
    yStartWorld = init_yStartWorld;

    arrayMap = init_arrayMap;
    currentMap = init_currentMap
    lastMap = init_lastMap

    //& Maisons
    xStartHouse = init_xStartHouse;
    yStartHouse = init_yStartHouse;


    //& Interfaces
    //~ Interfaces
    canShowMessage = init_canShowMessage
    interactionWidth = init_interactionWidth;
    interactionHeight = init_interactionHeight;

    viewportDisplayWidth = init_viewportDisplayWidth;
    viewportDisplayHeight = init_viewportDisplayHeight;

    buttonWidthClassic = init_buttonWidthClassic;
    buttonHeightClassic = init_buttonHeightClassic;
    buttonWidthBIG = init_buttonWidthBIG;
    buttonHeightBIG = init_buttonHeightBIG;

    toggleButtonColor = init_toggleButtonColor

    //~ Jeu
    inGame = init_inGame;
    gameIsPaused = init_gameIsPaused;
    gameIsPlaying = init_gameIsPlaying;

    //~ Parametres
    settingsPause = init_settingsPause;

    //~ Statistiques
    statsMenu = init_statsMenu

    //~ Barre de vie
    lifeBarSize = init_MargeBarVie;
    healthPlayer = init_healthPlayer;
    maxHealth = init_maxHealth;
    heartSize = init_heartSize
    pressingKey = init_pressingKey;
    gettingHurt = init_gettingHurt;
    gettingHeal = init_gettingHeal;
    addHeart = init_addHeart;
    removeHeart = init_removeHeart;

    //~ Inventaire
    Inventory[0] = init_Inventory[0];
    Inventory[1] = init_Inventory[1];
    Inventory[2] = init_Inventory[2];
    
    widthSlot = init_WidthSlot;
    heightSlot = init_HeightSlot;
    slotX = init_slotX;
    hideInventory = init_endInventory;
    waitingButton = init_waitingButton;

    //~ Jauge quand on mange
    characterIsEating = init_characterIsEating;

    gaugeSize = init_gaugeSize;
    gaugeSpeed = init_gaugeSpeed;

    topGaugeLevel = init_topGaugeLevel;
    rightGaugeLevel = init_rightGaugeLevel;
    bottomGaugeLevel = init_bottomGaugeLevel;
    leftGaugeLevel = init_leftGaugeLevel;


    //& Audio
    //~ Musique
    musicEnabled = init_MusicIsActivate;
    canPlayMusic = init_YouCanPlayMusic;

    //~ Sons
    //soundEnabled = init_SongIsActivate;
    canPlaySong = init_YouCanPlaySong;


    dieSoundPlay = init_dieSoundPlay
    startGame = init_startGame
    startSoundPlay = init_startSoundPlay


    //& Evenements
    //~ Touches
    Pressing = init_Pressing;
    spaceKeyIsPressed = init_spaceKeyIsPressed;
    rightArrowPressed = init_rightArrowPressed;
    leftArrowPressed = init_leftArrowPressed;
    highArrowPressed = init_highArrowPressed;
    downArrowPressed = init_downArrowPressed;
    dashKeyIsPressed = init_dashKeyIsPressed;
    leftClickPressed = init_leftClickPressed;
    leftClickWasPressed = init_leftClickWasPressed;

    canEnterInHouse = init_canEnterInHouse;
    canGoOutTheHouse = init_canGoOutTheHouse;

    //~ PNJ
    canInteractWithPNJ = init_canInteractWithPNJ;
    PressInteractPNJ = init_PressInteractPNJ;
    canTalkWithPNJ = init_canTalkWithPNJ;
    PressTalkPNJ = init_PressTalkPNJ;
    currentTextSpeaking = init_currentTextSpeaking;
    currentIndexTextSpeaking = init_currentIndexTextSpeaking;

    //~  Portes
    behindThisDoor = init_behindThisDoor;
    behindThisDoorHouse = init_behindThisDoorHouse
    engine1WidthDoors = init_engine1WidthDoors;
    engine1HeightDoors = init_engine1HeightDoors;
    engine2WidthDoors = init_engine2WidthDoors;
    engine2HeightDoors = init_engine2HeightDoors;

    //~ Mort
    playerDead = init_playerDead;


    //~ END
    gameIsEnd = init_gameIsEnd

    //~ Popups
    popUpShown = init_popUpShown;
    playerAnswersYes = init_playerAnswersYes;

    //~ Credits
    endTheGameCredits = init_endTheGameCredits
    PositionCredits = init_PositionCredits
    speedCredits = init_speedCredits
    creditsInHome = init_creditsInHome


    //& Statistiques
    numberOfSteps = init_numberOfSteps;


    //& Items
    itemList = init_itemList;
    currentItemPointing = init_currentItemPointing


    //& Troc
    waitingAnswer = init_waitingAnswer;
    haveToTrade = init_haveToTrade;
    slotSize = init_slotSize;
    itemSize = init_itemSize;
    stackSize = init_stackSize;


    //& FPS
    fpsEnabled = init_fpsEnabled;
    FPSButtonColor = init_FPSButtonColor;


    //& Physique
    gravityForce = init_gravityForce;


    //& Cinématiques
    musicCinematic = init_musicCinematic;


    statistiques = init_statistiques;


    //? Viewport
    if (windowWidth < viewportDisplayWidth || windowHeight < viewportDisplayHeight) {
        viewportDisplayWidth = windowWidth
        viewportDisplayHeight = windowHeight
    }

    //* Reset toutes les statistiques sauf le nombre de morts 
    statistiques.distanceWalked = 0
    statistiques.totalJumpCount = 0
    statistiques.mobsKilled = 0
    statistiques.damagesDones = 0
    statistiques.damagesGet = 0
    statistiques.healCount = 0
    ////statistiques.deathCount = init_statistiques.deathCount
    statistiques.timeSpentInGame = 0
    statistiques.playerSpeed = 0


    tilesList = cutTileset(tileSet, [16, 16], [tileSet.width, tileSet.height])
    itemList = cutTileset(tilesetItems, [16, 16], [tilesetItems.width, tilesetItems.height])
    tileSetForTaverne = cutTileset(tileSetTaverne, [16, 16], [tileSetTaverne.width, tileSetTaverne.height])
    tileSetForLabo = cutTileset(tileSetLabo, [16, 16], [tileSetLabo.width, tileSetLabo.height])


    if (checkpointActivated){
        addItemToInventory(itemsJSON.Items.sword_1, 1);
        addItemToInventory(itemsJSON.Items.food_1, 2);
        characterPositionX = 750
        xStartWorld = -600
    }else{
        //& Player start with 3 apple
        addItemToInventory(itemsJSON.Items.food_1, 3)
    }

    resetJsons()

}


function aPNJCanTalk() {
    let canTalk = false
    if (pnjJSON.PNJS) {
        Object.entries(pnjJSON.PNJS).forEach(pnj => {
            let pnjName = pnj[0]
            pnj = pnj[1]
            if (pnjJSON.PNJS[pnjName].canTalkWithMe) {
                canTalk = true
            }
        })
    }

    return canTalk;
}

function aPNJCanTrade() {
    let canTrade = false
    if (pnjJSON.PNJS) {
        Object.entries(pnjJSON.PNJS).forEach(pnj => {
            let pnjName = pnj[0]
            pnj = pnj[1]
            if (pnjJSON.PNJS[pnjName].canTradeWithMe) {
                canTrade = true
            }
        })
    }

    return canTrade;
}