//#region MANAGER 


LeCarre = {
    y: 500,
    StartX: 100,
    Avancer: 0,
    EndX: 1000,
    Direction: "Avancer"
};




let ForPNJ1 = () => {

    let CurentX = LeCarre.StartX + LeCarre.Avancer;

    if (CurentX > LeCarre.EndX) {
        LeCarre.Direction = "Reculer"
    }
    if (CurentX < LeCarre.StartX) {
        LeCarre.Direction = "Avancer"
    }
    if (LeCarre.Direction === "Avancer") {
        rect(CurentX, LeCarre.y, 50, 50);
        LeCarre.Avancer += 2;
    }
    if (LeCarre.Direction === "Reculer") {
        rect(CurentX, LeCarre.y, 50, 50);
        LeCarre.Avancer -= 2;
    }
}






function PNJManager() {

    drawPNJ(ForPNJ.PNJS.PNJ1);
    //ForPNJ1()

}



//#endregion

//#region FONCTION POUR PNJ



let drawPNJ = (pnj) => {
    // image(IMG, -Taille / 2, -Taille / 2, Taille, Taille);
    let CurentX = pnj.x + pnj.NbrePas;

    //characterPositionX = getMovementsControls(characterPositionX, characterPositionY, characterMovesSpeed)


    if (CurentX > pnj.end) {
        pnj.direction = "reculer";
    };
    if (CurentX < pnj.x) {
        pnj.direction = "avancer";
    };
    if (pnj.direction === "avancer") {
        rect(CurentX, pnj.y, pnj.tailleW, pnj.tailleH);
        pnj.NbrePas += pnj.vitesse;
    };
    if (pnj.direction === "reculer") {
        rect(CurentX, pnj.y, pnj.tailleW, pnj.tailleH);
        pnj.NbrePas -= pnj.vitesse;
    };


    if (characterPositionX > width - width / 2) {
        if (xStartWorld + ((rectWidth * Maps.numberOfRow) * World.worldsMap[0].length) - width > 0) {
            pnj.end -= characterMovesSpeed
            pnj.x -= characterMovesSpeed
        }
    };
    if (characterPositionX < width / 4) {
        if (xStartWorld < 0) {
            pnj.end += characterMovesSpeed
            pnj.x += characterMovesSpeed
        }
    };
    if (characterPositionY > height - height / 4) {
        if (yStartWorld + ((rectHeight * Maps.numberOfColumns) * World.worldsMap.length) - height > 0) {
            pnj.y -= characterVelocityY //
        }
    };
    if (characterPositionY > height - height / 3) {
        if (yStartWorld + ((rectHeight * Maps.numberOfColumns) * World.worldsMap.length) - height > 0) {
            pnj.y -= characterMovesSpeed
        }
    };
    if (characterPositionY < height / 3) {
        if (yStartWorld < 0) {
            pnj.y += characterMovesSpeed
        }
    };
    if (characterPositionY < height / 4) {
        if (yStartWorld < 0) {
            pnj.y += characterMovesSpeed
        }
    };

    console.log(characterPositionX)
}






//#endregion