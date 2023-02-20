
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

    if ((keyCode === 39 || keyCode === 68))
        RightArrowPressed = true;

    //^ Flèche de gauche
    if ((keyCode === 37 || keyCode === 81))
        LeftArrowPressed = true;
    

    //^ Touche E
    if (keyCode === 69)
        EngineOne = !EngineOne;

    
        
    

    if (keyCode === 82){
        if (LeftArrowPressed || RightArrowPressed){
            if (!isDashing){
                isDashing = true
            } 
        }
        
           
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
    if ((keyCode === 39 || keyCode === 68))
        RightArrowPressed = false;

    //^ Flèche de gauche
    if ((keyCode === 37 || keyCode === 81))
        LeftArrowPressed = false;
    
}