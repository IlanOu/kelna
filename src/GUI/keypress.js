//~ vérifier si une touche est pressée 
function keyPressed() {

    //* Bouton echap
    if (keyCode == ESCAPE) {
        if (inGame){
            gameIsPaused = !gameIsPaused
        }
    }

    //* Barre espace
    if (keyCode == 32 || keyCode==38) {
        spaceKeyIsPressed = true;
    }

    //* Flèche de droite
    if ((keyCode == 39 || keyCode == 68)) {
        rightArrowPressed = true;
        numberOfSteps++
    }

    //* Flèche de gauche
    if ((keyCode == 37 || keyCode == 81)) {
        leftArrowPressed = true;
        numberOfSteps++
    }

    //* Flèche de haut
    if ((keyCode == 38 || keyCode == 90 )) {
        highArrowPressed = true;
    }

    //* Flèche de bas
    if ((keyCode == 40 || keyCode == 83)) {
        downArrowPressed = true;
    }

    if (canEnterInHouse){
        //* Touche E
        if (keyCode == 69) {
            PressInteractPNJ = false
            engineOne = !engineOne;
        }
    }

    if (canInteractWithPNJ) {
        //* Touche E
        if (keyCode == 69 && engineOne) {
            PressInteractPNJ = !PressInteractPNJ
        }
    }

    if (canDiscussionsWithPNJ) {
        //* Touche E
        if (keyCode == 69 && engineOne) {
            PressInteractPNJD = !PressInteractPNJD
        }
    }

    //* Touche R
    if (keyCode == 82) {
        dashKeyIsPressed = true
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
    if (keyCode == 32 || keyCode ==38) {
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

    //* Flèche de haut
    if ((keyCode == 38 || keyCode == 90)) {
        highArrowPressed = false;
    }

    //* Flèche de bas
    if ((keyCode == 40 || keyCode == 83)) {
        downArrowPressed = false;
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

            if (!characterHitting && !characterComboHitting && !characterComboHittingDouble && characterAnimationIndex <= characterTextureList.length-1){
                characterHitting = true
                characterComboHitting = false
                characterComboHittingDouble = false
            }else if (characterHitting && !characterComboHitting  && !characterComboHittingDouble && characterAnimationIndex <= characterTextureList.length-1){
                characterHitting = false
                characterComboHitting = true
                characterComboHittingDouble = false
            }else if (!characterHitting && characterComboHitting  && !characterComboHittingDouble && characterAnimationIndex <= characterTextureList.length-1){
                characterHitting = false
                characterComboHitting = false
                characterComboHittingDouble = true
                console.log("3")
            }
        }
    }
}

    