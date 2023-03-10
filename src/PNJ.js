//#region MANAGER 
function PNJManager() {

    // ~ Draw des PNJ en EXTERIEUR
    if (engineOne) {
        PNJ(ForPNJ.PNJS.PNJ1);
        PNJ(ForPNJ.PNJS.PNJ2);
    }
    else {
        drawPNJInside(ForPNJ.pnj.PNJ3);
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
    let VillagerBoundingBox = expandRect(CurrentX, PNJY, pnj.width, pnj.height, 2, 2)
    let seePlayer = rectIsInRect(characterInsidePosX, characterInsidePosY, characterBoundingBoxWidth, characterBoundingBoxHeight, VillagerBoundingBox[0], VillagerBoundingBox[1], VillagerBoundingBox[2], VillagerBoundingBox[3])

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
    if (seePlayer === false) {
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
    animationPNJ(pnj, CurrentX, PNJY, pnj.width, pnj.height, pnj.direction, pnj.movement)
}



function PNJ (pnj){
    let PNJStart = pnj.globalStartX + xStartWorld
    let PNJDistance = pnj.distance + PNJStart
    let PNJEnd = PNJDistance;

    pnj.x = pnj.globalStartX + xStartWorld + pnj.stepCount;
    pnj.y = pnj.y + yStartWorld


    let PNJX = pnj.x
    let PNJY = pnj.y


    let PNJHaveToJump = pnj.haveToJump


    let PNJWidth = pnj.width;
    let PNJHeight = pnj.height;

    let PNJVelocityY = pnj.velocityY;
    let PNJMass = pnj.mass;

    let PNJIsJumping = pnj.isJumping;
    let PNJJumpCount = pnj.jumpCount;


    let mapsToCheck = getMapsToCheck(characterPositionX, characterPositionY)

    //& Ajout de la gravité au PNJ
    let gravityReturns = getPositionWithGravity(PNJY,
        PNJVelocityY,
        gravityForce,
        PNJMass)
    PNJY = gravityReturns[0]
    PNJVelocityY = gravityReturns[1]


    //& Ajoute les collisions pour toute les maps autour du perso 
    for (let i = 0; i < mapsToCheck.length; i++) {


        let currentMapToCheck = mapsToCheck[i]
        let currentMapToCheckName = World.worldsMap[currentMapToCheck[1]][currentMapToCheck[0]]

        //^ Récupère la couche des collisions sur la map
        let currentMapTableColliders = Maps[currentMapToCheckName].layers[1]

        //^ Pour chaque carré dans le tableau 
        for (let row = 0; row < currentMapTableColliders.length; row++) {
            for (let column = 0; column < currentMapTableColliders[row].length; column++) {

                //^ Lui donner une collision
                let thisObject = currentMapTableColliders[row][column]


                let thisObjectX = ((rectWidth * Maps.numberOfRow) * (currentMapToCheck[0])) + (xStartWorld + (rectWidth * column))
                let thisObjectY = ((rectHeight * Maps.numberOfColumns) * (currentMapToCheck[1])) + (yStartWorld + (rectHeight * row))


                if (thisObject > 0) {
                    [PNJX, PNJY, PNJVelocityY, PNJJumpCount, PNJIsJumping, PNJHaveToJump] = handleCollisionMobs(PNJX, PNJY, PNJWidth, PNJHeight, pnj.direction, thisObjectX, thisObjectY, rectWidth, rectHeight, PNJVelocityY, PNJJumpCount, PNJIsJumping)
                }
            }
        }
    }

    //& Ajouter le saut au PNJ
    if (PNJHaveToJump && pnj.isFollowing){
        
        if (!PNJIsJumping && PNJJumpCount < 1){

            let jumpReturns = addJump(PNJY,
                characterJumpHeight,
                PNJVelocityY,
                gravityForce)
        
            PNJY = jumpReturns[0];
            PNJVelocityY = jumpReturns[1];
            PNJIsJumping = true
            PNJJumpCount += 1
            pnj.movement = "jump"
        }else{
            PNJJumpCount = 0
        }
    }


    pnj.x = PNJX
    pnj.y = PNJY
    pnj.velocityY = PNJVelocityY
    pnj.isJumping = PNJIsJumping
    pnj.jumpCount = PNJJumpCount

    pnj.xStart = PNJStart
    pnj.xEnd = PNJEnd
    pnj.haveToJump = PNJHaveToJump;


    drawPNJ(pnj)
}


let drawPNJ = (pnj) => {

    // ~ Variables positions PNJ
    let CurrentX = pnj.x;
    let PNJY = pnj.y

    // ~ Variables Collisions / HitBox PNJ
    let VillagerBoundingBox = expandRect(CurrentX, PNJY, pnj.width, pnj.height, pnj.detectDistX, pnj.detectDistY)
    let seePlayer = rectIsInRect(characterPositionX, characterPositionY, characterBoundingBoxWidth, characterBoundingBoxHeight, VillagerBoundingBox[0], VillagerBoundingBox[1], VillagerBoundingBox[2], VillagerBoundingBox[3])

    
    

    if (!seePlayer){
        doRound(pnj)
    }


    // ~ Debug Mod
    if (debugMod) {
        fill(255, 0, 0, 70)
        rect(VillagerBoundingBox[0], VillagerBoundingBox[1], VillagerBoundingBox[2], VillagerBoundingBox[3])
        fill(255)
    }


    //~ Creation du PNJ
    animationPNJ(pnj, CurrentX, PNJY, pnj.width, pnj.height, pnj.direction, pnj.movement, pnj.color)
}




// ANIMATION PNJ

function animationPNJ(CurrentPNJ, positionX, positionY, width, height, direction, movement, color) {

    fill(color)
    circle(positionX + 35, positionY - 25, 20);

    let timer = (round(millis() / animationSpeed)) % 2

    let PNJTexturesList = []

    if (movement == "walk") {

        for (let y = 32; y < 64; y += 32) {
            for (let x = 0; x < 192; x += 32) {
                PNJTexturesList.push(PNJTextures.get(x, y, 32, 32));
            }
        }
    }
    else if (movement == "idle") {

        for (let y = 0; y < 32; y += 32) {
            for (let x = 0; x < 192; x += 32) {
                PNJTexturesList.push(PNJTextures.get(x, y, 32, 32));
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