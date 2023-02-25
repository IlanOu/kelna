

//#region START OPENING

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