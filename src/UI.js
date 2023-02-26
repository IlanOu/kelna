//^ OUTILS

//~ Afficher une interface
function drawInterface([x, y, w, h], img = undefined){
    stroke(0)
    
    if (img != undefined){
        image(img, x,y,w,h)
    }
    else{
        rect(x, y, w, h)
    }
}

//~ Afficher un bouton
function drawButton([x,y,w,h], img = undefined){   
    stroke(0) 
    if (img != undefined){
        image(img, x,y,w,h)
    }
    else{
        rect(x, y, w, h)
    }
}

//~ Afficher du texte
function drawText(Text, fontSize, [x, y], textAlignment){
    fill(0)
    noStroke()
    textSize(fontSize);
    textAlign(textAlignment);

    text(Text, x, y+fontSize);
    
}


function buttonClicked([x, y, h, w]){
    return mouseIsPressed && pointIsInRect(mouseX, mouseY, x, y, h, w)
}

function buttonHover([x, y, h, w]){
    return pointIsInRect(mouseX, mouseY, x, y, h, w)
}




//^ INTERFACES


//~ MENU HOME
function drawHomeMenu(){
    gameIsPaused = false
    
    let interfaceMenu = [0, 0, viewportDisplayWidth, viewportDisplayHeight]
    
    let buttonPlay = [(viewportDisplayWidth/2)-(buttonWidthClassic/2), (viewportDisplayHeight/2)-(buttonHeightClassic/2), buttonWidthClassic, buttonHeightClassic]
    let textPlay = [(viewportDisplayWidth/2), (viewportDisplayHeight/2)-(buttonHeightClassic/2)]


    fill(255, 220, 205)
    drawInterface(interfaceMenu, Background)
    
    fill(0, 255, 0)
    drawButton(buttonPlay)
    
    drawText("Play", 15, textPlay, "center")
    fill(0)

    if (buttonClicked(buttonPlay)){
        gameIsPlaying = true
    }
}


//~ MENU PAUSE
function drawPauseMenu(){

    let interfaceMenuWidth = 500
    let interfaceMenuHeight = 500
    let interfaceMenuX = (viewportDisplayWidth/2)-(interfaceMenuWidth/2)
    let interfaceMenuY = (viewportDisplayHeight/2)-(interfaceMenuHeight/2)

    let interfaceMenu = [interfaceMenuX, interfaceMenuY, interfaceMenuWidth, interfaceMenuHeight]

    let buttonExit = [interfaceMenuX, interfaceMenuY, buttonWidthClassic, buttonHeightClassic]


    fill(255)
    drawInterface(interfaceMenu)

    fill(255, 0, 0)
    drawButton(buttonExit)
    drawText("Retour au menu", 15, [interfaceMenuX, interfaceMenuY], "left")
    
    
    if (buttonClicked(buttonExit)){
        inGame = false
    }
}

function drawLifeBar(){
    // Dessiner la vie
    let VieLarg = map(healthPlayer, 0, maxHealth, 0, maxHealth);
    for (let i = 0; i < VieLarg; i++) {
        let ForX = 400
        image(GamerHeart, MargeBarVie * i + ForX / 2, MargeBarVie, 30, 30);
    }
}



//^ LANCER

function setupUI(){

    //~ Si je suis en jeu
    if (inGame){
        //~ Si je fait echap (dans le menu pause)
        if (gameIsPaused){
            gameIsPlaying = false
            drawPauseMenu()
        //~ sinon je joue
        }else{
            gameIsPlaying = true
            playerCanMove = true
            drawLifeBar()
        }
    //~ Si je suis dans le menu HOME
    }else{
        gameIsPaused = false
        gameIsPlaying = false
        drawHomeMenu()
    }


}