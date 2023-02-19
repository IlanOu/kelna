
// vérifier si une touche est pressée 
function keyPressed(key) {
    if (keyCode === ESCAPE) {
        isInPaused = !isInPaused
        if (!isInPaused){
            isSettings = false
        }
    }

    if (keyCode === 32) {
        spaceKeyIsPressed = true;
    }
}




// vérifier si une touche est relâchée 
function keyReleased() {
    if (keyCode === 32) {
        spaceKeyIsPressed = false;
        characterDoubleJumping = true;
    }
}