
// vérifier si une touche est pressée 
function keyPressed() {
    
    if (keyCode === ESCAPE) {
        isInPaused = !isInPaused
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