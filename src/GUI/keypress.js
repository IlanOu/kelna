
//~ vérifier si une touche est pressée 
function keyPressed() {
    //^ Bouton echap
    if (keyCode == ESCAPE) {
        if (inGame)
        gameIsPaused = !gameIsPaused
    }

    //^ Barre espace
    if (keyCode == 32) {
        spaceKeyIsPressed = true;
    }

    //^ Flèche de droite
    if ((keyCode == 39 || keyCode == 68)) {
        rightArrowPressed = true;
    }

    //^ Flèche de gauche
    if ((keyCode == 37 || keyCode == 81)) {
        leftArrowPressed = true;
    }

    if (canEnterInHouse){
        //^ Touche E
        if (keyCode == 69) {
            engineOne = !engineOne;
        }
    }


    //^ Touche R
    if (keyCode == 82) {
        dashKeyIsPressed = true
    }

    if (keyCode == 49) { // Touche 1 au dessus
        currentSlot = 0;
    } 
    
    if (keyCode == 50) { // Touche 2 au dessus
        currentSlot = 1;
    }

    if (keyCode == 51) { // Touche 3 au dessus
        currentSlot = 2;
    }



    if (keyCode == 97) { // 1 du pavé
        if (!pressingKey) {
            gettingHurt = true;
        }
        pressingKey = true;
    }
    if (keyCode == 98) { // 2 du pavé
        if (!pressingKey) {
            gettingHeal = true;
        }
        pressingKey = true;
    }
    if (keyCode == 99) { // 3 du pavé
        if (!pressingKey) {
            addHeart = true;
        }
        pressingKey = true;
    }
    if (keyCode == 100) { // 4 du pavé
        if (!pressingKey) {
            removeHeart = true;
        }
        pressingKey = true;
    }

    // if (keyCode === 79) { // O du clavier
    //     playerReward += 50

    // }

}

//~ vérifier si une touche est relâchée 
function keyReleased() {
    //^ Barre espace
    if (keyCode == 32) {
        spaceKeyIsPressed = false;
        characterDoubleJumping = true;
    }

    //^ Flèche de droite
    if ((keyCode == 39 || keyCode == 68)) {
        rightArrowPressed = false;
    }

    //^ Flèche de gauche
    if ((keyCode == 37 || keyCode == 81)) {
        leftArrowPressed = false;
    }

    //^ Touche R
    if (keyCode == 82) {
        dashKeyIsPressed = false
    }


    //^ Si n'importe quelle touche est relachée
    if (keyCode) {
        pressingKey = false;
    }
    

}


function mousePressed() {
    if (mouseButton === LEFT) {
        leftClickPressed = true
    }
}