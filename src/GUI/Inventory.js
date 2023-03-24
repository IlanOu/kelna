let addItemToInventory = (image) => {
    if (Inventory.length < 3) {
        Inventory.push(image);
    }
};



let displayInventory = () => {


    if (endInventory === false) {
        let ForSlotTwoX = ForSlotOneX + 125;
        let ForSlotThreeX = ForSlotTwoX + 125;
        let ForAllSlotY = 800;

        noFill();

        if (currentSlot === 0) {
            // stroke(255, 0, 0);
            stroke(0, 204, 204);
            rect(ForSlotOneX, ForAllSlotY, WidthSlot, HeightSlot);
            stroke(255);

        } if (currentSlot === 1) {
            // stroke(255, 0, 0);
            stroke(0, 204, 204);
            rect(ForSlotTwoX, ForAllSlotY, WidthSlot, HeightSlot);
            stroke(255);
        }
        if (currentSlot === 2) {
            // stroke(255, 0, 0);
            stroke(0, 204, 204);
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
    }
};
