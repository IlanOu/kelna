//~ Lancement de la cinematique de debut de jeu
function playStartCinematic() {
    image(gameIntroductionVideo, 0, 0, viewportDisplayWidth, viewportDisplayHeight);
    noCursor()
    fill(255)
    noStroke(0)
    textSize(15)
    text("Passer -> ECHAP", 50, 50)
    leftClickPressed = false;
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
    if (gameIsEnd && gameEndVideo.elt.paused && !endTheGameCredits) {
        gameEndVideo.elt.addEventListener('ended', videoEndedEnd);
        gameEndVideo.play();
    }
}

//~ Si la cinematique est terminé
function videoEndedEnd() {
    background(0)
    endTheGameCredits = true
    drawCredits()
}