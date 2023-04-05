//^ OUTILS

//~ Afficher une interface
function drawInterface([x, y, w, h], img = undefined) {
    stroke(0)

    if (img != undefined) {
        image(img, x, y, w, h)
    } else {
        rect(x, y, w, h)
    }
}


//~ Afficher un bouton
function drawButton([x, y, w, h], img = undefined, strokeToggle = true) {

    if (strokeToggle) {
        stroke(0)
    } else {
        noStroke()
    }

    if (img != undefined) {
        image(img, x, y, w, h)
    } else {
        rect(x, y, w, h)
    }
}


//~ Afficher du texte
function drawText(Text, fontSize, [x, y], textAlignment, color = [0, 0, 0]) {
    fill(color[0], color[1], color[2])
    noStroke()
    textSize(fontSize);
    textAlign(textAlignment);

    text(Text, x, y + fontSize);

}


//~  Au clic du bouton
function buttonClicked([x, y, h, w]) {
    return mouseIsPressed && pointIsInRect(mouseX, mouseY, x, y, h, w)
}


//~ Hover du bouton
function buttonHover([x, y, h, w]) {
    return pointIsInRect(mouseX, mouseY, x, y, h, w)
}



//^ INTERFACES

//~ MENU HOME
function drawHomeMenu() {
    gameIsPaused = false

    let interfaceMenu = [(viewportDisplayWidth - Background.width) / 2, (viewportDisplayHeight - Background.height) / 2, Background.width, Background.height]

    let buttonPlay = [(viewportDisplayWidth / 2) - (buttonWidthBIG / 2),
    (viewportDisplayHeight / 2) - (buttonHeightBIG / 2),
        buttonWidthBIG,
        buttonHeightBIG]

    let textPlay = [(viewportDisplayWidth / 2),
    (viewportDisplayHeight / 2) - (buttonHeightClassic / 3)]

    let buttonParameters = [(viewportDisplayWidth / 2) - (buttonWidthClassic / 2),
    (viewportDisplayHeight / 2) + (buttonHeightClassic),
        buttonWidthClassic,
        buttonHeightClassic]

    let textParameters = [(viewportDisplayWidth / 2),
    buttonParameters[1] + (buttonHeightClassic / 8)]


    fill(255, 220, 205)
    drawInterface(interfaceMenu, Background)

    fill(0, 255, 0)
    drawButton(buttonPlay)
    drawText("Play", 15, textPlay, "center")
    fill(0)

    fill(120, 120, 120)
    drawButton(buttonParameters)
    drawText("Paramètres", 15, textParameters, "center")
    fill(0)

    if (buttonClicked(buttonPlay)) {
        gameIsPlaying = true
        inGame = true
        gameIsPaused = false
    }
    if (buttonClicked(buttonParameters)) {
        settingsHome = true
    }
}


//~ MENU PAUSE
function drawPauseMenu() {

    let interfaceMenuWidth = 500
    let interfaceMenuHeight = 500
    let interfaceMenuX = (viewportDisplayWidth / 2) - (interfaceMenuWidth / 2)
    let interfaceMenuY = (viewportDisplayHeight / 2) - (interfaceMenuHeight / 2)

    let interfaceMenu = [interfaceMenuX, interfaceMenuY, interfaceMenuWidth, interfaceMenuHeight]

    let buttonExitW = 150
    let buttonExitH = 20
    let buttonExitX = interfaceMenuX + (interfaceMenuWidth / 2) - (buttonExitW / 2)
    let buttonExitY = interfaceMenuY + (interfaceMenuHeight / 1.5)
    let textExitX = buttonExitX + (buttonExitW / 2)
    let buttonExit = [buttonExitX, buttonExitY, buttonExitW, buttonExitH]


    let buttonReturnW = 150
    let buttonReturnH = 20
    let buttonReturnX = interfaceMenuX + (interfaceMenuWidth / 2) - (buttonReturnW / 2)
    let buttonReturnY = interfaceMenuY + (interfaceMenuHeight / 4)
    let textReturnX = buttonReturnX + (buttonReturnW / 2)
    let buttonReturn = [buttonReturnX, buttonReturnY, buttonReturnW, buttonReturnH]



    let buttonSettingsW = 150
    let buttonSettingsH = 20
    let buttonSettingsX = interfaceMenuX + (interfaceMenuWidth / 2) - (buttonSettingsW / 2)
    let buttonSettingsY = interfaceMenuY + (interfaceMenuHeight / 2.2)
    let textSettingsX = buttonSettingsX + (buttonSettingsW / 2)
    let buttonSettings = [buttonSettingsX, buttonSettingsY, buttonSettingsW, buttonSettingsH]


    fill(0,0,0,50)
    rect(0,0,viewportDisplayWidth,viewportDisplayHeight);

    fill(255)
    drawInterface(interfaceMenu, GUIForEscape)



    fill(255)
    drawButton(buttonReturn)
    drawText("Return au jeu", 15, [textReturnX, buttonReturnY], "center")
    fill(255)
    drawButton(buttonSettings)
    drawText("Settings", 15, [textSettingsX, buttonSettingsY], "center")
    fill(255)
    drawButton(buttonExit)
    drawText("Retour au menu", 15, [textExitX, buttonExitY], "center")


    if (buttonClicked(buttonExit)) {
        inGame = false
        gameIsPlaying = false
        gameIsPaused = false
    }
    if (buttonClicked(buttonSettings)) {
        settingsPause = true

    }
    if (buttonClicked(buttonReturn)) {
        gameIsPaused = false
    }
}


//~ MENU HOME SETTINGS 
function drawSettingInHome() {

    playerDead = false
    let interfaceMenuWidth = 500
    let interfaceMenuHeight = 500
    let interfaceMenuX = (viewportDisplayWidth / 2) - (interfaceMenuWidth / 2)
    let interfaceMenuY = (viewportDisplayHeight / 2) - (interfaceMenuHeight / 2)
    let interfaceMenu = [interfaceMenuX, interfaceMenuY, interfaceMenuWidth, interfaceMenuHeight]

    let buttonSonW = 150
    let buttonSonH = 20
    let buttonSonX = interfaceMenuX + (interfaceMenuWidth / 2) - (buttonSonW / 2)
    let buttonSonY = interfaceMenuY + (interfaceMenuHeight / 4)
    let textSonX = buttonSonX + (buttonSonW / 2)

    let buttonMusicW = 150
    let buttonMusicH = 20
    let buttonMusicX = interfaceMenuX + (interfaceMenuWidth / 2) - (buttonMusicW / 2)
    let buttonMusicY = interfaceMenuY + (interfaceMenuHeight / 2.2)
    let textMusicX = buttonMusicX + (buttonMusicW / 2)


    let buttonExitW = 150
    let buttonExitH = 20
    let buttonExitX = interfaceMenuX + (interfaceMenuWidth / 2) - (buttonExitW / 2)
    let buttonExitY = interfaceMenuY + (interfaceMenuHeight / 1.5)
    let textExitX = buttonExitX + (buttonMusicW / 2)


    let ButtonExitP = [buttonExitX, buttonExitY, buttonExitW, buttonExitH]

    let buttonSon = [buttonSonX, buttonSonY, buttonSonW, buttonSonH]

    let buttonMusic = [buttonMusicX, buttonMusicY, buttonMusicW, buttonMusicH]


    drawInterface(interfaceMenu, GUIParameters)

    fill(ColorForRectSong)
    drawButton(buttonSon)
    drawText("SON", 15, [textSonX, buttonSonY], "center")

    fill(ColorForRectMusic)
    drawButton(buttonMusic)
    drawText("MUSIC", 15, [textMusicX, buttonMusicY], "center")

    fill(255)
    drawButton(ButtonExitP)
    drawText("Retour au menu", 15, [textExitX, buttonExitY], "center")



    if (buttonClicked(ButtonExitP)) {
        settingsHome = false
        gameIsPlaying = false
        inGame = false
        gameIsPaused = false
    }
    if (buttonClicked(buttonMusic)) {
        PlayMusic()
    }
    if (buttonClicked(buttonSon)) {
        PlaySong()
    }
}


//~ MENU PAUSE SETTINGS 
function drawSettingInPause() {

    gameIsPlaying = false
    gameIsPaused = false

    let YouCanPlayMusic = true

    let interfaceMenuWidth = 500
    let interfaceMenuHeight = 500
    let interfaceMenuX = (viewportDisplayWidth / 2) - (interfaceMenuWidth / 2)
    let interfaceMenuY = (viewportDisplayHeight / 2) - (interfaceMenuHeight / 2)
    let interfaceMenu = [interfaceMenuX, interfaceMenuY, interfaceMenuWidth, interfaceMenuHeight]

    let buttonSonW = 150
    let buttonSonH = 20
    let buttonSonX = interfaceMenuX + (interfaceMenuWidth / 2) - (buttonSonW / 2)
    let buttonSonY = interfaceMenuY + (interfaceMenuHeight / 4)
    let textSonX = buttonSonX + (buttonSonW / 2)

    let buttonMusicW = 150
    let buttonMusicH = 20
    let buttonMusicX = interfaceMenuX + (interfaceMenuWidth / 2) - (buttonMusicW / 2)
    let buttonMusicY = interfaceMenuY + (interfaceMenuHeight / 2.5)
    let textMusicX = buttonMusicX + (buttonMusicW / 2)


    let buttonExitW = 150
    let buttonExitH = 20
    let buttonExitX = interfaceMenuX + (interfaceMenuWidth / 2) - (buttonExitW / 2)
    let buttonExitY = interfaceMenuY + (interfaceMenuHeight / 1.8)
    let textExitX = buttonExitX + (buttonMusicW / 2)


    let buttonExit = [buttonExitX, buttonExitY, buttonExitW, buttonExitH]

    let buttonSon = [buttonSonX, buttonSonY, buttonSonW, buttonSonH]

    let buttonMusic = [buttonMusicX, buttonMusicY, buttonMusicW, buttonMusicH]


    fill(255)
    drawInterface(interfaceMenu, GUIParameters)

    fill(ColorForRectSong)
    drawButton(buttonSon)
    drawText("SON", 15, [textSonX, buttonSonY], "center")

    fill(ColorForRectMusic)
    drawButton(buttonMusic)
    drawText("MUSIC", 15, [textMusicX, buttonMusicY], "center")

    fill(255)
    drawButton(buttonExit)
    drawText("Retour au menu", 15, [textExitX, buttonExitY], "center")



    if (buttonClicked(buttonExit)) {
        gameIsPaused = false
        settingsPause = false
    }
    if (buttonClicked(buttonMusic) && YouCanPlayMusic === true) {
        PlayMusic()
    }
    if (buttonClicked(buttonSon)) {
        PlaySong()
    }
}


//~ MENU DEATH
function drawDeath() {


    if (playerDead === false) {
        fill(0, 0, 0, 50)
        rect(0, 0, width, height)

        endInventory = true
        let interfaceMenuWidth = 500
        let interfaceMenuHeight = 500
        let interfaceMenuX = (viewportDisplayWidth / 2) - (interfaceMenuWidth / 2)
        let interfaceMenuY = (viewportDisplayHeight / 2) - (interfaceMenuHeight / 2)
        let interfaceMenu = [interfaceMenuX, interfaceMenuY, interfaceMenuWidth, interfaceMenuHeight]

        let buttonStatW = 150
        let buttonStatH = 20
        let buttonStatX = interfaceMenuX + (interfaceMenuWidth / 2) - (buttonStatW / 2)
        let buttonStatY = interfaceMenuY + (interfaceMenuHeight / 4)
        let textStatX = buttonStatX + (buttonStatW / 2)


        let buttonExitW = 150
        let buttonExitH = 20
        let buttonExitX = interfaceMenuX + (interfaceMenuWidth / 2) - (buttonExitW / 2)
        let buttonExitY = interfaceMenuY + (interfaceMenuHeight / 1.8)
        let textExitX = buttonExitX + (buttonExitW / 2)


        let buttonReturnToHomeEndGame = [buttonExitX, buttonExitY, buttonExitW, buttonExitH]

        let buttonStat = [buttonStatX, buttonStatY, buttonStatW, buttonStatH]


        fill(255)
        drawInterface(interfaceMenu, GUIOfDeath)

        fill(255)
        drawButton(buttonStat)
        drawText("STATS", 15, [textStatX, buttonStatY], "center")

        fill(255)
        drawButton(buttonReturnToHomeEndGame)
        drawText("Retour au menu", 15, [textExitX, buttonExitY], "center")



        if (buttonClicked(buttonReturnToHomeEndGame)) {
            //playerDead = true
            inGame = false
            gameIsPlaying = false
            gameIsPaused = false
            endInventory = false
            settingsHome = false
            // isStats = false;
            // isMenu = false;
            // CinematicIsStart = true
            // YouCanEscape = true;
            // PlayerCanMove = true
            healthPlayer = 3;
        }
        if (buttonClicked(buttonStat)) {
            //playerDead = true
            //drawStats()
        }
    }
}


//~ MENU STAT
function drawStats() {

    if (playerStat === false) {

        fill(0, 0, 0, 50)
        rect(0, 0, width, height)

        let interfaceMenuWidth = 500
        let interfaceMenuHeight = 500
        let interfaceMenuX = (viewportDisplayWidth / 2) - (interfaceMenuWidth / 2)
        let interfaceMenuY = (viewportDisplayHeight / 2) - (interfaceMenuHeight / 2)
        let interfaceMenu = [interfaceMenuX, interfaceMenuY, interfaceMenuWidth, interfaceMenuHeight]

        let buttonExitW = 150
        let buttonExitH = 20
        let buttonExitX = interfaceMenuX + (interfaceMenuWidth / 2) - (buttonExitW / 2)
        let buttonExitY = interfaceMenuY + (interfaceMenuHeight / 1.8)
        let textExitX = buttonExitX + (buttonExitW / 2)


        let buttonReturnToHome = [buttonExitX, buttonExitY, buttonExitW, buttonExitH]

        fill(255)
        drawInterface(interfaceMenu, GUIForStats)

        fill(255)
        drawButton(buttonReturnToHome)
        drawText("Retour au menu", 15, [textExitX, buttonExitY], "center")



        if (buttonClicked(buttonReturnToHome)) {
            // console.log("zsjjsdj")
            playerStat = true
            inGame = false
            gameIsPlaying = false
            gameIsPaused = false
            endInventory = false
            settingsHome = false
            // isStats = false;
            // isMenu = false;
            // CinematicIsStart = true
            // YouCanEscape = true;
            // PlayerCanMove = true
            healthPlayer = 3;
        }
    }
}


//~ BARRE DE VIE
function drawLifeBar() {
    let VieLarg = map(healthPlayer, 0, maxHealth, 0, maxHealth);

    for (let i = 0; i < VieLarg; i++) {
        image(GamerHeart, MargeBarVie * i + 1800 / 2, MargeBarVie, 30, 30);
    }
    ForInteract()
}


//~ INTERACTIONS 
function setupInteractions() {
    fill(255);


    if (engineOne) {
        if (canEnterInHouse) {
            drawKey("E")
        }

        if (canInteractWithPNJ) {
            drawKey("E")
        }
    }
}


//~ TROC
function drawTroc(x, y, w, h) {



    //? Affichage de la ligne troc
    let currentPNJ = getPNJName()
    let PNJSeePlayer = getPNJSeePlayer(currentPNJ)
    let echangePNJ = getEchangePNJ(currentPNJ)



    //? Lignes
    let widthRow = w
    let heightRow = h / echangePNJ.length //& <- nombre de ligne 
    let postionXRow = x


    //? Elements d'échange
    let widthElement = 20
    let heightElement = 20


    if (!PNJSeePlayer) {
        PressInteractPNJ = false
    }

    let buttonHasBeenClicked = false;


    echangePNJ.forEach(echange => {

        //? Declaration de variables
        let indexEchange = echangePNJ.indexOf(echange)
        let positionYRow = y + (heightRow * indexEchange)
        let positionYElement = positionYRow + heightRow / 2 - heightElement / 2

        //? Lignes
        fill(255, 43, 15)
        let positionRow = [postionXRow, positionYRow, widthRow, heightRow]

      
        if (buttonClicked(positionRow) && !popUpShown) {
            haveToTrade = true
            buttonHasBeenClicked = true;
            popUpShown = true
            getTrade = echange
            
        } else if (!buttonHasBeenClicked) {
            if (waitingAnswer == false) {

                //? Affichage du background du troc
                image(BackTroc, postionXRow, positionYRow, widthRow, heightRow)


                //? Pour chaque ligne creation d'un slot
                Object.entries(echange).forEach(items => {
                    if (items[0] == "demande") {
                        items[1].forEach(element => {

                            //? Declaration
                            let indexElement = items[1].indexOf(element)
                            let positionXElement = x + (widthElement * indexElement)
                            let currentItem = getItems(element)

                            TestRequis = currentItem


                            //? Affichage du slot
                            image(Slot, positionXElement, positionYElement - 2, widthElement + 5, heightElement + 5);
                            //? Affichage d'un item
                            image(itemList[currentItem.itemNumber], positionXElement, positionYElement, widthElement, heightElement);
                        });
                    } else if (items[0] == "donne") {
                        items[1].forEach(element => {

                            //? Declaration
                            let indexElement = items[1].indexOf(element)
                            let positionXElement = x + widthRow - (widthElement * indexElement) - widthElement
                            let currentItem = getItems(element)


                            TestGain = currentItem;



                            //? Affichage du slot
                            image(Slot, positionXElement - 6, positionYElement - 2, widthElement + 5, heightElement + 5);
                            //? Affichage d'un item
                            image(itemList[currentItem.itemNumber], positionXElement, positionYElement, widthElement, heightElement);
                        });
                    }
                });
            }
        }
    });



    if (popUpShown) {

        console.log(getTrade)

        if (getTrade != undefined) {

            let objectListDemande = [];

            getTrade.demande.forEach(demandeObj => {

                objectListDemande.push(getItems(demandeObj))

            })

            console.log(objectListDemande)

            let objectListDonne = [];

            getTrade.donne.forEach(donneObj => {

                objectListDonne.push(getItems(donneObj))

            })

            troc(objectListDemande, objectListDonne)
        }
    }

}


//~ INTERACTION PNJ SWORD
function InteractionSword() {

    let interfaceMenuWidth = 500
    let interfaceMenuHeight = 500
    let interfaceMenuX = (viewportDisplayWidth / 2) - (interfaceMenuWidth / 2) + 110.5
    let interfaceMenuY = (viewportDisplayHeight / 2) - (interfaceMenuHeight / 2)
    drawTroc(interfaceMenuX, interfaceMenuY, interfaceMenuWidth / 2, interfaceMenuHeight)
}


//^ LANCER
function setupUI() {

    //? Si je suis en jeu

    if (inGame && settingsHome === false) {
        //? Si je fait echap (dans le menu pause)

        if (PressInteractPNJ && !SwordAlreadyTaken) {
            InteractionSword()
        }
        if (settingsPause) {
            gameIsPlaying = false
            settingsPause = true
            drawSettingInPause()
        }
        if (gameIsPaused) {
            gameIsPlaying = false
            drawPauseMenu()
        }
        if (healthPlayer === 0) {
            gameIsPlaying = false
            drawDeath()
        } else {
            //? sinon je joue
            gameIsPlaying = true
        }
        drawLifeBar()
        displayInventory();
        setupInteractions()

    } else {

        drawHomeMenu()

        if (settingsHome && playerDead === false) {
            settingsHome = true
            drawSettingInHome()
        }

        gameIsPaused = false
        gameIsPlaying = false
    }
}
