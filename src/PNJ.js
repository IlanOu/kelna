
//#region  PNJ ATTRIBUT
let PNJ1 = {
    x: 600,
    y: 575,
    Direction: 1,
    IMG: null,
    Taille: 100,
    Speed: 5,
    PNJStartX: 600 // position de départ en X du PNJ
};




// let PNJ1 = {
//     x: 600,
//     y: 575,
//     Direction: 1,
//     IMG: null,
//     Taille: 100,
//     Speed: 5,
// };



//#endregion



//#region APPARAITRE PNJ

let ForPNJ1 = () => {
    let CurentX = xStartWorld + PNJ1.PNJStartX + i; // position X du PNJ par rapport au monde

    rect(CurentX, 80 , 50,50)

    for (let index = 0; index < 500; index++) {
        console.log("yey")
        CurentX + 1
    }

    drawPNJ(CurentX, PNJ1.y, PNJ1.Taille, PNJ1.Direction, PNJ1.IMG);

    // PNJ1.PNJStartX += (PNJ1.Speed * PNJ1.Direction);

    // if (PNJ1.PNJStartX >= 800 - PNJ1.Taille || PNJ1.PNJStartX <= 400) {

    //     PNJ1.Direction *= -1;

    //     PNJ1.PNJStartX += (PNJ1.Speed * PNJ1.Direction); // corriger la position pour éviter qu'il reste collé
    // }
}





// let ForPNJ1 = () => {
//     drawPNJ(PNJ1.x, PNJ1.y, PNJ1.Taille, PNJ1.Direction, PNJ1.IMG);

//     PNJ1.x += (PNJ1.Speed * PNJ1.Direction);


//     if (PNJ1.x >= 800 - PNJ1.Taille || PNJ1.x <= 400) {
//         PNJ1.Direction *= -1;
//     }

// }

//#endregion

//#region FONCTION POUR PNJ

let drawPNJ = (x, y, Taille, Direction, IMG) => {
    
}






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
