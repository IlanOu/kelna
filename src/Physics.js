// contraindre les position X, Y dans le containeur
function containedPositionsIn (objectPositionX, 
                                 objectPositionY, 
                                 objectWidth, 
                                 objectHeight, 
                                 containerWidth, 
                                 containerHeight) 
{
  return  [constrain(
            objectPositionX, 
            objectWidth / 2, 
            containerWidth - objectWidth / 2
          ), 
          constrain(
            objectPositionY, 
            objectHeight / 2, 
            containerHeight - 
            objectHeight / 2
          )]
}

// ajouter la gravité à la positionY !! ATTENTION, la velocité doit être ACTUALISEE !
function getPositionWithGravity(positionY, velocityY, gravityForce, objectMass){
  velocityY += (gravityForce*objectMass)/20;
  positionY += velocityY;
  return [positionY, velocityY]
}

// détécter si un rectangle est dans un autre
function rectIsInRect(x1, y1, w1, h1, x2, y2, w2, h2) {
  x1 -= w1 / 2;
  y1 -= h1 / 2;

  return (
    x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2
  );
}

function isGrounded(objectPositionY, objectHeight, groundX1, groundY1, groundX2){
  // si l'objet touche le bas du rectangle
  return rectIsInRect(0, objectPositionY, 1, objectHeight, groundX1, groundY1, groundX2, groundY1)
}