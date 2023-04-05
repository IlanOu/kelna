//~ vérifier si une touche est pressée 
function keyPressed() {

    //* Bouton echap
    if (keyCode == ESCAPE) {
        if (inGame){
            gameIsPaused = !gameIsPaused
        }
    }

    //* Barre espace
    if (keyCode == 32) {
        spaceKeyIsPressed = true;
    }

    //* Flèche de droite
    if ((keyCode == 39 || keyCode == 68)) {
        rightArrowPressed = true;
    }

    //* Flèche de gauche
    if ((keyCode == 37 || keyCode == 81)) {
        leftArrowPressed = true;
    }


    if (canEnterInHouse){
        //* Touche E
        if (keyCode == 69) {
            engineOne = !engineOne;
        }
    }

    if (canInteractWithPNJ) {
        //* Touche E
        if (keyCode == 69) {
            PressInteractPNJ = !PressInteractPNJ
        }
    }

    //* Touche R
    if (keyCode == 82) {
        dashKeyIsPressed = true
    }

    //* Touche 1 du clavier au dessus
    if (keyCode == 49) { 
        currentSlot = 0;
    } 
    
    //* Touche 2 du clavier au dessus
    if (keyCode == 50) { 
        currentSlot = 1;
    }

    //* Touche 3 du clavier au dessus
    if (keyCode == 51) { 
        currentSlot = 2;
    }

    //* Touche O du clavier
    if(keyCode == 79){
        addItemToInventory(ForItems.Items.food_1);
    }

    //* Touche P du clavier
    if (keyCode == 80) {
        addItemToInventory(ForItems.Items.bow_1);
    }

    if (keyCode == 73) {
        addItemToInventory(ForItems.Items.sword_1);
    }

    //* Touche 1 du pavé des nombres
    if (keyCode == 97) { 
        if (!pressingKey) {
            gettingHurt = true;
        }
        pressingKey = true;
    }
    //* Touche 2 du pavé des nombres
    if (keyCode == 98) { 
        if (!pressingKey) {
            gettingHeal = true;
        }
        pressingKey = true;
    }
    //* Touche 3 du pavé des nombres
    if (keyCode == 99) {
        if (!pressingKey) {
            addHeart = true;
        }
        pressingKey = true;
    }
    //* Touche 4 du pavé des nombres
    if (keyCode == 100) {
        if (!pressingKey) {
            removeHeart = true;
        }
        pressingKey = true;
    }
}


//~ vérifier si une touche est relâchée 
function keyReleased() {
    //* Barre espace
    if (keyCode == 32) {
        spaceKeyIsPressed = false;
        characterDoubleJumping = true;
    }

    //* Flèche de droite
    if ((keyCode == 39 || keyCode == 68)) {
        rightArrowPressed = false;
    }

    //* Flèche de gauche
    if ((keyCode == 37 || keyCode == 81)) {
        leftArrowPressed = false;
    }

    //* Touche R
    if (keyCode == 82) {
        dashKeyIsPressed = false
    }


    //* Si n'importe quelle touche est relachée
    if (keyCode) {
        pressingKey = false;
    }
}


//~ Clique de souris
function mousePressed() {
    if (mouseButton === LEFT) {
        leftClickPressed = true

        if (!gameIsPaused && gameIsPlaying){
            characterHitting = true
        }
    }
}

    