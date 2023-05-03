//~ Lancement de la cinematique de debut de jeu
function playStartCinematic() {
    image(gameIntroductionVideo, 0, 0, viewportDisplayWidth, viewportDisplayHeight);
    noCursor()
    fill(255)
    noStroke(0)
    textSize(15)
    leftClickPressed = false;
    
    
    if (!gameIntroductionVideo.elt.currentTime){
        textSize(20)
        textAlign(CENTER, BASELINE)
        text("Cliquez pour jouer !", viewportDisplayWidth/2, viewportDisplayHeight/2)
    }else{
        textAlign(LEFT, BASELINE)
        text("Passer > ECHAP", 50, 50)
    }
}

//~ Si la cinematique est terminé
function videoEnded() {
    background(0)
    startCinematicPlaying = false
    if (!startSoundPlay) {
        startGameVoice()
        startSoundPlay = true
    }
}


//~ Lancement de la cinematique de fin de jeu
function playEndCinematic() {
    musicGame.pause()
    leftClickPressed = false;
    noCursor()
    hideInventory = true
    image(gameEndVideo, 0, 0, viewportDisplayWidth, viewportDisplayHeight);
}

function checkEndCredits() {
    if (gameIsEnd && gameEndVideo.elt.paused && !endTheGameCredits && !statsMenu) {
        gameEndVideo.play();
        gameEndVideo.elt.addEventListener('ended', videoEndedEnd);
    }
}

//~ Si la cinematique est terminé
function videoEndedEnd() {
    background(0)
    endTheGameCredits = true
    drawCredits()
}