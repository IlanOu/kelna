
//^ Cinematique de debut de jeu
//#region START OPENING
//~ Lancement de la cinematique de debut de jeu
let StartOpeningCinematic = () => {
    if (CinematicIsStart === true) {
        image(StartCinematic, 0, 0, width, height)
        StartCinematic.play();
        PlayerIsInPlay = true;
        MusicForCinematic = true
        FunctionForMusic()
        // console.log("2eme appel")
        setTimeout(EndOfOpeningFromBeginning, 5000);
    }
}

//~ Fin de la cinematique depuis le début
let EndOfOpeningFromBeginning = () => {
    CinematicIsStart = false
    StartCinematic.hide();
    MusicForCinematic = false
    PlayerIsRecherche = true
    MusicIsActivateOrNot = false
    FunctionForMusic()
    // console.log("4eme appel")
}
//#endregion