//~ ajouter des controles à l'objet  
function getMovementsControls(objectPositionX, objectPositionY, speed) {

  if (engineOne) {

    //* Gauche Droite
    //? éviter de pouvoir aller à droite et à gauche en meme temps
    if ((keyIsDown(38) && keyIsDown(81)) ||
      (keyIsDown(RIGHT_ARROW) && keyIsDown(LEFT_ARROW)) ||
      (keyIsDown(38) && keyIsDown(LEFT_ARROW)) ||
      (keyIsDown(81) && keyIsDown(RIGHT_ARROW))) {
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

    //* réduire la vitesse des diagonales
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


    //* Gauche Droite
    if ((keyIsDown(68) && keyIsDown(81)) ||
      (keyIsDown(RIGHT_ARROW) && keyIsDown(LEFT_ARROW)) ||
      (keyIsDown(68) && keyIsDown(LEFT_ARROW)) ||
      (keyIsDown(81) && keyIsDown(RIGHT_ARROW))) {
      objectPositionX = objectPositionX
    }
    if (keyIsDown(81) || keyIsDown(LEFT_ARROW)) {
      objectPositionX = moveLeft(objectPositionX, speed)
    }
    if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
      objectPositionX = moveRight(objectPositionX, speed)
    }

    //*Haut Bas
    if ((keyIsDown(90) && keyIsDown(83)) ||
      (keyIsDown(UP_ARROW) && keyIsDown(DOWN_ARROW)) ||
      (keyIsDown(90) && keyIsDown(DOWN_ARROW)) ||
      (keyIsDown(83) && keyIsDown(UP_ARROW))) {
      objectPositionY = objectPositionY
    }
    if (keyIsDown(90) || keyIsDown(UP_ARROW)) {
      objectPositionY = moveUp(objectPositionY, speed)
      highArrowPressed

    }
    if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) {
      objectPositionY = moveDown(objectPositionY, speed)
      downArrowPressed
    }

    return [objectPositionX, objectPositionY]
  }

}


//* Mouvements gauche/droite et haut/bas
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


//* ajouter un saut à l'objet
function addJump(positionY, jumpHeight, velocityY, gravityForce) {
  velocityY = -gravityForce;
  velocityY -= jumpHeight;

  return [positionY, velocityY]
}


//* dessiner le perso
function drawCharacter(positionX, positionY, width, height, direction, movement) {
  let timer = (round(millis() / animationSpeed)) % 2



  characterTextureList = []

  //? Debug mod
  if (debugMod) {
    stroke(255, 0, 0)
    fill(255, 0, 0, 70)
    rect(characterPositionX, characterPositionY, characterBoundingBoxWidth, characterBoundingBoxHeight)
    noStroke()
  }

  switch (movement) {
    //* animation MARCHER
    case "walk":

      if (inventoryIsEmpty(Inventory[0])) {
        annimationBeginY = 8 * 32
        annimationEndY = 9 * 32
      } else {
        annimationBeginY = 20 * 32
        annimationEndY = 21 * 32

      }
      for (let y = (annimationBeginY); y < (annimationEndY); y += characterSpriteHeight) {
        for (let x = 0; x < (6 * 32); x += characterSpriteWidth) {
          characterTextureList.push(characterTextures.get(x, y, characterSpriteWidth, characterSpriteHeight));
        }
      }
      break;
      //* animation IDLE
    case "idle":

      switch (Inventory[0].name) {

        case "sword_1":
          annimationBeginY = 10 * 32
          annimationEndY = 11 * 32
        break;



        case "sword_2":
          annimationBeginY = 0 * 32
          annimationEndY = 1 * 32
        break;


        case "sword_3":
          annimationBeginY = 15 * 32
          annimationEndY = 16 * 32
        break;

        default:
          annimationBeginY = 4 * 32
          annimationEndY = 5 * 32
      }


      for (let y = (annimationBeginY); y < (annimationEndY); y += characterSpriteHeight) {
        for (let x = 0; x < (2 * 32); x += characterSpriteWidth) {
          characterTextureList.push(characterTextures.get(x, y, characterSpriteWidth, characterSpriteHeight));
        }
      }
      break;
      //* animation JUMP
    case "jump":
      for (let y = (7 * 32); y < (8 * 32); y += characterSpriteHeight) {
        for (let x = 0; x < (4 * 32); x += characterSpriteWidth) {
          characterTextureList.push(characterTextures.get(x, y, characterSpriteWidth, characterSpriteHeight));
        }
      }
      break;
      //* animation DASH
    case "dash":
      for (let y = (5 * 32); y < (6 * 32); y += characterSpriteHeight) {
        for (let x = 0; x < (2 * 32); x += characterSpriteWidth) {
          characterTextureList.push(characterTextures.get(x, y, characterSpriteWidth, characterSpriteHeight));
        }
      }
      break;
      //* animation FRAPPER
    case "hit":
      switch (Inventory[0].name) {

        case "sword_2":
          annimationBeginY = 1 * 32
          annimationEndY = 2 * 32
          break;

        case "sword_1":
          annimationBeginY = 11 * 32
          annimationEndY = 12 * 32
          break;

        case "sword_3":
          annimationBeginY = 16 * 32
          annimationEndY = 17 * 32
          break;

      }
      for (let y = (annimationBeginY); y < (annimationEndY); y += characterSpriteHeight) {
        for (let x = 0; x < (3 * 32); x += characterSpriteWidth) {
          characterTextureList.push(characterTextures.get(x, y, characterSpriteWidth, characterSpriteHeight));
        }
      }
      break;
      //* animation FRAPPER 
    case "hit2":

      switch (Inventory[0].name) {

        case "sword_2":
          annimationBeginY = 2 * 32
          annimationEndY = 3 * 32
          break;

        case "sword_1":
          annimationBeginY = 12 * 32
          annimationEndY = 13 * 32
          break;

        case "sword_3":
          annimationBeginY = 17 * 32
          annimationEndY = 18 * 32
          break;
      }
      for (let y = (annimationBeginY); y < (annimationEndY); y += characterSpriteHeight) {
        for (let x = 0; x < (3 * 32); x += characterSpriteWidth) {
          characterTextureList.push(characterTextures.get(x, y, characterSpriteWidth, characterSpriteHeight));
        }
      }
      break;
      //* animation FRAPPER 
    case "hit3":

      switch (Inventory[0].name) {

        case "sword_2":
          annimationBeginY = 3 * 32
          annimationEndY = 4 * 32
          break;

        case "sword_1":
          annimationBeginY = 13 * 32
          annimationEndY = 14 * 32
          break;

        case "sword_3":
          annimationBeginY = 18 * 32
          annimationEndY = 19 * 32
          break;
      }

      for (let y = (annimationBeginY); y < (annimationEndY); y += characterSpriteHeight) {
        for (let x = 0; x < (3 * 32); x += characterSpriteWidth) {
          characterTextureList.push(characterTextures.get(x, y, characterSpriteWidth, characterSpriteHeight));
        }
      }
      break;
      //* animation se faire 
    case "getHit":

      switch (Inventory[0].name) {

        
        case "sword_1":
          annimationBeginY = 15 * 32
          annimationEndY = 16 * 32
          break;
        case "sword_2":
          annimationBeginY = 9 * 32
          annimationEndY = 10 * 32
          break;
          
        case "sword_3":
          annimationBeginY = 19 * 32
          annimationEndY = 20 * 32
          break;

        default:
          annimationBeginY = 5 * 32
          annimationEndY = 6 * 32
      }


      for (let y = (annimationBeginY); y < (annimationEndY); y += characterSpriteHeight) {
        for (let x = (0 * 32); x < (5 * 32); x += characterSpriteWidth) {
          characterTextureList.push(characterTextures.get(x, y, characterSpriteWidth, characterSpriteHeight));
        }
      }
      break;
      //* animation MOURIR
    case "die":
      for (let y = (6 * 32); y < (7 * 32); y += characterSpriteHeight) {
        for (let x = (0 * 32); x < (5 * 32); x += characterSpriteWidth) {
          characterTextureList.push(characterTextures.get(x, y, characterSpriteWidth, characterSpriteHeight));
        }
      }
      if (characterAnimationIndex >= characterTextureList.length - 1) {
        gameIsPlaying = false;
        statistiques.deathCount++
        drawDeath();
      }
      break;
  }

  //? Remettre l'animation au début quand on change d'animation
  if (characterLastMovement != characterMovement) {
    characterAnimationIndex = 0
  }


  //* Changer de frame

  if (timer && !characterAnimationFramePassed) {
    characterAnimationIndex++
    characterAnimationFramePassed = true
  }
  if (!timer) {
    characterAnimationFramePassed = false
  }



  //* Remettre l'index au début 
  if (characterAnimationIndex >= characterTextureList.length) {
    characterAnimationIndex = 0

    if (characterHitting) {
      characterHitting = false
    }
    if (characterComboHitting) {
      characterComboHitting = false
    }
    if (characterComboHittingDouble) {
      characterComboHittingDouble = false
    }
  }

  let characterCurrentTexture = characterTextureList[characterAnimationIndex]


  //* direction DROITE
  if (direction == "right") {
    image(characterCurrentTexture, positionX, positionY, width, height)

    //* direction GAUCHE
  } else if (direction == "left") {
    scale(-1, 1)
    image(characterCurrentTexture, -positionX - width, positionY, width, height)
    scale(-1, 1)
  }
}


//~ Collisions
function handleCollisionCharacter(agentX, agentY, agentWidth, agentHeight, objectX, objectY, objectWidth, objectHeight) {
  let touchThisObject = false;


  //* Vérifier si les boîtes se chevauchent
  if (rectIsInRect(agentX, agentY, agentWidth, agentHeight, objectX, objectY, objectWidth, objectHeight)) {

    //* Collisions dessus / dessous de l'objet
    if ((agentX < objectX + objectWidth - (objectWidth / 10)) && (agentX + agentWidth > objectX + (objectWidth / 10))) {
      //* collisions en dessous de l'objet
      if (agentY < objectY + objectHeight && agentY > objectY) {
        agentY = objectY + objectHeight

        //? est relatif au perso
        characterVelocityY = 0;
      }
      //* collision au dessus de l'objet
      else if (agentY + agentHeight > objectY && agentY < objectY) {

        agentY = objectY - agentHeight

        //? Augmenter les statistiques
        if (characterVelocityY > 0) {
          statistiques.totalJumpCount += characterJumpCount
        }

        //* si le joueur touche le sol, reset le nombre de saut 
        if (characterJumpCount > 0 && characterVelocityY > 30) {
          shakeCamera(0.25, characterVelocityY / 10)
        }
        //? est relatif au perso
        characterJumpCount = 0;
        //? est relatif au perso
        characterIsJumping = false

        //? est relatif au perso
        if (!spaceKeyIsPressed) {
          characterVelocityY = 0
        }

        touchThisObject = true
      }
    }


    //* Collisions gauche / droite de l'objet
    //? si le bas du perso est en dessous du haut du cube + 1/10 de sa hauteur
    if ((agentY < objectY + objectHeight - (objectHeight / 10)) && (agentY + agentHeight > objectY + (objectHeight / 10))) {

      //* collisions à droite de l'objet
      if (agentX + agentWidth > objectX && agentX > objectX) {

        agentX = objectX + objectWidth

        //* collisions à gauche de l'objet
      } else if (agentX < objectX + objectWidth && agentX < objectX) {

        agentX = objectX - agentWidth
      }
    }
  }
  return [agentX, agentY, touchThisObject]
}


//~ Système du personnage pour le moteur de vue 1
function character() {

  characterLastMovement = characterMovement

  lastMap = currentMap

  


  //* Ancienne positions du perso
  previousPlayerX = characterPositionX
  previousPlayerY = characterPositionY

  //~ Empêcher le joueur de bouger s'il est mort
  if (healthPlayer) {
    //* Contrôles du perso (gauche, droite)
    characterPositionX = getMovementsControls(characterPositionX, characterPositionY, characterMovesSpeed)

    statistiques.distanceWalked = round(-(xStartWorld / rectWidth));

    //* Limites de la velocité Y du perso
    characterVelocityY = limitNumberWithinRange(characterVelocityY, characterVelocityYMin, characterVelocityYMax)
  }

  //#region //* Mouvement de caméra



  //* ========= Si le mode SMOOTH est activé =========
  if (smoothCamera) {

    //* caméra mouvements droite
    //? si mon perso est à DROITE de l'écran
    if (characterPositionX > width / 2 + 1) {

      //? si mon écran n'est pas le plus à gauche possible
      if (xStartWorld + ((rectWidth * Maps.numberOfRow) * World.worldsMap[0].length) - width > 0) {

        //? le monde bouge vers la gauche (la caméra se décale vers la droite)
        cameraSpeedR = lerp(cameraSpeedR, characterMovesSpeed, smoothCameraSpeed)
        newCharacterMovesSpeedR = lerp(newCharacterMovesSpeedR, characterMovesSpeed, smoothCameraSpeed)

        xStartWorld -= cameraSpeedR
        characterPositionX -= newCharacterMovesSpeedR

      }
    } else {
      cameraSpeedR = 0
      newCharacterMovesSpeedR = 0
    }



    //* caméra mouvements gauche

    //? si mon perso est à GAUCHE de l'écran
    if (characterPositionX < width / 2 - 1) {

      //? si mon écran n'est pas le plus à gauche possible
      if (xStartWorld < 0) {

        //? le monde bouge vers la droite (la caméra se décale vers la gauche)
        cameraSpeedL = lerp(cameraSpeedL, characterMovesSpeed, smoothCameraSpeed)
        newCharacterMovesSpeedL = lerp(newCharacterMovesSpeedL, characterMovesSpeed, smoothCameraSpeed)

        xStartWorld += cameraSpeedL
        characterPositionX += newCharacterMovesSpeedL

      }
    } else {
      cameraSpeedL = 0
      newCharacterMovesSpeedL = 0
    }

  } else {
    //* ========= Si le mode SMOOTH n'est pas activé =========

    //* caméra mouvements droite
    //? si mon perso est à DROITE de l'écran
    if (characterPositionX > width - width / 2) {

      //? si mon écran n'est pas le plus à gauche possible
      if (xStartWorld + ((rectWidth * Maps.numberOfRow) * World.worldsMap[0].length) - width > 0) {



        //? le monde bouge vers la gauche (la caméra se décale vers la droite)
        xStartWorld -= characterMovesSpeed
        characterPositionX -= characterMovesSpeed

      }
    }


    //* caméra mouvements gauche

    //? si mon perso est à GAUCHE de l'écran
    if (characterPositionX < width / 4) {


      //? si mon écran n'est pas le plus à gauche possible
      if (xStartWorld < 0) {

        //? le monde bouge vers la droite (la caméra se décale vers la gauche)
        xStartWorld += characterMovesSpeed
        characterPositionX += characterMovesSpeed
      }
    }
  }


  //* caméra mouvements bas

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


  //* caméra mouvements haut

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


  //#region 
  //~ Gravité du personnage
  let gravityReturns = getPositionWithGravity(characterPositionY,
    characterVelocityY,
    gravityForce,
    characterMass)
  characterPositionY = gravityReturns[0]
  characterVelocityY = gravityReturns[1]
  //#endregion


  //#region 
  //~ saut du personnage
  if (spaceKeyIsPressed && healthPlayer) {
    //* le saut du personnage
    if (characterJumpCount < characterMaxJumps) {

      if (!characterIsJumping) {

        characterIsJumping = true;
        characterDoubleJumping = false;
        characterJumpCount++;

        let jumpReturns = addJump(characterPositionY,
          characterJumpHeight,
          characterVelocityY,
          gravityForce)

        characterPositionY = jumpReturns[0];
        characterVelocityY = jumpReturns[1];

        statistiques.totalJumpCount++




        //* le double saut du personnage  
      } else if (characterDoubleJumping) {
        characterDoubleJumping = false;
        characterJumpCount++;

        let jumpReturns = addJump(characterPositionY,
          characterJumpHeight,
          characterVelocityY,
          gravityForce)
        characterPositionY = jumpReturns[0];
        characterVelocityY = jumpReturns[1];

        statistiques.totalJumpCount++
      }
    }


  }


  //#endregion


  //#region 
  //~ contraintes des positions du perso
  let positions = containedPositionsIn(characterPositionX,
    characterPositionY,
    characterWidth,
    characterHeight,
    width,
    height)
  characterPositionX = positions[0];
  characterPositionY = positions[1];

  //#endregion



  //* Dernière map sur laquelle est passé le joueur
  let positionMapPlayer = findIndexOfPositionIn2dArray(characterPositionX, characterPositionY, World.worldsMap, rectWidth * Maps.numberOfRow, rectHeight * Maps.numberOfColumns)
  let positionMapCenterPlayer = findIndexOfPositionIn2dArray(characterPositionX+(characterWidth/2), characterPositionY, World.worldsMap, rectWidth * Maps.numberOfRow, rectHeight * Maps.numberOfColumns)


  if (positionMapCenterPlayer.toString() == positionMapPlayer.toString()){
    currentMap = World.worldsMap[positionMapPlayer[1]][positionMapPlayer[0]]
  }



  //#region 
  //~ collisions




  let mapsToCheck = getMapsToCheck(characterPositionX, characterPositionY)


  //* Ajoute les collisions pour toute les maps autour du perso 
  for (let i = 0; i < mapsToCheck.length; i++) {


    let currentMapToCheck = mapsToCheck[i]
    let currentMapToCheckName = World.worldsMap[currentMapToCheck[1]][currentMapToCheck[0]]

    //* Récupère la couche des collisions sur la map
    let currentMapTableColliders = Maps[currentMapToCheckName].layers[1]

    //* Pour chaque carré dans le tableau 
    for (let row = 0; row < currentMapTableColliders.length; row++) {
      for (let column = 0; column < currentMapTableColliders[row].length; column++) {
        let touchThisObject = false
        //? Lui donner une collision
        let thisObject = currentMapTableColliders[row][column]


        let thisObjectX = ((rectWidth * Maps.numberOfRow) * (currentMapToCheck[0])) + (xStartWorld + (rectWidth * column))
        let thisObjectY = ((rectHeight * Maps.numberOfColumns) * (currentMapToCheck[1])) + (yStartWorld + (rectHeight * row))

        // rect(thisObjectX, thisObjectY, 10, 10)


        if (thisObject > 0) {
          [characterPositionX, characterPositionY, touchThisObject] = handleCollisionCharacter(characterPositionX, characterPositionY, characterBoundingBoxWidth, characterBoundingBoxHeight, thisObjectX, thisObjectY, rectWidth, rectHeight)


          

          //~ Tuer le joueur quand il marche sur le bloc 238
          if (killingBlocks.includes(thisObject) && touchThisObject) {
            hurtPlayer(1)
          }
        }

      }
    }
  }
  //#endregion


  //#region 
  //~ roulade du perso

  const currentTime = millis();

  if (dashSystem) {
    if (
      dashKeyIsPressed &&
      !characterIsDashing &&
      !characterIsJumping &&
      characterVelocityY == 0 &&
      currentTime - lastDashTime > dashCooldown
    ) {
      characterIsDashing = true;

      lastDashTime = currentTime;

      characterMovesSpeed *= dashForce;

      setTimeout(function () {
        characterIsDashing = false;
        characterMovesSpeed /= dashForce;
      }, dashTime);
    }
  }

  //#endregion


  //#region 
  //~ affichage du personnage

  if (characterMovement != "die") {
    if (characterIsJumping) {
      if (rightArrowPressed) {
        characterDirection = "right"
        characterMovement = "jump"
      } else if (leftArrowPressed) {
        characterDirection = "left"
        characterMovement = "jump"
      } else {
        characterDirection = characterLastDirection
        characterMovement = "jump"
      }
    } else {
      if (characterIsDashing) {
        if (rightArrowPressed) {
          characterDirection = "right"
          characterMovement = "dash"
        } else if (leftArrowPressed) {
          characterDirection = "left"
          characterMovement = "dash"
        }
      } else {
        if (characterHitting) {
          if (rightArrowPressed) {
            characterDirection = "right"
            characterMovement = "hit"

          } else if (leftArrowPressed) {
            characterDirection = "left"
            characterMovement = "hit"

          } else {
            characterDirection = characterLastDirection
            characterMovement = "hit"

          }
        } else if (characterComboHitting) {
          if (rightArrowPressed) {
            characterDirection = "right"
            characterMovement = "hit2"

          } else if (leftArrowPressed) {
            characterDirection = "left"
            characterMovement = "hit2"

          } else {
            characterDirection = characterLastDirection
            characterMovement = "hit2"

          }
        } else if (characterComboHittingDouble) {
          if (rightArrowPressed) {
            characterDirection = "right"
            characterMovement = "hit3"

          } else if (leftArrowPressed) {
            characterDirection = "left"
            characterMovement = "hit3"

          } else {
            characterDirection = characterLastDirection
            characterMovement = "hit3"

          }
        } else {
          if (rightArrowPressed) {
            characterDirection = "right"
            characterMovement = "walk"
          } else if (leftArrowPressed) {
            characterDirection = "left"
            characterMovement = "walk"
          } else {
            characterDirection = characterLastDirection
            if (characterMovement != "getHit" && healthPlayer) {
              characterMovement = "idle"
            }
          }
        }
      }

    }
  }



  characterLastDirection = characterDirection

  drawCharacter(characterPositionX - (characterWidth - characterBoundingBoxWidth) / 2,
    characterPositionY - (characterHeight - characterBoundingBoxHeight),
    characterWidth,
    characterHeight,
    characterDirection,
    characterMovement)

  //#endregion
}



//^ --------------------------------------------------------------------------
//^                 Système du personnage pour le moteur de vue 2             
//^ --------------------------------------------------------------------------
function characterView2() {
  let timer = (round(millis() / animationSpeed)) % 2

  characterLastMovement = characterMovement

  //#region 
  //~ Contrôles du perso (gauche, droite, haut, bas)

  let positionsControls = getMovementsControls(characterInsidePosX, characterInsidePosY, characterMovesSpeed)
  characterInsidePosX = positionsControls[0]
  characterInsidePosY = positionsControls[1]

  //#endregion

  //#region 
  //~ Mouvement de caméra


  //* caméra mouvements droite
  //? si mon perso est à DROITE de l'écran
  if (characterInsidePosX > width - width / 4) {

    //? le monde bouge vers la gauche (la caméra se décale vers la droite)
    xStartHouse -= characterMovesSpeed
    characterInsidePosX -= characterMovesSpeed

  }

  //* caméra mouvements gauche

  //? si mon perso est à GAUCHE de l'écran
  if (characterInsidePosX < width / 3.5) {


    //? le monde bouge vers la droite (la caméra se décale vers la gauche)
    xStartHouse += characterMovesSpeed
    characterInsidePosX += characterMovesSpeed

  }


  //* caméra mouvements bas

  //? si mon perso est en BAS de l'écran
  if (characterInsidePosY > height - height / 3) {
    yStartHouse -= characterMovesSpeed
    characterInsidePosY -= characterMovesSpeed
  }


  //* caméra mouvements haut

  //? si mon perso est en HAUT de l'écran
  if (characterInsidePosY < height / 4) {
    yStartHouse += characterMovesSpeed
    characterInsidePosY += characterMovesSpeed

  }

  //#endregion

  //#region 
  //~ Collisions 

  //* Récupère la couche des collisions sur la map
  let currentMapTableColliders = Houses.Houses[behindThisDoorHouse].layers[1]


  //* Pour chaque carré dans le tableau 
  for (let row = 0; row < currentMapTableColliders.length; row++) {
    for (let column = 0; column < currentMapTableColliders[row].length; column++) {
      let touchThisObject = false
      //? Lui donner une collision
      let thisObject = currentMapTableColliders[row][column]


      let thisObjectX = (xStartHouse + (rectWidth * column))
      let thisObjectY = (yStartHouse + (rectHeight * row))

      if (thisObject > 0) {

        //? pour faire en vue TOP DOWN -> rectHeight/3
        [characterInsidePosX, characterInsidePosY, touchThisObject] = handleCollisionCharacter(characterInsidePosX, characterInsidePosY, characterBoundingBoxWidthInside, characterBoundingBoxHeightInside, thisObjectX, thisObjectY, rectWidth, rectHeight)

      }
    }
  }

  //~ Assigner les différents mouvements
  if (rightArrowPressed) {
    characterDirection = "right"
    characterMovement = "walk"
  } else if (leftArrowPressed) {
    characterDirection = "left"
    characterMovement = "walk"
  } else if (highArrowPressed) {
    characterDirection = characterLastDirection
    characterMovement = "walk"
  } else if (downArrowPressed) {
    characterDirection = characterLastDirection
    characterMovement = "walk"
  } else {
    characterDirection = characterLastDirection
    if (characterMovement != "getHit" && healthPlayer) {
      characterMovement = "idle"
    }
  }





  characterLastDirection = characterDirection
  //#endregion

  //#region 
  //~ Affichage du perso



  drawCharacter(characterInsidePosX + (characterBoundingBoxWidthInside / 2 - characterWidth / 2), characterInsidePosY + (characterBoundingBoxHeightInside / 2 - characterHeight), characterWidth, characterHeight, characterDirection, characterMovement)



  if (debugMod) {
    stroke(255, 0, 0)
    fill(255, 0, 0, 70)
    rect(characterInsidePosX, characterInsidePosY, characterBoundingBoxWidthInside, characterBoundingBoxHeightInside)
    fill(0, 255, 0, 70)
    rect(characterInsidePosX + (characterBoundingBoxWidthInside / 2 - characterWidth / 2), characterInsidePosY + (characterBoundingBoxHeightInside / 2 - characterHeight), characterWidth, characterHeight)
    noStroke()
  }

  //- (characterHeight - characterBoundingBoxHeightInside)

  //#endregion

}