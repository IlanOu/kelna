//#region MANAGER 
function PNJManager() {

    // ~ Draw des PNJ
    drawPNJ(ForPNJ.PNJS.PNJ1);
    drawPNJ(ForPNJ.PNJS.PNJ2);
    drawPNJ(ForPNJ.PNJS.PNJ3);

}
//#endregion


//#region FONCTION POUR PNJ
let drawPNJ = (pnj) => {

    // ~ Variables positions PNJ
    let PNJDistance = pnj.distance + pnj.x
    let PNJY = pnj.y + yStartWorld
    let PNJEnd = PNJDistance + xStartWorld;
    let PNJStart = pnj.x + xStartWorld
    let CurentX = pnj.x + pnj.NbrePas + xStartWorld;

    // ~ Variables Collisions / HitBox PNJ
    let VillagerBoundingBox = expandRect(CurentX, PNJY, pnj.tailleW, pnj.tailleH, 4)
    let entreEnContact = rectIsInRect(characterPositionX, characterPositionY, characterBoundingBoxWidth, characterBoundingBoxHeight, VillagerBoundingBox[0], VillagerBoundingBox[1], VillagerBoundingBox[2], VillagerBoundingBox[3])

    // ~ Debug Mod
    if (debugMod) {
        fill(255, 0, 0, 70)
        rect(VillagerBoundingBox[0], VillagerBoundingBox[1], VillagerBoundingBox[2], VillagerBoundingBox[3])
        fill(255)
    }
    // ~ Direction Reculer
    if (CurentX > PNJEnd) {
        pnj.direction = "reculer";
    };
    // ~ Direction Avancer
    if (CurentX < PNJStart) {
        pnj.direction = "avancer";
    };
    // ~ Hitbox / Collisions
    if (entreEnContact === false) {

        if (pnj.direction === "avancer") {
            pnj.NbrePas += pnj.vitesse;
        };
        if (pnj.direction === "reculer") {
            pnj.NbrePas -= pnj.vitesse;
        };

    }
    // ~ Creation du PNJ
    rect(CurentX, PNJY, pnj.tailleW, pnj.tailleH);
}
//#endregion