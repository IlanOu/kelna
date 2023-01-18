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

