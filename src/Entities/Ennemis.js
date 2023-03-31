//^ /* -------------------------------------------------------------------------- */
//^ /*                                 MOB MANAGER                                */
//^ /* -------------------------------------------------------------------------- */
function MobManager() {
  // * Draw des Mobs en EXTERIEUR
  if (engineOne) {
    mob(ForEnnemis.Ennemis.Enn1);
  }
}

//^ /* -------------------------------------------------------------------------- */
//^ /*                                     MOB                                    */
//^ /* -------------------------------------------------------------------------- */
function mob(Mobs) {
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

          if (MobsHaveToJump){
            collide = true
          }
        }
      }
    }
  }
  //* Ajouter le saut au mob
  if (collide){

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
  if (touchPlayer){
    lookThePlayer(Mobs);
    //? attaquer

    //? Afficher un !
    fill(255, 0, 0)
    drawKeyAt("!", CurrentX, MobY)
  }else{
    if (Mobs.seePlayer) {
      followPlayer(Mobs);
      lookThePlayer(Mobs);
  
      //? Afficher un !
      fill(255, 0, 0)
      drawKeyAt("!", CurrentX, MobY)
    } else {
      doRound(Mobs);
    }
  }
  


  //* Debug Mod
  if (debugMod) {
    fill(255, 0, 0, 70);
    rect(
      MobLittleBoundingBox[0],
      MobLittleBoundingBox[1],
      MobLittleBoundingBox[2],
      MobLittleBoundingBox[3]
    );
    fill(255);
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
  fill(color);
  circle(positionX + 35, positionY - 25, 20);

  let timer = round(millis() / animationSpeed) % 2;

  let MobTexturesList = [];

  if (movement == "walk") {
    for (let y = 32; y < 64; y += 32) {
      for (let x = 0; x < 128; x += 32) {
        MobTexturesList.push(PNJTextures.get(x, y, 32, 32));
      }
    }
  } else if (movement == "idle") {
    for (let y = 0; y < 32; y += 32) {
      for (let x = 0; x < 128; x += 32) {
        MobTexturesList.push(PNJTextures.get(x, y, 32, 32));
      }
    }
  } else if (movement == "jump") {
    for (let y = 64; y < 96; y += 32) {
      for (let x = 0; x < 128; x += 32) {
        MobTexturesList.push(PNJTextures.get(x, y, 32, 32));
      }
    }
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

  if (direction == "right") {
    image(MobCurrentTextures, positionX, positionY, width, height);

    //* direction GAUCHE
  } else if (direction == "left") {
    scale(-1, 1);
    image(MobCurrentTextures, -positionX - width, positionY, width, height);
    scale(-1, 1);
  }
}