//~ Lancement de la cinematique de debut de jeu
function playStartCinematic () {
    image(gameIntroductionVideo, 0, 0, viewportDisplayWidth, viewportDisplayHeight);
}

function videoEnded () {
    startCinematicPlaying = false
}
