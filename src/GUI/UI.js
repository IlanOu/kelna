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
    
    if (strokeToggle){
        stroke(0)
    }else{
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


function buttonClicked([x, y, h, w]) {
    return mouseIsPressed && pointIsInRect(mouseX, mouseY, x, y, h, w)
}

function buttonHover([x, y, h, w]) {
    return pointIsInRect(mouseX, mouseY, x, y, h, w)
}




//^ INTERFACES


//~ MENU HOME
function drawHomeMenu() {
    gameIsPaused = false

    let interfaceMenu = [(viewportDisplayWidth-Background.width)/2, (viewportDisplayHeight-Background.height)/2, Background.width, Background.height]

    let buttonPlay = [  (viewportDisplayWidth / 2) - (buttonWidthBIG / 2), 
                        (viewportDisplayHeight / 2) - (buttonHeightBIG / 2), 
                        buttonWidthBIG, 
                        buttonHeightBIG]

    let textPlay = [(viewportDisplayWidth / 2), 
                    (viewportDisplayHeight / 2) - (buttonHeightClassic / 3)]

    let buttonParameters = [(viewportDisplayWidth/2) - (buttonWidthClassic / 2), 
                            (viewportDisplayHeight/2) + (buttonHeightClassic), 
                            buttonWidthClassic, 
                            buttonHeightClassic]

    let textParameters = [  (viewportDisplayWidth/2), 
                            buttonParameters[1] + (buttonHeightClassic/8)]


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
        isSettingsWait = true
    }
}


//~ MENU PAUSE
function drawPauseMenu() {
    gameIsPaused = true

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
        isSettingsPause = true
        PlayerInSettings = true

    }
    if (buttonClicked(buttonReturn)) {
        gameIsPaused = false
    }
}


//~ BARRE VIE
function drawLifeBar() {
    let VieLarg = map(healthPlayer, 0, maxHealth, 0, maxHealth);

    for (let i = 0; i < VieLarg; i++) {
        image(GamerHeart, MargeBarVie * i + 400 / 2, MargeBarVie, 30, 30);
    }
}


//~ MENU HOME SETTINGS 
function drawSettingInHome() {


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

    fill(255)
    drawButton(buttonSon)
    drawText("SON", 15, [textSonX, buttonSonY], "center")
    fill(ColorForRectMusic)
    drawButton(buttonMusic)
    drawText("MUSIC", 15, [textMusicX, buttonMusicY], "center")
    fill(255)
    drawButton(ButtonExitP)
    drawText("Retour au menu", 15, [textExitX, buttonExitY], "center")



    if (buttonClicked(ButtonExitP)) {
        isSettingsWait = false
        //PlayerInSettings = false
    }
    if (buttonClicked(buttonMusic)) {
        PlayMusic()
    }
}

//~ MENU PAUSE SETTINGS 
function drawSettingInPause() {


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


    //fill(255)
    drawInterface(interfaceMenu, GUIParameters)

    fill(255)
    drawButton(buttonSon)
    drawText("SON", 15, [textSonX, buttonSonY], "center")
    fill(ColorForRectMusic)
    drawButton(buttonMusic)
    drawText("MUSIC", 15, [textMusicX, buttonMusicY], "center")
    fill(255)
    drawButton(buttonExit)
    drawText("Retour au menu", 15, [textExitX, buttonExitY], "center")



    if (buttonClicked(buttonExit)) {
        isSettingsPause = false
        //PlayerInSettings = false
    }
    if (buttonClicked(buttonMusic) && YouCanPlayMusic === true) {
        PlayMusic()
    }
}


function setupInteractions() {
    fill(255);


    if (engineOne){

        if(canEnterInHouse){
            drawKey("E")
        }

        if(canInteractWithPNJ){
            drawKey("E")
        }
    }


}


//^ LANCER

function setupUI() {

    //~ Si je suis en jeu

    if (inGame && PlayerInSettings === false) {
        //~ Si je fait echap (dans le menu pause)


        if (isSettingsPause) {
            drawSettingInPause()
        }
        if (gameIsPaused) {

            gameIsPlaying = false
            drawPauseMenu()
        } else {
            //~ sinon je joue
            gameIsPlaying = true
        }
        drawLifeBar()



    } else {

        drawHomeMenu()


        if (isSettingsWait) {
            drawSettingInHome()
        }

        gameIsPaused = false
        gameIsPlaying = false
    }

    setupInteractions()


}