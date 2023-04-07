//^ Ajouter a l'inventaire
let addItemToInventory = (item) => { 

    if (Inventory.length <= 3) {

        switch (item.category) {
            case "weapon":
                Inventory[0] = item
                
            break;
            case "food":
                Inventory[1] = item

            break;
            case "other":
                Inventory[2] = item

            break;
        }
        
    }else {
        console.error("Trop d'objet dans l'inventaire !", Inventory.length)
    }    
};




let removeItemFromInventory = (index) => {

    if (index < 3  && index >= 0 ){
        Inventory[index] = {};
    }

}



//^ Creation de l'inventaire
let displayInventory = () => {
    if (endInventory === false) {
        let ForSlotTwoX = ForSlotOneX;
        let ForSlotThreeX = ForSlotTwoX;
        let ForAllSlotY = 250;

        noFill();
        stroke(255);

        rect(ForSlotOneX, ForAllSlotY, WidthSlot, HeightSlot);
        rect(ForSlotTwoX, ForAllSlotY + HeightSlot, WidthSlot, HeightSlot);
        rect(ForSlotThreeX, ForAllSlotY + HeightSlot*2, WidthSlot, HeightSlot);

        for (let i = 0; i < Inventory.length; i++) {
            if (Inventory[i]) {
                let x, y;
                if (i === 0) {
                    x = ForSlotOneX
                    y = ForAllSlotY
                } if (i === 1) {
                    x = ForSlotTwoX
                    y = ForAllSlotY + 87
                }
                if (i === 2) {
                    x = ForSlotThreeX
                    y = ForAllSlotY + 174
                }
                if (Inventory[i].itemNumber != undefined){
                    image(itemList[Inventory[i].itemNumber], x, y, WidthSlot, HeightSlot);  
                }
            }
        }
    }
};