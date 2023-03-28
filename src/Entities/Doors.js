function doorsManager(){

    Object.entries(allDoors.Doors).forEach(door => {
        drawDoor(door[1]); 
    });

}

function drawDoor (door){
    fill(255);

    let positions = getPositionAt(door.map, door.x, door.y)

    let doorX = positions.pixelX + xStartWorld
    let doorY = positions.pixelY + yStartWorld

    
    //& Variables Collisions / HitBox Mobs
    let doorBoundingBox = expandRect(
        doorX,
        doorY,
        rectWidth,
        rectHeight,
        door.detectDist,
        door.detectDist
    );

    //& Détéction du joueur
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

        behindThisDoor = door.house
        
        //& Remettre la maison en position
        xStartHouse = 0
        yStartHouse = 200

        //& Remettre le spawn du perso en position
        characterInsidePosX = (Houses[behindThisDoor].xStart * rectWidth) + xStartHouse
        characterInsidePosY = (Houses[behindThisDoor].yStart * rectHeight) + yStartHouse


    }


    //& Debug Mod
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


  rect(doorX, doorY-rectHeight, rectWidth, rectHeight*2)
}