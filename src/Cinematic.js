

//#region START OPENING

let StartOpeningCinematic = () => {
    if (CinematicIsStart === true) {
        MusicForCinematic = true
        VerificationForMusic = true
        console.log(VerificationForMusic + " " + MusicForCinematic)
        image(StartCinematic, 0, 0, width, height)
        setTimeout(EndOfOpeningFromBeginning, 4000);
        StartCinematic.play();
        

    }
}

let EndOfOpeningFromBeginning = () => {
    CinematicIsStart = false
    MusicForCinematic = false
    SongBackground.loop()
    StartCinematic.hide();


}


//#endregion