//^ OUTILS

//~ Afficher une interface
function drawInterface([x, y, w, h], img = undefined) {
  stroke(0);

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
  return mouseIsPressed && pointIsInRect(mouseX, mouseY, x, y, h, w);
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
  gameIsPaused = false;

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

  fill(255, 220, 205);
  drawInterface(interfaceMenu, Background);


  let play = [
    viewportDisplayWidth / 2 - buttonWidthBIG / 2,
    viewportDisplayHeight / 2 - buttonHeightBIG / 2,
    buttonWidthBIG,
    buttonHeightBIG,
  ];


  image(GUIStart, play[0], play[1], play[2], play[3])


  fill(120, 120, 120);
  drawButton(buttonParameters);
  drawText("Paramètres", 15, textParameters, "center");
  fill(0);

  if (buttonClicked(play)) {
    gameIsPlaying = true;
    inGame = true;
    gameIsPaused = false;
  }
  if (buttonClicked(buttonParameters)) {
    settingsHome = true;
  }
}



//~ MENU PAUSE
function drawPauseMenu() {
  //? Cacher le troc si il s'affiche
  PressInteractPNJ = false;
  PressTalkPNJ = false

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
  let buttonExitY = interfaceMenuY + interfaceMenuHeight / 1.5;
  let textExitX = buttonExitX + buttonExitW / 2;
  let buttonExit = [buttonExitX, buttonExitY, buttonExitW, buttonExitH];

  let buttonReturnW = 150;
  let buttonReturnH = 20;
  let buttonReturnX =
    interfaceMenuX + interfaceMenuWidth / 2 - buttonReturnW / 2;
  let buttonReturnY = interfaceMenuY + interfaceMenuHeight / 4;
  let textReturnX = buttonReturnX + buttonReturnW / 2;
  let buttonReturn = [
    buttonReturnX,
    buttonReturnY,
    buttonReturnW,
    buttonReturnH,
  ];

  let buttonSettingsW = 150;
  let buttonSettingsH = 20;
  let buttonSettingsX =
    interfaceMenuX + interfaceMenuWidth / 2 - buttonSettingsW / 2;
  let buttonSettingsY = interfaceMenuY + interfaceMenuHeight / 2.2;
  let textSettingsX = buttonSettingsX + buttonSettingsW / 2;
  let buttonSettings = [
    buttonSettingsX,
    buttonSettingsY,
    buttonSettingsW,
    buttonSettingsH,
  ];

  // fill(0, 0, 0, 50)
  // rect(0, 0, viewportDisplayWidth, viewportDisplayHeight);

  fill(255);
  drawInterface(interfaceMenu, GUIForEscape);

  fill(255);
  drawButton(buttonReturn);
  drawText("Return au jeu", 15, [textReturnX, buttonReturnY], "center");
  fill(255);
  drawButton(buttonSettings);
  drawText("Settings", 15, [textSettingsX, buttonSettingsY], "center");
  fill(255);
  drawButton(buttonExit);
  drawText("Retour au menu", 15, [textExitX, buttonExitY], "center");

  if (buttonClicked(buttonExit)) {
    inGame = false;
    gameIsPlaying = false;
    gameIsPaused = false;
  }
  if (buttonClicked(buttonSettings)) {
    settingsPause = true;
    gameIsPlaying = false;
  }
  if (buttonClicked(buttonReturn)) {
    gameIsPaused = false;
  }
}



//~ MENU HOME SETTINGS
function drawSettingInHome() {
  playerDead = false;

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
  let buttonMusicY = interfaceMenuY + interfaceMenuHeight / 2.2;
  let textMusicX = buttonMusicX + buttonMusicW / 2;

  let buttonExitW = 150;
  let buttonExitH = 20;
  let buttonExitX = interfaceMenuX + interfaceMenuWidth / 2 - buttonExitW / 2;
  let buttonExitY = interfaceMenuY + interfaceMenuHeight / 1.5;
  let textExitX = buttonExitX + buttonMusicW / 2;

  let ButtonExitP = [buttonExitX, buttonExitY, buttonExitW, buttonExitH];

  let buttonSon = [buttonSonX, buttonSonY, buttonSonW, buttonSonH];

  let buttonMusic = [buttonMusicX, buttonMusicY, buttonMusicW, buttonMusicH];

  drawInterface(interfaceMenu, GUIParameters);

  fill(ColorForRectSong);
  drawButton(buttonSon);
  drawText("SON", 15, [textSonX, buttonSonY], "center");

  fill(ColorForRectMusic);
  drawButton(buttonMusic);
  drawText("MUSIC", 15, [textMusicX, buttonMusicY], "center");

  fill(255);
  drawButton(ButtonExitP);
  drawText("Retour au menu", 15, [textExitX, buttonExitY], "center");

  if (buttonClicked(ButtonExitP)) {
    settingsHome = false;
    gameIsPlaying = false;
    inGame = false;
    gameIsPaused = false;
  }
  if (buttonClicked(buttonMusic)) {
    PlayMusic();
  }
  if (buttonClicked(buttonSon)) {
    PlaySong();
  }
}



//~ MENU PAUSE SETTINGS
function drawSettingInPause() {

  let YouCanPlayMusic = true;

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
  let buttonMusicY = interfaceMenuY + interfaceMenuHeight / 2.5;
  let textMusicX = buttonMusicX + buttonMusicW / 2;

  let buttonExitW = 150;
  let buttonExitH = 20;
  let buttonExitX = interfaceMenuX + interfaceMenuWidth / 2 - buttonExitW / 2;
  let buttonExitY = interfaceMenuY + interfaceMenuHeight / 1.4;
  let textExitX = buttonExitX + buttonMusicW / 2;


  let buttonFPSW = 150;
  let buttonFPSH = 20;
  let buttonFPSX = interfaceMenuX + interfaceMenuWidth / 2 - buttonFPSW / 2;
  let buttonFPSY = interfaceMenuY + interfaceMenuHeight / 1.8;
  let textFPSX = buttonFPSX + buttonMusicW / 2;

  let buttonExit = [buttonExitX, buttonExitY, buttonExitW, buttonExitH];

  let buttonSon = [buttonSonX, buttonSonY, buttonSonW, buttonSonH];

  let buttonMusic = [buttonMusicX, buttonMusicY, buttonMusicW, buttonMusicH];

  let buttonFPS = [buttonFPSX, buttonFPSY, buttonFPSW, buttonFPSH];


  fill(255);
  drawInterface(interfaceMenu, GUIParameters);


  fill(ColorForRectFPS);
  drawButton(buttonFPS);
  drawText("FPS", 15, [textFPSX, buttonFPSY], "center");


  fill(ColorForRectSong);
  drawButton(buttonSon);
  drawText("SON", 15, [textSonX, buttonSonY], "center");

  fill(ColorForRectMusic);
  drawButton(buttonMusic);
  drawText("MUSIC", 15, [textMusicX, buttonMusicY], "center");

  fill(255);
  drawButton(buttonExit);
  drawText("Retour au menu", 15, [textExitX, buttonExitY], "center");

  if (buttonClicked(buttonExit)) {
    gameIsPaused = false;
    settingsPause = false;
    gameIsPlaying = true;
    PlayerInSettingsPause = false;
    inGame = true;
  }
  if (buttonClicked(buttonMusic) && YouCanPlayMusic === true) {
    PlayMusic();
  }
  if (buttonClicked(buttonSon)) {
    PlaySong();
  }
  if (buttonClicked(buttonFPS)) {
    gameFPS();
  }
}



//~ MENU DEATH
function drawDeath() {
  if (playerDead === false) {
    fill(0, 0, 0, 50);
    rect(0, 0, width, height);

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

    let buttonStatW = 150;
    let buttonStatH = 20;
    let buttonStatX = interfaceMenuX + interfaceMenuWidth / 2 - buttonStatW / 2;
    let buttonStatY = interfaceMenuY + interfaceMenuHeight / 4;
    let textStatX = buttonStatX + buttonStatW / 2;

    let buttonExitW = 150;
    let buttonExitH = 20;
    let buttonExitX = interfaceMenuX + interfaceMenuWidth / 2 - buttonExitW / 2;
    let buttonExitY = interfaceMenuY + interfaceMenuHeight / 1.8;
    let textExitX = buttonExitX + buttonExitW / 2;

    let buttonReturnToHomeEndGame = [
      buttonExitX,
      buttonExitY,
      buttonExitW,
      buttonExitH,
    ];

    let buttonStat = [buttonStatX, buttonStatY, buttonStatW, buttonStatH];

    fill(255);
    drawInterface(interfaceMenu, GUIOfDeath);

    fill(255);
    drawButton(buttonStat);
    drawText("STATS", 15, [textStatX, buttonStatY], "center");

    fill(255);
    drawButton(buttonReturnToHomeEndGame);
    drawText("Retour au menu", 15, [textExitX, buttonExitY], "center");

    if (buttonClicked(buttonReturnToHomeEndGame)) {
      //playerDead = true
      inGame = false;
      gameIsPlaying = false;
      gameIsPaused = false;
      endInventory = false;
      settingsHome = false;
      // isStats = false;
      // isMenu = false;
      // CinematicIsStart = true
      // YouCanEscape = true;
      // PlayerCanMove = true
      healthPlayer = maxHealth;
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
    fill(0, 0, 0, 50);
    rect(0, 0, width, height);

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

    let buttonReturnToHome = [
      buttonExitX,
      buttonExitY,
      buttonExitW,
      buttonExitH,
    ];

    fill(255);
    drawInterface(interfaceMenu, GUIForStats);

    fill(255);
    drawButton(buttonReturnToHome);
    drawText("Retour au menu", 15, [textExitX, buttonExitY], "center");

    if (buttonClicked(buttonReturnToHome)) {
      playerStat = true;
      inGame = false;
      gameIsPlaying = false;
      gameIsPaused = false;
      endInventory = false;
      settingsHome = false;
      // isStats = false;
      // isMenu = false;
      // CinematicIsStart = true
      // YouCanEscape = true;
      // PlayerCanMove = true
      healthPlayer = maxHealth;
    }
  }
}

//~ BARRE DE VIE
function drawLifeBar() {
  let HeartX = (viewportDisplayWidth/2) - (maxHealth * MargeBarVie)/2;
  let HeartY = viewportDisplayHeight - MargeBarVie*2


  for (let i = 0; i < maxHealth; i++) {
    if (i+1 <= healthPlayer){
      image(GamerHeart, MargeBarVie * i + HeartX, HeartY, 30, 30);
    }else{
      image(GamerHeartBlack, MargeBarVie * i + HeartX, HeartY, 30, 30);

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
    console.log("je peut echanger")

    image(GUITroc, x / 1.23, y / 1.78, w * 2, h * 1.4);
    // 800 215.5 250 500


    //? Lignes de slot
    let widthRow = w;
    let heightRow = h / echangePNJ.length; //& <- nombre de ligne
    let postionXRow = x;

    //? Position pour échange
    let widthElement = 20;
    let heightElement = 20;

    //? Affichage du troc
    if (!PNJSeePlayer) {
      PressInteractPNJ = false;
    }

    //? Bouton au clic
    let buttonHasBeenClicked = false;



    echangePNJ.forEach((echange) => {
      //? Declaration de variables
      let indexEchange = echangePNJ.indexOf(echange);
      let positionYRow = y + heightRow * indexEchange;
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
          fill(252, 208, 117);
          rect(postionXRow, positionYRow, widthRow, heightRow);

          //? Pour chaque ligne creation d'un slot
          Object.entries(echange).forEach((items) => {
            if (items[0] == "demande") {
              items[1].forEach((element) => {
                //? Declaration
                let indexElement = items[1].indexOf(element);
                let positionXElement =
                  x + widthElement * slotSize * indexElement;
                let currentItem = getItems(element);

                //? Affichage du slot
                image(
                  Slot,
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
                let positionXElement =
                  x +
                  widthRow -
                  widthElement * itemSize * indexElement -
                  widthElement * itemSize;
                let currentItem = getItems(element);

                //? Affichage du slot
                image(
                  Slot,
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
  let currentPNJ = ForPNJ.PNJS[currentPNJName]
  let PNJSeePlayer = getPNJSeePlayer(currentPNJName);
  let talkPNJ = getTalkPNJ(currentPNJName);

  let sentenceToTell = ""
  if (PNJSeePlayer){
    if (talkPNJ[currentPNJ.step]){
      //* Vérifier si l'item requis est dans l'inventaire
      if (talkPNJ[currentPNJ.step].itemsNameRequired.includes("none") || Inventory.some(item => talkPNJ[currentPNJ.step].itemsNameRequired.includes(item.name))){
        sentenceToTell = talkPNJ[currentPNJ.step].text
      }else{
        //* Si l'item requis n'est pas dans l'inventaire fermer la discussion
        //* Si le joueur reparle au PNJ, il verra le dernier message du PNJ
        PressTalkPNJ = false
        currentPNJ.step -= 1;
      }
    }else{
      //* Si la discussion est terminée, la fermer
      //* Si le joueur reparle au PNJ, il verra le dernier message du PNJ
      PressTalkPNJ = false
      currentPNJ.step -= 1;
    }
  }

  let fontSize = 20

  //? Afficher la banière du fond
  let ratio = w/talkBackground.width
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
  let interfaceMenuWidth = 500;
  let interfaceMenuHeight = 500;
  let interfaceMenuX = viewportDisplayWidth / 2 - interfaceMenuWidth / 2;
  let interfaceMenuY = viewportDisplayHeight / 2 - interfaceMenuHeight / 2;
  drawTroc(
    interfaceMenuX,
    interfaceMenuY,
    interfaceMenuWidth / 2,
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



//^ LANCER
function setupUI() {
  //? Si je suis en jeu


  if (inGame && settingsHome === false) {
    drawLifeBar();

    //? Si je fait echap (dans le menu pause)

    if (PressInteractPNJ) {
      openTrocMenu();
    }

    if (PressTalkPNJ) {
      openTalkMenu();
    }

    if (settingsPause) {
      PlayerInSettingsPause = true
      drawSettingInPause();
    }
    if (gameIsPaused && !PlayerInSettingsPause) {
      gameIsPlaying = false;
      drawPauseMenu();
    }
    if (healthPlayer === 0) {
      characterMovement = "die"
    } else {
      //? sinon je joue
      gameIsPlaying = true;
    }
    
    displayInventory();
    setupInteractions();
  } else {
    drawHomeMenu();

    if (settingsHome && playerDead === false) {
      settingsHome = true;
      drawSettingInHome();
    }

    gameIsPaused = false;
    gameIsPlaying = false;
  }
}