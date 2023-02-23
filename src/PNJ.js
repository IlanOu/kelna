
//#region  PNJ ATTRIBUT
let PNJ1 = {
    x: 600,
    y: 575,
    Direction: 1,
    IMG: null,
    Taille: 100,
    Speed: 5,
};

//#endregion



//#region APPARAITRE PNJ

let ForPNJ1 = () => {
    drawPNJ(PNJ1.x, PNJ1.y, PNJ1.Taille, PNJ1.Direction, PNJ1.IMG);

    PNJ1.x += (PNJ1.Speed * PNJ1.Direction);

    console.log(PNJ1.x)


    if (PNJ1.x >= 800 - PNJ1.Taille || PNJ1.x <= 400) {
        PNJ1.Direction *= -1;
    }

}


//#endregion

//#region FONCTION POUR PNJ

function drawPNJ(x, y, Taille, Direction, IMG) {

    push();

    translate(x + Taille / 2, y + Taille / 2);

    if (Direction == -1) {

        scale(-1, 1);

    }

    image(IMG, -Taille / 2, -Taille / 2, Taille, Taille);

    pop();
}


//#endregion
