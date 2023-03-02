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

}



//#endregion

//#region FONCTION POUR PNJ



let drawPNJ = (pnj) => {


    let PNJEnd = pnj.end + xStartWorld;
    let PNJStart = pnj.x + xStartWorld
    let CurentX = pnj.x + pnj.NbrePas + xStartWorld;

    if (CurentX > PNJEnd) {
        pnj.direction = "reculer";
    };
    if (CurentX < PNJStart) {
        pnj.direction = "avancer";
    };
    if (pnj.direction === "avancer") {
        rect(CurentX, pnj.y, pnj.tailleW, pnj.tailleH);
        //image(IMGTest, 100, 100, 50, 50);
        pnj.NbrePas += pnj.vitesse;
    };
    if (pnj.direction === "reculer") {
        rect(CurentX, pnj.y, pnj.tailleW, pnj.tailleH);
        pnj.NbrePas -= pnj.vitesse;
    };
}






//#endregion