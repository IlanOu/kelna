//^ OUTILS

//~ Afficher une interface
function drawInterface([x, y, w, h], img = undefined) {
  stroke(0);
  fill(255)
  if (img != undefined) {
    image(img, x, y, w, h);
  } else {
    rect(x, y, w, h);
  }
}

//~ Afficher un bouton
function drawButton([x, y, w, h], img = undefined, strokeToggle = true) {
  if (strokeToggle) {
    stroke(0);
  } else {
    noStroke();
  }

  if (img != undefined) {
    image(img, x, y, w, h);
  } else {
    rect(x, y, w, h);
  }
}

//~ Afficher du texte
function drawText(Text, fontSize, [x, y], textAlignment, color = [0, 0, 0]) {
  fill(color[0], color[1], color[2]);
  noStroke();
  textSize(fontSize);
  textAlign(textAlignment);

  text(Text, x, y + fontSize);
}

//~  Au clic du bouton
function buttonClicked([x, y, h, w]) {
  return leftClickPressed && pointIsInRect(mouseX, mouseY, x, y, h, w);
}

//~ Hover du bouton
function buttonHover([x, y, h, w]) {
  return pointIsInRect(mouseX, mouseY, x, y, h, w);
}



/*//^ -------------------------------------------------------------------------- */
/*//^                                 INTERFACES                                 */
/*//^ -------------------------------------------------------------------------- */
//~ MENU HOME
function drawHomeMenu() {

  //& --------------------------------
  //& ---------- Variables -----------
  //& --------------------------------

  let interfaceMenu = [
    (viewportDisplayWidth - Background.width) / 2,
    (viewportDisplayHeight - Background.height) / 2,
    Background.width,
    Background.height,
  ];

  let buttonParameters = [
    viewportDisplayWidth / 2 - buttonWidthClassic / 2,
    viewportDisplayHeight / 2 + buttonHeightClassic + 70,
    buttonWidthClassic,
    buttonHeightClassic,
  ];

  let textParameters = [
    viewportDisplayWidth / 2,
    buttonParameters[1] + buttonHeightClassic / 8,
  ];




  let play = [
    viewportDisplayWidth / 2 - buttonWidthBIG / 2,
    viewportDisplayHeight / 2 - buttonHeightBIG / 2,
    buttonWidthBIG,
    buttonHeightBIG,
  ];


  //& --------------------------------
  //& ---------- Affichage -----------
  //& --------------------------------

  //& Dessiner l'interface
  fill(255, 220, 205);
  drawInterface(interfaceMenu, Background);

  //& Jouer
  drawButton(play, GUIStart)


  //& Paramètres
  fill(120, 120, 120);
  drawButton(buttonParameters);
  drawText("Paramètres", 15, textParameters, "center");
  fill(0);


  //& --------------------------------
  //& ---------- Evenements ----------
  //& --------------------------------

  if (buttonClicked(play)) {
    // if (playerDead) {
    //   initVariables()
    // }
    // inGame = true

    if (playerDead) {
      initVariables()
    }
    startGame = true
  }
  if (buttonClicked(buttonParameters)) {
    settingsPause = true
  }
}



//~ MENU PAUSE
function drawPauseMenu() {
  //? Cacher le troc si il s'affiche
  PressInteractPNJ = false;
  PressTalkPNJ = false


  //& --------------------------------
  //& ---------- Variables -----------
  //& --------------------------------

  //& Interface
  let interfaceMenuWidth = 500;
  let interfaceMenuHeight = 500;
  let interfaceMenuX = viewportDisplayWidth / 2 - interfaceMenuWidth / 2;
  let interfaceMenuY = viewportDisplayHeight / 2 - interfaceMenuHeight / 2;

  let interfaceMenu = [
    interfaceMenuX,
    interfaceMenuY,
    interfaceMenuWidth,
    interfaceMenuHeight,
  ];



  //& Bouton continuer de jouer
  let buttonBackW = 150;
  let buttonBackH = 20;
  let buttonBackX = interfaceMenuX + interfaceMenuWidth / 2 - buttonBackW / 2;
  let buttonBackY = interfaceMenuY + interfaceMenuHeight / 4;
  let textReturnX = buttonBackX + buttonBackW / 2;
  let buttonBack = [
    buttonBackX,
    buttonBackY,
    buttonBackW,
    buttonBackH,
  ];

  //& Bouton paramètres
  let buttonSettingsW = 150;
  let buttonSettingsH = 20;
  let buttonSettingsX = interfaceMenuX + interfaceMenuWidth / 2 - buttonSettingsW / 2;
  let buttonSettingsY = interfaceMenuY + interfaceMenuHeight / 2.2;
  let textSettingsX = buttonSettingsX + buttonSettingsW / 2;
  let buttonSettings = [
    buttonSettingsX,
    buttonSettingsY,
    buttonSettingsW,
    buttonSettingsH,
  ];

  //& Bouton Retour au Menu
  let buttonExitW = 150;
  let buttonExitH = 20;
  let buttonExitX = interfaceMenuX + interfaceMenuWidth / 2 - buttonExitW / 2;
  let buttonExitY = interfaceMenuY + interfaceMenuHeight / 1.5;
  let textExitX = buttonExitX + buttonExitW / 2;
  let buttonExit = [
    buttonExitX,
    buttonExitY,
    buttonExitW,
    buttonExitH
  ];




  //& --------------------------------
  //& ---------- Affichage -----------
  //& --------------------------------

  fill(255);
  drawInterface(interfaceMenu, GUIForEscape);

  fill(255);
  drawButton(buttonBack);
  drawText("Continuer", 15, [textReturnX, buttonBackY], "center");

  fill(255);
  drawButton(buttonSettings);
  drawText("Paramètres", 15, [textSettingsX, buttonSettingsY], "center", [0, 0, 255]);

  fill(255);
  drawButton(buttonExit);
  drawText("Retour au menu", 15, [textExitX, buttonExitY], "center", [255, 0, 0]);


  //& --------------------------------
  //& ---------- Evenements ----------
  //& --------------------------------

  if (buttonClicked(buttonBack)) {
    gameIsPaused = false
  }

  if (buttonClicked(buttonSettings)) {
    settingsPause = true
  }

  if (buttonClicked(buttonExit)) {
    inGame = false
  }
}


//~ MENU HOME SETTINGS
function drawSettingsMenu() {

  //& --------------------------------
  //& ---------- Variables -----------
  //& --------------------------------

  let interfaceMenuWidth = 500;
  let interfaceMenuHeight = 500;
  let interfaceMenuX = viewportDisplayWidth / 2 - interfaceMenuWidth / 2;
  let interfaceMenuY = viewportDisplayHeight / 2 - interfaceMenuHeight / 2;
  let interfaceMenu = [
    interfaceMenuX,
    interfaceMenuY,
    interfaceMenuWidth,
    interfaceMenuHeight,
  ];

  let buttonSonW = 150;
  let buttonSonH = 20;
  let buttonSonX = interfaceMenuX + interfaceMenuWidth / 2 - buttonSonW / 2;
  let buttonSonY = interfaceMenuY + interfaceMenuHeight / 4;
  let textSonX = buttonSonX + buttonSonW / 2;

  let buttonMusicW = 150;
  let buttonMusicH = 20;
  let buttonMusicX = interfaceMenuX + interfaceMenuWidth / 2 - buttonMusicW / 2;
  let buttonMusicY = interfaceMenuY + interfaceMenuHeight / 3
  let textMusicX = buttonMusicX + buttonMusicW / 2;

  let buttonToggleFPSW = 150;
  let buttonToggleFPSH = 20;
  let buttonToggleFPSX = interfaceMenuX + interfaceMenuWidth / 2 - buttonToggleFPSW / 2;
  let buttonToggleFPSY = interfaceMenuY + interfaceMenuHeight / 2.5;
  let textToggleFPSX = buttonToggleFPSX + buttonMusicW / 2;

  let buttonToggleCameraShakeW = 150;
  let buttonToggleCameraShakeH = 20;
  let buttonToggleCameraShakeX = interfaceMenuX + interfaceMenuWidth / 2 - buttonToggleCameraShakeW / 2;
  let buttonToggleCameraShakeY = interfaceMenuY + interfaceMenuHeight / 2;
  let textToggleCameraShakeX = buttonToggleCameraShakeX + buttonMusicW / 2;

  let buttonExitW = 150;
  let buttonExitH = 20;
  let buttonExitX = interfaceMenuX + interfaceMenuWidth / 2 - buttonExitW / 2;
  let buttonExitY = interfaceMenuY + interfaceMenuHeight / 1.5;
  let textExitX = buttonExitX + buttonExitW / 2;




  let buttonSon = [buttonSonX, buttonSonY, buttonSonW, buttonSonH];

  let buttonMusic = [buttonMusicX, buttonMusicY, buttonMusicW, buttonMusicH];

  let ButtonToggleFPS = [buttonToggleFPSX, buttonToggleFPSY, buttonToggleFPSW, buttonToggleFPSH];

  let ButtonToggleCameraShake = [buttonToggleCameraShakeX, buttonToggleCameraShakeY, buttonToggleCameraShakeW, buttonToggleCameraShakeH];


  let ButtonBack = [buttonExitX, buttonExitY, buttonExitW, buttonExitH];


  //& --------------------------------
  //& ---------- Affichage -----------
  //& --------------------------------


  drawInterface(interfaceMenu, GUIParameters);

  fill(soundButtonColor);
  drawButton(buttonSon);
  drawText("Sons", 15, [textSonX, buttonSonY], "center");

  fill(musicButtonColor);
  drawButton(buttonMusic);
  drawText("Musique", 15, [textMusicX, buttonMusicY], "center");

  fill(255);
  drawButton(ButtonToggleFPS);
  drawText("FPS", 15, [textToggleFPSX, buttonToggleFPSY], "center");

  fill(255);
  drawButton(ButtonToggleCameraShake);
  drawText("Tremblements", 15, [textToggleCameraShakeX, buttonToggleCameraShakeY], "center");

  fill(255);
  drawButton(ButtonBack);
  drawText("Retour", 15, [textExitX, buttonExitY], "center");




  //& --------------------------------
  //& ---------- Evenements ----------
  //& --------------------------------

  if (buttonClicked(buttonSon)) {
    PlaySong()
  }
  if (buttonClicked(buttonMusic)) {
    PlayMusic()
  }
  if (buttonClicked(ButtonToggleFPS)) {
    fpsActivate = !fpsActivate
  }
  if (buttonClicked(ButtonToggleCameraShake)) {
    cameraShakeEnabled = !cameraShakeEnabled
  }
  if (buttonClicked(ButtonBack)) {
    settingsPause = false
  }


}


//~ MENU DEATH
function drawDeath() {
  if (!dieSoundPlay) {
    endGameVoice()
    dieSoundPlay = true
  }
  playerDead = true
  fill(0, 0, 0, 50);
  rect(0, 0, width, height);

  gameIsPaused = true;

  //& --------------------------------
  //& ---------- Variables -----------
  //& --------------------------------

  endInventory = true;
  let interfaceMenuWidth = 500;
  let interfaceMenuHeight = 500;
  let interfaceMenuX = viewportDisplayWidth / 2 - interfaceMenuWidth / 2;
  let interfaceMenuY = viewportDisplayHeight / 2 - interfaceMenuHeight / 2;
  let interfaceMenu = [
    interfaceMenuX,
    interfaceMenuY,
    interfaceMenuWidth,
    interfaceMenuHeight,
  ];


  let buttonExitW = 150;
  let buttonExitH = 20;
  let buttonExitX = interfaceMenuX + interfaceMenuWidth / 2 - buttonExitW / 2;
  let buttonExitY = interfaceMenuY + interfaceMenuHeight / 1.8;
  let textExitX = buttonExitX + buttonExitW / 2;

  let buttonBackToHomeEndGame = [
    buttonExitX,
    buttonExitY,
    buttonExitW,
    buttonExitH,
  ];



  //& --------------------------------
  //& ---------- Affichage -----------
  //& --------------------------------


  fill(255);
  drawInterface(interfaceMenu, GUIOfDeath);

  fill(255);
  drawButton(buttonBackToHomeEndGame);
  drawText("Retour au menu", 15, [textExitX, buttonExitY], "center");


  //& --------------------------------
  //& ---------- Evenements ----------
  //& --------------------------------

  if (buttonClicked(buttonBackToHomeEndGame)) {
    inGame = false
  }

}


//~ MENU STAT
function drawStats() {
  if (playerStat === false) {
    fill(0, 0, 0, 50);
    rect(0, 0, width, height);


    //& --------------------------------
    //& ---------- Variables -----------
    //& --------------------------------

    let interfaceMenuWidth = 500;
    let interfaceMenuHeight = 500;
    let interfaceMenuX = viewportDisplayWidth / 2 - interfaceMenuWidth / 2;
    let interfaceMenuY = viewportDisplayHeight / 2 - interfaceMenuHeight / 2;
    let interfaceMenu = [
      interfaceMenuX,
      interfaceMenuY,
      interfaceMenuWidth,
      interfaceMenuHeight,
    ];

    let buttonExitW = 150;
    let buttonExitH = 20;
    let buttonExitX = interfaceMenuX + interfaceMenuWidth / 2 - buttonExitW / 2;
    let buttonExitY = interfaceMenuY + interfaceMenuHeight / 1.8;
    let textExitX = buttonExitX + buttonExitW / 2;

    let buttonBackToHome = [
      buttonExitX,
      buttonExitY,
      buttonExitW,
      buttonExitH,
    ];


    //& --------------------------------
    //& ---------- Affichage -----------
    //& --------------------------------


    fill(255);
    drawInterface(interfaceMenu, GUIForStats);

    fill(255);
    drawButton(buttonBackToHome);
    drawText("Retour au menu", 15, [textExitX, buttonExitY], "center");


    //& --------------------------------
    //& ---------- Evenements ----------
    //& --------------------------------


    if (buttonClicked(buttonBackToHome)) {

    }
  }
}




//^ --------------------------------------------------------------------------
//^                      Affichage des éléments à l'écran                     
//^ --------------------------------------------------------------------------

function drawStartGame() {

  background(0);
  fill(255);

  if (!startSoundPlay) {
    startGameVoice()
    startSoundPlay = true
  }
  
  // setTimeout(create, 1000);
  inGame = true
  startGame = false

}
//~ BARRE DE VIE
function drawLifeBar() {
  let HeartX = (viewportDisplayWidth / 2) - (maxHealth * lifeBarSize) / 2;
  let HeartY = viewportDisplayHeight - lifeBarSize * 2


  for (let i = 0; i < maxHealth; i++) {
    if (i + 1 <= healthPlayer) {
      image(GamerHeart, lifeBarSize * i + HeartX, HeartY, 30, 30);
    } else {
      image(GamerHeartBlack, lifeBarSize * i + HeartX, HeartY, 30, 30);

    }

  }
}


//~ INTERACTIONS
function setupInteractions() {
  fill(255);

  if (engineOne) {
    if (canEnterInHouse) {
      drawKey("E");
      PressInteractPNJ = false;
      canInteractWithPNJ = false
      PressTalkPNJ = false
      canTalkWithPNJ = false
    }

    if (canInteractWithPNJ) {
      drawKey("E");
    }

    if (canTalkWithPNJ) {
      drawKey("E");
    }

    if (canGetItem) {
      drawKey("E");
    }

  } else {
    if (canGoOutTheHouse) {
      drawKey("E");
      PressInteractPNJ = false;
      canInteractWithPNJ = false
      PressTalkPNJ = false
      canTalkWithPNJ = false
    }
  }
}


//~ TROC
function drawTroc(x, y, w, h) {

  //? Affichage de la ligne troc
  let currentPNJ = getPNJName();
  let PNJSeePlayer = getPNJSeePlayer(currentPNJ);
  let echangePNJ = getEchangePNJ(currentPNJ);

  if (echangePNJ != undefined) {
    // image(GUITroc, x / 1.23, y / 1.78, w * 2, h * 1.4);
    // fill(255)
    // rect(x, y, w, h)
    image(GUITroc, x, y, w, h);

    //? Lignes de slot
    let widthRow = w / 2;
    let heightRow = h * 0.75 / echangePNJ.length; //& <- nombre de ligne
    let postionXRow = x - widthRow / 2 + w / 2;
    // let positionYRow = y - heightRow/2 + h / 2;

    //? Position pour échange
    let widthElement = 30;
    let heightElement = 30;

    //? Affichage du troc
    if (!PNJSeePlayer) {
      PressInteractPNJ = false;
    }

    //? Bouton au clic
    let buttonHasBeenClicked = false;

    echangePNJ.forEach((echange) => {
      //? Declaration de variables
      let indexEchange = echangePNJ.indexOf(echange);
      let positionYRow = ((h - heightRow * echangePNJ.length) / 2) + y + heightRow * indexEchange;
      let positionYElement = positionYRow + heightRow / 2 - heightElement / 2;

      //? Lignes
      let positionRow = [postionXRow, positionYRow, widthRow, heightRow];

      if (buttonClicked(positionRow) && !popUpShown) {
        haveToTrade = true;
        buttonHasBeenClicked = true;
        popUpShown = true;
        getTrade = echange;
      } else if (!buttonHasBeenClicked) {
        if (waitingAnswer == false) {
          //? Affichage du background du troc
          // fill(252, 208, 117);
          // rect(postionXRow, positionYRow, widthRow, heightRow);

          //? Pour chaque ligne creation d'un slot
          Object.entries(echange).forEach((items) => {
            if (items[0] == "demande") {
              items[1].forEach((element) => {
                //? Declaration
                let indexElement = items[1].indexOf(element);
                let positionXElement = postionXRow + (widthElement * slotSize * indexElement);
                let currentItem = getItems(element);

                //? Affichage du slot
                image(
                  slot,
                  positionXElement,
                  positionYElement - heightElement / 4,
                  widthElement * slotSize,
                  heightElement * slotSize
                );
                //? Affichage d'un item
                image(
                  itemList[currentItem.itemNumber],
                  positionXElement + widthElement / 4,
                  positionYElement,
                  widthElement * itemSize,
                  heightElement * itemSize
                );
              });
            } else if (items[0] == "donne") {
              items[1].forEach((element) => {
                //? Declaration
                let indexElement = items[1].indexOf(element);
                let positionXElement = postionXRow + widthRow - (widthElement * itemSize * indexElement) - (widthElement * itemSize);
                let currentItem = getItems(element);

                //? Affichage du slot
                image(
                  slot,
                  positionXElement - widthElement / 2,
                  positionYElement - heightElement / 4,
                  widthElement * slotSize,
                  heightElement * slotSize
                );
                //? Affichage d'un item
                image(
                  itemList[currentItem.itemNumber],
                  positionXElement - widthElement / 4,
                  positionYElement,
                  widthElement * itemSize,
                  heightElement * itemSize
                );
              });
            }
          });
        }
      }
    });

    if (popUpShown) {
      if (getTrade != undefined) {
        let objectListDemande = [];

        getTrade.demande.forEach((demandeObj) => {
          objectListDemande.push(getItems(demandeObj));
        });
        let objectListDonne = [];

        getTrade.donne.forEach((donneObj) => {
          objectListDonne.push(getItems(donneObj));
        });
        troc(objectListDemande, objectListDonne);
      }
    }

  }
}


function drawTalk(x, y, w, h) {

  let currentPNJName = getPNJName();
  let currentPNJ = pnjJSON.PNJS[currentPNJName]
  let PNJSeePlayer = getPNJSeePlayer(currentPNJName);
  let talkPNJ = getTalkPNJ(currentPNJName);
  let sentenceToTell = ""


  if (PNJSeePlayer) {
    if (talkPNJ[currentPNJ.step]) {
      //* Vérifier si l'item requis est dans l'inventaire
      if (talkPNJ[currentPNJ.step].itemsNameRequired.includes("none") || Inventory.some(item => talkPNJ[currentPNJ.step].itemsNameRequired.includes(item.name))) {
        sentenceToTell = talkPNJ[currentPNJ.step].text
      } else {
        //* Si l'item requis n'est pas dans l'inventaire fermer la discussion
        //* Si le joueur reparle au PNJ, il verra le dernier message du PNJ
        PressTalkPNJ = false
        currentPNJ.step -= 1;
      }
    } else {
      //* Si la discussion est terminée, la fermer
      //* Si le joueur reparle au PNJ, il verra le dernier message du PNJ
      PressTalkPNJ = false
      currentPNJ.step -= 1;
    }
  }

  let fontSize = 20

  //? Afficher la banière du fond
  let ratio = w / talkBackground.width
  let heightImg = talkBackground.height * ratio
  y = y - heightImg


  image(talkBackground, x, y, w, heightImg)


  let textWidth = w / 1.5;

  if (sentenceToTell == undefined) {

    //* Ferme la discussion quand c'est finis
    PressTalkPNJ = false
    currentPNJ.step = 0;
    currentIndexTextSpeaking = 0
    currentTextSpeaking = ""

  } else {
    //? Couleur du texte
    fill(0)

    let timer = round(millis() / textDialogSpeed) % 2;

    //* Effet typewritter
    if (timer && currentIndexTextSpeaking < sentenceToTell.length) {
      currentTextSpeaking += sentenceToTell[currentIndexTextSpeaking]
      currentIndexTextSpeaking++
    }

    //* Changer de phrase
    if (mouseIsPressed && currentIndexTextSpeaking) {

      mouseIsPressed = false
      if (currentIndexTextSpeaking < sentenceToTell.length) {
        currentIndexTextSpeaking = sentenceToTell.length
        currentTextSpeaking = sentenceToTell
      } else {
        currentPNJ.step++
        currentIndexTextSpeaking = 0
        currentTextSpeaking = ""
      }
    }

    //? Afficher le texte
    textSize(fontSize);
    text(currentTextSpeaking, x + (textWidth / 4), y + (h / 2.5) - fontSize / 2, textWidth, h)
    //* Remettre la phrase au début
    if (!PNJSeePlayer) {
      PressTalkPNJ = false;
      currentIndexTextSpeaking = 0
      currentTextSpeaking = ""

    }
  }
}

//~ INTERACTION PNJ SWORD
function openTrocMenu() {
  let interfaceMenuWidth = 600;
  let interfaceMenuHeight = 600;
  let interfaceMenuX = viewportDisplayWidth / 2 - interfaceMenuWidth / 2;
  let interfaceMenuY = viewportDisplayHeight / 2 - interfaceMenuHeight / 2;

  drawTroc(
    interfaceMenuX,
    interfaceMenuY,
    interfaceMenuWidth,
    interfaceMenuHeight
  );

}

//~ INTERACTION PNJ DISCU
function openTalkMenu() {

  let interfaceMenuWidth = viewportDisplayWidth / 2.5;
  let interfaceMenuHeight = viewportDisplayHeight / 5;
  let interfaceMenuX = viewportDisplayWidth / 2 - interfaceMenuWidth / 2;
  let interfaceMenuY = viewportDisplayHeight;
  drawTalk(
    interfaceMenuX,
    interfaceMenuY,
    interfaceMenuWidth,
    interfaceMenuHeight
  );

}

//~ Affiche les FPS
function gameFPS() {
  if (fpsActivate) {
    textSize(13);
    noStroke()
    fill(255);
    text("FPS: " + fpsLevel.toFixed(0), 50, 50);
  }
}

//~ DISCUSSION
function drawDiscussion(x, y, w, h) {

  //? Fonction comme conditions pour la discussions
  let currentPNJ = getPNJName();
  let PNJSeePlayer = getPNJSeePlayer(currentPNJ);
  let discussionPNJ = getDiscussionPNJ(currentPNJ)


  if (discussionPNJ != undefined) {

    //? Affichage du troc
    if (!PNJSeePlayer) {
      PressInteractPNJD = false;
    }
  }

}

//~ CREDITS END GAME
function drawCredits() {
  gameIsPaused = true;
  endInventory = true;

  textAlign(CENTER, CENTER);
  textSize(32);
  background(0);
  fill(255);

  for (let i = 0; i < creditsJSON.Credits.length; i++) {

    let credit = creditsJSON.Credits[i];
    let spaceBetweenText = i * 50;
    text(credit, width / 2, PositionCredits + spaceBetweenText);

  }
  PositionCredits -= speedCredits;

  if (PositionCredits < -creditsJSON.Credits.length * 50) {
    inGame = false
    endTheGameCredits = false
    initVariables()
  }


}


//^ LANCER
function setupUI() {
  //? Si je suis en jeu
  if (startGame) {
    drawStartGame()
  }

  if (inGame) {
    gameIsPlaying = true;

    //& Barre de vie
    drawLifeBar();

    //& Trocs et Discussions 
    if (PressInteractPNJ) {
      openTrocMenu();
    }
    if (PressTalkPNJ) {
      openTalkMenu();
    }

    //& Menu de Pause / Paramètres 
    if (gameIsPaused) {
      if (settingsPause) {
        drawSettingsMenu();
      } else if (healthPlayer > 0) {
        drawPauseMenu();
      }
    }

    //& Credits
    if (endTheGameCredits) {
      drawCredits()
    }

    //& Mort du joueur
    if (healthPlayer < 1) {
      characterMovement = "die"

      if (playerDead) {
        drawDeath()
      }

    } else {
      gameIsPlaying = true;
    }

    //& Affichage de l'inventaire
    displayInventory();

    //& Affichage des Intéractions
    setupInteractions();
    gameFPS()

  } else {
    //* Le jeu n'est pas lancé
    gameIsPaused = false;
    gameIsPlaying = false;


    //& Affichage du menu principal
    drawHomeMenu();

    //& Affichage des paramètres
    if (settingsPause) {
      drawSettingsMenu();
    }
  }

  if (leftClickPressed) {
    leftClickPressed = false;
  }
}