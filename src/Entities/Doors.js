function doorsManager() {
  let canGoInside = [];
  let canGoOutside = [];

  Object.entries(allDoors.Doors).forEach((door) => {
    if (engineOne) {
      if (!door[1].inHouse) {
        drawDoor(door[1]);
        canGoInside.push(canEnterInHouse);
      }
    } else {
      if (door[1].inHouse) {
        drawDoorInside(door[1]);
        canGoOutside.push(canGoOutTheHouse);
      }
    }
  });
  if (canGoInside.includes(true)) {
    canEnterInHouse = true;
    canGoOutTheHouse = false
  }
  if (canGoOutside.includes(true)) {
    canGoOutTheHouse = true;
    canEnterInHouse = false
  }
}

//~ Dessiner la porte devant la maison
function drawDoor(door) {
  noStroke()
  fill(0,0,0,70);

  let positions = getPositionAt(door.location, door.x, door.y);
  let doorX = positions.pixelX + xStartWorld;
  let doorY = positions.pixelY + yStartWorld;

  let widthDoor = engine1WidthDoors;
  let heightDoor = engine1HeightDoors;

  //* Variables Collisions / HitBox Mobs
  let doorBoundingBox = expandRect(
    doorX,
    doorY - heightDoor / 2,
    widthDoor,
    heightDoor,
    door.detectDist,
    door.detectDist
  );

  //* Détéction du joueur
  canEnterInHouse = rectIsInRect(
    characterPositionX,
    characterPositionY,
    characterBoundingBoxWidth,
    characterBoundingBoxHeight,
    doorBoundingBox[0],
    doorBoundingBox[1],
    doorBoundingBox[2],
    doorBoundingBox[3]
  );

  if (canEnterInHouse) {
    behindThisDoorHouse = door.destination;
    
    //? Remettre la maison en position
    xStartHouse = 0;
    yStartHouse = 200;

    //? Remettre le spawn du perso en position
    characterInsidePosX =
      Houses.Houses[behindThisDoorHouse].xStart * rectWidth + xStartHouse;
    characterInsidePosY =
      Houses.Houses[behindThisDoorHouse].yStart * rectHeight + yStartHouse;
  }

  //* Debug Mod
  if (debugMod) {
    stroke(255, 0, 0);
    fill(255, 0, 0, 70);
    rect(
      doorBoundingBox[0],
      doorBoundingBox[1],
      doorBoundingBox[2],
      doorBoundingBox[3]
    );
    fill(255);
    noStroke();
  }

  rect(doorX, doorY - heightDoor / 2, widthDoor, heightDoor);
}



//~ Dessiner la porte dans la maison
function drawDoorInside(door) {
  stroke(255)
  fill(255);

  let positions = getPositionAt(door.location, door.x, door.y);
  let doorX = positions.pixelX + xStartHouse;
  positions.pixelY = door.y
  let doorY = positions.pixelY + yStartHouse;
  let widthDoor = engine2WidthDoors;
  let heightDoor = engine2HeightDoors;

  //* Variables Collisions / HitBox Mobs
  let doorBoundingBox = expandRect(
    doorX,
    doorY,
    widthDoor,
    heightDoor,
    door.detectDist,
    door.detectDist
  );

  //* Détéction du joueur
  canGoOutTheHouse = rectIsInRect(
    characterInsidePosX,
    characterInsidePosY,
    characterBoundingBoxWidth,
    characterBoundingBoxHeight,
    doorBoundingBox[0],
    doorBoundingBox[1],
    doorBoundingBox[2],
    doorBoundingBox[3]
  );

  if (canGoOutTheHouse) {
    behindThisDoor = door.destination;
  }

  //* Debug Mod
  if (debugMod) {
    fill(255, 0, 0, 70);
    rect(
      doorBoundingBox[0],
      doorBoundingBox[1],
      doorBoundingBox[2],
      doorBoundingBox[3]
    );
    fill(255);
  }

  //* Dessiner la porte
  rect(doorX, doorY, widthDoor, heightDoor);
}


