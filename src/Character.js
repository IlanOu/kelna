//& ajouter des controles à l'objet  
function getMovementsControls (objectPositionX, speed){

  //* éviter de pouvoir aller à droite et à gauche en meme temps

  if ((keyIsDown(68) && keyIsDown(81)) 
  || (keyIsDown(RIGHT_ARROW) && keyIsDown(LEFT_ARROW)) 
  || (keyIsDown(68) && keyIsDown(LEFT_ARROW))
  || (keyIsDown(81) && keyIsDown(RIGHT_ARROW)))
  {
    return objectPositionX
  } else if (keyIsDown(81) || keyIsDown(LEFT_ARROW)) {
    return moveLeft(objectPositionX, speed)
  }else if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
    return moveRight(objectPositionX, speed)
  }
  return objectPositionX
}


//& Mouvements gauche/droite et haut/bas
//#region 
function moveLeft (positionX, speed) {
  return positionX-speed
}
function moveRight (positionX, speed) {
  return positionX+speed
}
function moveUp (positionY, speed) {
  return positionY-speed
}
function moveDown (positionY, speed) {
  return positionY+speed
}
//#endregion


//& ajouter un saut à l'objet
function addJump(positionY, jumpHeight, velocityY, gravityForce){
  velocityY = -gravityForce;
  velocityY -= jumpHeight;

  
  return [positionY, velocityY]
}


//& dessiner le perso
function drawCharacter (positionX, positionY, width, height) {
  fill('black')
  rect(positionX, positionY, width, height)
}


//& Collisions
function handleCollision(agentX, agentY, agentWidth, agentHeight, objectX, objectY, objectWidth, objectHeight) {
  
  //* Vérifier si les boîtes se chevauchent
  
  if (rectIsInRect(agentX, agentY, agentWidth, agentHeight, objectX, objectY, objectWidth, objectHeight)) {

    let collideOnBorder = false;
    let collideOnTopOrBot = false;

    
    
    
    //~ Collisions dessus / dessous de l'objet
    if (!collideOnBorder){
      
      //? collisions au dessous de l'objet
      if (agentY < objectY + objectHeight && agentY - objectY >= objectHeight){
        agentY = objectY + objectHeight - 5000
        collideOnTopOrBot = true
        fill(255,255,0)
        
      }
      //? collision au dessus de l'objet
      else if (agentY + agentHeight > objectY && agentY < objectY){
        fill(105,25,225)
        collideOnTopOrBot = true

        agentY = objectY - agentHeight

        characterIsGrounded = true
        characterJumpCount = 0;
        isJumping = false
        if (!spaceKeyIsPressed)
        characterVelocityY = 0
      }
      
      
    }
    

    //~ Collisions gauche / droite de l'objet
    if (!collideOnTopOrBot){
      //? si le bas du perso est en dessous du haut du cube + 1/10 de sa hauteur
      if (agentY + agentHeight > objectY + objectHeight / 10){
        
        //? collisions à droite de l'objet
        if (agentX + agentWidth > objectX && agentX > objectX){
          
          fill(3, 158, 160)
          agentX = objectX + objectWidth
          collideOnBorder = true
        //? collisions à gauche de l'objet
        }else if (agentX < objectX + objectWidth && agentX < objectX){
          fill(100, 158, 10)
          agentX = objectX - agentWidth
          collideOnBorder = true
        }
      }
    }
    
    

    // // //? si le bas de mon perso est en dessous du haut de mon cube (si je suis posé sur un cube)
    // // if (agentY + agentHeight > objectY && agentY + agentHeight < objectY + objectHeight){


    // //   if (!spaceKeyIsPressed){
    // //     characterIsGrounded = true;
    // //     characterJumpCount = 0;
    // //     isJumping = false;
    // //     characterVelocityY = 0;

    // //     //? je suis sur le cube
    // //     agentY = objectY - agentHeight;
    // //   }
     
     
    // //   fill(0, 0, 255)
       
    // // }
    // // //? si le haut de mon perso est au dessus du bas de mon cube
    // // //? et que le bas de mon perso est au dessous du bas de mon cube (si je saute sous un cube)
    // // else if(agentY < objectY + objectHeight && agentY + agentHeight > objectY + objectHeight){
    
    // //   if (agentY < objectY + objectHeight){
    // //     agentY = objectY + objectHeight
    // //     fill(255,0,255)
    // //   }

    // // }else{
    // //   //? si mon perso est à gauche du cube 
    // //   if (agentX < objectX + objectWidth && agentX > objectX){
        
    // //     //? le perso est à gauche du cube
    // //     agentX = objectX + objectWidth
    // //   }else if (agentX + agentWidth > objectX  && agentX < objectX){
    // //     //? le perso est à droite du cube
    // //     agentX = objectX - agentWidth
    // //   }
    // // }

    
  
    

    
    rect(objectX, objectY, objectWidth, objectHeight)
    fill(255, 255, 255)
    
  }
  return [agentX, agentY]
}


//& Système du personnage
function character() {
  previousPlayerX = characterPositionX
  previousPlayerY = characterPositionY

  //~ Contrôles du perso (gauche, droite)
  characterPositionX = getMovementsControls(characterPositionX, characterMovesSpeed)


  //#region //~ Mouvement de caméra


  //^ caméra mouvements droite

  //? si mon perso est à droite de l'écran
  if (characterPositionX > width-width/4){

    //? si mon écran n'est pas le plus à gauche possible
    if (xStartWorld+((rectWidth*Maps.numberOfRow)*World.worldsMap[0].length)-(rectWidth*Maps.numberOfRow) > 0){
      
      //? le monde bouge vers la gauche (la caméra se décale vers la droite)
      xStartWorld -= characterMovesSpeed
      characterPositionX -= characterMovesSpeed
    }
  }

  //^ caméra mouvements gauche

  //? si mon perso est à gauche de l'écran
  if (characterPositionX < width/4){

    //? si mon écran n'est pas le plus à gauche possible
    if (xStartWorld < 0){

      //? le monde bouge vers la droite (la caméra se décale vers la gauche)
      xStartWorld += characterMovesSpeed
      characterPositionX += characterMovesSpeed
    }
  }

  //^ caméra mouvements bas

  if (characterPositionY > height-height/8){
    yStartWorld -= characterVelocityY
  }
  
  //#endregion


  //#region //~ Gravité du personnage
  let gravityReturns = getPositionWithGravity(characterPositionY,
                                              characterVelocityY,
                                              gravityForce,
                                              characterMass)
  characterPositionY = gravityReturns[0]
  characterVelocityY = gravityReturns[1]

  //#endregion

  
  //#region //~ saut du personnage
  if (spaceKeyIsPressed) {
    //^ le saut du personnage
    if (!isJumping && characterJumpCount < characterMaxJumps) {

      isJumping = true;
      characterDoubleJumping = false;
      characterJumpCount++;

      let jumpReturns = addJump(characterPositionY,
                                characterJumpHeight,
                                characterVelocityY,
                                gravityForce)
      characterPositionY = jumpReturns[0];
      characterVelocityY = jumpReturns[1];

      //^ le double saut du personnage  
    } else if (characterDoubleJumping && characterJumpCount < characterMaxJumps) {
      characterDoubleJumping = false;
      characterJumpCount++;

      let jumpReturns = addJump(characterPositionY,
                                characterJumpHeight,
                                characterVelocityY,
                                gravityForce)
      characterPositionY = jumpReturns[0];
      characterVelocityY = jumpReturns[1];
    }
  }
  //^ vérifie si le joueur touche le sol
  characterIsGrounded = isGrounded( characterPositionX,
                                    characterPositionY,
                                    characterWidth,
                                    characterHeight,
                                    0,
                                    height,
                                    width)

  //^ si le joueur touche le sol, reset le nombre de saut 
  if (characterIsGrounded) {
    isJumping = false;
    characterJumpCount = 0
    characterVelocityY = 0
  } 

  //#endregion


  //#region //~ contraintes des positions du perso
  let positions = containedPositionsIn( characterPositionX,
                                        characterPositionY,
                                        characterWidth,
                                        characterHeight,
                                        width,
                                        height)
  characterPositionX = positions[0];
  characterPositionY = positions[1];

  //#endregion
  

  //#region //~ collisions

  //^ Récupère la map actuelle 
  let currentMapInWorld = findIndexOfPositionIn2dArray(characterPositionX, characterPositionY, World.worldsMap, rectWidth*Maps.numberOfRow, rectHeight*Maps.numberOfColumns)
  let currentMapName = World.worldsMap[currentMapInWorld[1]][currentMapInWorld[0]]


  //^ Récupère la couche des collisions sur la map
  let currentMapTableColliders = Maps[currentMapName].layers[1]

  //^ Pour chaque carré dans le tableau 
  for (let row=0; row<currentMapTableColliders.length; row++){
    for (let column=0; column<currentMapTableColliders[row].length; column++){

      //^ Lui donner une collision
      let thisObject = currentMapTableColliders[row][column]


      let thisObjectX = ((rectWidth*Maps.numberOfRow)*(currentMapInWorld[0])) + (xStartWorld + (rectWidth*column))
      let thisObjectY = ((rectHeight*Maps.numberOfColumns)*(currentMapInWorld[1])) + (yStartWorld + (rectHeight*row))

      rect(thisObjectX, thisObjectY, 10, 10)


      if (thisObject > 0){
        [characterPositionX, characterPositionY] = handleCollision(characterPositionX, characterPositionY, characterWidth, characterHeight, thisObjectX, thisObjectY, rectWidth, rectHeight)
      }
    }
  }

  //#endregion




  //~ affichage du personnage
  drawCharacter(characterPositionX,
                characterPositionY,
                characterWidth,
                characterHeight)
}