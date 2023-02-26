let addItemToInventory = (image) => {
    if (Inventory.length < 3) {
        Inventory.push(image);
    }
};



let displayInventory = () => {
    let ForSlotTwoX = ForSlotOneX + 125;
    let ForSlotThreeX = ForSlotTwoX + 125;
    let ForAllSlotY = 800;

    noFill();
    // stroke(255);

    if (ActualSlot === 0) {
        stroke(255, 0, 0);
        rect(ForSlotOneX, ForAllSlotY, WidthSlot, HeightSlot);
        stroke(255);
       
    } if (ActualSlot === 1) {
        stroke(255, 0, 0);
        rect(ForSlotTwoX, ForAllSlotY, WidthSlot, HeightSlot);
        stroke(255);
    } 
    if (ActualSlot === 2) {
        stroke(255, 0, 0);
        rect(ForSlotThreeX, ForAllSlotY, WidthSlot, HeightSlot);
        stroke(255);
    }

    rect(ForSlotOneX, ForAllSlotY, WidthSlot, HeightSlot);
    rect(ForSlotTwoX, ForAllSlotY, WidthSlot, HeightSlot);
    rect(ForSlotThreeX, ForAllSlotY, WidthSlot, HeightSlot);

    for (let i = 0; i < Inventory.length; i++) {
        if (Inventory[i]) {
            let x = ForSlotOneX + i * 125 + WidthSlot / 2;
            let y = ForAllSlotY + HeightSlot / 2;
            image(Inventory[i], x, y, WidthSlot, HeightSlot);
        }
    }
};
