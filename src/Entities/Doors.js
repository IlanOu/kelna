function doorsManager(){

    let canGoInside = [];
    let canGoOutside = [];

    Object.entries(allDoors.Doors).forEach(door => {
        if (engineOne){
            if (!door.inHouse){
                drawDoor(door[1]);
                canGoInside.push(canEnterInHouse);
            }
        }else{
            if (!door.inHouse){
                drawDoorInside(door[1]);
                canGoOutside.push(canGoOutTheHouse);
            }
        }
    });
    if (canGoInside.includes(true)){
        canEnterInHouse = true;
    }
    if (canGoOutside.includes(true)){
        canGoOutTheHouse = true
        console.log("Out",canGoOutTheHouse)
    }

}



//~ Dessiner la porte devant la maison
function drawDoor (door){
    fill(255);

    let positions = getPositionAt(door.location, door.x, door.y)
    let doorX = positions.pixelX + xStartWorld
    let doorY = positions.pixelY + yStartWorld
    let widthDoor = engine1WidthDoors
    let heightDoor = engine1HeightDoors

    
    //* Variables Collisions / HitBox Mobs
    let doorBoundingBox = expandRect(
        doorX,
        doorY-heightDoor/2,
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

    if (canEnterInHouse){
        behindThisDoor = door.destination
        
        //? Remettre la maison en position
        xStartHouse = 0
        yStartHouse = 200

        //? Remettre le spawn du perso en position
        characterInsidePosX = (Houses[behindThisDoor].xStart * rectWidth) + xStartHouse
        characterInsidePosY = (Houses[behindThisDoor].yStart * rectHeight) + yStartHouse
    }

    //* Debug Mod
    if (debugMod) {
        stroke(255,0,0)
        fill(255, 0, 0, 70);
        rect(
            doorBoundingBox[0],
            doorBoundingBox[1],
            doorBoundingBox[2],
            doorBoundingBox[3]
        );
        fill(255);
        noStroke()
    }

  rect(doorX, doorY-heightDoor/2, widthDoor, heightDoor)
}



//~ Dessiner la porte dans la maison
function drawDoorInside (door){
    fill(255);

    let positions = getPositionAt(door.location, door.x, door.y)
    let doorX = positions.pixelX + xStartHouse
    let doorY = positions.pixelY + yStartHouse
    let widthDoor = engine2WidthDoors
    let heightDoor = engine2HeightDoors

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
        characterPositionX,
        characterPositionY,
        characterBoundingBoxWidth,
        characterBoundingBoxHeight,
        doorBoundingBox[0],
        doorBoundingBox[1],
        doorBoundingBox[2],
        doorBoundingBox[3]
    );


    if (canGoOutTheHouse) {
        behindThisDoor = door.destination

        //? Remettre la maison en position
        xStartHouse = 0
        yStartHouse = 200

        //? Remettre le spawn du perso en position
        characterInsidePosX = (Houses[behindThisDoor].xStart * rectWidth) + xStartHouse
        characterInsidePosY = (Houses[behindThisDoor].yStart * rectHeight) + yStartHouse
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
    rect(doorX, doorY-heightDoor/2, widthDoor, heightDoor)
}