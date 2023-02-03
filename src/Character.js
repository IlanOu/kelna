// ajouter des controles à l'objet  
function getMovementsControls (objectPositionX, speed){
  // éviter de pouvoir aller à droite et à gauche en meme temps
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



// Mouvements gauche/droite
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



// ajouter un saut à l'objet
function addJump(positionY, jumpHeight, velocityY, gravityForce){
  velocityY = -gravityForce;
  velocityY -= jumpHeight;
  
  return [positionY, velocityY]
}



// dessiner le perso
function drawCharacter (positionX, positionY, width, height) {
  fill('black')
  ellipse(positionX, positionY, width, height)
}



function character() {

  


  // ajouter des contrôles au perso (gauche, droite) | inverser movesSpeed pour inverser le sens de deplacements
  characterPositionX = getMovementsControls(characterPositionX, characterMovesSpeed)


  // caméra mouvements droite
  if (characterPositionX < width-width/4){
    characterPositionXInScreen = characterPositionX
  }else{
    if (xStartWorld+((rectWidth*Maps.numberOfRow)*World.worldsMap[0].length)-(rectWidth*Maps.numberOfRow*2) > 0){
      xStartWorld -= characterMovesSpeed
      characterPositionX -= characterMovesSpeed
    }
  }

  // caméra mouvements gauche
  if (characterPositionX > width/4){
    characterPositionXInScreen = characterPositionX
  }else{
    if (xStartWorld < 0){
      xStartWorld += characterMovesSpeed
      characterPositionX += characterMovesSpeed
    }
  }

  // caméra mouvements bas
  if (characterPositionY > height-height/8){
    yStartWorld -= characterVelocityY
  }
  

  // ajouter la gravité au personnage
  let gravityReturns = getPositionWithGravity(characterPositionY,
                                              characterVelocityY,
                                              gravityForce,
                                              characterMass)
  characterPositionY = gravityReturns[0]
  characterVelocityY = gravityReturns[1]




  // ajouter le saut au personnage
  if (spaceKeyIsPressed) {
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

      // ajoute le double saut au personnage  
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
  // vérifier si le joueur touche le sol
  characterIsGrounded = isGrounded( characterPositionY,
                                    characterHeight,
                                    0,
                                    height,
                                    width)

  // si le joueur touche le sol, reset le nombre de saut 
  if (characterIsGrounded) {
    isJumping = false;
    characterJumpCount = 0
   } 
 
  // contraindre les positions du perso
  let positions = containedPositionsIn( characterPositionX,
                                        characterPositionY,
                                        characterWidth,
                                        characterHeight,
                                        width,
                                        height)
  characterPositionX = positions[0];
  characterPositionY = positions[1];

  // afficher le personnage
  drawCharacter(characterPositionXInScreen,
                characterPositionY,
                characterWidth,
                characterHeight)
}