
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



// let LeCarre = {
//     id:"Carre",
//     y: 500,
//     StartX: 100,
//     Avancer : 0,
//     Direction: "Avancer"
// };



LeCarre = {
    y: 500,
    StartX: 100,
    Avancer: 0,
    EndX : 1000,
    Direction: "Avancer"
};


let Carre2 = {
    x: 100,
    y: 800,
    TailleW: 50,
    TailleH: 50,
    NbrePas: 0
};





//#endregion



//#region MANAGER 

function PNJManager(){

    // LeCarre = {
    //     y: 500,
    //     StartX: 100,
    //     Avancer: 0,
    //     EndX: 1000,
    //     Direction: "Avancer"
    // };

    ForPNJ1()

    // ArrayPNJ.push(LeCarre)
    // const map1 = ArrayPNJ.find(Elm => Elm.StartX === LeCarre.StartX);
    // console.log(map1.StartX)
    


    // createPNJ(100, 500, 50, 50, 1000);
    // movePNJ();


    // ArrayPNJ.push(LeCarre)
    // ForPNJ1()


    // drawPNJ(100,500,50,50,1000)




}



//#endregion

//#region APPARAITRE PNJ


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



//#endregion

//#region FONCTION POUR PNJ



let drawPNJ = (x, y, TailleW, TailleH, End) => {


    let PNJ = {
        x: x,
        y: y,
        TailleH: TailleH,
        TailleW: TailleW,
        End: End,
        ForDirection: "Avancer"
    }

    //console.log(PNJ)

    let CurentX = PNJ.x + NbrePas;

    if (CurentX > PNJ.End) {
        PNJ.ForDirection = "Reculer"
    }
    if (CurentX < PNJ.x) {
        PNJ.ForDirection = "Avancer"
    }
    if (PNJ.ForDirection === "Avancer") {
        rect(CurentX, PNJ.y, PNJ.TailleW, PNJ.TailleH);
        NbrePas += 2;
    }
    if (PNJ.ForDirection === "Reculer") {
        
        rect(CurentX, PNJ.y, PNJ.TailleW, PNJ.TailleH);
        NbrePas -= 2;
    }
    
}




// let createPNJ = (x, y, tailleW, tailleH, end) => {
//     let pnj = {
//         x: x,
//         y: y,
//         direction : "avancer",
//         tailleW: tailleW,
//         tailleH: tailleH,
//         end: end,
//         NbrePas: 0 
//     };

//     ArrayPNJ.push(pnj);

//     // return pnj;
// };


// let movePNJ = () => {
//     ArrayPNJ.forEach((pnj) => {

//         let CurentX = pnj.x + pnj.NbrePas;
        

//         if (CurentX > pnj.end) {
//             pnj.direction = "reculer";
//         }
//         if (CurentX < pnj.x) {
//             pnj.direction = "avancer";
//         }
//         if (pnj.direction === "avancer") {
//             rect(CurentX, pnj.y, pnj.tailleW, pnj.tailleH);
//             pnj.NbrePas += 2;
//             console.log(pnj.NbrePas)
//         }
//         if (pnj.direction === "reculer") {
//             rect(CurentX, pnj.y, pnj.tailleW, pnj.tailleH);
//             pnj.NbrePas -= 2;
//         }
//     });
// };




//#endregion





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