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
function handleCollision(playerX, prevPlayerX, playerY, prevPlayerY, playerWidth, playerHeight, objectX, objectY, objectWidth, objectHeight) {
  
  //* Vérifier si les boîtes se chevauchent
  
  // console.log(rectIsInRect(playerX, playerY, playerWidth, playerHeight, objectX, objectY, objectWidth, objectHeight) )

  if (rectIsInRect(playerX, playerY, playerWidth, playerHeight, objectX, objectY, objectWidth, objectHeight)) {
    
    // objectX = objectX - objectWidth/2
    // objectWidth = objectWidth*2



    
    

    //? si le bord du bas de mon perso est en dessous du bord haut de mon cube
    if (playerY + playerHeight > objectY && playerY + playerHeight < objectY + objectHeight){

      fill(0, 255, 255)
      playerY = objectY - playerHeight

      characterIsGrounded = true
      characterVelocityY = 0
      characterJumpCount = 0
      isJumping = false;
    }
    //? si le haut de mon perso est au dessus du bas de mon cube
    //? et que le bas de mon perso est au dessous du bas de mon cube  
    else if(playerY < objectY + objectHeight && playerY + playerHeight > objectY + objectHeight){
      
      if (characterIsGrounded){
        fill(0,255,0)
        playerY = objectY + objectHeight
      }else{
        fill(255,0,255)
        if (playerX < objectX + objectWidth && playerX > objectX){
          
          //? le perso est à gauche du cube
          playerX = objectX + objectWidth
        }else if (playerX + playerWidth > objectX  && playerX < objectX){
          //? le perso est à droite du cube
          playerX = objectX - playerWidth
        }
        
      }
      
    }
  
    

    // fill(0, 255, 0, 255)
    rect(objectX, objectY, objectWidth, objectHeight)
    fill(255, 255, 255)
    


    /*
    // //* Vérifier la direction d'où vient le joueur
    
    // if (prevPlayerX < playerX) {
      
    //   //^ Le joueur se déplace vers la droite
    //   playerX = objectX - playerWidth;

    // } else if (prevPlayerX > playerX) {
      
    //   //^ Le joueur se déplace vers la gauche
    //   playerX = objectX + objectWidth;

    // }

    // if (prevPlayerY < playerY) {
      
    //   //^ Le joueur se déplace vers le bas
    //   playerY = objectY - playerHeight;
    //   characterIsGrounded = true
    //   characterVelocityY = 0
    // } else if (prevPlayerY > playerY) {
      
    //   //^ Le joueur se déplace vers le haut
    //   playerY = objectY + objectHeight;

    // }
    */
  }
  return [playerX, playerY]
}


//& Système du personnage
function character() {
  //* ajouter des contrôles au perso (gauche, droite) | inverser movesSpeed pour inverser le sens de deplacements
  characterPositionX = getMovementsControls(characterPositionX, characterMovesSpeed)


  //* Ajouter les mouvements de la caméra
  //#region 





  //^ caméra mouvements droite


  //? si mon perso est à gauche de l'écran
  if (characterPositionX < width-width/4){

    //? la position X de mon perso à l'écran vaut la position X globale de mon perso
    characterPositionXInScreen = characterPositionX
  }else{
    //? sinon, si mon perso est à droite de l'écran

    //? si mon écran n'est pas le plus à gauche possible
    if (xStartWorld+((rectWidth*Maps.numberOfRow)*World.worldsMap[0].length)-(rectWidth*Maps.numberOfRow*2) > 0){
      
      //? le monde bouge vers la gauche (la caméra se décale vers la droite)
      xStartWorld -= characterMovesSpeed
      characterPositionX -= characterMovesSpeed
    }
  }

  //^ caméra mouvements gauche

  //? si mon perso est à droite de l'écran
  if (characterPositionX > width/4){

    //? la position X de mon perso à l'écran vaut la position X globale de mon perso
    characterPositionXInScreen = characterPositionX
  }else{
    //? sinon, si mon perso est à gauche de l'écran

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


  //* ajouter la gravité au personnage
  let gravityReturns = getPositionWithGravity(characterPositionY,
                                              characterVelocityY,
                                              gravityForce,
                                              characterMass)
  characterPositionY = gravityReturns[0]
  characterVelocityY = gravityReturns[1]


  //* ajouter le saut au personnage
  //#region 
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
  characterIsGrounded = isGrounded( characterPositionY,
                                    characterHeight,
                                    0,
                                    height,
                                    width)

  //^ si le joueur touche le sol, reset le nombre de saut 
  if (characterIsGrounded) {
    isJumping = false;
    characterJumpCount = 0
    // characterVelocityY = 0
  } 

  //#endregion


  //* contraindre les positions du perso
  let positions = containedPositionsIn( characterPositionX,
                                        characterPositionY,
                                        characterWidth,
                                        characterHeight,
                                        width,
                                        height)
  characterPositionX = positions[0];
  characterPositionY = positions[1];






  //~ collisions

  //^ Récupère la map actuelle 
  let currentMapInWorld = findIndexOfPositionIn2dArray(characterPositionX, characterPositionY, World.worldsMap, rectWidth*Maps.numberOfRow, rectHeight*Maps.numberOfColumns)
  let currentMapName = World.worldsMap[currentMapInWorld[1]][currentMapInWorld[0]]


  //^ Récupère la couche des collisions sur la map
  let currentMapTableColliders = Maps[currentMapName].layers[1]

  //^ Pour chaque carré dans le tableau 
  for (let row=0; row<currentMapTableColliders.length; row++){
    for (let column=0; column<currentMapTableColliders[row].length; column++){

      //^ Lui donner une collision
      // console.log(currentMapTableColliders[row][column])
      let thisObject = currentMapTableColliders[row][column]

      // xStartWorld+((rectWidth*Maps.numberOfRow)*World.worldsMap[0].length)-(rectWidth*Maps.numberOfRow*2)

      let thisObjectX = ((rectWidth*Maps.numberOfRow)*(currentMapInWorld[0])) + (xStartWorld + (rectWidth*column))
      let thisObjectY = ((rectHeight*Maps.numberOfColumns)*(currentMapInWorld[1])) + (yStartWorld + (rectHeight*row))

      rect(thisObjectX, thisObjectY, 10, 10)


      if (thisObject > 0){
        [characterPositionX, characterPositionY] = handleCollision(characterPositionX, previousPlayerX, characterPositionY, previousPlayerY, characterWidth, characterHeight, thisObjectX, thisObjectY, rectWidth, rectHeight)
      }
    }
  }






  //* afficher le personnage
  drawCharacter(characterPositionXInScreen,
                characterPositionY,
                characterWidth,
                characterHeight)
}