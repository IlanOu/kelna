//^ Ajouter a l'inventaire
let addItemToInventory = (item, amount) => {

    if (Inventory.length <= 3) {

        switch (item.category) {
            case "weapon":
                Inventory[0] = item
                break;
            case "food":
                Inventory[1] = item
                if (Inventory[1].amount < stackSize){
                    Inventory[1].amount += amount
                }
                break;
            case "other":
                Inventory[2] = item

                break;
        }

    } else {
        console.error("Trop d'objet dans l'inventaire !", Inventory.length)
    }
};


let removeItemFromInventory = (index) => {
    if (index < 3 && index >= 0) {
        if (index == 1){
            if (Inventory[index].amount <= 1){
                Inventory[index] = {};
            }else{
                Inventory[index].amount--
            }
        }else{
            Inventory[index] = {};
        }
    }
}


function updateGauges() {
    if (leftGaugeLevel >= HeightSlot) {
        topGaugeLevel = 0;
        rightGaugeLevel = 0;
        bottomGaugeLevel = 0;
        leftGaugeLevel = 0;
        return true
    } else {
        if (characterIsEating) {
            topGaugeLevel += gaugeSpeed;
            if (topGaugeLevel >= WidthSlot) {
                topGaugeLevel = WidthSlot;
                rightGaugeLevel += gaugeSpeed;
                if (rightGaugeLevel >= HeightSlot) {
                    rightGaugeLevel = HeightSlot;
                    bottomGaugeLevel += gaugeSpeed;
                    if (bottomGaugeLevel >= WidthSlot) {
                        bottomGaugeLevel = WidthSlot;
                        leftGaugeLevel += gaugeSpeed;
                        if (leftGaugeLevel >= HeightSlot) {
                            leftGaugeLevel = HeightSlot;
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


//^ Creation de l'inventaire
function displayInventory() {
    let canEat = false

    if (!endInventory) {

        let spaceBetween = HeightSlot/5

        let maxheight = Inventory.length * HeightSlot + spaceBetween
        let InventoryY = viewportDisplayHeight / 2 - maxheight / 2;

        let itemWidth = WidthSlot - WidthSlot/5
        let itemHeight = HeightSlot - HeightSlot/5


        for (let i = 0; i < Inventory.length; i++) {
            slotY = InventoryY + (HeightSlot * i)

            if (i == 1){
                canEat = true
                slotY += spaceBetween
            }
            else if (i == 2){
                slotY += spaceBetween
            }


            if (Inventory[i].itemNumber != undefined) {
                let itemPosX = slotX + (WidthSlot - itemWidth)/2
                let itemPosY = slotY + (HeightSlot - itemHeight)/2
                image(itemList[Inventory[i].itemNumber], itemPosX, itemPosY, itemWidth, itemHeight);

                if (i == 1){
                    canEat = true   
                }

                if (Inventory[i].amount){
                    let fontSize = 15
                    fill(0)
                    stroke(0)
                    textSize(fontSize);
                    text(Inventory[i].amount, itemPosX, itemPosY+itemHeight)
                }
            }

            noFill();
            stroke(0);
            strokeWeight(2)
            rect(slotX, slotY, WidthSlot, HeightSlot);


            if (i == 1) {
                noStroke()
                fill(255, 0, 0)
                //? top gauge
                rect(slotX, slotY, topGaugeLevel, gaugeSize);

                //? right gauge
                rect(slotX + WidthSlot - gaugeSize, slotY, gaugeSize, rightGaugeLevel);

                //? bottom gauge
                rect(slotX + WidthSlot, slotY + HeightSlot - gaugeSize, -bottomGaugeLevel, gaugeSize);

                //? left gauge
                rect(slotX, slotY + HeightSlot, gaugeSize, -leftGaugeLevel);
            }

            

        }
    }

    if (canEat && healthPlayer < maxHealth && Inventory[1].name){
        if (updateGauges()){
            statistiques.healCount += parseInt(Inventory[1].healAmount)
            regenPlayer(Inventory[1].healAmount)
            removeItemFromInventory(1)
        }
    }
};