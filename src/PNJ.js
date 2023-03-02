//#region MANAGER 
function PNJManager() {

    // ~ Draw des PNJ en EXTERIEUR
    if (engineOne) {
        drawPNJ(ForPNJ.PNJS.PNJ1);
        drawPNJ(ForPNJ.PNJS.PNJ2);
    }
    else {
        drawPNJInside(ForPNJ.PNJS.PNJ3);
    }
}
//#endregion


//#region FONCTION POUR PNJ



// DRAW PNJ
let drawPNJInside = (pnj) => {

    // ~ Variables positions PNJ
    let PNJDistance = pnj.distance + pnj.x
    let PNJY = pnj.y + yStartHouse
    let PNJEnd = PNJDistance + xStartHouse;
    let PNJStart = pnj.x + xStartHouse
    let CurrentX = pnj.x + pnj.NbrePas + xStartHouse;

    // ~ Variables Collisions / HitBox PNJ
    let VillagerBoundingBox = expandRect(CurrentX, PNJY, pnj.tailleW, pnj.tailleH, 2)
    let entreEnContact = rectIsInRect(characterInsidePosX, characterInsidePosY, characterBoundingBoxWidth, characterBoundingBoxHeight, VillagerBoundingBox[0], VillagerBoundingBox[1], VillagerBoundingBox[2], VillagerBoundingBox[3])

    // ~ Debug Mod
    if (debugMod) {
        fill(255, 0, 0, 70)
        rect(VillagerBoundingBox[0], VillagerBoundingBox[1], VillagerBoundingBox[2], VillagerBoundingBox[3])
        fill(255)
    }
    // ~ Direction left
    if (CurrentX > PNJEnd) {
        pnj.direction = "left";
    };
    // ~ Direction right
    if (CurrentX < PNJStart) {
        pnj.direction = "right";
    };
    // ~ Hitbox / Collisions
    if (entreEnContact === false) {
        pnj.movement = "walk"

        if (pnj.direction === "right") {
            pnj.NbrePas += pnj.vitesse;
        };
        if (pnj.direction === "left") {
            pnj.NbrePas -= pnj.vitesse;
        };

    } else {
        pnj.movement = "idle"
        if (characterInsidePosX >= CurrentX) {
            pnj.direction = "right"
        } else {
            pnj.direction = "left"
        }
    }
    //~ Creation du PNJ
    animationPNJ(pnj, CurrentX, PNJY, pnj.tailleW, pnj.tailleH, pnj.direction, pnj.movement)
}


let drawPNJ = (pnj) => {

    // ~ Variables positions PNJ
    let PNJDistance = pnj.distance + pnj.x
    let PNJY = pnj.y + yStartWorld
    let PNJEnd = PNJDistance + xStartWorld;
    let PNJStart = pnj.x + xStartWorld
    let CurrentX = pnj.x + pnj.NbrePas + xStartWorld;

    // ~ Variables Collisions / HitBox PNJ
    let VillagerBoundingBox = expandRect(CurrentX, PNJY, pnj.tailleW, pnj.tailleH, 2)
    let entreEnContact = rectIsInRect(characterPositionX, characterPositionY, characterBoundingBoxWidth, characterBoundingBoxHeight, VillagerBoundingBox[0], VillagerBoundingBox[1], VillagerBoundingBox[2], VillagerBoundingBox[3])

    // ~ Debug Mod
    if (debugMod) {
        fill(255, 0, 0, 70)
        rect(VillagerBoundingBox[0], VillagerBoundingBox[1], VillagerBoundingBox[2], VillagerBoundingBox[3])
        fill(255)
    }
    // ~ Direction left
    if (CurrentX > PNJEnd) {
        pnj.direction = "left";
    };
    // ~ Direction right
    if (CurrentX < PNJStart) {
        pnj.direction = "right";
    };
    // ~ Hitbox / Collisions
    if (entreEnContact === false) {
        pnj.movement = "walk"

        if (pnj.direction === "right") {
            pnj.NbrePas += pnj.vitesse;
        };
        if (pnj.direction === "left") {
            pnj.NbrePas -= pnj.vitesse;
        };

    } else {
        pnj.movement = "idle"
        if (characterPositionX >= CurrentX) {
            pnj.direction = "right"
        } else {
            pnj.direction = "left"
        }
    }
    //~ Creation du PNJ
    animationPNJ(pnj, CurrentX, PNJY, pnj.tailleW, pnj.tailleH, pnj.direction, pnj.movement)
}




// ANIMATION PNJ

function animationPNJ(CurrentPNJ, positionX, positionY, width, height, direction, movement) {

    let timer = (round(millis() / animationSpeed)) % 2

    let PNJTexturesList = []

    if (movement == "walk") {

        for (let y = 0; y < 32; y += 32) {
            for (let x = 0; x < 128; x += 32) {
                PNJTexturesList.push(WalkPNJ.get(x, y, 32, 32));
            }
        }
    }
    else if (movement == "idle") {

        for (let y = 0; y < 26; y += 26) {
            for (let x = 0; x < 88; x += 22) {
                PNJTexturesList.push(IdlePNJ.get(x, y, 22, 26));
            }
        }
    }
    //? Changer de frame
    if (timer && !CurrentPNJ.currentFrame) {
        CurrentPNJ.indexFrame++
        CurrentPNJ.currentFrame = true
    }
    if (!timer) {
        CurrentPNJ.currentFrame = false
    }
    //? Remettre l'index au début 
    if (CurrentPNJ.indexFrame >= PNJTexturesList.length) {
        CurrentPNJ.indexFrame = 0
    }

    let PNJCurrentTextures = PNJTexturesList[CurrentPNJ.indexFrame]

    if (direction == "right") {
        image(PNJCurrentTextures, positionX, positionY, width, height)

        //? direction GAUCHE
    } else if (direction == "left") {
        scale(-1, 1)
        image(PNJCurrentTextures, -positionX - width, positionY, width, height)
        scale(-1, 1)
    }
}




//#endregion