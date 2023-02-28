
//#region  PNJ ATTRIBUT
let PNJ1 = {
    y: 575,
    Direction: 1,
    IMG: null,
    Taille: 100,
    Speed: 5,
    PNJStartX: 600,
    PNJDistance: 20

};



let LeCarre = {
    id:"Carre",
    y: 500,
    StartX: 100,
    Distance: 20,
    Avancer : 0
};




let Carre2 = {
    x: 100,
    y: 800,
    TailleW: 50,
    TailleH: 50,
    NbrePas: 0
};


let ArrayPNJ = []




ArrayPNJ.push(LeCarre)


//#endregion



//#region APPARAITRE PNJ


let ForCarre2 = () => {

    let CurentX = xStartWorld + Carre2.x + Carre2.NbrePas;
    let Direction = "Avancer";
    let EndX = CurentX + Carre2.NbrePas;

    CarreRevien = EndX
    //console.log(CarreRevien)

    if (CurentX > EndX) {
        Direction = "Reculer"
    }
    if (CurentX < Carre2.x) {
        Direction = "Avancer"
    }
    if (Direction === "Avancer") {
        rect(CurentX, Carre2.y, Carre2.TailleW, Carre2.TailleH);
        Carre2.NbrePas += 2;
    }
    if (Direction === "Reculer") {
        rect(CurentX, Carre2.y, Carre2.TailleW, Carre2.TailleH);
        Carre2.NbrePas -= 2;
    }
    // if (characterPositionY > height - height / 4) {
    //     toto.x - mouvementSpeed
    // }
}



// let ForPNJ = () => {

//     console.log("dssdd")
//     drawPNJ(100, 500, 50, 50, 0, 1000)

// }




let ForPNJ1 = () => {

    let CurentX = xStartWorld + LeCarre.StartX + LeCarre.Avancer;

    // let EndX = CurentX + LeCarre.Distance;

    if (CurentX > EndX) {
        Direction = "Reculer"
    }
    if (CurentX < LeCarre.StartX){
        Direction = "Avancer"
    }
    if (Direction === "Avancer"){
        rect(CurentX, LeCarre.y, 50, 50);
        LeCarre.Avancer += 2;
    }
    if (Direction === "Reculer") {
        rect(CurentX, LeCarre.y, 50, 50);
        LeCarre.Avancer -= 2;
    } 
    if (characterPositionY > height - height / 4) {
        //toto.x - mouvementSpeed
    }
}





//#endregion

//#region FONCTION POUR PNJ

let drawPNJ = (img, x, y, TailleW, TailleH, NbrePas, End) => {

    let CurentX = xStartWorld + x + NbrePas;

    if (CurentX > End) {
        Direction = "Reculer"
    }
    if (CurentX < x) {
        Direction = "Avancer"
    }
    if (Direction === "Avancer") {
        rect(CurentX, y, TailleW, 50);
        NbrePas += 2;
    }
    if (Direction === "Reculer") {
        rect(CurentX, y, TailleW, 50);
       NbrePas -= 2;
    } 

}



//#region  BACK Up

    //PNJEndX: PNJStartX + PNJDistance,

    // PNJEndX = Ditance + PNJStart
    // if (CurentX => PNJEnd) alors reculer et inversement


    //drawPNJ(CurentX, PNJ1.y, PNJ1.Taille, PNJ1.Direction, PNJ1.IMG);

    // PNJ1.PNJStartX += (PNJ1.Speed * PNJ1.Direction);

    // if (PNJ1.PNJStartX >= 800 - PNJ1.Taille || PNJ1.PNJStartX <= 400) {

    //     PNJ1.Direction *= -1;

    //     PNJ1.PNJStartX += (PNJ1.Speed * PNJ1.Direction); // corriger la position pour éviter qu'il reste collé
    // }




// let ForPNJ1 = () => {
//     drawPNJ(PNJ1.x, PNJ1.y, PNJ1.Taille, PNJ1.Direction, PNJ1.IMG);

//     PNJ1.x += (PNJ1.Speed * PNJ1.Direction);


//     if (PNJ1.x >= 800 - PNJ1.Taille || PNJ1.x <= 400) {
//         PNJ1.Direction *= -1;
//     }

// }




// let drawPNJ = (x, y, Taille, Direction, IMG) => {

//     push();

//     translate(x + Taille / 2, y + Taille / 2);

//     if (Direction == -1) {

//         scale(-1, 1);

//     }

//     image(IMG, -Taille / 2, -Taille / 2, Taille, Taille);

//     pop();
// }

//#endregion

//#endregion