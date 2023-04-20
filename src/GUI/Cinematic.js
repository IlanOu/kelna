
//^ Cinematique de debut de jeu
//#region START OPENING
//~ Lancement de la cinematique de debut de jeu
let StartOpeningCinematic = () => {
    if (cinematicStarted === true) {
        image(StartCinematic, 0, 0, width, height)
        StartCinematic.play();
        PlayerIsInPlay = true;
        musicCinematic = true
        FunctionForMusic()
        // console.log("2eme appel")
        setTimeout(EndOfOpeningFromBeginning, 5000);
    }
}

//~ Fin de la cinematique depuis le début
let EndOfOpeningFromBeginning = () => {
    cinematicStarted = false
    StartCinematic.hide();
    musicCinematic = false
    PlayerIsRecherche = true
    MusicIsActivateOrNot = false
    FunctionForMusic()
    // console.log("4eme appel")
}
//#endregion