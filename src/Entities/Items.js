function itemsManager(){

    if (engineOne){
        Object.entries(itemsJSON.ItemsOnTheFloor).forEach((item) => {
            if (item[1].shown){
                items(item[1]);
            }
        })
    }

}



function items(item){

    let positions = getPositionAt(item.location, item.x, item.y);
    let itemX = positions.pixelX + xStartWorld;
    let itemY = positions.pixelY + yStartWorld;

    let widthItem = rectWidth
    let heightItem = rectHeight

    let itemBoundingBox = expandRect(
        itemX,
        itemY,
        widthItem,
        heightItem,
        item.detectDist,
        item.detectDist
      );

    canGetItem = rectIsInRect(
        characterPositionX,
        characterPositionY,
        characterBoundingBoxWidth,
        characterBoundingBoxHeight,
        itemBoundingBox[0],
        itemBoundingBox[1],
        itemBoundingBox[2],
        itemBoundingBox[3]
      );
    
    if (canGetItem){
        currentItemPointing = item.name
    }


    //* Debug Mod
    if (debugMod) {
        stroke(255, 0, 0);
        fill(255, 0, 0, 70);
        rect(
            itemBoundingBox[0],
            itemBoundingBox[1],
            itemBoundingBox[2],
            itemBoundingBox[3]
        );
        fill(255);
        noStroke();
    }

    drawItems(item)
}


function drawItems(item){


    let positions = getPositionAt(item.location, item.x, item.y);
    let itemX = positions.pixelX + xStartWorld;
    let itemY = positions.pixelY + yStartWorld;


    image(itemList[item.itemNumber], itemX, itemY, rectWidth, rectHeight)

}