
//~ vérifier si une touche est pressée 
function keyPressed(key) {
    //^ Bouton echap
    if (keyCode === ESCAPE) {
        if (PlayerIsInPlay === true && YouCanEscape === true) {
            PlayerIsInPaused = !PlayerIsInPaused

        }
    }

    //^ Barre espace
    if (keyCode === 32) {
        spaceKeyIsPressed = true;
    }

    if ((keyCode === 39 || keyCode === 68)) {
        RightArrowPressed = true;
    }

    //^ Flèche de gauche
    if ((keyCode === 37 || keyCode === 81)) {
        LeftArrowPressed = true;
    }

    //^ Touche E
    if (keyCode === 69) {
        EngineOne = !EngineOne;
    }


    //^ Touche R
    if (keyCode === 82) {
        DashKeyIsPressed = true
    }

    if (keyCode === 49) { // Touche 1 au dessus
        ActualSlot = 0;
    } 
    
    if (keyCode === 50) { // Touche 2 au dessus
        ActualSlot = 1;
    }

    if (keyCode === 51) { // Touche 3 au dessus
        ActualSlot = 2;
    }



    if (keyCode === 97) { // 1 du pavé
        if (!Pressing) {
            Degating = true;
        }
        Pressing = true;
    }
    if (keyCode === 98) { // 2 du pavé
        if (!Pressing) {
            Regening = true;
        }
        Pressing = true;
    }
    if (keyCode === 99) { // 3 du pavé
        if (!Pressing) {
            AddHeart = true;
        }
        Pressing = true;
    }
    if (keyCode === 100) { // 4 du pavé
        if (!Pressing) {
            DeleteHeart = true;
        }
        Pressing = true;
    }

    if (keyCode === 79) { // O du clavier
        PlayerReward += 50

    }

}

//~ vérifier si une touche est relâchée 
function keyReleased() {
    //^ Barre espace
    if (keyCode === 32) {
        spaceKeyIsPressed = false;
        characterDoubleJumping = true;
    }

    //^ Flèche de droite
    if ((keyCode === 39 || keyCode === 68)) {
        RightArrowPressed = false;
    }

    //^ Flèche de gauche
    if ((keyCode === 37 || keyCode === 81)) {
        LeftArrowPressed = false;
    }

    //^ Touche R
    if (keyCode === 82) {
        DashKeyIsPressed = false
    }



    if (keyCode === 97) {
        Pressing = false;
    }
    if (keyCode === 98) {
        Pressing = false;
    }
    if (keyCode === 99) {
        Pressing = false;
    }
    if (keyCode === 100) {
        Pressing = false;
    }

}