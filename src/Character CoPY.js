// ajouter des controles à l'objet  
function getMovementsControls (objectPositionX, objectPositionY, speed){
  // éviter de pouvoir aller à droite et à gauche en meme temps
  if (keyIsDown(81) || keyIsDown(LEFT_ARROW)) {
    return [moveLeft(objectPositionX, speed), objectPositionY]
  } 
  if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
    return [moveRight(objectPositionX, speed), objectPositionY]
  } 
  if (keyIsDown(UP_ARROW)) {
    return [objectPositionX, moveUp(objectPositionY, speed)]
  } 
  if (keyIsDown(DOWN_ARROW)) {
    return [objectPositionX, moveDown(objectPositionY, speed)]
  }
  return [objectPositionX, objectPositionY]
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
  characterPositionX = getMovementsControls(characterPositionX, characterPositionY, characterMovesSpeed)[0]
  characterPositionY = getMovementsControls(characterPositionX, characterPositionY, characterMovesSpeed)[1]

  


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
  drawCharacter(characterPositionX,
                characterPositionY,
                characterWidth,
                characterHeight)
}