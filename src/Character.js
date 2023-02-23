//& ajouter des controles à l'objet  
function getMovementsControls(objectPositionX, objectPositionY, speed) {

  if (EngineOne) {

    //~ Gauche Droite
    //* éviter de pouvoir aller à droite et à gauche en meme temps
    if ((keyIsDown(38) && keyIsDown(81))
      || (keyIsDown(RIGHT_ARROW) && keyIsDown(LEFT_ARROW))
      || (keyIsDown(38) && keyIsDown(LEFT_ARROW))
      || (keyIsDown(81) && keyIsDown(RIGHT_ARROW))) {
      objectPositionX = objectPositionX
    }
    if (keyIsDown(81) || keyIsDown(LEFT_ARROW)) {
      objectPositionX = moveLeft(objectPositionX, speed)
    }
    if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
      objectPositionX = moveRight(objectPositionX, speed)
    }

    return objectPositionX
  } else {

    //^ réduire la vitesse des diagonales
    if ((keyIsDown(68) && keyIsDown(83)) ||
      keyIsDown(68) && keyIsDown(DOWN_ARROW) ||
      keyIsDown(68) && keyIsDown(90) ||
      keyIsDown(68) && keyIsDown(UP_ARROW) ||
      keyIsDown(81) && keyIsDown(83) ||
      keyIsDown(81) && keyIsDown(DOWN_ARROW) ||
      keyIsDown(81) && keyIsDown(90) ||
      keyIsDown(81) && keyIsDown(UP_ARROW) ||
      keyIsDown(RIGHT_ARROW) && keyIsDown(83) ||
      keyIsDown(RIGHT_ARROW) && keyIsDown(DOWN_ARROW) ||
      keyIsDown(RIGHT_ARROW) && keyIsDown(90) ||
      keyIsDown(RIGHT_ARROW) && keyIsDown(UP_ARROW) ||
      keyIsDown(LEFT_ARROW) && keyIsDown(83) ||
      keyIsDown(LEFT_ARROW) && keyIsDown(DOWN_ARROW) ||
      keyIsDown(LEFT_ARROW) && keyIsDown(90) ||
      keyIsDown(LEFT_ARROW) && keyIsDown(UP_ARROW)) {
      speed /= 1.25
    }


    //~ Gauche Droite
    if ((keyIsDown(68) && keyIsDown(81))
      || (keyIsDown(RIGHT_ARROW) && keyIsDown(LEFT_ARROW))
      || (keyIsDown(68) && keyIsDown(LEFT_ARROW))
      || (keyIsDown(81) && keyIsDown(RIGHT_ARROW))) {
      objectPositionX = objectPositionX
    }
    if (keyIsDown(81) || keyIsDown(LEFT_ARROW)) {
      objectPositionX = moveLeft(objectPositionX, speed)
    }
    if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
      objectPositionX = moveRight(objectPositionX, speed)
    }

    //~Haut Bas
    if ((keyIsDown(90) && keyIsDown(83))
      || (keyIsDown(UP_ARROW) && keyIsDown(DOWN_ARROW))
      || (keyIsDown(90) && keyIsDown(DOWN_ARROW))
      || (keyIsDown(83) && keyIsDown(UP_ARROW))) {
      objectPositionY = objectPositionY
    }
    if (keyIsDown(90) || keyIsDown(UP_ARROW)) {
      objectPositionY = moveUp(objectPositionY, speed)

    }
    if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) {
      objectPositionY = moveDown(objectPositionY, speed)
    }

    return [objectPositionX, objectPositionY]
  }

}


//& Mouvements gauche/droite et haut/bas
//#region 
function moveLeft(positionX, speed) {
  return positionX - speed
}
function moveRight(positionX, speed) {
  return positionX + speed
}
function moveUp(positionY, speed) {
  return positionY - speed
}
function moveDown(positionY, speed) {
  return positionY + speed
}
//#endregion


//& ajouter un saut à l'objet
function addJump(positionY, jumpHeight, velocityY, gravityForce) {
  velocityY = -gravityForce;
  velocityY -= jumpHeight;


  return [positionY, velocityY]
}


//& dessiner le perso
function drawCharacter(positionX, positionY, width, height, direction, movement) {
  let timer = (round(millis() / 100)) % 2

  characterTextureList = []

  if (PlayerCanMove === true) {
    //? animation MARCHER
    if (movement == "walk") {

      for (let y = 0; y < 320; y += 320) {
        for (let x = 0; x < 960; x += 320) {
          characterTextureList.push(characterTextureWalk.get(x, y, 320, 320));
        }
      }

      //? animation IDLE
    } else if (movement == "idle") {

      for (let y = 0; y < 320; y += 320) {
        for (let x = 0; x < 960; x += 320) {
          characterTextureList.push(characterTextureIdle.get(x, y, 320, 320));
        }
      }

    }
    //? animation JUMP
    else if (movement == "jump") {

      for (let y = 0; y < 320; y += 320) {
        for (let x = 0; x < 960; x += 320) {
          characterTextureList.push(characterTextureJump.get(x, y, 320, 320));
        }
      }

    }

    //? Changer de frame
    if (timer && !characterAnimationFramePassed) {
      characterAnimationIndex++
      characterAnimationFramePassed = true
    }
    if (!timer) {
      characterAnimationFramePassed = false
    }
    //? Remettre l'index au début 
    if (characterAnimationIndex >= characterTextureList.length) {
      characterAnimationIndex = 0
    }

    let characterCurrentTexture = characterTextureList[characterAnimationIndex]


    //? direction DROITE
    if (direction == "right") {
      image(characterCurrentTexture, positionX, positionY, width, height)

      //? direction GAUCHE
    } else if (direction == "left") {
      scale(-1, 1)
      image(characterCurrentTexture, -positionX - width, positionY, width, height)
    }

  }
}


//& Collisions
function handleCollision(agentX, agentY, agentWidth, agentHeight, objectX, objectY, objectWidth, objectHeight) {

  //* Vérifier si les boîtes se chevauchent
  if (rectIsInRect(agentX, agentY, agentWidth, agentHeight, objectX, objectY, objectWidth, objectHeight)) {

    //~ Collisions dessus / dessous de l'objet
    if ((agentX < objectX + objectWidth - (objectWidth / 10)) && (agentX + agentWidth > objectX + (objectWidth / 10))) {
      //? collisions en dessous de l'objet
      if (agentY < objectY + objectHeight && agentY > objectY) {
        agentY = objectY + objectHeight

        //! est relatif au perso
        characterVelocityY = 0;
      }
      //? collision au dessus de l'objet
      else if (agentY + agentHeight > objectY && agentY < objectY) {

        agentY = objectY - agentHeight

        //! est relatif au perso
        characterJumpCount = 0;
        //! est relatif au perso
        isJumping = false
        //! est relatif au perso
        if (!spaceKeyIsPressed)
          characterVelocityY = 0
      }
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
    }
  }
  return [agentX, agentY]
}


//& Système du personnage pour le moteur de vue 1
function character() {
  //~ Ancienne positions du perso
  previousPlayerX = characterPositionX
  previousPlayerY = characterPositionY

  //~ Contrôles du perso (gauche, droite)
  characterPositionX = getMovementsControls(characterPositionX, characterPositionY, characterMovesSpeed)

  //~ Limites de la velocité Y du perso
  characterVelocityY = limitNumberWithinRange(characterVelocityY, characterVelocityYMin, characterVelocityYMax)


  //#region //~ Mouvement de caméra


  // rect(0, yStartWorld, 20, ((rectHeight*Maps.numberOfColumns)*World.worldsMap.length))
  // fill(255, 0, 0)
  // rect(10, yStartWorld, 20, rectHeight*Maps.numberOfColumns)


  //^ caméra mouvements droite

  //? si mon perso est à DROITE de l'écran
  if (characterPositionX > width - width / 2) {

    //? si mon écran n'est pas le plus à gauche possible
    if (xStartWorld + ((rectWidth * Maps.numberOfRow) * World.worldsMap[0].length) - width > 0) {

      //? le monde bouge vers la gauche (la caméra se décale vers la droite)
      xStartWorld -= characterMovesSpeed
      characterPositionX -= characterMovesSpeed
    }
  }

  //^ caméra mouvements gauche

  //? si mon perso est à GAUCHE de l'écran
  if (characterPositionX < width / 4) {

    //? si mon écran n'est pas le plus à gauche possible
    if (xStartWorld < 0) {

      //? le monde bouge vers la droite (la caméra se décale vers la gauche)
      xStartWorld += characterMovesSpeed
      characterPositionX += characterMovesSpeed
    }
  }


  //^ caméra mouvements bas

  //? si mon perso est en BAS de l'écran
  if (characterPositionY > height - height / 4) {
    if (yStartWorld + ((rectHeight * Maps.numberOfColumns) * World.worldsMap.length) - height > 0) {
      yStartWorld -= characterVelocityY
      characterPositionY -= characterVelocityY
    }

  }
  if (characterPositionY > height - height / 3) {
    if (yStartWorld + ((rectHeight * Maps.numberOfColumns) * World.worldsMap.length) - height > 0) {
      yStartWorld -= characterMovesSpeed
      characterPositionY -= characterMovesSpeed
    }

  }


  //^ caméra mouvements haut

  //? si mon perso est en HAUT de l'écran
  if (characterPositionY < height / 3) {
    if (yStartWorld < 0) {
      yStartWorld += characterMovesSpeed
      characterPositionY += characterMovesSpeed
    }
  }
  if (characterPositionY < height / 4) {
    if (yStartWorld < 0) {
      yStartWorld += characterMovesSpeed
      characterPositionY += characterMovesSpeed
    }
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
  // characterIsGrounded = isGrounded( characterPositionX,
  //                                   characterPositionY,
  //                                   characterWidth,
  //                                   characterHeight,
  //                                   0,
  //                                   100,
  //                                   width)

  //^ si le joueur touche le sol, reset le nombre de saut 
  if (characterIsGrounded) {
    isJumping = false;
    characterJumpCount = 0
    characterVelocityY = 0
  }

  //#endregion


  //#region //~ contraintes des positions du perso
  let positions = containedPositionsIn(characterPositionX,
    characterPositionY,
    characterWidth,
    characterHeight,
    width,
    height)
  characterPositionX = positions[0];
  characterPositionY = positions[1];

  //#endregion


  //#region //~ collisions

  let mapsToCheck = []


  //? map actuelle
  let currentMapInWorld = findIndexOfPositionIn2dArray(characterPositionX, characterPositionY, World.worldsMap, rectWidth * Maps.numberOfRow, rectHeight * Maps.numberOfColumns)
  mapsToCheck.push(currentMapInWorld)

  //? map à DROITE du perso
  let atRightMapInWorld = findIndexOfPositionIn2dArray(characterPositionX + (rectWidth * Maps.numberOfRow) / 2, characterPositionY, World.worldsMap, rectWidth * Maps.numberOfRow, rectHeight * Maps.numberOfColumns)
  mapsToCheck.push(atRightMapInWorld)

  //? map à GAUCHE du perso
  let atLeftMapInWorld = findIndexOfPositionIn2dArray(characterPositionX - (rectWidth * Maps.numberOfRow) / 2, characterPositionY, World.worldsMap, rectWidth * Maps.numberOfRow, rectHeight * Maps.numberOfColumns)
  mapsToCheck.push(atLeftMapInWorld)

  //? map en HAUT du perso
  let atTopMapInWorld = findIndexOfPositionIn2dArray(characterPositionX, characterPositionY - (rectHeight * Maps.numberOfColumns) / 2, World.worldsMap, rectWidth * Maps.numberOfRow, rectHeight * Maps.numberOfColumns)
  mapsToCheck.push(atTopMapInWorld)

  //? map en BAS du perso
  let atBottomMapInWorld = findIndexOfPositionIn2dArray(characterPositionX, characterPositionY + (rectHeight * Maps.numberOfColumns) / 2, World.worldsMap, rectWidth * Maps.numberOfRow, rectHeight * Maps.numberOfColumns)
  mapsToCheck.push(atBottomMapInWorld)

  //? map en BAS à DROITE du perso
  let atBottomRightMapInWorld = findIndexOfPositionIn2dArray(characterPositionX + (rectWidth * Maps.numberOfRow) / 2, characterPositionY + (rectHeight * Maps.numberOfColumns) / 2, World.worldsMap, rectWidth * Maps.numberOfRow, rectHeight * Maps.numberOfColumns)
  mapsToCheck.push(atBottomRightMapInWorld)

  //? map en BAS à GAUCHE du perso
  let atBottomLeftMapInWorld = findIndexOfPositionIn2dArray(characterPositionX - (rectWidth * Maps.numberOfRow) / 2, characterPositionY + (rectHeight * Maps.numberOfColumns) / 2, World.worldsMap, rectWidth * Maps.numberOfRow, rectHeight * Maps.numberOfColumns)
  mapsToCheck.push(atBottomLeftMapInWorld)

  //? map en HAUT à DROITE du perso
  let atTopRightMapInWorld = findIndexOfPositionIn2dArray(characterPositionX + (rectWidth * Maps.numberOfRow) / 2, characterPositionY - (rectHeight * Maps.numberOfColumns) / 2, World.worldsMap, rectWidth * Maps.numberOfRow, rectHeight * Maps.numberOfColumns)
  mapsToCheck.push(atTopRightMapInWorld)

  //? map en HAUT à GAUCHE du perso
  let atTopLeftMapInWorld = findIndexOfPositionIn2dArray(characterPositionX - (rectWidth * Maps.numberOfRow) / 2, characterPositionY - (rectHeight * Maps.numberOfColumns) / 2, World.worldsMap, rectWidth * Maps.numberOfRow, rectHeight * Maps.numberOfColumns)
  mapsToCheck.push(atTopLeftMapInWorld)


  mapsToCheck = removeDuplicates(mapsToCheck)


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

        // rect(thisObjectX, thisObjectY, 10, 10)


        if (thisObject > 0) {
          [characterPositionX, characterPositionY] = handleCollision(characterPositionX, characterPositionY, characterBoundingBoxWidth, characterBoundingBoxHeight, thisObjectX, thisObjectY, rectWidth, rectHeight)
        }
      }
    }
  }



  //#endregion


  //#region //~ affichage du personnage

  if (isJumping) {
    if (RightArrowPressed) {
      characterDirection = "right"
      characterMovement = "jump"
    } else if (LeftArrowPressed) {
      characterDirection = "left"
      characterMovement = "jump"
    } else {
      characterDirection = characterLastDirection
      characterMovement = "jump"
    }
  } else {
    if (RightArrowPressed) {
      characterDirection = "right"
      characterMovement = "walk"
    } else if (LeftArrowPressed) {
      characterDirection = "left"
      characterMovement = "walk"
    } else {
      characterDirection = characterLastDirection
      characterMovement = "idle"
    }
  }



  characterLastDirection = characterDirection

  drawCharacter(characterPositionX - (characterWidth - characterBoundingBoxWidth) / 2,
    characterPositionY,
    characterWidth,
    characterHeight,
    characterDirection,
    characterMovement)

  //#endregion
}

//& Système du personnage pour le moteur de vue 2
function characterView2() {

  //#region //~ Contrôles du perso (gauche, droite, haut, bas)

  let positionsControls = getMovementsControls(characterInsidePosX, characterInsidePosY, characterMovesSpeed)
  characterInsidePosX = positionsControls[0]
  characterInsidePosY = positionsControls[1]

  //#endregion

  //#region //~ Mouvement de caméra


  //^ caméra mouvements droite

  //? si mon perso est à DROITE de l'écran
  if (characterInsidePosX > width - width / 4) {


    //? le monde bouge vers la gauche (la caméra se décale vers la droite)
    xStartHouse -= characterMovesSpeed
    characterInsidePosX -= characterMovesSpeed

  }

  //^ caméra mouvements gauche

  //? si mon perso est à GAUCHE de l'écran
  if (characterInsidePosX < width / 4) {


    //? le monde bouge vers la droite (la caméra se décale vers la gauche)
    xStartHouse += characterMovesSpeed
    characterInsidePosX += characterMovesSpeed

  }


  //^ caméra mouvements bas

  //? si mon perso est en BAS de l'écran
  if (characterInsidePosY > height - height / 3) {
    yStartHouse -= characterMovesSpeed
    characterInsidePosY -= characterMovesSpeed
  }


  //^ caméra mouvements haut

  //? si mon perso est en HAUT de l'écran
  if (characterInsidePosY < height / 4) {
    yStartHouse += characterMovesSpeed
    characterInsidePosY += characterMovesSpeed

  }

  //#endregion

  //#region //~ Collisions 

  //^ Récupère la couche des collisions sur la map
  let currentMapTableColliders = Houses["house1"].layers[1]

  //^ Pour chaque carré dans le tableau 
  for (let row = 0; row < currentMapTableColliders.length; row++) {
    for (let column = 0; column < currentMapTableColliders[row].length; column++) {

      //^ Lui donner une collision
      let thisObject = currentMapTableColliders[row][column]


      let thisObjectX = (xStartHouse + (rectWidth * column))
      let thisObjectY = (yStartHouse + (rectHeight * row))

      if (thisObject > 0) {

        //? pour faire en vue TOP DOWN -> rectHeight/3
        [characterInsidePosX, characterInsidePosY] = handleCollision(characterInsidePosX, characterInsidePosY, characterBoundingBoxWidth, characterBoundingBoxHeight, thisObjectX, thisObjectY, rectWidth, rectHeight)

      }
    }
  }

  //#endregion

  //#region //~ Affichage du perso

  fill(255, 0, 0)
  rect(characterInsidePosX, characterInsidePosY, characterBoundingBoxWidth, characterBoundingBoxHeight)

  //#endregion

}