// Rect pour le fond pour une interaction joueur 
let BackOfTheBackground = () => {

    fill(0, 0, 0, 50)
    rect(0, 0, width, height)

}




//#region FOR ECHAP

let MenuEscape = () => {

    // Fond d'arriere plan
    BackOfTheBackground()

    // Interface 
    image(GUIForEscape, 485, 105, 800, 600)


    // Boutton QUIT
    fill(200);
    rect(ButtonXQuitInEchap, ButtonYQuitInEchap, ButtonWQuitInEchap, ButtonHQuitInEchap);
    fill(0);
    textAlign(CENTER);
    textSize(16);
    text("QUIT", ForButtonXForQuitInEchap, ForButtonYForQuitInEchap);

    // Boutton SETTINGS
    fill(200);
    rect(ButtonXTextSettingsOfEchap, ButtonYTextSettingsOfEchap, ButtonWTextSettingsOfEchap, ButtonHTextSettingsOfEchap);
    fill(0);
    textAlign(CENTER);
    textSize(16);
    text("Settings", ForButXGoToSetToEchap, ForButYGoToSetToEchap);

    // Boutton RETURN
    fill(200);
    rect(ButtonXReturnToGameInEchap, ButtonYReturnToGameInEchap, ButtonWReturnToGameInEchap, ButtonHReturnToGameInEchap);
    fill(0);
    textAlign(CENTER);
    textSize(14);
    text("Return to game", ForButtonXReturnInEchap, ForButtonYReturnInEchap);


}

//#endregion FOR ECHAP


//#region FOR SETTINGS

let Setting = () => {

    // Fond d'arriere plan
    BackOfTheBackground()

    // Interface
    image(GUIParameters, 485, 105, 800, 600)


    // Boutton SON
    fill(ColorForRectSong);
    rect(ButtonXSon, ButtonYSon, ButtonWSon, ButtonHSon);
    fill(0);
    textAlign(CENTER);
    textSize(16);
    text("SON", ForButXSon, ForButYSon);


    // Boutton MUSIC
    fill(ColorForRectMusic);
    rect(ButtonXMusic, ButtonYMusic, ButtonWMusic, ButtonHMusic);
    fill(0);
    textAlign(CENTER);
    textSize(16);
    text("MUSIC", ForButXMusic, ForButYMusic);


    if (PlayerIsInPlay === false) {
        // Boutton du return quand le joueur ne joue => Retour au wait to play
        fill(0);
        rect(ButtonXReturnInPausedW, ButtonYReturnInPausedW, ButtonWReturnInPausedW, ButtonHReturnInPausedW);
        fill(255);
        textAlign(CENTER);
        textSize(14);
        text("Return to menu", ForButtonXReturnInWait, ForButtonYReturnInWait);
    }
    if (PlayerIsInPlay === true) {
        // Boutton du return quand le joueur joue => Retour au echap
        fill(0);
        rect(ButtonXReturnToMenuOfSettingOfEchap, ButtonYReturnToMenuOfSettingOfEchap, ButtonWReturnToMenuOfSettingOfEchap, ButtonHReturnToMenuOfSettingOfEchap);
        fill(255);
        textAlign(CENTER);
        textSize(14);
        text("Return to menu", ForButXReturnFromSett, ForButYReturnFromSett);


    }



}

//#endregion FOR SETTINGS


//#region FOR WAIT TO PLAY
let WaitToPlay = () => {




    // Arriere plan
    image(Background, 0, 0, width, height)

    // Texte "WAIT"
    fill(255);
    textAlign(CENTER);
    textSize(32);
    text("WAIT", width / 2, height / 2);

    // Boutton PLAY
    fill(200);
    rect(ButXPlay, ButYPlay, ButWPlay, ButHPlay);
    fill(0);
    textAlign(CENTER);
    textSize(16);
    text("PLAY", ButXPlay + ButWPlay / 2, ButYPlay + ButHPlay / 2 + 5);

    // Boutton SETTINGS
    fill(200);
    rect(ButXSetW, ButYSetW, ButWSetW, ButHSetW);
    fill(0);
    textAlign(CENTER);
    textSize(16);
    text("Settings", ButXSetW + ButWSetW / 2, ButYSetW + ButHSetW / 2 + 5);


}

//#endregion


//#region FOR STATS
let Stats = () => {

    // Fond d'arriere plan
    BackOfTheBackground()

    // INTERFACE
    image(GUIForStats, 485, 105, 800, 600)

    // Boutton RETURN
    fill(0);
    rect(ButtonXStatsInDie, ButtonYStatsInDie, ButtonWStatsInDie, ButtonHStatsInDie);
    fill(255);
    textAlign(CENTER);
    textSize(16);
    text("RETURN TO MENU", ButtonXStatsInDie + ButtonWStatsInDie / 2, ButtonYStatsInDie + ButtonHStatsInDie / 2 + 5);
}

//#endregion FOR STATS


//#region INTERACTIONS

// FOR DIE
let PlayerIsDie = () => {

    // Menu de mort est donc vrai
    isMenu = true;

    // Fond d'arriere plan
    BackOfTheBackground()

    // Interface 
    image(GUIOfDeath, 485, 105, 800, 600)

    // Boutton STATS
    fill(0);
    rect(ButtonXStats, ButtonYStats, ButtonWStats, ButtonHStats);
    fill(255);
    textAlign(CENTER);
    textSize(16);
    text("STATS", ButtonXStats + ButtonWStats / 2, ButtonYStats + ButtonHStats / 2 + 5);

    // Boutton RETURN
    fill(0);
    rect(ButtonXMenuInDie, ButtonYMenuInDie, ButtonWMenuInDie, ButtonHMenuInDie);
    fill(255);
    textAlign(CENTER);
    textSize(14);
    text("RETURN TO MENU", ButtonXMenuInDie + ButtonWMenuInDie / 2, ButtonYMenuInDie + ButtonHMenuInDie / 2 + 5);

}

let ForInteract = () => {

    //Interaction avec les pavés tactiles
    if (Degating) {
        Degat(1);
        Degating = false;
    }
    if (Regening) {
        Regen(1);
        Regening = false;
    }
    if (AddHeart) {
        OneHeart(1);
        AddHeart = false;
    }
    if (DeleteHeart) {
        DownHeart(1);
        DeleteHeart = false;
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


}


let FunctionForMusic = () => {
    if (MusicIsActivateOrNot === false) {
        //Si est en false = musique activé

        MusicIsActivateOrNot = true
        // SongBackground.pause()
        console.log("Musique desactivé")
        ColorForRectMusic = 50

    }
    else if (MusicIsActivateOrNot === true) {
        //Si est en true = musique desactivé

        MusicIsActivateOrNot = false
        console.log("Musique activé")
        // SongBackground.play()
        ColorForRectMusic = 200
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



//#endregion INTERACTIONS


//#region POSITIONS BUTTONS
let PositionButtons = () => {


    //#region BUTTON WAIT

    // BOUTON DE PLAY QUAND ON EST AU WAIT
    ButXPlay = 889.5;
    ButYPlay = 515.5;
    ButWPlay = 100;
    ButHPlay = 50;


    //BOUTON DE SETTINGS QUAND ON EST AU WAIT 
    ButXSetW = 1189.5;
    ButYSetW = 665.5;
    ButWSetW = 100;
    ButHSetW = 50;



    // BOUTON DE RETOUR DE SETTING QUAND ON EST AU WAIT
    ButtonXReturnInPausedW = 745;
    ButtonYReturnInPausedW = 615;
    ButtonWReturnInPausedW = 290;
    ButtonHReturnInPausedW = 50;

    ForButtonXReturnInWait = ButtonXReturnInPausedW + ButtonWReturnInPausedW / 2

    ForButtonYReturnInWait = ButtonYReturnInPausedW + ButtonHReturnInPausedW / 2 + 5

    //#endregion BUTTON WAIT


    //#region BUTTON SETTING DE ECHAP

    ButtonXTextSettingsOfEchap = 750;
    ButtonYTextSettingsOfEchap = 400;
    ButtonWTextSettingsOfEchap = 290;
    ButtonHTextSettingsOfEchap = 50;


    ForButXGoToSetToEchap = ButtonXTextSettingsOfEchap + ButtonWTextSettingsOfEchap / 2

    ForButYGoToSetToEchap = ButtonYTextSettingsOfEchap + ButtonHTextSettingsOfEchap / 2 + 5


    // BOUTON DE RETOUR AU MENU QUAND ON EST DANS LES SETTINGS DE L'ECHAP
    ButtonXReturnToMenuOfSettingOfEchap = 745;
    ButtonYReturnToMenuOfSettingOfEchap = 615;
    ButtonWReturnToMenuOfSettingOfEchap = 290;
    ButtonHReturnToMenuOfSettingOfEchap = 50;


    ForButXReturnFromSett = ButtonXReturnToMenuOfSettingOfEchap + ButtonWReturnToMenuOfSettingOfEchap / 2

    ForButYReturnFromSett = ButtonYReturnToMenuOfSettingOfEchap + ButtonHReturnToMenuOfSettingOfEchap / 2 + 5;


    // BOUTON DE RETOUR AU JEU QUAND ON EST DANS L'ECHAP
    ButtonXReturnToGameInEchap = 750;
    ButtonYReturnToGameInEchap = 290;
    ButtonWReturnToGameInEchap = 290;
    ButtonHReturnToGameInEchap = 50;

    ForButtonXReturnInEchap = ButtonXReturnToGameInEchap + ButtonWReturnToGameInEchap / 2

    ForButtonYReturnInEchap = ButtonYReturnToGameInEchap + ButtonHReturnToGameInEchap / 2 + 5



    // BOUTON DE QUIT DANS ECHAP
    ButtonXQuitInEchap = 750;
    ButtonYQuitInEchap = 500;
    ButtonWQuitInEchap = 290;
    ButtonHQuitInEchap = 50;



    ForButtonXForQuitInEchap = ButtonXQuitInEchap + ButtonWQuitInEchap / 2

    ForButtonYForQuitInEchap = ButtonYQuitInEchap + ButtonHQuitInEchap / 2 + 5



    //#endregion BUTTON ECHAP


    //#region PARAMETRE DANS SETTINGS
    // BOUTON DE SON DANS LES SETTINGS
    ButtonXSon = 745;
    ButtonYSon = 325;
    ButtonWSon = 290;
    ButtonHSon = 50;


    ForButXSon = ButtonXSon + ButtonWSon / 2
    ForButYSon = ButtonYSon + ButtonHSon / 2 + 5



    // BOUTON MUSIQUE DANS LES SETTINGS
    ButtonXMusic = 745;
    ButtonYMusic = 450;
    ButtonWMusic = 290;
    ButtonHMusic = 50;

    ForButXMusic = ButtonXMusic + ButtonWMusic / 2
    ForButYMusic = ButtonYMusic + ButtonHMusic / 2 + 5


    //#endregion settings


    //#region DIE
    // BOUTON DE RETOUR QUAND ON EST DANS LE MENU DE MORT
    ButtonXMenuInDie = 745;
    ButtonYMenuInDie = 310;
    ButtonWMenuInDie = 290;
    ButtonHMenuInDie = 50;


    // BOUTON DE RETOUR QUAND ON EST DANS LES STATS DU MENU DE MORT
    ButtonXStatsInDie = 745;
    ButtonYStatsInDie = 615;
    ButtonWStatsInDie = 290;
    ButtonHStatsInDie = 50;


    // BOUTON DE STATS DANS LE MENU DE MORT
    ButtonXStats = 745;
    ButtonYStats = 450;
    ButtonWStats = 290;
    ButtonHStats = 50;


    //#endregion DIE

}

//#endregion POSITIONS BUTTONS


//#region CLIQUE DE SOURIS
function mousePressed() {

    // Boutton Music
    if (PlayerIsInPlay === false && isSettingsWait === true || PlayerIsInPaused === true && isSettingsEchap === true) {
        if (mouseX > ButtonXMusic && mouseX < ButtonXMusic + ButtonWMusic && mouseY > ButtonYMusic && mouseY < ButtonYMusic + ButtonHMusic) {
            FunctionForMusic()
        }
    }
    // Button song
    if (PlayerIsInPlay != false && isSettingsWait != true || PlayerIsInPaused === true && isSettingsEchap === true) {
        if (mouseX > ButtonXSon && mouseX < ButtonXSon + ButtonWSon && mouseY > ButtonYSon && mouseY < ButtonYSon + ButtonHSon) {
            FunctionForSong()
        }
    }
    // Quand on appuie sur play
    if (PlayerIsInPlay === false && PlayerIsInPaused === false) {
        if (mouseX > ButXPlay && mouseX < ButXPlay + ButWPlay && mouseY > ButYPlay && mouseY < ButYPlay + ButHPlay) {
            PlayerIsInPlay = true;
        }
    }

    // Quand on appuie sur settings
    if (PlayerIsInPaused === true && PlayerIsInPlay === true && isSettingsWait === false && isSettingsEchap === false) {
        if (mouseX > ButtonXTextSettingsOfEchap && mouseX < ButtonXTextSettingsOfEchap + ButtonWTextSettingsOfEchap && mouseY > ButtonYTextSettingsOfEchap && mouseY < ButtonYTextSettingsOfEchap + ButtonHTextSettingsOfEchap) {
            isSettingsEchap = true;
            YouCanEscape = false;
        }
    }

    // Quit de echap
    if (PlayerIsInPaused === true && PlayerIsInPlay === true && isSettingsWait === false) {
        if (mouseX > ButtonXQuitInEchap && mouseX < ButtonXQuitInEchap + ButtonWQuitInEchap && mouseY > ButtonYQuitInEchap && mouseY < ButtonYQuitInEchap + ButtonHQuitInEchap) {
            isSettingsEchap = false;
            PlayerIsInPlay = false;
            PlayerIsInPaused = false
            YouCanEscape = true;
        }
    }

    // Quand on appuie sur return des parametres
    if (isSettingsEchap === true) {
        if (mouseX > ButtonXReturnToMenuOfSettingOfEchap && mouseX < ButtonXReturnToMenuOfSettingOfEchap + ButtonWReturnToMenuOfSettingOfEchap && mouseY > ButtonYReturnToMenuOfSettingOfEchap && mouseY < ButtonYReturnToMenuOfSettingOfEchap + ButtonHReturnToMenuOfSettingOfEchap) {
            isSettingsEchap = false;
            YouCanEscape = true;
        }

        // Retour au jeu  
    } if (PlayerIsInPaused === true && PlayerIsInPlay === true && isSettingsEchap === false) {
        if (mouseX > ButtonXReturnToGameInEchap && mouseX < ButtonXReturnToGameInEchap + ButtonWReturnToGameInEchap && mouseY > ButtonYReturnToGameInEchap && mouseY < ButtonYReturnToGameInEchap + ButtonHReturnToGameInEchap) {
            PlayerIsInPaused = false;
        }
    }

    //Parametre au wait to play en true
    if (isSettingsWait === false && PlayerIsInPlay === false) {
        if (mouseX > ButXSetW && mouseX < ButXSetW + ButWSetW && mouseY > ButYSetW && mouseY < ButYSetW + ButHSetW) {
            isSettingsWait = true;
        }
    }

    //Parametre au wait to play en false
    if (isSettingsWait === true && PlayerIsInPlay === false) {
        if (mouseX > ButtonXReturnInPausedW && mouseX < ButtonXReturnInPausedW + ButtonWReturnInPausedW && mouseY > ButtonYReturnInPausedW && mouseY < ButtonYReturnInPausedW + ButtonHReturnInPausedW) {
            isSettingsWait = false;
        }
    }

    //Stats en true
    if (isStats === false && isMenu === true) {
        if (mouseX > ButtonXStats && mouseX < ButtonXStats + ButtonWStats && mouseY > ButtonYStats && mouseY < ButtonYStats + ButtonHStats) {
            isStats = true;
        }
    }

    if (isStats === true) {
        if (mouseX > ButtonXStatsInDie && mouseX < ButtonXStatsInDie + ButtonWStatsInDie && mouseY > ButtonYStatsInDie && mouseY < ButtonYStatsInDie + ButtonHStatsInDie) {
            PlayerIsInPlay = false;
            isStats = false;
            isMenu = false;
            YouCanEscape = true;
            HealthPlayer = 3;
        }
    }

    //Retours au menu apres la mort
    if (isMenu === true) {
        if (mouseX > ButtonXMenuInDie && mouseX < ButtonXMenuInDie + ButtonWMenuInDie && mouseY > ButtonYMenuInDie && mouseY < ButtonYMenuInDie + ButtonHMenuInDie) {
            PlayerIsInPlay = false;
            isStats = false;
            isMenu = false;
            YouCanEscape = true;
            HealthPlayer = 3;

        }
    }
}

//#endregion CLIQUE DE SOURIS