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


//~ Trouve l'index de la position du 2eme array
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
function PNJMustBeShown(pnj) {



    let mapsToCheck = getMapsToCheck(characterPositionX, characterPositionY);
    let positionMapPNJ = findIndexValueIn2dArray(World.worldsMap, pnj.mapName)
    let invertedArrayMapPosition = []
    invertedArrayMapPosition[0] = positionMapPNJ[1]
    invertedArrayMapPosition[1] = positionMapPNJ[0]


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



//~ Joue de la music 
let PlayMusic = () => {

    if (!musicEnabled  && !Pressing) {
        musicEnabled = true
        SongBackground.loop()
        Pressing = true

    } else if (musicEnabled && !Pressing) {
        musicEnabled = false
        SongBackground.pause()
        Pressing = true

    }

}



function startGameVoice() {
    if (!soundEnabled) {
        let indexSong = Math.floor(Math.random() * VoiceStartSong.length);
        VoiceStartSong[indexSong].play()
    }
}


function DieGameVoice() {
    if (!soundEnabled) {
        let indexSong = Math.floor(Math.random() * VoicesDieSong.length);
        VoicesDieSong[indexSong].play()
    }
}


//~ Joue les songs
let PlaySong = () => {

    if (!soundEnabled  && !Pressing) {
        soundEnabled = true
        Pressing = true

    } else if (soundEnabled && !Pressing) {
        soundEnabled = false
        Pressing = true

    }

}


//~ hurtPlayer
function hurtPlayer(amount) {
    healthPlayer -= amount; //& Enlever point de vie
    healthPlayer = constrain(healthPlayer, 0, maxHealth); //& Depasse pas la vie, de 0 et de la vie max
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
        Object.entries(Houses.Houses).forEach(house => {
            house = house[1]
            if (house.name == mapName && !mapExist) {
                mapExist = true;
                //indexMapX = house.indexOf(mapName);
                indexMapX = 0
            } else {
                indexMapY = 0
            }
        });
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

        PosX = characterInsidePosX + characterWidth / 2 - interactionWidth / 1.2
        PosY = characterInsidePosY - characterHeight / 3
    }

    let keyBackground = [(PosX),
        PosY - 50,
        interactionWidth,
        interactionHeight
    ]

    let textKey = [PosX + (keyBackground[2] / 2),
        PosY - 50 + (keyBackground[3] / 8)
    ]

    fill(255)
    drawButton(keyBackground)
    drawText(key, 20, textKey, [CENTER, BASELINE])

}


//~ Dessine les touches pour les interactions
function drawKeyAt(key, positionX, positionY, haveBackground = false) {
    let keyBackground = [(positionX),
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
    }

}



function showMessage(message){
    let messageWidth = 200
    let messageHeight = 100
    let messagePositionY = 0
    let messagePositionX = viewportDisplayWidth - messageWidth

    let messageTextPosition = [messagePositionX, messagePositionY]

    
    drawText(message, 40, messageTextPosition, [CENTER, BASELINE], [255, 0, 0])
    
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
                removeItemFromInventory(getIndexOfItemCategory(objRequis.category))
            })

            gain.forEach(objGain => {
                addItemToInventory(objGain)
            })

            playerAnswersYes = false
            haveToTrade = false
        }
    } else {
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


    image(backgroundImageTalk, interfacePopUpX, interfacePopUpY, interfacePopUpWidth, interfacePopUpHeight)


    if (options == "info") {

        waitingAnswer = true;

        let buttonPopUpW = 150
        let buttonPopUpH = 20
        let buttonPopUpX = interfacePopUpX + (interfacePopUpWidth / 2) - (buttonPopUpW / 2)
        let buttonPopUpY = interfacePopUpY + (interfacePopUpHeight / 1.3)
        let textPopUpX = buttonPopUpX + (buttonPopUpW / 2)

        let buttonPopUp = [buttonPopUpX, buttonPopUpY, buttonPopUpW, buttonPopUpH]

        fill(128, 128, 128)
        drawButton(buttonPopUp)
        drawText("OK", 15, [textPopUpX, buttonPopUpY], [CENTER, BASELINE], [0, 0, 0])

        drawText(message, 15, [interfacePopUpX, interfacePopUpY], [LEFT, BASELINE], [0, 0, 0])


        if (buttonClicked(buttonPopUp)) {
            waitingAnswer = false
            PressInteractPNJ = false
            popUpShown = false
        }


    } else if (options == "choice") {

        waitingAnswer = true;

        let buttonPopUpWYes = 150
        let buttonPopUpHYes = 20
        let buttonPopUpXYes = interfacePopUpX + (interfacePopUpWidth / 2) - (buttonPopUpWYes / 2)
        let buttonPopUpYYes = interfacePopUpY + (interfacePopUpHeight / 1.6)
        let textPopUpXYes = buttonPopUpXYes + (buttonPopUpWYes / 2)

        let buttonPopUpYes = [buttonPopUpXYes, buttonPopUpYYes, buttonPopUpWYes, buttonPopUpHYes]


        let buttonPopUpWNo = 150
        let buttonPopUpHNo = 20
        let buttonPopUpXNo = interfacePopUpX + (interfacePopUpWidth / 2) - (buttonPopUpWNo / 2)
        let buttonPopUpYNo = interfacePopUpY + (interfacePopUpHeight / 1.4) + buttonPopUpHYes + 15
        let textPopUpXNo = buttonPopUpXNo + (buttonPopUpWNo / 2)

        let buttonPopUpNo = [buttonPopUpXNo, buttonPopUpYNo, buttonPopUpWNo, buttonPopUpHNo]


        fill(128, 128, 128)
        drawButton(buttonPopUpYes)
        drawText("YES", 15, [textPopUpXYes, buttonPopUpYYes], [CENTER, BASELINE] , [0, 0, 0])
        //

        fill(128, 128, 128)
        drawButton(buttonPopUpNo)
        drawText("NO", 15, [textPopUpXNo, buttonPopUpYNo], [CENTER, BASELINE], [0, 0, 0])


        drawText(message, 15, [interfacePopUpX, interfacePopUpY], [LEFT, BASELINE], [0, 0, 0])

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


function getSpeed(seconds, meters) {
    const distanceEnKm = meters / 1000;
    const tempsEnHeures = seconds / 3600;
    const vitesseEnKmh = distanceEnKm / tempsEnHeures;
    return Math.round(vitesseEnKmh);
}



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


function timeConversion(seconds) {
    const heures = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondes = seconds % 60;

    const heuresFormatees = heures < 10 ? `${heures}` : `${heures}`;
    const minutesFormatees = minutes < 10 ? `${minutes}` : `${minutes}`;
    const secondesFormatees = secondes < 10 ? `0${secondes}` : `${secondes}`;

    return `${heuresFormatees}h ${minutesFormatees}min et ${secondesFormatees}s`;
}

function getSpeed(seconds, meters) {
    const distanceEnKm = meters / 1000;
    const tempsEnHeures = seconds / 3600;
    const vitesseEnKmh = distanceEnKm / tempsEnHeures;
    return Math.round(vitesseEnKmh);
}



function shakeCamera(durationSeconds, forcePixels) {
    shakeDuration = durationSeconds * 60; // Convertit la durée en secondes en frames
    shakeForce = forcePixels;
}


function getCurrentItem() {
    if (itemsJSON.ItemsOnTheFloor[currentItemPointing]){
        addItemToInventory(itemsJSON.ItemsOnTheFloor[currentItemPointing])
        itemsJSON.ItemsOnTheFloor[currentItemPointing].shown = false;
        currentItemPointing = ""
        //canGetItem = false
    }
}


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

function inventoryIsEmpty(slot) {
    return Object.keys(slot).length === 0;
}

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

    //~ Barre de vie
    lifeBarSize = init_MargeBarVie;
    healthPlayer = init_healthPlayer;
    maxHealth = init_maxHealth;
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
    endInventory = init_endInventory;
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
    soundEnabled = init_SongIsActivate;
    canPlaySong = init_YouCanPlaySong;

    VoicesSongMarjo = init_VoicesSongMarjo

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
    startCinematicPlaying = init_startCinematicPlaying;
    musicCinematic = init_musicCinematic;


    statistiques = init_statistiques;


    //? Viewport
    if (windowWidth < viewportDisplayWidth || windowHeight < viewportDisplayHeight) {
        viewportDisplayWidth = windowWidth
        viewportDisplayHeight = windowHeight
    }

    //* Reset toutes les statistiques sauf le nombre de morts 
    statistiques.distanceWalked = init_statistiques.distanceWalked
    statistiques.totalJumpCount = init_statistiques.totalJumpCount
    statistiques.mobsKilled = init_statistiques.mobsKilled
    statistiques.damagesDones = init_statistiques.damagesDones
    statistiques.damagesGet = init_statistiques.damagesGet
    statistiques.healCount = init_statistiques.healCount
    ////statistiques.deathCount = init_statistiques.deathCount
    statistiques.timeSpentInGame = init_statistiques.timeSpentInGame
    statistiques.playerSpeed = init_statistiques.playerSpeed


    tilesList = cutTileset(tileSet, [16, 16], [tileSet.width, tileSet.height])
    itemList = cutTileset(tilesetItems, [16, 16], [tilesetItems.width, tilesetItems.height])
    tileSetForTaverne = cutTileset(tileSetTaverne, [16, 16], [tileSetTaverne.width, tileSetTaverne.height])

    resetJsons()

}


function aPNJCanTalk(){
    let canTalk = false
    if (pnjJSON.PNJS){  
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

function aPNJCanTrade(){
    let canTrade = false
    if (pnjJSON.PNJS){
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