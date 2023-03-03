//#region Rect pour le fond pour une interaction joueur 
let BackOfTheBackground = () => {

    fill(0, 0, 0, 50)
    rect(0, 0, width, height)

}

//#endregion 


//#region //~ ECHAP

let MenuEscape = () => {

    // Fond d'arriere plan
    BackOfTheBackground()

    // Interface 
    image(GUIForEscape, IsXForAllInterfaces, IsYForAllInterfaces, IsWidthForAllInterfaces, IsHeightForAllInterfaces)

    // ALL BOUTTONS
    stroke(0);


    // Boutton QUIT
    fill(200);
    rect(IsXForAllButtons, ButtonYQuitInEchap, IsWidthForAllButtons, IsHeightForAllButtons);
    fill(0);
    textAlign(CENTER);
    textSize(16);
    text("QUIT", IsXForTextAllButtons, ForButtonYForQuitInEchap);

    // Boutton SETTINGS
    fill(200);
    rect(IsXForAllButtons, ButtonYTextSettingsOfEchap, IsWidthForAllButtons, IsHeightForAllButtons);
    fill(0);
    textAlign(CENTER);
    textSize(16);
    text("Settings", IsXForTextAllButtons, ForButYGoToSetToEchap);

    // Boutton RETURN
    fill(200);
    rect(IsXForAllButtons, ButtonYReturnToGameInEchap, IsWidthForAllButtons, IsHeightForAllButtons);
    fill(0);
    textAlign(CENTER);
    textSize(14);
    text("Return to game", IsXForTextAllButtons, ForButtonYReturnInEchap);


}

//#endregion 


//#region //~ SETTINGS

let Setting = () => {

    // Fond d'arriere plan
    BackOfTheBackground()

    // Interface
    image(GUIParameters, IsXForAllInterfaces, IsYForAllInterfaces, IsWidthForAllInterfaces, IsHeightForAllInterfaces)


    // Boutton SON
    fill(ColorForRectSong);
    rect(IsXForAllButtons, ButtonYSon, IsWidthForAllButtons, IsHeightForAllButtons);
    fill(0);
    textSize(16);
    text("SON", IsXForTextAllButtons, ForButYSon);


    // Boutton MUSIC
    fill(ColorForRectMusic);
    rect(IsXForAllButtons, ButtonYMusic, IsWidthForAllButtons, IsHeightForAllButtons);
    fill(0);
    textSize(16);
    text("MUSIC", IsXForTextAllButtons, ForButYMusic);


    if (gameIsPlaying === false) {
        // Boutton du return quand le joueur ne joue pas => Retour au wait to play
        fill(0);
        rect(IsXForAllButtons, ButtonYReturnInPausedW, IsWidthForAllButtons, IsHeightForAllButtons);
        fill(255);
        textAlign(CENTER);
        textSize(14);
        text("Return to menu", IsXForTextAllButtons, ForButtonYReturnInWait);
    }
    if (gameIsPlaying === true) {
        // Boutton du return quand le joueur joue => Retour au echap
        fill(0);
        rect(IsXForAllButtons, ButtonYReturnToMenuOfSettingOfEchap, IsWidthForAllButtons, IsHeightForAllButtons);
        fill(255);
        textAlign(CENTER);
        textSize(14);
        text("Return to menu", IsXForTextAllButtons, ForButYReturnFromSett);


    }



}

//#endregion


//#region //~ WAIT TO PLAY
let WaitToPlay = () => {



    // Boutton PLAY
    fill(200);
    rect(ButXPlay, ButYPlay, ButWPlay, ButHPlay);
    fill(0);
    textAlign(CENTER);
    textSize(16);
    text("PLAY", ButXPlay + ButWPlay / 2, ButYPlay + ButHPlay / 2 + 5);

    // Arriere plan
    image(Background, 0, 0, width, height)

    // Texte "WAIT"
    fill(255);
    textAlign(CENTER);
    textSize(32);
    text("WAIT", width / 2, height / 2);





    // PLAY AVEC UNE IMAGE
    image(IMGPlay, ButXPlay, ButYPlay, IsWidthForWaitButtons, IsHeightForWaitButtons)

    // SETTINGS AVEC UNE IMAGE
    image(IMGSet, ButXSetW, ButYSetW, IsWidthForWaitButtons, IsHeightForWaitButtons);



    ////  Boutton PLAY
    //// fill(200);
    //// rect(ButXPlay, ButYPlay, ButWPlay, ButHPlay);
    //// fill(0);
    //// textAlign(CENTER);
    //// textSize(16);
    //// text("PLAY", ButXPlay + ButWPlay / 2, ButYPlay + ButHPlay / 2 + 5);

    ////  Boutton SETTINGS
    //// fill(200);
    //// rect(ButXSetW, ButYSetW, ButWSetW, ButHSetW);
    //// fill(0);
    //// textAlign(CENTER);
    //// textSize(16);
    //// text("Settings", ButXSetW + ButWSetW / 2, ButYSetW + ButHSetW / 2 + 5);


}

//#endregion


//#region //~ STATS
let Stats = () => {

    // Fond d'arriere plan
    BackOfTheBackground()

    // INTERFACE
    image(GUIForStats, IsXForAllInterfaces, IsYForAllInterfaces, IsWidthForAllInterfaces, IsHeightForAllInterfaces)

    // Boutton RETURN
    fill(0);
    rect(IsXForAllButtons, ButtonYStatsInDie, IsWidthForAllButtons, IsHeightForAllButtons);
    fill(255);
    textAlign(CENTER);
    textSize(16);
    text("RETURN TO MENU", IsXForTextAllButtons, ButtonYStatsInDie + ButtonHStatsInDie / 2 + 5);
}

//#endregion 


//#region //~ DIE
let PlayerIsDie = () => {

    // Menu de mort est donc vrai
    isMenu = true;
    PlayerCanMove = false

    // Fond d'arriere plan
    BackOfTheBackground()

    // Interface 
    image(GUIOfDeath, IsXForAllInterfaces, IsYForAllInterfaces, IsWidthForAllInterfaces, IsHeightForAllInterfaces)

    // ALL BOUTTONS
    stroke(0);

    // Boutton STATS
    fill(0);
    rect(IsXForAllButtons, ButtonYStats, IsWidthForAllButtons, IsHeightForAllButtons);
    fill(255);
    textAlign(CENTER);
    textSize(16);
    text("STATS", IsXForTextAllButtons, ButtonYStats + ButtonHStats / 2 + 5);

    // Boutton RETURN
    fill(0);
    rect(IsXForAllButtons, ButtonYMenuInDie, IsWidthForAllButtons, IsHeightForAllButtons);
    fill(255);
    textAlign(CENTER);
    textSize(14);
    text("RETURN TO MENU", IsXForTextAllButtons, ButtonYMenuInDie + ButtonHMenuInDie / 2 + 5);

}

//#endregion


//#region //~ WANTED 

let PlayerCanBeSearched = () => {
    if (PlayerIsRecherche === true) {
        textSize(16);
        fill(0)
        image(WantedPoster, PositionXPoster, PositionYPoster, WidthPoster, HeightPoster);
        text(playerReward + " " + 'PIECES', PositionXTextOfPoster, PositionYTextOfPoster);
    } else {
        return
    }
}


//#endregion


//#region //~ INTERACTIONS

let ForInteract = () => {

    //Interaction avec les pavés tactiles
    if (gettingHurt) {
        Degat(1);
        gettingHurt = false;
    }
    if (gettingHeal) {
        Regen(1);
        gettingHeal = false;
    }
    if (addHeart) {
        OneHeart(1);
        addHeart = false;
    }
    if (removeHeart) {
        DownHeart(1);
        removeHeart = false;
    }


}

let displayVie = () => {
    // Dessiner la vie
    let VieLarg = map(HealthPlayer, 0, HealthMax, 0, HealthMax);
    for (let i = 0; i < VieLarg; i++) {
        let ForX = 400
        image(GamerHeart, MargeBarVie * i + ForX / 2, MargeBarVie, 30, 30);
    }
    ForInteract()
}

let Degat = (NbreDeDegat) => {
    HealthPlayer -= NbreDeDegat; // Enlever point de vie
    HealthPlayer = constrain(HealthPlayer, 0, HealthMax); // Depasse pas la vie, de 0 et de la vie max
}


let Regen = () => {
    if (HealthPlayer < HealthMax) {
        HealthPlayer += 1;
        HealthPlayer = constrain(HealthPlayer, 0, HealthMax);
    }
}


let OneHeart = () => {
    HealthPlayer += 1;
    HealthMax += 1;
    HealthPlayer = constrain(HealthPlayer, 0, HealthMax);
}


let DownHeart = () => {
    HealthPlayer -= 1;
    HealthMax -= 1;
    HealthPlayer = constrain(HealthPlayer, 0, HealthMax);


    //#endregion DIE

}

//#endregion POSITIONS BUTTONS


let FunctionForMusic = () => {

    if (MusicForCinematic === true) {

        MusicIsActivateOrNot = undefined
        SongBackground.pause()
        //console.log("Musique bloqué par la cinematique")
        ColorForRectMusic = 200

    }
    if (MusicIsActivateOrNot === true) {

        MusicIsActivateOrNot = false
        SongBackground.loop()
        //console.log("Musique activé")
        ColorForRectMusic = 200

    }
    else if (MusicIsActivateOrNot === false && IsNot === true) {

        MusicIsActivateOrNot = true
        //console.log("Musique desactivé")
        SongBackground.pause()
        ColorForRectMusic = 50
    }

}




let FunctionForSong = () => {
    if (SongIsActivateOrNot === false) {

        //Si est en false = son activé
        SongIsActivateOrNot = true
        console.log("Son desactivé")
        ColorForRectSong = 50

    }
    else if (SongIsActivateOrNot === true) {

        //Si est en true = son desactivé
        SongIsActivateOrNot = false
        console.log("Son activé")
        ColorForRectSong = 200
    }

}

//#endregion


//#region //~ Positions BUTTONS
let PositionButtons = () => {


    //#region //~ Bouton WAIT

    // Bouton PLAY QUAND ON EST AU WAIT EN IMAGE
    ButXPlay = width / 2;
    ButYPlay = height / 2;
    ButWPlay = 100;
    ButHPlay = 80;


    //BOUTON DE SETTINGS QUAND ON EST AU WAIT EN IMAGE

    ButXSetW = width - 500 / 2;
    ButYSetW = height - 500 / 2;
    ButWSetW = 100;
    ButHSetW = 75;


    // BOUTON DE RETOUR DE SETTING QUAND ON EST AU WAIT
    ButtonYReturnInPausedW = 615;
    ButtonHReturnInPausedW = 50;

    ForButtonYReturnInWait = ButtonYReturnInPausedW + ButtonHReturnInPausedW / 2 + 5

    //#endregion


    //#region //~ Bouton PARAMETRES du menu de pause

    ButtonYTextSettingsOfEchap = 400;
    ButtonHTextSettingsOfEchap = 50;

    ForButYGoToSetToEchap = ButtonYTextSettingsOfEchap + ButtonHTextSettingsOfEchap / 2 + 5


    // Bouton RETOUR AU MENU dans le menu de pause
    ButtonYReturnToMenuOfSettingOfEchap = 615;
    ButtonHReturnToMenuOfSettingOfEchap = 50;

    ForButYReturnFromSett = ButtonYReturnToMenuOfSettingOfEchap + ButtonHReturnToMenuOfSettingOfEchap / 2 + 5;

    // Bouton RETOUR AU JEU dans le menu de pause
    ButtonYReturnToGameInEchap = 290;
    ButtonHReturnToGameInEchap = 50;

    ForButtonYReturnInEchap = ButtonYReturnToGameInEchap + ButtonHReturnToGameInEchap / 2 + 5



    // Bouton QUIT dans le menu de pause
    ButtonYQuitInEchap = 500;
    ButtonHQuitInEchap = 50;

    ForButtonYForQuitInEchap = ButtonYQuitInEchap + ButtonHQuitInEchap / 2 + 5



    //#endregion


    //#region //~ PARAMETRE DANS SETTINGS
    // Bouton SON dans les paramètres
    ButtonYSon = 325;
    ButtonHSon = 50;



    ForButYSon = ButtonYSon + ButtonHSon / 2 + 5



    // Bouton MUSIQUE dans les paramètres
    ButtonYMusic = 450;
    ButtonHMusic = 50;

    ForButYMusic = ButtonYMusic + ButtonHMusic / 2 + 5


    //#endregion


    //#region //~DIE
    
    // Bouton RETOUR dans le menu de mort
    ButtonYMenuInDie = 310;
    ButtonHMenuInDie = 50;


    // Bouton RETOUR dans les stats du menu de mort
    ButtonYStatsInDie = 615;
    ButtonHStatsInDie = 50;


    // Bouton STATS dans le menu de mort
    ButtonYStats = 450;
    ButtonHStats = 50;


    //#endregion

}

//#endregion



//#region CLIQUE DE SOURIS
function mousePressed() {

    // Boutton Music
    if (gameIsPlaying === false && isSettingsWait === true || gameIsPaused === true && isSettingsEchap === true) {
        if (mouseX > IsXForAllButtons && mouseX < IsXForAllButtons + IsWidthForAllButtons && mouseY > ButtonYMusic && mouseY < ButtonYMusic + IsHeightForAllButtons) {
            FunctionForMusic()
        }
    }
    // Button song
    if (gameIsPlaying === false && isSettingsWait === true || gameIsPaused === true && isSettingsEchap === true) {
        if (mouseX > IsXForAllButtons && mouseX < IsXForAllButtons + IsWidthForAllButtons && mouseY > ButtonYSon && mouseY < ButtonYSon + IsHeightForAllButtons) {
            FunctionForSong()
        }
    }
    // Quand on appuie sur play
    if (gameIsPlaying === false && gameIsPaused === false && isSettingsWait === false) {
        if (mouseX > ButXPlay && mouseX < ButXPlay + ButWPlay && mouseY > ButYPlay && mouseY < ButYPlay + ButHPlay) {
            gameIsPlaying = true;
        }
    }

    // Quand on appuie sur settings
    if (gameIsPaused === true && gameIsPlaying === true && isSettingsWait === false && isSettingsEchap === false) {
        if (mouseX > IsXForAllButtons && mouseX < IsXForAllButtons + IsWidthForAllButtons && mouseY > ButtonYTextSettingsOfEchap && mouseY < ButtonYTextSettingsOfEchap + IsHeightForAllButtons) {
            isSettingsEchap = true;
            YouCanEscape = false;
        }
    }

    // Quit de echap
    if (gameIsPaused === true && gameIsPlaying === true && isSettingsWait === false) {
        if (mouseX > IsXForAllButtons && mouseX < IsXForAllButtons + IsWidthForAllButtons && mouseY > ButtonYQuitInEchap && mouseY < ButtonYQuitInEchap + IsHeightForAllButtons) {
            isSettingsEchap = false;
            gameIsPlaying = false;
            gameIsPaused = false
            CinematicIsStart = true
            YouCanEscape = true;
            MusicIsActivateOrNot = false
            FunctionForMusic()
        }
    }

    // Quand on appuie sur return des parametres
    if (isSettingsEchap === true) {
        if (mouseX > IsXForAllButtons && mouseX < IsXForAllButtons + IsWidthForAllButtons && mouseY > ButtonYReturnToMenuOfSettingOfEchap && mouseY < ButtonYReturnToMenuOfSettingOfEchap + IsHeightForAllButtons) {
            isSettingsEchap = false;
            YouCanEscape = true;
        }

        // Retour au jeu  
    } if (gameIsPaused === true && gameIsPlaying === true && isSettingsEchap === false) {
        if (mouseX > IsXForAllButtons && mouseX < IsXForAllButtons + IsWidthForAllButtons && mouseY > ButtonYReturnToGameInEchap && mouseY < ButtonYReturnToGameInEchap + IsHeightForAllButtons) {
            gameIsPaused = false;
        }
    }

    //Parametre au wait to play en true
    if (isSettingsWait === false && gameIsPlaying === false) {
        if (mouseX > ButXSetW && mouseX < ButXSetW + ButWSetW && mouseY > ButYSetW && mouseY < ButYSetW + ButHSetW) {
            isSettingsWait = true;
        }
    }

    //Parametre au wait to play en false
    if (isSettingsWait === true && gameIsPlaying === false) {
        if (mouseX > IsXForAllButtons && mouseX < IsXForAllButtons + IsWidthForAllButtons && mouseY > ButtonYReturnInPausedW && mouseY < ButtonYReturnInPausedW + IsHeightForAllButtons) {
            isSettingsWait = false;
        }
    }

    //Stats en true
    if (isStats === false && isMenu === true) {
        if (mouseX > IsXForAllButtons && mouseX < IsXForAllButtons + IsWidthForAllButtons && mouseY > ButtonYStats && mouseY < ButtonYStats + IsHeightForAllButtons) {
            isStats = true;
        }
    }

    if (isStats === true) {
        if (mouseX > IsXForAllButtons && mouseX < IsXForAllButtons + IsWidthForAllButtons && mouseY > ButtonYStatsInDie && mouseY < ButtonYStatsInDie + IsHeightForAllButtons) {
            gameIsPlaying = false;
            isStats = false;
            isMenu = false;
            CinematicIsStart = true
            YouCanEscape = true;
            PlayerCanMove = true
            HealthPlayer = 3;
            MusicIsActivateOrNot = false
            FunctionForMusic()
        }
    }

    //Retours au menu apres la mort
    if (isMenu === true) {
        if (mouseX > IsXForAllButtons && mouseX < IsXForAllButtons + IsWidthForAllButtons && mouseY > ButtonYMenuInDie && mouseY < ButtonYMenuInDie + IsHeightForAllButtons) {
            gameIsPlaying = false;
            CinematicIsStart = true
            isStats = false;
            isMenu = false;
            YouCanEscape = true;
            PlayerCanMove = true
            HealthPlayer = 3;
            MusicIsActivateOrNot = false
            FunctionForMusic()

        }
    }
}
//#endregion