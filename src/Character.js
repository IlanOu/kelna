// ajouter des controles à l'objet  
function getMovementsControls (objectPositionX, speed){
  if (keyIsDown(81) || keyIsDown(LEFT_ARROW)) {
    return moveLeft(objectPositionX, speed)
  }

  if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
    return moveRight(objectPositionX, speed)
  }
  return objectPositionX
}


// vérifier si une touche est pressée 
function keyPressed() {
  if (keyCode === 32) {
    spaceKeyIsPressed = true;
  }
}
// vérifier si une touche est relâchée 
function keyReleased() {
  if (keyCode === 32) {
    spaceKeyIsPressed = false;
    characterDoubleJumping = true;
  }
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
  fill('red')
  ellipse(positionX, positionY, width, height)
}



function character(gridX1, gridX2, gridY2) {

  // ajouter des contrôles au perso (gauche, droite)
  characterPositionX = getMovementsControls(characterPositionX, characterMovesSpeed)


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
  characterIsGrounded = isGrounded(characterPositionY,
    characterHeight,
    gridX1,
    gridY2,
    gridX2)

  if (characterIsGrounded) {
    isJumping = false;
    characterJumpCount = 0
  }


  // contraindre les positions du perso
  let positions = containedPositionsIn(characterPositionX,
    characterPositionY,
    characterWidth,
    characterHeight,
    gridX2,
    gridY2)
  characterPositionX = positions[0];
  characterPositionY = positions[1];

  // afficher le personnage
  drawCharacter(characterPositionX,
    characterPositionY,
    characterWidth,
    characterHeight)


}