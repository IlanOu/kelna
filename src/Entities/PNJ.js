//^ /* -------------------------------------------------------------------------- */
//^ /*                                 PNJ MANAGER                                */
//^ /* -------------------------------------------------------------------------- */

function PNJManager() {
  //? Draw des PNJ en EXTERIEUR
  if (engineOne) {
      if (pnjJSON.PNJS){
        Object.entries(pnjJSON.PNJS).forEach((pnj) => {
          if (World.worldsMap.some(row => row.includes(pnj[1].mapName))){
            PNJ(pnj[1]);          
          }
        })
        // PNJ(pnjJSON.PNJS.Marjo);
        // PNJ(pnjJSON.PNJS.Toto);
      }
  } else {
    drawPNJInside(pnjJSON.PNJS.Charle);
  }
}

//^ /* -------------------------------------------------------------------------- */
//^ /*                              DRAW PNJ INSIDE                               */
//^ /* -------------------------------------------------------------------------- */

let drawPNJInside = (pnj) => {
  //* Initialisation des variables

  let PNJStart = pnj.globalStartX + xStartHouse;
  let PNJDistance = pnj.distance + PNJStart;
  let PNJEnd = PNJDistance;


  pnj.x = pnj.globalStartX + xStartHouse + pnj.stepCount;
  pnj.y = pnj.globalStartY + yStartHouse;

  let PNJX = pnj.x;
  let PNJY = pnj.y;

  //* Retourne les variables
  pnj.x = PNJX;
  pnj.y = PNJY;
  pnj.xEnd = PNJEnd;

  PNJMovementsInside(pnj);
};



//^ /* -------------------------------------------------------------------------- */
//^ /*                                    DRAW PNJ                                */
//^ /* -------------------------------------------------------------------------- */
function PNJ(pnj) {
  //* Initialisation des variables

  let positionsStart = getPositionAt(pnj.mapName, pnj.globalStartX, pnj.globalStartY)
  let positionsEnd = getPositionAt(pnj.mapName, pnj.globalStartX + pnj.distance, 0)

  let PNJStart = positionsStart.pixelX;
  let PNJEnd = positionsEnd.pixelX;

  pnj.x = PNJStart + xStartWorld + pnj.stepCount;
  // pnj.y = positionsStart.pixelY + yStartWorld



  let PNJX = pnj.x;
  let PNJY = pnj.y;

  let PNJWidth = pnj.width;
  let PNJHeight = pnj.height;
  let PNJVelocityY = pnj.velocityY;
  let PNJMass = pnj.mass;
  let PNJIsJumping = pnj.isJumping;
  let PNJJumpCount = pnj.jumpCount;
  let PNJHaveToJump = pnj.haveToJump;

  //* Faire apparaitre PNJ quans ils sont dans la map verifier par le joueur pour les collisions
  let mapsToCheck = getMapsToCheck(characterPositionX, characterPositionY);
  let collide = false;

  
  if (pnjMustBeShown(pnj)) {
    
    
    if (lastMap != currentMap){
      if (currentMap.toString() == pnj.mapName.toString()){
        PNJX = positionsStart.pixelX + xStartWorld
        PNJY = positionsStart.pixelY + yStartWorld
        pnj.x = positionsStart.pixelX + xStartWorld
        pnj.y = positionsStart.pixelY + yStartWorld
        pnj.velocityY = 0
        PNJVelocityY = 0
      }
    }

    //* Ajout de la gravité au PNJ
    let gravityReturns = getPositionWithGravity(
      PNJY,
      PNJVelocityY,
      gravityForce,
      PNJMass
    );

    PNJY = gravityReturns[0];
    PNJVelocityY = gravityReturns[1];




    //* Ajoute les collisions pour toute les maps autour du perso
    for (let i = 0; i < mapsToCheck.length; i++) {
      let currentMapToCheck = mapsToCheck[i];
      let currentMapToCheckName =
        World.worldsMap[currentMapToCheck[1]][currentMapToCheck[0]];
      //? Récupère la couche des collisions sur la map
      let currentMapTableColliders = Maps[currentMapToCheckName].layers[1];

      //? Pour chaque carré dans le tableau
      for (let row = 0; row < currentMapTableColliders.length; row++) {
        for ( 
          let column = 0; column < currentMapTableColliders[row].length; column++
        ) {
          //& Lui donner une collision
          let thisObject = currentMapTableColliders[row][column];

          let thisObjectX =
            rectWidth * Maps.numberOfRow * currentMapToCheck[0] +
            (xStartWorld + rectWidth * column);
          let thisObjectY =
            rectHeight * Maps.numberOfColumns * currentMapToCheck[1] +
            (yStartWorld + rectHeight * row);

          //& Collisions
          if (thisObject > 0) {
            [
              PNJX,
              PNJY,
              PNJVelocityY,
              PNJJumpCount,
              PNJIsJumping,
              PNJHaveToJump,
            ] = handleCollisionMobs(
              PNJX,
              PNJY,
              PNJWidth,
              PNJHeight,
              pnj.direction,
              thisObjectX,
              thisObjectY,
              rectWidth,
              rectHeight,
              PNJVelocityY,
              PNJJumpCount,
              PNJIsJumping
            );

            if (PNJHaveToJump) {
              collide = true;
            }
          }
        }
      }
    }

    //* Retourne les variables
    pnj.x = PNJX;
    pnj.y = PNJY;
    pnj.velocityY = PNJVelocityY;
    pnj.isJumping = PNJIsJumping;
    pnj.jumpCount = PNJJumpCount;
    pnj.xEnd = PNJEnd;
    pnj.haveToJump = collide;

    PNJMovements(pnj);
  }
}





//^ /* -------------------------------------------------------------------------- */
//^ /*                                PNJ MOVEMENTS                               */
//^ /* -------------------------------------------------------------------------- */

let PNJMovements = (pnj) => {
  //* Variables positions PNJ
  let CurrentX = pnj.x;
  let PNJY = pnj.y;


  //* Variables Collisions / HitBox PNJ
  let VillagerBoundingBox = expandRect(
    CurrentX,
    PNJY,
    pnj.width,
    pnj.height,
    pnj.detectDistX,
    pnj.detectDistY
  );

  //* Zone de détection du PNJ
  pnj.seePlayer = rectIsInRect(
    characterPositionX,
    characterPositionY,
    characterBoundingBoxWidth,
    characterBoundingBoxHeight,
    VillagerBoundingBox[0],
    VillagerBoundingBox[1],
    VillagerBoundingBox[2],
    VillagerBoundingBox[3]
  );

  //* Si le perso n'est pas vu, faire une ronde
  if (!pnj.seePlayer) {
    doRound(pnj);
    pnj.movement = "walk";

    pnj.canTalkWithMe = false
    pnj.canTradeWithMe = false

  }

  //* Si le perso est vu s'arreter et le regarder
  if (pnj.seePlayer) {
    lookThePlayer(pnj);
    pnj.movement = "idle";

    if (pnj.echange && pnj.discussions){
      if (pnj.step == pnj.discussions.length-1){
        pnj.canTalkWithMe = false
        pnj.canTradeWithMe = true
      }else{
        pnj.canTalkWithMe = true
        pnj.canTradeWithMe = false
      }
    }else{
      if (pnj.echange) {
        pnj.canTradeWithMe = true
      }else if (pnj.discussions){
        pnj.canTalkWithMe = true
      }
    }
    
  }

  //* Ajouter le saut au PNJ
  if (pnj.haveToJump) {
    if (!pnj.isJumping && pnj.jumpCount < 1) {
      let jumpReturns = addJump(
        PNJY,
        characterJumpHeight,
        pnj.velocityY,
        gravityForce
      );

      PNJY = jumpReturns[0];
      pnj.velocityY = jumpReturns[1];
      pnj.isJumping = true;
      pnj.jumpCount += 1;
      pnj.movement = "jump";
    } else {
      pnj.jumpCount = 0;
    }
  }

  //* Debug Mod
  if (debugMod) {
    stroke(255, 0, 0);
    fill(255, 0, 0, 70);
    rect(CurrentX, PNJY, pnj.width, pnj.height);

    stroke(0, 255, 0);
    fill(0, 255, 0, 10);
    rect(
      VillagerBoundingBox[0],
      VillagerBoundingBox[1],
      VillagerBoundingBox[2],
      VillagerBoundingBox[3]
    );
    fill(255);
    noStroke();
  }

  //* Afficher le PNJ
  animationPNJ(
    pnj,
    CurrentX,
    PNJY,
    pnj.width,
    pnj.height,
    pnj.direction,
    pnj.movement
  );

};

let PNJMovementsInside = (pnj) => {

  //* Variables positions PNJ
  let CurrentX = pnj.x;
  let PNJY = pnj.y;

  //* Variables Collisions / HitBox PNJ
  let VillagerBoundingBox = expandRect(
    CurrentX,
    PNJY,
    pnj.width,
    pnj.height,
    pnj.detectDistX,
    pnj.detectDistY
  );

  //* Zone de détection du PNJ
  pnj.seePlayer = rectIsInRect(
    characterInsidePosX,
    characterInsidePosY,
    characterBoundingBoxWidth,
    characterBoundingBoxHeight,
    VillagerBoundingBox[0],
    VillagerBoundingBox[1],
    VillagerBoundingBox[2],
    VillagerBoundingBox[3]
  );

  //* Si le perso n'est pas vu, faire une ronde
  if (!pnj.seePlayer) {
    doRound(pnj);
    pnj.movement = "walk";
  }
  if (pnj.seePlayer) {
    lookThePlayer(pnj);
    pnj.movement = "idle";
    if (pnj.echange !== undefined) {
    }
  }

  //* Ajouter le saut au PNJ
  if (pnj.haveToJump) {
    if (pnj.direction == "left") {
      pnj.direction = "right";
    } else if (pnj.direction == "right") {
      pnj.direction = "left";
    }
  }

  //* Debug Mod
  if (debugMod) {
    stroke(255, 0, 0);
    fill(255, 0, 0, 70);
    rect(CurrentX, PNJY, pnj.width, pnj.height);

    stroke(0, 255, 0);
    fill(0, 255, 0, 10);
    rect(
      VillagerBoundingBox[0],
      VillagerBoundingBox[1],
      VillagerBoundingBox[2],
      VillagerBoundingBox[3]
    );
    fill(255);
    noStroke();
  }

  //* Afficher le PNJ
  animationPNJ(
    pnj,
    CurrentX,
    PNJY,
    pnj.width,
    pnj.height,
    pnj.direction,
    pnj.movement
  );
};

//^ /* -------------------------------------------------------------------------- */
//^ /*                              // ANIMATION PNJ                              */
//^ /* -------------------------------------------------------------------------- */

function animationPNJ(
  CurrentPNJ,
  positionX,
  positionY,
  width,
  height,
  direction,
  movement,
) {

  let timer = round(millis() / animationSpeed) % 2;
  let PNJTexturesList = [];

  //* Animation en fonction des mouvements
  switch (CurrentPNJ.name) {
    case "Marjo":
      if (movement == "walk") {
        for (let y = 32; y < 64; y += 32) {
          for (let x = 0; x < 128; x += 32) {
            PNJTexturesList.push(marjoTexture.get(x, y, 32, 32));
          }
        }
      } else if (movement == "idle") {
        for (let y = 0; y < 32; y += 32) {
          for (let x = 0; x < 64; x += 32) {
            PNJTexturesList.push(marjoTexture.get(x, y, 32, 32));
          }
        }
      } else if (movement == "jump") {
        for (let y = 64; y < 96; y += 32) {
          for (let x = 0; x < 128; x += 32) {
            PNJTexturesList.push(marjoTexture.get(x, y, 32, 32));
          }
        }
      }

      break;

    case "Charle":
      if (movement == "walk") {
        for (let y = 32; y < 64; y += 32) {
          for (let x = 0; x < 128; x += 32) {
            PNJTexturesList.push(charleTexture.get(x, y, 32, 32));
          }
        }
      } else if (movement == "idle") {
        for (let y = 0; y < 32; y += 32) {
          for (let x = 0; x < 64; x += 32) {
            PNJTexturesList.push(charleTexture.get(x, y, 32, 32));
          }
        }
      } else if (movement == "jump") {
        for (let y = 64; y < 96; y += 32) {
          for (let x = 0; x < 128; x += 32) {
            PNJTexturesList.push(charleTexture.get(x, y, 32, 32));
          }
        }
      }

      break;


    case "Toto":
      if (movement == "walk") {
        for (let y = 32; y < 64; y += 32) {
          for (let x = 0; x < 128; x += 32) {
            PNJTexturesList.push(charleTexture.get(x, y, 32, 32));
          }
        }
      } else if (movement == "idle") {
        for (let y = 0; y < 32; y += 32) {
          for (let x = 0; x < 64; x += 32) {
            PNJTexturesList.push(charleTexture.get(x, y, 32, 32));
          }
        }
      } else if (movement == "jump") {
        for (let y = 64; y < 96; y += 32) {
          for (let x = 0; x < 128; x += 32) {
            PNJTexturesList.push(charleTexture.get(x, y, 32, 32));
          }
        }
      }

      break;
  }

  //* Changer de frame
  if (timer && !CurrentPNJ.currentFrame) {
    CurrentPNJ.indexFrame++;
    CurrentPNJ.currentFrame = true;
  }

  if (!timer) {
    CurrentPNJ.currentFrame = false;
  }

  //* Remettre l'index au début
  if (CurrentPNJ.indexFrame >= PNJTexturesList.length) {
    CurrentPNJ.indexFrame = 0;
  }

  let PNJCurrentTextures = PNJTexturesList[CurrentPNJ.indexFrame];

  if (direction == "right") {
    image(PNJCurrentTextures, positionX, positionY, width, height);

    //* direction GAUCHE
  } else if (direction == "left") {
    scale(-1, 1);
    image(PNJCurrentTextures, -positionX - width, positionY, width, height);
    scale(-1, 1);
  }
}

//#endregion