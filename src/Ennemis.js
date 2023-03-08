//#region MANAGER 
function MobManager() {

    // ~ Draw des Mobs en EXTERIEUR
    if (engineOne) {

        mob(ForEnnemis.Ennemis.Enn1, characterPositionX, characterPositionY);
        
    }
}
//#endregion



//& Collisions
function handleCollisionMobs(agentX, agentY, agentWidth, agentHeight, agentDirection, objectX, objectY, objectWidth, objectHeight, velocityY, jumpCount, isJumping) {

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

                if (agentDirection == "left"){

                    haveToJump = true
                }else{
                    haveToJump = false
                }
    
            //? collisions à gauche de l'objet
            } else if (agentX < objectX + objectWidth && agentX < objectX) {
                agentX = objectX - agentWidth

                if (agentDirection == "right"){
                    haveToJump = true
                }else{
                    haveToJump = false
                }

            }
            

            
            return [agentX, agentY, velocityY, jumpCount, isJumping, haveToJump]
        }  

    }
    return [agentX, agentY, velocityY, jumpCount, isJumping, haveToJump]
}




function followPlayer(Mobs){

    Mobs.isFollowing = true

    let distance = characterPositionX - Mobs.x;
    let followSpeed = Mobs.followSpeed
    let MobsHaveToJump = Mobs.haveToJump

    Mobs.movement = "walk"

    Mobs.direction = "right";

    if (distance < 0){
        Mobs.direction = "left";
        followSpeed *= -1
    }

    if (!MobsHaveToJump){
        Mobs.stepCount += followSpeed;
    }else{
        Mobs.haveToJump = false
    }


}

function doRound(Mobs){
    Mobs.movement = "walk"

    Mobs.isFollowing = false

    let CurrentX = Mobs.x
    let walkAmount = Mobs.stepCount

    let MobEnd = Mobs.xEnd
    let MobStart = Mobs.xStart

    let MobsHaveToJump = Mobs.haveToJump



    //& FAIRE UNE RONDE
    if (CurrentX >= MobEnd){
        Mobs.direction = "left"
    }else if (CurrentX <= MobStart){
        Mobs.direction = "right"
    }
    

    
    //& Se déplacer
    if (Mobs.direction == "right"){
        
        if (haveToJump){
            Mobs.direction = "left"
            // Mobs.distance -= 10
            walkAmount -= Mobs.speed
            haveToJump = false
            
        }else{
            
            walkAmount += Mobs.speed
            
        }
    }else{
        if (haveToJump){
            Mobs.direction = "right"

            // Mobs.xStart += 10
            // Mobs.distance -= 10

            walkAmount += Mobs.speed

            // MobStart = CurrentX
            haveToJump = false
            

        }else{
            walkAmount -= Mobs.speed
            
        }
        
    }

     
    Mobs.haveToJump = MobsHaveToJump
    Mobs.stepCount = walkAmount
    Mobs.xStart = MobStart
    Mobs.xEnd = MobEnd
}


function mob(Mobs, characterPositionX, characterPositionY){
    

    let MobStart = Mobs.globalStartX + xStartWorld
    let MobDistance = Mobs.distance + Mobs.globalStartX
    let MobEnd = Mobs.globalStartX + MobDistance + xStartWorld;

    Mobs.x = xStartWorld + Mobs.stepCount;
    Mobs.y = Mobs.y + yStartWorld

    let MobsX = Mobs.x
    let MobsY = Mobs.y

    

    let MobsHaveToJump = Mobs.haveToJump


    let MobsWidth = Mobs.width;
    let MobsHeight = Mobs.height;

    let MobsVelocityY = Mobs.velocityY;
    let MobsMass = Mobs.mass;

    let MobsIsJumping = Mobs.isJumping;
    let MobsJumpCount = Mobs.jumpCount;

    let mapsToCheck = getMapsToCheck(characterPositionX, characterPositionY)


    //& Ajout de la gravité à l'Mobs
    let gravityReturns = getPositionWithGravity(MobsY,
        MobsVelocityY,
        gravityForce,
        MobsMass)
    MobsY = gravityReturns[0]
    MobsVelocityY = gravityReturns[1]
    
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
                    [MobsX, MobsY, MobsVelocityY, MobsJumpCount, MobsIsJumping, MobsHaveToJump] = handleCollisionMobs(MobsX, MobsY, MobsWidth, MobsHeight, Mobs.direction, thisObjectX, thisObjectY, rectWidth, rectHeight, MobsVelocityY, MobsJumpCount, MobsIsJumping)
                }
            }
        }
    }

    //& Ajouter le saut au mob
    if (MobsHaveToJump && Mobs.isFollowing){
        
        if (!MobsIsJumping && MobsJumpCount < 1){

            let jumpReturns = addJump(MobsY,
                characterJumpHeight,
                MobsVelocityY,
                gravityForce)
        
            MobsY = jumpReturns[0];
            MobsVelocityY = jumpReturns[1];
            MobsIsJumping = true
            MobsJumpCount += 1
            Mobs.movement = "jump"
        }else{
            MobsJumpCount = 0
        }
    }
    
    
    
    Mobs.x = MobsX
    Mobs.y = MobsY
    Mobs.velocityY = MobsVelocityY
    Mobs.isJumping = MobsIsJumping
    Mobs.jumpCount = MobsJumpCount

    Mobs.distance = MobDistance
    Mobs.xStart = MobStart
    Mobs.xEnd = MobEnd
    Mobs.y = MobsY
    Mobs.haveToJump = MobsHaveToJump;


    drawMob(Mobs)

    
}




let drawMob = (Mobs) => {

    // ~ Variables positions Mobs
    let CurrentX = Mobs.x;
    let MobY = Mobs.y
    
    

    // ~ Variables Collisions / HitBox Mobs
    let MobBoundingBox = expandRect(CurrentX, MobY, Mobs.width, Mobs.height, Mobs.detectDistX, Mobs.detectDistY)
    let seePlayer = rectIsInRect(characterPositionX, characterPositionY, characterBoundingBoxWidth, characterBoundingBoxHeight, MobBoundingBox[0], MobBoundingBox[1], MobBoundingBox[2], MobBoundingBox[3])


    if (seePlayer){
        followPlayer(Mobs)
    }else{
        doRound(Mobs)
    }

    // ~ Debug Mod
    if (debugMod) {
        fill(255, 0, 0, 70)
        rect(MobBoundingBox[0], MobBoundingBox[1], MobBoundingBox[2], MobBoundingBox[3])
        fill(255)
    }
    

    //~ Creation du Mobs
    animationMobs(Mobs, CurrentX, MobY, Mobs.width, Mobs.height, Mobs.direction, Mobs.movement, Mobs.color)
}




// ANIMATION Mob

function animationMobs(CurrentMob, positionX, positionY, width, height, direction, movement, color) {

    fill(color)
    circle(positionX + 35, positionY - 25, 20);

    let timer = (round(millis() / animationSpeed)) % 2

    let MobTexturesList = []

    if (movement == "walk") {
        for (let y = 32; y < 64; y += 32) {
            for (let x = 0; x < 128; x += 32) {
                MobTexturesList.push(PNJTextures.get(x, y, 32, 32));
            }
        }
    }
    else if (movement == "idle") {

        for (let y = 0; y < 32; y += 32) {
            for (let x = 0; x < 128; x += 32) {
                MobTexturesList.push(PNJTextures.get(x, y, 32, 32));
            }
        }
    }
    else if (movement == "jump") {

        for (let y = 64; y < 96; y += 32) {
            for (let x = 0; x < 128; x += 32) {
                MobTexturesList.push(PNJTextures.get(x, y, 32, 32));
            }
        }
    }
    //? Changer de frame
    if (timer && !CurrentMob.currentFrame) {
        CurrentMob.indexFrame++
        CurrentMob.currentFrame = true
    }
    if (!timer) {
        CurrentMob.currentFrame = false
    }
    //? Remettre l'index au début 
    if (CurrentMob.indexFrame >= MobTexturesList.length) {
        CurrentMob.indexFrame = 0
    }

    let MobCurrentTextures = MobTexturesList[CurrentMob.indexFrame]

    if (direction == "right") {
        image(MobCurrentTextures, positionX, positionY, width, height)

        //? direction GAUCHE
    } else if (direction == "left") {
        scale(-1, 1)
        image(MobCurrentTextures, -positionX - width, positionY, width, height)
        scale(-1, 1)
    }
}




//#endregion