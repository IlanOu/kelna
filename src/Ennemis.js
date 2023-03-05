//#region MANAGER 
function ennemiManager() {

    // ~ Draw des Ennemis en EXTERIEUR
    if (engineOne) {
        drawEnnemi(ForEnnemis.Ennemis.Enn1);
        
    }
}
//#endregion


//#region FONCTION POUR ENNEMI



// DRAW ENNEMI
// let drawEnnemiInside = (Ennemis) => {

//     // ~ Variables positions Ennemis
//     let EnnemiDistance = Ennemis.distance + Ennemis.x
//     let EnnemiY = Ennemis.y + yStartHouse
//     let EnnemiEnd = EnnemiDistance + xStartHouse;
//     let EnnemiStart = Ennemis.x + xStartHouse
//     let CurrentX = Ennemis.x + Ennemis.NbrePas + xStartHouse;

//     // ~ Variables Collisions / HitBox Ennemis
//     let EnnemiBoundingBox = expandRect(CurrentX, EnnemiY, Ennemis.tailleW, Ennemis.tailleH, 2)
//     let entreEnContact = rectIsInRect(characterInsidePosX, characterInsidePosY, characterBoundingBoxWidth, characterBoundingBoxHeight, EnnemiBoundingBox[0], EnnemiBoundingBox[1], EnnemiBoundingBox[2], EnnemiBoundingBox[3])

//     // ~ Debug Mod
//     if (debugMod) {
//         fill(255, 0, 0, 70)
//         rect(EnnemiBoundingBox[0], EnnemiBoundingBox[1], EnnemiBoundingBox[2], EnnemiBoundingBox[3])
//         fill(255)
//     }
//     // ~ Direction left
//     if (CurrentX > EnnemiEnd) {
//         Ennemis.direction = "left";
//     };
//     // ~ Direction right
//     if (CurrentX < EnnemiStart) {
//         Ennemis.direction = "right";
//     };
//     // ~ Hitbox / Collisions
//     if (entreEnContact === false) {
//         Ennemis.movement = "walk"

//         if (Ennemis.direction === "right") {
//             Ennemis.NbrePas += Ennemis.vitesse;
//         };
//         if (Ennemis.direction === "left") {
//             Ennemis.NbrePas -= Ennemis.vitesse;
//         };

//     } else {
//         Ennemis.movement = "idle"
//         if (characterInsidePosX >= CurrentX) {
//             Ennemis.direction = "right"
//         } else {
//             Ennemis.direction = "left"
//         }
//     }
//     //~ Creation du Ennemis
//     animationEnnemis(Ennemis, CurrentX, EnnemiY, Ennemis.tailleW, Ennemis.tailleH, Ennemis.direction, Ennemis.movement)
// }


let drawEnnemi = (Ennemis) => {

    

    // ~ Variables positions Ennemis
    let EnnemiDistance = Ennemis.distance + Ennemis.x
    let EnnemiY = Ennemis.y + yStartWorld
    let EnnemiEnd = EnnemiDistance + xStartWorld;
    let EnnemiStart = Ennemis.x + xStartWorld
    let CurrentX = Ennemis.x + Ennemis.NbrePas + xStartWorld;

    // ~ Variables Collisions / HitBox Ennemis
    let EnnemiBoundingBox = expandRect(CurrentX, EnnemiY, Ennemis.tailleW + 200, Ennemis.tailleH, 2)
    let entreEnContact = rectIsInRect(characterPositionX, characterPositionY, characterBoundingBoxWidth, characterBoundingBoxHeight, EnnemiBoundingBox[0], EnnemiBoundingBox[1], EnnemiBoundingBox[2], EnnemiBoundingBox[3])

    // ~ Debug Mod
    if (debugMod) {
        fill(255, 0, 0, 70)
        rect(EnnemiBoundingBox[0], EnnemiBoundingBox[1], EnnemiBoundingBox[2], EnnemiBoundingBox[3])
        fill(255)
    }
    // ~ Direction left
    if (CurrentX > EnnemiEnd) {
        Ennemis.direction = "left";
    };
    // ~ Direction right
    if (CurrentX < EnnemiStart) {
        Ennemis.direction = "right";
    };
    // ~ Hitbox / Collisions
    if (entreEnContact === false) {
        Ennemis.movement = "walk"

        if (Ennemis.direction === "right") {
            Ennemis.NbrePas += Ennemis.vitesse;
        };
        if (Ennemis.direction === "left") {
            Ennemis.NbrePas -= Ennemis.vitesse;
        };

    } else {


        let distance = characterPositionX - CurrentX;

        let followSpeed = min(Ennemis.vitesse, abs(distance));

        if (distance > 0) {
            // Le joueur est à droite de l'ennemi
            Ennemis.direction = "right";
            Ennemis.NbrePas += followSpeed;
        } else {
            // Le joueur est à gauche de l'ennemi
            Ennemis.direction = "left";
            Ennemis.NbrePas -= followSpeed;
        }
    }

    //~ Creation du Ennemis
    animationEnnemis(Ennemis, CurrentX, EnnemiY, Ennemis.tailleW, Ennemis.tailleH, Ennemis.direction, Ennemis.movement, Ennemis.Color)
}




// ANIMATION ENNEMI

function animationEnnemis(CurrentEnnemi, positionX, positionY, width, height, direction, movement, color) {

    fill(color)
    circle(positionX + 35, positionY - 25, 20);

    let timer = (round(millis() / animationSpeed)) % 2

    let EnnemiTexturesList = []

    if (movement == "walk") {

        for (let y = 0; y < 32; y += 32) {
            for (let x = 0; x < 128; x += 32) {
                EnnemiTexturesList.push(PNJTextures.get(x, y, 32, 32));
            }
        }
    }
    else if (movement == "idle") {

        for (let y = 0; y < 26; y += 26) {
            for (let x = 0; x < 88; x += 22) {
                EnnemiTexturesList.push(PNJTextures.get(x, y, 22, 26));
            }
        }
    }
    //? Changer de frame
    if (timer && !CurrentEnnemi.currentFrame) {
        CurrentEnnemi.indexFrame++
        CurrentEnnemi.currentFrame = true
    }
    if (!timer) {
        CurrentEnnemi.currentFrame = false
    }
    //? Remettre l'index au début 
    if (CurrentEnnemi.indexFrame >= EnnemiTexturesList.length) {
        CurrentEnnemi.indexFrame = 0
    }

    let EnnemiCurrentTextures = EnnemiTexturesList[CurrentEnnemi.indexFrame]

    if (direction == "right") {
        image(EnnemiCurrentTextures, positionX, positionY, width, height)

        //? direction GAUCHE
    } else if (direction == "left") {
        scale(-1, 1)
        image(EnnemiCurrentTextures, -positionX - width, positionY, width, height)
        scale(-1, 1)
    }
}




//#endregion