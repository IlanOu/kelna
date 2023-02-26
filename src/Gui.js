//#region Rect pour le fond pour une interaction joueur 
let BackOfTheBackground = () => {

    fill(0, 0, 0, 50)
    rect(0, 0, width, height)

}

//#endregion 


//#region FOR ECHAP

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

//#endregion FOR ECHAP


//#region FOR SETTINGS

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


    if (PlayerIsInPlay === false) {
        // Boutton du return quand le joueur ne joue pas => Retour au wait to play
        fill(0);
        rect(IsXForAllButtons, ButtonYReturnInPausedW, IsWidthForAllButtons, IsHeightForAllButtons);
        fill(255);
        textAlign(CENTER);
        textSize(14);
        text("Return to menu", IsXForTextAllButtons, ForButtonYReturnInWait);
    }
    if (PlayerIsInPlay === true) {
        // Boutton du return quand le joueur joue => Retour au echap
        fill(0);
        rect(IsXForAllButtons, ButtonYReturnToMenuOfSettingOfEchap, IsWidthForAllButtons, IsHeightForAllButtons);
        fill(255);
        textAlign(CENTER);
        textSize(14);
        text("Return to menu", IsXForTextAllButtons, ForButYReturnFromSett);


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





    // PLAY AVEC UNE IMAGE
    image(IMGPlay, ButXPlay, ButYPlay, IsWidthForWaitButtons, IsHeightForWaitButtons)

    // SETTINGS AVEC UNE IMAGE
    image(IMGSet, ButXSetW, ButYSetW, IsWidthForWaitButtons, IsHeightForWaitButtons);



    //  Boutton PLAY
    // fill(200);
    // rect(ButXPlay, ButYPlay, ButWPlay, ButHPlay);
    // fill(0);
    // textAlign(CENTER);
    // textSize(16);
    // text("PLAY", ButXPlay + ButWPlay / 2, ButYPlay + ButHPlay / 2 + 5);

    //  Boutton SETTINGS
    // fill(200);
    // rect(ButXSetW, ButYSetW, ButWSetW, ButHSetW);
    // fill(0);
    // textAlign(CENTER);
    // textSize(16);
    // text("Settings", ButXSetW + ButWSetW / 2, ButYSetW + ButHSetW / 2 + 5);


}

//#endregion


//#region FOR STATS
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

//#endregion FOR STATS


//#region FOR DIE
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


//#region RECHERCHED 

let PlayerCanBeSearched = () => {
    if (PlayerIsRecherche === true) {
        textSize(16);
        fill(0)
        image(WantedPoster, PositionXPoster, PositionYPoster, WidthPoster, HeightPoster);
        text(PlayerReward + " " + 'PIECES', PositionXTextOfPoster, PositionYTextOfPoster);
    } else {
        return
    }
}


//#endregion


//#region INTERACTIONS

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



// SI LE JOUEUR FAIS F5 EN PLEIN JEU
// window.onbeforeunload = () => {
//     console.log("sa passe")
//     return "Êtes-vous sûr de vouloir quitter cette page ? Vous allez perdre toute votre progression !";
// };


//#endregion INTERACTIONS


//#region POSITIONS BUTTONS
let PositionButtons = () => {


    //#region BUTTON WAIT

    //BOUTON DE PLAY QUAND ON EST AU WAIT EN IMAGE
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

    //#endregion BUTTON WAIT


    //#region BUTTON SETTING DE ECHAP

    ButtonYTextSettingsOfEchap = 400;
    ButtonHTextSettingsOfEchap = 50;

    ForButYGoToSetToEchap = ButtonYTextSettingsOfEchap + ButtonHTextSettingsOfEchap / 2 + 5


    // BOUTON DE RETOUR AU MENU QUAND ON EST DANS LES SETTINGS DE L'ECHAP
    ButtonYReturnToMenuOfSettingOfEchap = 615;
    ButtonHReturnToMenuOfSettingOfEchap = 50;

    ForButYReturnFromSett = ButtonYReturnToMenuOfSettingOfEchap + ButtonHReturnToMenuOfSettingOfEchap / 2 + 5;


    // BOUTON DE RETOUR AU JEU QUAND ON EST DANS L'ECHAP
    ButtonYReturnToGameInEchap = 290;
    ButtonHReturnToGameInEchap = 50;

    ForButtonYReturnInEchap = ButtonYReturnToGameInEchap + ButtonHReturnToGameInEchap / 2 + 5



    // BOUTON DE QUIT DANS ECHAP
    ButtonYQuitInEchap = 500;
    ButtonHQuitInEchap = 50;

    ForButtonYForQuitInEchap = ButtonYQuitInEchap + ButtonHQuitInEchap / 2 + 5



    //#endregion BUTTON ECHAP


    //#region PARAMETRE DANS SETTINGS
    // BOUTON DE SON DANS LES SETTINGS
    ButtonYSon = 325;
    ButtonHSon = 50;



    ForButYSon = ButtonYSon + ButtonHSon / 2 + 5



    // BOUTON MUSIQUE DANS LES SETTINGS
    ButtonYMusic = 450;
    ButtonHMusic = 50;

    ForButYMusic = ButtonYMusic + ButtonHMusic / 2 + 5


    //#endregion settings


    //#region DIE
    // BOUTON DE RETOUR QUAND ON EST DANS LE MENU DE MORT
    ButtonYMenuInDie = 310;
    ButtonHMenuInDie = 50;


    // BOUTON DE RETOUR QUAND ON EST DANS LES STATS DU MENU DE MORT
    ButtonYStatsInDie = 615;
    ButtonHStatsInDie = 50;


    // BOUTON DE STATS DANS LE MENU DE MORT
    ButtonYStats = 450;
    ButtonHStats = 50;


    //#endregion DIE

}

//#endregion POSITIONS BUTTONS



//#region CLIQUE DE SOURIS
function mousePressed() {

    // Boutton Music
    if (PlayerIsInPlay === false && isSettingsWait === true || PlayerIsInPaused === true && isSettingsEchap === true) {
        if (mouseX > IsXForAllButtons && mouseX < IsXForAllButtons + IsWidthForAllButtons && mouseY > ButtonYMusic && mouseY < ButtonYMusic + IsHeightForAllButtons) {
            FunctionForMusic()
        }
    }
    // Button song
    if (PlayerIsInPlay === false && isSettingsWait === true || PlayerIsInPaused === true && isSettingsEchap === true) {
        if (mouseX > IsXForAllButtons && mouseX < IsXForAllButtons + IsWidthForAllButtons && mouseY > ButtonYSon && mouseY < ButtonYSon + IsHeightForAllButtons) {
            FunctionForSong()
        }
    }
    // Quand on appuie sur play
    if (PlayerIsInPlay === false && PlayerIsInPaused === false && isSettingsWait === false) {
        if (mouseX > ButXPlay && mouseX < ButXPlay + ButWPlay && mouseY > ButYPlay && mouseY < ButYPlay + ButHPlay) {
            PlayerIsInPlay = true;
        }
    }

    // Quand on appuie sur settings
    if (PlayerIsInPaused === true && PlayerIsInPlay === true && isSettingsWait === false && isSettingsEchap === false) {
        if (mouseX > IsXForAllButtons && mouseX < IsXForAllButtons + IsWidthForAllButtons && mouseY > ButtonYTextSettingsOfEchap && mouseY < ButtonYTextSettingsOfEchap + IsHeightForAllButtons) {
            isSettingsEchap = true;
            YouCanEscape = false;
        }
    }

    // Quit de echap
    if (PlayerIsInPaused === true && PlayerIsInPlay === true && isSettingsWait === false) {
        if (mouseX > IsXForAllButtons && mouseX < IsXForAllButtons + IsWidthForAllButtons && mouseY > ButtonYQuitInEchap && mouseY < ButtonYQuitInEchap + IsHeightForAllButtons) {
            isSettingsEchap = false;
            PlayerIsInPlay = false;
            PlayerIsInPaused = false
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
    } if (PlayerIsInPaused === true && PlayerIsInPlay === true && isSettingsEchap === false) {
        if (mouseX > IsXForAllButtons && mouseX < IsXForAllButtons + IsWidthForAllButtons && mouseY > ButtonYReturnToGameInEchap && mouseY < ButtonYReturnToGameInEchap + IsHeightForAllButtons) {
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
            PlayerIsInPlay = false;
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
            PlayerIsInPlay = false;
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
//#endregion CLIQUE DE SOURIS