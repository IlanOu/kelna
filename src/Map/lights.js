//~ Variables
let shadowHeight = 0


//~ Manager des lights
function lightsManager() {

    drawShadow(
        characterPositionX,
        characterWidth / 2,
        characterPositionY + 10,
        characterPositionX - characterWidth,
        characterWidth,
        100)
}

//~ Créer l'ombres
function drawShadow(
    xTop,
    gapWidthTop,
    yTop,
    xBottomLeft,
    gapWidthBottom,
    heightRect) {

    noStroke()
    fill(0, 0, 0, 10) //? Couleur de l'ombre



    //? Couleurs du gradient
    let c1 = color(0, 0, 0, 10);
    let c2 = color(0, 0, 0, 00);


    //? Dessiner le dégradé
    for (let y = yTop; y < yTop + heightRect; y++) {
        //? Calculer la position relative sur la forme
        let t = map(y, yTop, yTop + heightRect, 0, 1);
        let xLeft = lerp(xTop, xBottomLeft - heightRect, t);
        let xRight = lerp(xTop + gapWidthTop, xBottomLeft + gapWidthBottom - heightRect, t);

        //? Calculer la couleur du dégradé à cette position
        let c = lerpColor(c1, c2, t);

        //? Dessiner la ligne horizontale avec la couleur calculée
        stroke(c);
        line(xLeft, y, xRight, y + 40);
    }
}