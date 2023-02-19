
//~ vérifier si une touche est pressée 
function keyPressed(key) {
    //^ Bouton echap
    if (keyCode === ESCAPE) {
        isInPaused = !isInPaused
        if (!isInPaused){
            isSettings = false
        }
    }

    //^ Barre espace
    if (keyCode === 32) {
        spaceKeyIsPressed = true;
    }

    //^ Flèche de droite
    if (keyCode === 39)
    RightArrowPressed = true;

    //^ Flèche de gauche
    else if (keyCode === 37)
    LeftArrowPressed = true;

    //^ Touche E
    if (keyCode === 69)
    EngineOne = !EngineOne;
}


//~ vérifier si une touche est relâchée 
function keyReleased() {
    //^ Barre espace
    if (keyCode === 32) {
        spaceKeyIsPressed = false;
        characterDoubleJumping = true;
    }

    //^ Flèche de droite
    if (keyCode === 39)
    RightArrowPressed = false;

    //^ Flèche de gauche
    else if (keyCode === 37)
    LeftArrowPressed = false;
}