//^ /* -------------------------------------------------------------------------- */
//^ /*                                 MOB MANAGER                                */
//^ /* -------------------------------------------------------------------------- */
function MobManager() {
  // * Draw des Mobs en EXTERIEUR
  if (engineOne) {
    mob(ForEnnemis.Ennemis.Malade1);
    mob(ForEnnemis.Ennemis.Malade2);
  }
}

//^ /* -------------------------------------------------------------------------- */
//^ /*                                     MOB                                    */
//^ /* -------------------------------------------------------------------------- */

function mob(Mobs) {
  if (Mobs.life || !Mobs.isDead) {
    //* Initialisation des variables

    let MobStart = Mobs.globalStartX + xStartWorld;
    let MobDistance = Mobs.distance + Mobs.globalStartX;
    let MobEnd = Mobs.globalStartX + MobDistance + xStartWorld;


    Mobs.x = xStartWorld + Mobs.stepCount;
    Mobs.y = Mobs.y;

    let MobsX = Mobs.x;
    let MobsY = Mobs.y;
    let MobsHaveToJump = Mobs.haveToJump;
    let MobsWidth = Mobs.width;
    let MobsHeight = Mobs.height;
    let MobsVelocityY = Mobs.velocityY;
    let MobsMass = Mobs.mass;
    let MobsIsJumping = Mobs.isJumping;
    let MobsJumpCount = Mobs.jumpCount;

    let mapsToCheck = getMapsToCheck(characterPositionX, characterPositionY);

    //* Ajout de la gravité au Mob
    let gravityReturns = getPositionWithGravity(
      MobsY,
      MobsVelocityY,
      gravityForce,
      MobsMass
    );
    MobsY = gravityReturns[0];
    MobsVelocityY = gravityReturns[1];

    let collide = false;
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
          //? Lui donner une collision
          let thisObject = currentMapTableColliders[row][column];

          let thisObjectX =
            rectWidth * Maps.numberOfRow * currentMapToCheck[0] +
            (xStartWorld + rectWidth * column);
          let thisObjectY =
            rectHeight * Maps.numberOfColumns * currentMapToCheck[1] +
            (yStartWorld + rectHeight * row);

          //? Collisions
          if (thisObject > 0) {
            [
              MobsX,
              MobsY,
              MobsVelocityY,
              MobsJumpCount,
              MobsIsJumping,
              MobsHaveToJump,
            ] = handleCollisionMobs(
              MobsX,
              MobsY,
              MobsWidth,
              MobsHeight,
              Mobs.direction,
              thisObjectX,
              thisObjectY,
              rectWidth,
              rectHeight,
              MobsVelocityY,
              MobsJumpCount,
              MobsIsJumping
            );

            if (MobsHaveToJump) {
              collide = true;
            }
          }
        }
      }
    }
    //* Ajouter le saut au mob
    if (collide) {
      if (Mobs.isFollowing || MobsX > MobEnd || MobsX < MobStart) {
        if (!MobsIsJumping && MobsJumpCount < 1) {
          let jumpReturns = addJump(
            MobsY,
            characterJumpHeight,
            MobsVelocityY,
            gravityForce
          );

          MobsY = jumpReturns[0];
          MobsVelocityY = jumpReturns[1];
          MobsIsJumping = true;
          MobsJumpCount += 1;
          Mobs.movement = "jump";
        } else {
          MobsJumpCount = 0;
        }
      }
    }

    //* Retourner les variables
    Mobs.x = MobsX;
    Mobs.y = MobsY;
    Mobs.velocityY = MobsVelocityY;
    Mobs.isJumping = MobsIsJumping;
    Mobs.jumpCount = MobsJumpCount;

    Mobs.distance = MobDistance;
    Mobs.xStart = MobStart;
    Mobs.xEnd = MobEnd;
    Mobs.haveToJump = collide;

    //* Dessiner le Mob
    mobMovements(Mobs);
  }
}

//^ /* -------------------------------------------------------------------------- */
//^ /*                                  DRAW MOB                                  */
//^ /* -------------------------------------------------------------------------- */
let mobMovements = (Mobs) => {
  //* Variables positions Mobs
  let CurrentX = Mobs.x;
  let MobY = Mobs.y;

  //* Variables Collisions / HitBox Mobs
  let MobBoundingBox = expandRect(
    CurrentX,
    MobY,
    Mobs.width,
    Mobs.height,
    Mobs.detectDistX,
    Mobs.detectDistY
  );

  //* Quand le mob s'arrête ?
  let MobLittleBoundingBox = expandRect(
    CurrentX,
    MobY,
    Mobs.width,
    Mobs.height,
    1,
    1
  );

  //* Détéction du joueur
  Mobs.seePlayer = rectIsInRect(
    characterPositionX,
    characterPositionY,
    characterBoundingBoxWidth,
    characterBoundingBoxHeight,
    MobBoundingBox[0],
    MobBoundingBox[1],
    MobBoundingBox[2],
    MobBoundingBox[3]
  );

  //* Détéction du joueur
  let touchPlayer = rectIsInRect(
    characterPositionX,
    characterPositionY,
    characterBoundingBoxWidth,
    characterBoundingBoxHeight,
    MobLittleBoundingBox[0],
    MobLittleBoundingBox[1],
    MobLittleBoundingBox[2],
    MobLittleBoundingBox[3]
  );

  //* Si je vois le joueur, le suivre. Sinon, faire une ronde.
  if (touchPlayer) {
    lookThePlayer(Mobs);

    //? Afficher un !
    if (Mobs.isAThreat) {
      fill(255, 0, 0);
      drawKeyAt("!", CurrentX, MobY);
    }
    Mobs.movement = "idle";
  } else {
    if (Mobs.seePlayer) {
      followPlayer(Mobs);
      lookThePlayer(Mobs);

      //? Afficher un !
      if (Mobs.isAThreat) {
        fill(255, 0, 0);
        drawKeyAt("!", CurrentX, MobY);
      }
    } else {
      doRound(Mobs);
    }
  }

  // Si le mob est une menace (s'il peut t'attaquer)
  if (Mobs.isAThreat) {
    let characterCenterX = characterPositionX + characterWidth / 4;
    let mobsCenterX = CurrentX + Mobs.width / 2;


    if (characterComboHitting && lastHit == "2"){
      Mobs.haveBeenHit = false
      Mobs.beingHit = false
      Mobs.getHit = false;
      lastHit = ""
    }
    
    if (characterComboHittingDouble && lastHit == "3"){
      Mobs.haveBeenHit = false
      Mobs.beingHit = false
      Mobs.getHit = false;
      lastHit = ""
    }

    if (characterHitting || characterComboHitting || characterComboHittingDouble){
      if (touchPlayer && !Mobs.haveBeenHit && !Mobs.beingHit) {
        if (characterDirection == "right" && characterCenterX < mobsCenterX) {
          Mobs.getHit = true;
          Mobs.beingHit = true;
          Mobs.movement = "getHit";
         
        } else if (characterDirection == "left" && characterCenterX > mobsCenterX) {
          Mobs.getHit = true;
          Mobs.beingHit = true;
          Mobs.movement = "getHit";
          
        }
        if (Mobs.life > 0) {
          Mobs.indexFrame = 0
          Mobs.life--;
          Mobs.haveBeenHit = true;
        }
      }
    }


    if (!characterHitting && !characterComboHitting && !characterComboHittingDouble) {
      Mobs.getHit = false;
      Mobs.haveBeenHit = false;
      Mobs.beingHit = false;
    }

    if (Mobs.getHit) {
      Mobs.movement = "getHit";
    }

    if (Mobs.life <= 0) {
      Mobs.movement = "die";
    }
  }


  //* Debug Mod
  if (debugMod) {
    stroke(255, 0, 0);
    fill(255, 0, 0, 70);
    rect(
      MobLittleBoundingBox[0],
      MobLittleBoundingBox[1],
      MobLittleBoundingBox[2],
      MobLittleBoundingBox[3]
    );

    stroke(0, 255, 0);
    fill(0, 255, 0, 10);
    rect(
      MobBoundingBox[0],
      MobBoundingBox[1],
      MobBoundingBox[2],
      MobBoundingBox[3]
    );

    fill(255);
    noStroke();
  }

  //* Afficher le Mob
  animationMobs(
    Mobs,
    CurrentX,
    MobY,
    Mobs.width,
    Mobs.height,
    Mobs.direction,
    Mobs.movement,
    Mobs.color
  );
};

//^ /* -------------------------------------------------------------------------- */
//^ /*                                ANIMATION Mob                               */
//^ /* -------------------------------------------------------------------------- */

function animationMobs(
  CurrentMob,
  positionX,
  positionY,
  width,
  height,
  direction,
  movement,
  color
) {
  CurrentMob.lastMovement = movement;

  image(pointEnnemis, positionX + 15, positionY - 52, 50, 50);

  let timer = round(millis() / animationSpeed) % 2;

  let MobTexturesList = [];
  //~ Changer d'animation en fonction du type

  //& Selectionner la bonne spritesheet en fonction du type de mob
  let currentSpriteSheet;
  switch (CurrentMob.type) {
    case "Malade1":
      currentSpriteSheet = malade1Sprite;
      break;

    case "Malade2":
      currentSpriteSheet = malade2Sprite
      break;
  }

  //& Selectionner la bonne ligne en fonction du mouvement
  switch (movement) {
    case "walk":
      for (let y = 0; y < (1 * 32); y += 32) {
        for (let x = 0; x < (4 * 32); x += 32) {
          MobTexturesList.push(currentSpriteSheet.get(x, y, 32, 32));
        }
      }
      break;
    case "idle":
      for (let y = (1 * 32); y < (2 * 32); y += 32) {
        for (let x = 0; x < (2 * 32); x += 32) {
          MobTexturesList.push(currentSpriteSheet.get(x, y, 32, 32));
        }
      }
      break;
    case "getHit":
      if (CurrentMob.isAThreat) {
        for (let y = (3 * 32); y < (4 * 32); y += 32) {
          for (let x = 0; x < (2 * 32); x += 32) {
            MobTexturesList.push(currentSpriteSheet.get(x, y, 32, 32));
          }
        }
      }
      break;
    case "jump":
      for (let y = (4 * 32); y < (5 * 32); y += 32) {
        for (let x = 0; x < (4 * 32); x += 32) {
          MobTexturesList.push(currentSpriteSheet.get(x, y, 32, 32));
        }
      }
      break;
    case "die":
      for (let y = (5 * 32); y < (6 * 32); y += 32) {
        for (let x = 0; x < (4 * 32); x += 32) {
          MobTexturesList.push(currentSpriteSheet.get(x, y, 32, 32));
        }
      }
      if (CurrentMob.indexFrame >= MobTexturesList.length - 2) {
        CurrentMob.isDead = true;
        console.log("FIN")
      }
      break;
  }


  //* Remettre l'animation au début quand on change d'animation
  if (CurrentMob.lastMovement != movement) {
    CurrentMob.indexFrame = 0;
  }

  //* Changer de frame
  if (timer && !CurrentMob.currentFrame) {
    CurrentMob.indexFrame++;
    CurrentMob.currentFrame = true;
  }

  if (!timer) {
    CurrentMob.currentFrame = false;
  }

  //* Remettre l'index au début
  if (CurrentMob.indexFrame >= MobTexturesList.length) {
    CurrentMob.indexFrame = 0;
  }

  let MobCurrentTextures = MobTexturesList[CurrentMob.indexFrame];

  //* direction DROITE
  if (direction == "right") {
    image(MobCurrentTextures, positionX, positionY, width, height);
  } else if (direction == "left") {
    //* direction GAUCHE
    scale(-1, 1);
    image(MobCurrentTextures, -positionX - width, positionY, width, height);
    scale(-1, 1);
  }
}