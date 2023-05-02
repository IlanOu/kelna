//~ Ajouter a l'inventaire
let addItemToInventory = (item, amount) => {
    
    let amountItemSlot2 = 0
    if (Inventory[1]){
        if (Inventory[1].category == item.category){
            amountItemSlot2 = Inventory[1].amount
        }
    }
    
    if (item){
        if (Inventory.length <= 3) {
    
            switch (item.category) {
                case "weapon":
                    Inventory[0] = item
                    
                    //? Activer le checkpoint quand on obtien la première épée
                    if (item.name == "sword_1"){
                        checkpointActivated = true
                    }
                    break;
                case "food":
                    Inventory[1] = item

                    if (Inventory[1].amount + amountItemSlot2 <= stackSize){
                        Inventory[1].amount = amountItemSlot2 + amount
                    }else{
                        Inventory[1].amount = stackSize
                    }

                    break;
                case "other":
                    Inventory[2] = item

                    break;
            }
    
        } else {
            console.error("Trop d'objet dans l'inventaire !", Inventory.length)
        }
    }
};

//~ Enleve l'item de l'inventaire
let removeItemFromInventory = (index) => {
    if (index < 3 && index >= 0) {
        if (index == 1) {
            if (Inventory[index].amount <= 1) {
                Inventory[index].amount--
                Inventory[index] = {};
            } else {
                Inventory[index].amount--
            }
        } else {
            Inventory[index] = {};
        }
    }
}


//~ Met a jour la jauge
function updateGauges() {
    if (leftGaugeLevel >= heightSlot) {
        topGaugeLevel = 0;
        rightGaugeLevel = 0;
        bottomGaugeLevel = 0;
        leftGaugeLevel = 0;
        return true
    } else {
        if (characterIsEating) {
            topGaugeLevel += gaugeSpeed;
            if (topGaugeLevel >= widthSlot) {
                topGaugeLevel = widthSlot;
                rightGaugeLevel += gaugeSpeed;
                if (rightGaugeLevel >= heightSlot) {
                    rightGaugeLevel = heightSlot;
                    bottomGaugeLevel += gaugeSpeed;
                    if (bottomGaugeLevel >= widthSlot) {
                        bottomGaugeLevel = widthSlot;
                        leftGaugeLevel += gaugeSpeed;
                        if (leftGaugeLevel >= heightSlot) {
                            leftGaugeLevel = heightSlot;
                        }
                    }
                }
            }
        } else {
            topGaugeLevel = 0;
            rightGaugeLevel = 0;
            bottomGaugeLevel = 0;
            leftGaugeLevel = 0;
        }
    }
}


//~ Creation de l'inventaire
function displayInventory() {
    let canEat = false

    if (!hideInventory) {

        let spaceBetween = heightSlot / 5

        let maxheight = Inventory.length * heightSlot + spaceBetween
        let InventoryY = viewportDisplayHeight / 2 - maxheight / 2;

        let itemWidth = widthSlot - widthSlot / 5
        let itemHeight = heightSlot - heightSlot / 5

        let buttonFSize = 25

        for (let i = 0; i < Inventory.length; i++) {

            slotY = InventoryY + (heightSlot * i)

            if (i == 0) {
                if (Inventory[0].category){
                    fill(58, 37, 30)
                    rect(slotX, slotY, widthSlot, heightSlot)
                }else{
                    image(requiredSlotSword, slotX, slotY, widthSlot, heightSlot)
                }
            }
            if (i == 1) {
                canEat = true
                if (Inventory[1].category){
                    fill(58, 37, 30)
                    rect(slotX, slotY, widthSlot, heightSlot)
                }else{
                    image(requiredSlotFoods, slotX, slotY, widthSlot, heightSlot)
                }
            } else if (i == 2) {
                // slotY += spaceBetween
                fill(58, 37, 30)
                rect(slotX, slotY, widthSlot, heightSlot);
            }


            if (Inventory[i].itemNumber != undefined) {
                let itemPosX = slotX + (widthSlot - itemWidth) / 2
                let itemPosY = slotY + (heightSlot - itemHeight) / 2
                image(itemList[Inventory[i].itemNumber], itemPosX, itemPosY, itemWidth, itemHeight);

                if (i == 1) {
                    canEat = true
                }

                if (Inventory[i].amount) {
                    let fontSize = 25
                    fill(255)
                    stroke(0)
                    textSize(fontSize);
                    text(Inventory[i].amount, itemPosX+itemWidth, itemPosY + itemHeight)
                }
            }
            image(slot, slotX, slotY, widthSlot, heightSlot)

            if (i == 1) {
                image(buttonF, slotX,slotY, buttonFSize, buttonFSize)

                noStroke()
                fill(255, 255, 255)
                //? top gauge
                rect(slotX, slotY, topGaugeLevel, gaugeSize);

                //? right gauge
                rect(slotX + widthSlot - gaugeSize, slotY, gaugeSize, rightGaugeLevel);

                //? bottom gauge
                rect(slotX + widthSlot, slotY + heightSlot - gaugeSize, -bottomGaugeLevel, gaugeSize);

                //? left gauge
                rect(slotX, slotY + heightSlot, gaugeSize, -leftGaugeLevel);
            }
        }
    }

    if (canEat && healthPlayer < maxHealth && Inventory[1].name) {
        if (updateGauges()) {
            statistiques.healCount += parseInt(Inventory[1].healAmount)
            regenPlayer(Inventory[1].healAmount)
            removeItemFromInventory(1)
        }
    }
};