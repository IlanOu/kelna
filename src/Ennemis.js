//#region MANAGER 
function ennemiManager() {

    // ~ Draw des Ennemis en EXTERIEUR
    if (engineOne) {

        mob(ForEnnemis.Ennemis.Enn1, characterPositionX, characterPositionY);
        
    }
}
//#endregion


//#region FONCTION POUR ENNEMI



// DRAW ENNEMI

// let drawEnnemiInside = (Ennemis) => {

//     // ~ Variables positions Ennemis
//     let EnnemiDistance = Ennemis.distance + Ennemis.x
//     let EnnemiY = Ennemis.y + yStartHouse
//     let EnnemiEnd = EnnemiDistance + xStartHouse;
//     let EnnemiStart = Ennemis.x + xStartHouse
//     let CurrentX = Ennemis.x + Ennemis.NbrePas + xStartHouse;

//     // ~ Variables Collisions / HitBox Ennemis
//     let EnnemiBoundingBox = expandRect(CurrentX, EnnemiY, Ennemis.tailleW, Ennemis.tailleH, 2)
//     let entreEnContact = rectIsInRect(characterInsidePosX, characterInsidePosY, characterBoundingBoxWidth, characterBoundingBoxHeight, EnnemiBoundingBox[0], EnnemiBoundingBox[1], EnnemiBoundingBox[2], EnnemiBoundingBox[3])

//     // ~ Debug Mod
//     if (debugMod) {
//         fill(255, 0, 0, 70)
//         rect(EnnemiBoundingBox[0], EnnemiBoundingBox[1], EnnemiBoundingBox[2], EnnemiBoundingBox[3])
//         fill(255)
//     }
//     // ~ Direction left
//     if (CurrentX > EnnemiEnd) {
//         Ennemis.direction = "left";
//     };
//     // ~ Direction right
//     if (CurrentX < EnnemiStart) {
//         Ennemis.direction = "right";
//     };
//     // ~ Hitbox / Collisions
//     if (entreEnContact === false) {
//         Ennemis.movement = "walk"

//         if (Ennemis.direction === "right") {
//             Ennemis.NbrePas += Ennemis.vitesse;
//         };
//         if (Ennemis.direction === "left") {
//             Ennemis.NbrePas -= Ennemis.vitesse;
//         };

//     } else {
//         Ennemis.movement = "idle"
//         if (characterInsidePosX >= CurrentX) {
//             Ennemis.direction = "right"
//         } else {
//             Ennemis.direction = "left"
//         }
//     }
//     //~ Creation du Ennemis
//     animationEnnemis(Ennemis, CurrentX, EnnemiY, Ennemis.tailleW, Ennemis.tailleH, Ennemis.direction, Ennemis.movement)
// }



//& Collisions


function handleCollisionMobs(agentX, agentY, agentWidth, agentHeight, objectX, objectY, objectWidth, objectHeight, velocityY, jumpCount, isJumping) {

    //* Vérifier si les boîtes se chevauchent
    if (rectIsInRect(agentX, agentY, agentWidth, agentHeight, objectX, objectY, objectWidth, objectHeight)) {
  
        //~ Collisions dessus / dessous de l'objet
        if ((agentX < objectX + objectWidth - (objectWidth / 10)) && (agentX + agentWidth > objectX + (objectWidth / 10))) {
            //? collisions en dessous de l'objet
            if (agentY < objectY + objectHeight && agentY > objectY) {
                agentY = objectY + objectHeight
  
                velocityY = 0;

            }
            //? collision au dessus de l'objet
            else if (agentY + agentHeight > objectY && agentY < objectY) {
  
                agentY = objectY - agentHeight

                jumpCount = 0;
                isJumping = false
                if (!isJumping){
                    velocityY = 0
                }

            }
            return [agentX, agentY, velocityY, jumpCount, isJumping, haveToJump]
        }
  
        //~ Collisions gauche / droite de l'objet
        //? si le bas du perso est en dessous du haut du cube + 1/10 de sa hauteur
        if ((agentY < objectY + objectHeight - (objectHeight / 10)) && (agentY + agentHeight > objectY + (objectHeight / 10))) {
    
            //? collisions à droite de l'objet
            if (agentX + agentWidth > objectX && agentX > objectX) {
                agentX = objectX + objectWidth

    
            //? collisions à gauche de l'objet
            } else if (agentX < objectX + objectWidth && agentX < objectX) {
                agentX = objectX - agentWidth

            }
            
            haveToJump = true

            
            fill (255,0,0)
            rect(objectX, objectY-25, 50, 50)

            return [agentX, agentY, velocityY, jumpCount, isJumping, haveToJump]
        }  
    }
    return [agentX, agentY, velocityY, jumpCount, isJumping, haveToJump]
}




function mob(Ennemis, characterPositionX, characterPositionY){
    



    let EnnemiDistance = Ennemis.distance + Ennemis.xStart
    let EnnemiStart = Ennemis.xStart + xStartWorld
    let EnnemiEnd = EnnemiDistance + xStartWorld;

    let EnnemisX = Ennemis.xStart + Ennemis.x + xStartWorld;
    let EnnemisY = Ennemis.y + yStartWorld


    let EnnemisHaveToJump = Ennemis.haveToJump


    let EnnemisMovesSpeed = Ennemis.vitesse


    let EnnemisWidth = Ennemis.tailleW;
    let EnnemisHeight = Ennemis.tailleH;

    let EnnemisVelocityY = Ennemis.velocityY;
    let EnnemisMass = Ennemis.mass;

    let EnnemisIsJumping = Ennemis.isJumping;
    let EnnemisJumpCount = Ennemis.jumpCount;
    
    let EnnemisCollideOn = Ennemis.collideOn
    let detectRayY = Ennemis.detectRayY

    let mapsToCheck = getMapsToCheck(characterPositionX, characterPositionY)


    //^ Ajout de la gravité à l'ennemis
    let gravityReturns = getPositionWithGravity(EnnemisY,
        EnnemisVelocityY,
        gravityForce,
        EnnemisMass)
    EnnemisY = gravityReturns[0]
    EnnemisVelocityY = gravityReturns[1]
    
    //^ Ajoute les collisions pour toute les maps autour du perso 
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
                    [EnnemisX, EnnemisY, EnnemisVelocityY, EnnemisJumpCount, EnnemisIsJumping, EnnemisHaveToJump] = handleCollisionMobs(EnnemisX, EnnemisY, EnnemisWidth, EnnemisHeight, thisObjectX, thisObjectY, rectWidth, rectHeight, EnnemisVelocityY, EnnemisJumpCount, EnnemisIsJumping)
                }
            }
        }
    }

    if (EnnemisHaveToJump && Ennemis.isFollowing){
        
        if (!EnnemisIsJumping && EnnemisJumpCount < 1){

            let jumpReturns = addJump(EnnemisY,
                characterJumpHeight,
                EnnemisVelocityY,
                gravityForce)
        
            EnnemisY = jumpReturns[0];
            EnnemisVelocityY = jumpReturns[1];
            EnnemisIsJumping = true
            EnnemisJumpCount += 1
        }else{
            EnnemisJumpCount = 0
        }
    }
    
    
    
    Ennemis.x = EnnemisX
    Ennemis.y = EnnemisY
    Ennemis.velocityY = EnnemisVelocityY
    Ennemis.isJumping = EnnemisIsJumping
    Ennemis.jumpCount = EnnemisJumpCount

    Ennemis.distance = EnnemiDistance
    Ennemis.xStart = EnnemiStart
    Ennemis.xEnd = EnnemiEnd
    Ennemis.y = EnnemisY
    Ennemis.haveToJump = EnnemisHaveToJump;


    drawEnnemi(Ennemis)
}



function followPlayer(Ennemis){

    Ennemis.isFollowing = true

    // let distance = characterPositionX - Ennemis.x;
    // let followSpeed = Ennemis.followSpeed
    // let EnnemisHaveToJump = Ennemis.haveToJump

    // Ennemis.movement = "walk"

    // if (distance > 0) {
    //     //* Le joueur est à droite de l'ennemi
    //     Ennemis.direction = "right";
    //     if (!EnnemisHaveToJump){
    //         Ennemis.NbrePas += followSpeed;
             
    //     }
    // } else {
    //     //* Le joueur est à gauche de l'ennemi
    //     Ennemis.direction = "left";
    //     if (!EnnemisHaveToJump){
    //         Ennemis.NbrePas -= followSpeed;
             
    //     }
    // }
}

function doRound(Ennemis){
    Ennemis.movement = "walk"

    Ennemis.isFollowing = false

    let CurrentX = Ennemis.x
    let EnnemiEnd = Ennemis.xEnd
    let EnnemiStart = Ennemis.xStart
    let EnnemisHaveToJump = Ennemis.haveToJump



    //& FAIRE UNE RONDE
    if (CurrentX >= EnnemiEnd){
        Ennemis.direction = "left"
    }else if (CurrentX <= EnnemiStart){
        Ennemis.direction = "right"
    }
    
    if (Ennemis.direction == "right"){
        if (haveToJump){
            haveToJump = false
            EnnemiEnd = CurrentX
            Ennemis.direction = "left"
        }else{
            CurrentX += Ennemis.vitesse
        }
    }else{
        if (haveToJump){
            haveToJump = false
            EnnemiStart = CurrentX
            Ennemis.direction = "right"
        }else{
            CurrentX -= Ennemis.vitesse
        }
        
    }

     
    Ennemis.haveToJump = EnnemisHaveToJump
    Ennemis.x = CurrentX
    Ennemis.xstart = EnnemiStart
    Ennemis.xEnd = EnnemiEnd
}



let drawEnnemi = (Ennemis) => {

    // ~ Variables positions Ennemis
    let CurrentX = Ennemis.x;
    let EnnemiY = Ennemis.y
    
    

    // ~ Variables Collisions / HitBox Ennemis
    let EnnemiBoundingBox = expandRect(CurrentX, EnnemiY, Ennemis.tailleW, Ennemis.tailleH, 8, 3)
    let seePlayer = rectIsInRect(characterPositionX, characterPositionY, characterBoundingBoxWidth, characterBoundingBoxHeight, EnnemiBoundingBox[0], EnnemiBoundingBox[1], EnnemiBoundingBox[2], EnnemiBoundingBox[3])


    doRound(Ennemis)

    // if (seePlayer){
    //     followPlayer(Ennemis)
    // }else{
    //     doRound(Ennemis)
    // }

    // ~ Debug Mod
    if (debugMod) {
        fill(255, 0, 0, 70)
        rect(EnnemiBoundingBox[0], EnnemiBoundingBox[1], EnnemiBoundingBox[2], EnnemiBoundingBox[3])
        fill(255)
    }
    

    //~ Creation du Ennemis
    animationEnnemis(Ennemis, CurrentX, EnnemiY, Ennemis.tailleW, Ennemis.tailleH, Ennemis.direction, Ennemis.movement, Ennemis.Color)
}




// ANIMATION ENNEMI

function animationEnnemis(CurrentEnnemi, positionX, positionY, width, height, direction, movement, color) {

    fill(color)
    circle(positionX + 35, positionY - 25, 20);

    let timer = (round(millis() / animationSpeed)) % 2

    let EnnemiTexturesList = []

    if (movement == "walk") {

        for (let y = 0; y < 32; y += 32) {
            for (let x = 0; x < 128; x += 32) {
                EnnemiTexturesList.push(PNJTextures.get(x, y, 32, 32));
            }
        }
    }
    else if (movement == "idle") {

        for (let y = 0; y < 26; y += 26) {
            for (let x = 0; x < 88; x += 22) {
                EnnemiTexturesList.push(PNJTextures.get(x, y, 22, 26));
            }
        }
    }
    //? Changer de frame
    if (timer && !CurrentEnnemi.currentFrame) {
        CurrentEnnemi.indexFrame++
        CurrentEnnemi.currentFrame = true
    }
    if (!timer) {
        CurrentEnnemi.currentFrame = false
    }
    //? Remettre l'index au début 
    if (CurrentEnnemi.indexFrame >= EnnemiTexturesList.length) {
        CurrentEnnemi.indexFrame = 0
    }

    let EnnemiCurrentTextures = EnnemiTexturesList[CurrentEnnemi.indexFrame]

    if (direction == "right") {
        image(EnnemiCurrentTextures, positionX, positionY, width, height)

        //? direction GAUCHE
    } else if (direction == "left") {
        scale(-1, 1)
        image(EnnemiCurrentTextures, -positionX - width, positionY, width, height)
        scale(-1, 1)
    }
}




//#endregion