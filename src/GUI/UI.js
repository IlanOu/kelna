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
function drawButton([x, y, w, h], img = undefined, strokeToggle = true, transparence = 255, color = [255, 255, 255]) {
  if (strokeToggle) {
    stroke(0);
  } else {
    noStroke();
  }

  if (img != undefined) {
    image(img, x, y, w, h);
  } else {
    fill(color[0], color[1], color[2], transparence)
    rect(x, y, w, h);
  }
}

//~ Afficher du texte
function drawText(Text, fontSize, [x, y], [textAlignmentX, textAlignmentY], color = [0, 0, 0], underline = false) {
  fill(color[0], color[1], color[2]);
  noStroke();
  textSize(fontSize);
  textAlign(textAlignmentX, textAlignmentY);
  let margeUnderline = 5;
  text(Text, x, y + fontSize);

  if (underline) {

    let offSetX = 0;
    switch (textAlignmentX) {

      case LEFT:
        offSetX = textWidth(Text) / 2
        break

      case RIGHT:
        offSetX = -textWidth(Text) / 2
        break
    }
    if (textAlignmentY != BASELINE) {
      underline = false
    } else {
      rect(x - textWidth(Text) / 2 + offSetX, y + fontSize + margeUnderline, textWidth(Text), 1)
    }



  }

}

//~  Au clic du bouton
function buttonClicked([x, y, h, w]) {
  buttonClickSound = true
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
  cursor('default')
  image(backgroundImageUI, 0, 0, backgroundImageUI.width, backgroundImageUI.height)
  textFont(classicFont)


  //* --------------------------------
  //* ---------- Variables -----------
  //* --------------------------------


  let widthButton = (viewportDisplayWidth / 5)
  let heightButton = 60;
  let marginButton = viewportDisplayHeight / 12.5;
  let centerYPage = viewportDisplayHeight / 2
  let fontSizeHome = 30
  let centerButtonY = centerYPage - (viewportDisplayHeight / 42)


  let interfaceMenu = [
    0,
    0,
    viewportDisplayWidth,
    viewportDisplayHeight,
  ];

  let play = [
    viewportDisplayWidth / 2 - widthButton / 2,
    centerButtonY,
    widthButton,
    heightButton,
  ];

  let textPlay = [
    play[0] + play[2] / 2,
    play[1] + (heightButton / 2) - (fontSizeHome / 2),
  ];




  let buttonParameters = [
    viewportDisplayWidth / 2 - widthButton / 2,
    centerButtonY + marginButton,
    widthButton,
    heightButton,
  ];

  let textParameters = [
    buttonParameters[0] + buttonParameters[2] / 2,
    buttonParameters[1] + (heightButton / 2) - (fontSizeHome / 2),
  ];




  let credits = [
    viewportDisplayWidth / 2 - widthButton / 2,
    centerButtonY + marginButton * 2,
    widthButton,
    heightButton,
  ];

  let textCredits = [
    credits[0] + credits[2] / 2,
    credits[1] + (heightButton / 2) - (fontSizeHome / 2),
  ];




  //* --------------------------------
  //* ---------- Evenements ----------
  //* --------------------------------

  if (buttonClicked(play) && !settingsPause) {
    if (playerDead) {
      initVariables()
    }
    soundEffects()
    musicCredits.pause()
    leftClickPressed = false
    startGame = true
  }



  if (buttonClicked(buttonParameters) && !settingsPause) {
    leftClickPressed = false
    settingsPause = true
    soundEffects()
  }



  if (buttonClicked(credits) && !settingsPause && !creditsInHome) {
    creditsInHome = true;

    inGame = true
    gameIsPlaying = true;
    leftClickPressed = false
    soundEffects()
    drawCredits()
  }


  //* --------------------------------
  //* ---------- Affichage -----------
  //* --------------------------------

  //? Dessiner l'interface
  fill(255, 220, 205);
  drawInterface(interfaceMenu, GUIStart);

  //? Jouer
  fill(120, 120, 120);
  drawButton(play, undefined, false, 0)
  drawText("Jouer", fontSizeHome, textPlay, [CENTER, BASELINE], [0, 0, 0], buttonHover(play));


  //? Paramètres
  fill(120, 120, 120);
  drawButton(buttonParameters, undefined, false, 0);
  drawText("Paramètres", fontSizeHome, textParameters, [CENTER, BASELINE], [0, 0, 0], buttonHover(buttonParameters));
  fill(0);


  //? Credits
  fill(120, 120, 120);
  drawButton(credits, undefined, false, 0);
  drawText("Credits", fontSizeHome, textCredits, [CENTER, BASELINE], [0, 0, 0], buttonHover(credits));
  fill(0);
}



//~ MENU PAUSE
function drawPauseMenu() {
  cursor('default')
  image(backgroundImageUI, 0, 0, backgroundImageUI.width, backgroundImageUI.height)
  textFont(classicFont)

  //? Cacher le troc si il s'affiche
  PressInteractPNJ = false;
  PressTalkPNJ = false


  //* --------------------------------
  //* ---------- Variables -----------
  //* --------------------------------

  //? Interface
  let interfaceMenuWidth = viewportDisplayWidth; // 500
  let interfaceMenuHeight = viewportDisplayHeight;
  let interfaceMenuX = viewportDisplayWidth / 2 - interfaceMenuWidth / 2;
  let interfaceMenuY = viewportDisplayHeight / 2 - interfaceMenuHeight / 2;
  let widthPage = (interfaceMenuWidth / 5)

  let centerRightPage = (widthPage * 3);
  let centerLeftPage = (widthPage * 1.8);

  let marginButton = interfaceMenuWidth / 20;
  let widthButtonPause = interfaceMenuWidth / 7;
  let centerYPage = interfaceMenuY + interfaceMenuHeight / 2
  let fontSizePause = 30;

  let marginLeftPage = 30


  let interfaceMenu = [
    interfaceMenuX,
    interfaceMenuY,
    interfaceMenuWidth,
    interfaceMenuHeight,
  ];





  //? Bouton continuer de jouer
  let buttonBackW = widthButtonPause;
  let buttonBackH = fontSizePause;
  let buttonBackX = centerRightPage
  let buttonBackY = centerYPage - marginButton;
  let textReturnX = buttonBackX
  let buttonBack = [
    buttonBackX,
    buttonBackY,
    buttonBackW,
    buttonBackH,
  ];

  //? Bouton paramètres
  let buttonSettingsW = 150;
  let buttonSettingsH = fontSizePause;
  let buttonSettingsX = centerRightPage
  let buttonSettingsY = centerYPage;
  let textSettingsX = buttonSettingsX
  let buttonSettings = [
    buttonSettingsX,
    buttonSettingsY,
    buttonSettingsW,
    buttonSettingsH,
  ];

  //? Bouton Retour au Menu
  let buttonExitW = 150;
  let buttonExitH = fontSizePause;
  let buttonExitX = centerRightPage //interfaceMenuX + interfaceMenuWidth / 2 - buttonExitW / 2;
  let buttonExitY = centerYPage + marginButton;
  let textExitX = buttonExitX
  let buttonExit = [
    buttonExitX,
    buttonExitY,
    buttonExitW,
    buttonExitH
  ];



  let buttonsWidth = 50
  let buttonsHeight = 50
  let buttonXOnPage = centerLeftPage - (buttonsWidth / 2)
  let buttonYOnPage = interfaceMenuY + interfaceMenuHeight / 3

  let secondParagraphY = buttonYOnPage + buttonsHeight + (marginLeftPage * 5)


  let buttonSpaceWidth = buttonsWidth * 4

  //* --------------------------------
  //* ---------- Affichage -----------
  //* --------------------------------

  drawInterface(interfaceMenu, GUIForEscape);

  drawButton(buttonBack, undefined, false, 0);
  drawText("Continuer", fontSizePause, [textReturnX, buttonBackY], [LEFT, BASELINE], [0, 0, 0], buttonHover(buttonBack));

  drawButton(buttonSettings, undefined, false, 0);
  drawText("Paramètres", fontSizePause, [textSettingsX, buttonSettingsY], [LEFT, BASELINE], [0, 0, 0], buttonHover(buttonSettings));

  drawButton(buttonExit, undefined, false, 0);
  drawText("Retour au menu", fontSizePause, [textExitX, buttonExitY], [LEFT, BASELINE], [0, 0, 0], buttonHover(buttonExit));


  textFont(pixelFont)
  drawText("Déplacements:", fontSizePause, [buttonXOnPage + (buttonsWidth / 2), buttonYOnPage - fontSizePause - marginLeftPage], [CENTER, BASELINE]);


  image(buttonZ, buttonXOnPage, buttonYOnPage, buttonsWidth, buttonsHeight)
  image(buttonQ, buttonXOnPage - buttonsHeight, buttonYOnPage + buttonsHeight, buttonsWidth, buttonsHeight)
  image(buttonS, buttonXOnPage, buttonYOnPage + buttonsHeight, buttonsWidth, buttonsHeight)
  image(buttonD, buttonXOnPage + buttonsHeight, buttonYOnPage + buttonsHeight, buttonsWidth, buttonsHeight)
  image(buttonSpace, buttonXOnPage - (buttonSpaceWidth / 2) + (buttonsWidth / 2), buttonYOnPage + (buttonsHeight * 2) + marginLeftPage, buttonSpaceWidth, buttonsHeight)


  drawText("Intéractions:", fontSizePause, [buttonXOnPage + (buttonsWidth / 2), secondParagraphY], [CENTER, BASELINE])

  image(buttonE, buttonXOnPage, secondParagraphY + buttonsHeight, buttonsWidth, buttonsHeight)

  /*
  noFill()
  stroke(0)
  strokeWeight(5)
  rect((interfaceMenuWidth / 5) * 2, 0, widthPage, viewportDisplayHeight)
  strokeWeight(1)
  */
  //& --------------------------------
  //& ---------- Evenements ----------
  //& --------------------------------

  if (buttonClicked(buttonBack)) {
    gameIsPaused = false
    leftClickPressed = false
    soundEffects()
  }


  if (buttonClicked(buttonSettings)) {
    settingsPause = true
    leftClickPressed = false
    soundEffects()
  }


  if (buttonClicked(buttonExit)) {
    inGame = false
    leftClickPressed = false
    soundEffects()
  }

}


//~ MENU HOME SETTINGS
function drawSettingsMenu() {
  cursor('default')
  image(backgroundImageUI, 0, 0, backgroundImageUI.width, backgroundImageUI.height)

  textFont(pixelFont)

  //* --------------------------------
  //* ---------- Variables -----------
  //* --------------------------------

  let interfaceMenuWidth = 594;
  let interfaceMenuHeight = 810;
  let interfaceMenuX = viewportDisplayWidth / 2 - interfaceMenuWidth / 2;
  let interfaceMenuY = viewportDisplayHeight / 2 - interfaceMenuHeight / 2;
  let interfaceMenu = [
    interfaceMenuX,
    interfaceMenuY,
    interfaceMenuWidth,
    interfaceMenuHeight,
  ];

  let buttonSonW = 290;
  let buttonSonH = 70;
  let buttonSonX = interfaceMenuX + interfaceMenuWidth / 2 - buttonSonW / 2;
  let buttonSonY = interfaceMenuY + interfaceMenuHeight / 4;
  let textSonX = buttonSonX + buttonSonW / 2;

  let buttonMusicW = 290;
  let buttonMusicH = 70;
  let buttonMusicX = interfaceMenuX + interfaceMenuWidth / 2 - buttonMusicW / 2;
  let buttonMusicY = interfaceMenuY + interfaceMenuHeight / 2.8
  let textMusicX = buttonMusicX + buttonMusicW / 2;

  let buttonToggleFPSW = 290;
  let buttonToggleFPSH = 70;
  let buttonToggleFPSX = interfaceMenuX + interfaceMenuWidth / 2 - buttonToggleFPSW / 2;
  let buttonToggleFPSY = interfaceMenuY + interfaceMenuHeight / 2.15;
  let textToggleFPSX = buttonToggleFPSX + buttonMusicW / 2;

  let buttonToggleCameraShakeW = 290;
  let buttonToggleCameraShakeH = 70;
  let buttonToggleCameraShakeX = interfaceMenuX + interfaceMenuWidth / 2 - buttonToggleCameraShakeW / 2;
  let buttonToggleCameraShakeY = interfaceMenuY + interfaceMenuHeight / 1.75;
  let textToggleCameraShakeX = buttonToggleCameraShakeX + buttonMusicW / 2;

  let buttonExitW = 290;
  let buttonExitH = 70;
  let buttonExitX = interfaceMenuX + interfaceMenuWidth / 2 - buttonExitW / 2;
  let buttonExitY = interfaceMenuY + interfaceMenuHeight / 1.2;
  let textExitX = buttonExitX + buttonExitW / 2;




  let buttonSon = [buttonSonX, buttonSonY, buttonSonW, buttonSonH];

  let buttonMusic = [buttonMusicX, buttonMusicY, buttonMusicW, buttonMusicH];

  let ButtonToggleFPS = [buttonToggleFPSX, buttonToggleFPSY, buttonToggleFPSW, buttonToggleFPSH];

  let ButtonToggleCameraShake = [buttonToggleCameraShakeX, buttonToggleCameraShakeY, buttonToggleCameraShakeW, buttonToggleCameraShakeH];


  let ButtonBack = [buttonExitX, buttonExitY, buttonExitW, buttonExitH];



  let titleSettingsX = buttonExitX + buttonExitW / 2;
  let titleSettingsY = interfaceMenuY + interfaceMenuHeight / 16;

  //* --------------------------------
  //* ---------- Affichage -----------
  //* --------------------------------


  drawInterface(interfaceMenu, GUIParameters);


  drawText("PARAMETRES", 90, [titleSettingsX, titleSettingsY], [CENTER, BASELINE], [0, 0, 0])



  if (!soundEnabled && !buttonHover(buttonSon)) {
    drawButton(buttonSon, checkedLongButton, true, 255);
  } else {
    drawButton(buttonSon, checkedLongButtonHover, true, 255);
  }
  if (soundEnabled && !buttonHover(buttonSon)) {
    drawButton(buttonSon, longButton, true, 255);
  } else if (buttonHover(buttonSon) && soundEnabled) {
    drawButton(buttonSon, longButtonHover, true, 255);
  }
  drawText("Sons", 50, [textSonX, buttonSonY - 5], [CENTER, BASELINE], [0, 0, 0]);



  if (!musicEnabled && !buttonHover(buttonMusic)) {
    drawButton(buttonMusic, checkedLongButton, true, 255);
  } else {
    drawButton(buttonMusic, checkedLongButtonHover, true, 255);
  }
  if (musicEnabled && !buttonHover(buttonMusic)) {
    drawButton(buttonMusic, longButton, true, 255);
  } else if (buttonHover(buttonMusic) && musicEnabled) {
    drawButton(buttonMusic, longButtonHover, true, 255);
  }
  drawText("Musique", 50, [textMusicX, buttonMusicY - 5], [CENTER, BASELINE]);



  if (!fpsEnabled && !buttonHover(ButtonToggleFPS)) {
    drawButton(ButtonToggleFPS, checkedLongButton, true, 255);
  } else {
    drawButton(ButtonToggleFPS, checkedLongButtonHover, true, 255);
  }
  if (fpsEnabled && !buttonHover(ButtonToggleFPS)) {
    drawButton(ButtonToggleFPS, longButton, true, 255);
  } else if (buttonHover(ButtonToggleFPS) && fpsEnabled) {
    drawButton(ButtonToggleFPS, longButtonHover, true, 255);
  }
  drawText("FPS", 50, [textToggleFPSX, buttonToggleFPSY - 5], [CENTER, BASELINE]);





  if (!cameraShakeEnabled && !buttonHover(ButtonToggleCameraShake)) {
    drawButton(ButtonToggleCameraShake, checkedLongButton, true, 255);
  } else {
    drawButton(ButtonToggleCameraShake, checkedLongButtonHover, true, 255);
  }
  if (cameraShakeEnabled && !buttonHover(ButtonToggleCameraShake)) {
    drawButton(ButtonToggleCameraShake, longButton, true, 255);
  } else if (buttonHover(ButtonToggleCameraShake) && cameraShakeEnabled) {
    drawButton(ButtonToggleCameraShake, longButtonHover, true, 255);
  }
  drawText("Tremblements", 48, [textToggleCameraShakeX, buttonToggleCameraShakeY - 5], [CENTER, BASELINE]);




  if (buttonHover(ButtonBack)) {
    drawButton(ButtonBack, longButtonHover, true, 255);
  } else {
    drawButton(ButtonBack, longButton, true, 255);
  }
  drawText("Retour", 50, [textExitX, buttonExitY - 5], [CENTER, BASELINE]);




  //* --------------------------------
  //* ---------- Evenements ----------
  //* --------------------------------

  if (buttonClicked(buttonSon) && settingsPause) {
    leftClickPressed = false
    soundEffects()
    PlaySong()
  }
  if (buttonClicked(buttonMusic) && settingsPause) {
    PlayMusic()
    soundEffects()
    leftClickPressed = false
  }
  if (buttonClicked(ButtonToggleFPS) && settingsPause) {
    fpsEnabled = !fpsEnabled
    leftClickPressed = false
    soundEffects()
  }
  if (buttonClicked(ButtonToggleCameraShake) && settingsPause) {
    cameraShakeEnabled = !cameraShakeEnabled
    leftClickPressed = false
    soundEffects()
  }
  if (buttonClicked(ButtonBack) && settingsPause) {
    leftClickPressed = false
    settingsPause = false
    soundEffects()
  }


}


//~ MENU DEATH
function drawDeath() {
  characterMovement = "idle"
  cursor('default')
  textFont(pixelFont)

  if (!dieSoundPlay) {
    DieGameVoice()
    dieSoundPlay = true
  }
  playerDead = true
  fill(0, 0, 0, 50);
  rect(0, 0, width, height);

  gameIsPaused = true;

  //* --------------------------------
  //* ---------- Variables -----------
  //* --------------------------------

  let interfaceMenuWidth = 900;
  let interfaceMenuHeight = 500;
  let interfaceMenuX = viewportDisplayWidth / 2 - interfaceMenuWidth / 2;
  let interfaceMenuY = viewportDisplayHeight / 2 - interfaceMenuHeight / 2;
  let interfaceMenu = [
    interfaceMenuX,
    interfaceMenuY,
    interfaceMenuWidth,
    interfaceMenuHeight,
  ];


  let buttonExitW = 200;
  let buttonExitH = 100;
  let buttonExitX = interfaceMenuX + interfaceMenuWidth / 2 - buttonExitW / 2;
  let buttonExitY = interfaceMenuY + interfaceMenuHeight / 1.5;
  let textExitX = buttonExitX + buttonExitW / 2;

  let buttonBackToHomeEndGame = [
    buttonExitX,
    buttonExitY,
    buttonExitW,
    buttonExitH,
  ];

  let buttonStatsY = interfaceMenuY + interfaceMenuHeight / 2.5;

  let buttonStats = [
    buttonExitX,
    buttonStatsY,
    buttonExitW,
    buttonExitH
  ]


  let titleDieX = buttonExitX + buttonExitW / 2;
  let titleDieY = interfaceMenuY + interfaceMenuHeight / 5;



  //* --------------------------------
  //* ---------- Evenements ----------
  //* --------------------------------

  if (buttonClicked(buttonBackToHomeEndGame)) {
    leftClickPressed = false
    inGame = false
    soundEffects()
  }

  if (buttonClicked(buttonStats)) {
    leftClickPressed = false
    statsMenu = true
    soundEffects()
  }


  //* --------------------------------
  //* ---------- Affichage -----------
  //* --------------------------------


  drawInterface(interfaceMenu, GUIOfDeath);
  drawText("  VOUS ETES MORT !", 60, [titleDieX, titleDieY], [CENTER, BASELINE])


  if (buttonHover(buttonStats)) {
    drawButton(buttonStats, smallButtonHover, true, 255);
  } else {
    drawButton(buttonStats, smallButton, true, 255);
  }
  drawText("STATS", 60, [textExitX, buttonStatsY], [CENTER, BASELINE], [0, 0, 0]);

  if (buttonHover(buttonBackToHomeEndGame)) {
    drawButton(buttonBackToHomeEndGame, smallButtonHover, true, 255);
  } else {
    drawButton(buttonBackToHomeEndGame, smallButton, true, 255);
  }
  drawText("MENU", 60, [textExitX, buttonExitY], [CENTER, BASELINE], [0, 0, 0]);

}


//~ MENU STAT
function drawStats() {
  textFont(pixelFont)
  cursor('default')

  image(backgroundImageUI, 0, 0, backgroundImageUI.width, backgroundImageUI.height)
  gameIsPaused = true;

  //* --------------------------------
  //* ---------- Variables -----------
  //* --------------------------------

  let titleFontSize = 90
  let defaultFontSize = 25

  let margin = 40

  let marginTop = 40
  let marginBetweenLines = 30

  let interfaceMenuWidth = 600;
  let interfaceMenuHeight = 800;
  let interfaceMenuX = viewportDisplayWidth / 2 - interfaceMenuWidth / 2;
  let interfaceMenuY = viewportDisplayHeight / 2 - interfaceMenuHeight / 2;

  let interfaceMenu = [
    interfaceMenuX,
    interfaceMenuY,
    interfaceMenuWidth,
    interfaceMenuHeight
  ]

  let buttonExitW = 200;
  let buttonExitH = 100;
  let buttonExitX = interfaceMenuX + interfaceMenuWidth / 2 - buttonExitW / 2;
  let buttonExitY = interfaceMenuY + interfaceMenuHeight - buttonExitH * 1.5;

  let textExitX = buttonExitX + buttonExitW / 2;
  let buttonBackToHome = [
    buttonExitX,
    buttonExitY,
    buttonExitW,
    buttonExitH
  ]

  let titleStatsX = buttonExitX + buttonExitW / 2;
  let titleStatsY = interfaceMenuY + margin;


  let titleTimeSpent = "Temps passé en jeu :\n"
  let textTimeSpent = timeConversion(Math.floor(statistiques.timeSpentInGame))

  let titleDistanceWalked = "Distance parcourue :\n"
  let textDistanceWalked = statistiques.distanceWalked + " blocs"

  let titlePlayerSpeed = "Vitesse moyenne :\n"
  let textPlayerSpeed = statistiques.playerSpeed + "km/h"

  let titleMobsKilled = "Ennemis tués :\n"
  let textMobsKilled = statistiques.mobsKilled

  let titleDamagesGet = "Nombre de dégâts subis :\n"
  let textDamagesGet = statistiques.damagesGet

  let titleDamagesDones = "Nombre de dégâts infligés :\n"
  let textDamagesDones = statistiques.damagesDones

  let titleHealCount = "Nombre de coeurs régénérés :\n"
  let textHealCount = statistiques.healCount

  let titleDeathCount = "Nombre de morts :\n"
  let textDeathCount = statistiques.deathCount



  let startParagraphY = titleStatsY + titleFontSize
  let startParagraphXLeft = interfaceMenuX + margin
  let startParagraphXRight = interfaceMenuX + interfaceMenuWidth - margin


  //* --------------------------------
  //* ---------- Affichage -----------
  //* --------------------------------


  fill(255);
  drawInterface(interfaceMenu, GUIParameters);

  drawText("STATS", titleFontSize, [titleStatsX, titleStatsY], [CENTER, BASELINE], [0, 0, 0])


  drawText(titleTimeSpent, defaultFontSize, [startParagraphXLeft, startParagraphY + (0 * marginBetweenLines) + marginTop], [LEFT, BASELINE], [0, 0, 0])
  drawText(textTimeSpent, defaultFontSize, [startParagraphXRight, startParagraphY + (0 * marginBetweenLines) + marginTop], [RIGHT, BASELINE], [0, 0, 0])

  drawText(titleDistanceWalked, defaultFontSize, [startParagraphXLeft, startParagraphY + (2 * marginBetweenLines) + marginTop], [LEFT, BASELINE], [0, 0, 0])
  drawText(textDistanceWalked, defaultFontSize, [startParagraphXRight, startParagraphY + (2 * marginBetweenLines) + marginTop], [RIGHT, BASELINE], [0, 0, 0])

  drawText(titlePlayerSpeed, defaultFontSize, [startParagraphXLeft, startParagraphY + (4 * marginBetweenLines) + marginTop], [LEFT, BASELINE], [0, 0, 0])
  drawText(textPlayerSpeed, defaultFontSize, [startParagraphXRight, startParagraphY + (4 * marginBetweenLines) + marginTop], [RIGHT, BASELINE], [0, 0, 0])

  drawText(titleMobsKilled, defaultFontSize, [startParagraphXLeft, startParagraphY + (6 * marginBetweenLines) + marginTop], [LEFT, BASELINE], [0, 0, 0])
  drawText(textMobsKilled, defaultFontSize, [startParagraphXRight, startParagraphY + (6 * marginBetweenLines) + marginTop], [RIGHT, BASELINE], [0, 0, 0])

  drawText(titleDamagesGet, defaultFontSize, [startParagraphXLeft, startParagraphY + (8 * marginBetweenLines) + marginTop], [LEFT, BASELINE], [0, 0, 0])
  drawText(textDamagesGet, defaultFontSize, [startParagraphXRight, startParagraphY + (8 * marginBetweenLines) + marginTop], [RIGHT, BASELINE], [0, 0, 0])

  drawText(titleDamagesDones, defaultFontSize, [startParagraphXLeft, startParagraphY + (10 * marginBetweenLines) + marginTop], [LEFT, BASELINE], [0, 0, 0])
  drawText(textDamagesDones, defaultFontSize, [startParagraphXRight, startParagraphY + (10 * marginBetweenLines) + marginTop], [RIGHT, BASELINE], [0, 0, 0])

  drawText(titleHealCount, defaultFontSize, [startParagraphXLeft, startParagraphY + (12 * marginBetweenLines) + marginTop], [LEFT, BASELINE], [0, 0, 0])
  drawText(textHealCount, defaultFontSize, [startParagraphXRight, startParagraphY + (12 * marginBetweenLines) + marginTop], [RIGHT, BASELINE], [0, 0, 0])

  drawText(titleDeathCount, defaultFontSize, [startParagraphXLeft, startParagraphY + (14 * marginBetweenLines) + marginTop], [LEFT, BASELINE], [0, 0, 0])
  drawText(textDeathCount, defaultFontSize, [startParagraphXRight, startParagraphY + (14 * marginBetweenLines) + marginTop], [RIGHT, BASELINE], [0, 0, 0])



  fill(255);
  if (buttonHover(buttonBackToHome)) {
    drawButton(buttonBackToHome, smallButtonHover, true, 255);
  } else {
    drawButton(buttonBackToHome, smallButton, true, 255);
  }
  drawText("RETOUR", 60, [textExitX, buttonExitY], [CENTER, BASELINE]);



  //* --------------------------------
  //* ---------- Evenements ----------
  //* --------------------------------


  if (buttonClicked(buttonBackToHome)) {
    leftClickPressed = false
    statsMenu = false
    soundEffects()
  }
}




//^ --------------------------------------------------------------------------
//^                      Affichage des éléments à l'écran                     
//^ --------------------------------------------------------------------------

function drawStartGame() {

  image(backgroundImageUI, 0, 0, (viewportDisplayWidth / viewportDisplayHeight) * backgroundImageUI.width, (viewportDisplayWidth / viewportDisplayHeight) * backgroundImageUI.height);
  fill(255);

  inGame = true
  startGame = false

}


//~ BARRE DE VIE
function drawLifeBar(x, y) {

  for (let i = 0; i < maxHealth; i++) {
    if (i + 1 <= healthPlayer) {
      image(GameHeart, lifeBarSize * i + x, y, heartSize, heartSize);
    } else {
      image(GameHeartBlack, lifeBarSize * i + x, y, heartSize, heartSize);

    }

  }
}


//~ INTERACTIONS
function setupInteractions() {
  fill(255);

  if (aPNJCanTrade()) {
    // console.log('Echange')
    drawKey("E");
  }

  if (aPNJCanTalk()) {
    drawKey("E");
  }

  if (engineOne) {
    if (canEnterInHouse) {
      drawKey("E");
      PressInteractPNJ = false;
      PressTalkPNJ = false
    }

  } else {
    if (canGoOutTheHouse) {
      drawKey("E");
      PressInteractPNJ = false;
      PressTalkPNJ = false
    }
  }
}


//~ TROC
function drawTroc(x, y, w, h) {
  cursor('default')
  textFont(pixelFont)

  //? Affichage de la ligne troc
  let currentPNJ = getPNJName();
  let PNJSeePlayer = getPNJSeePlayer(currentPNJ);
  let echangePNJ = getEchangePNJ(currentPNJ);

  if (echangePNJ != undefined) {
    image(GUITroc, x, y, w, h);

    //? Lignes de slot
    let widthRow = w / 2;
    let heightRow = h * 0.75 / echangePNJ.length; //& <- nombre de ligne
    let postionXRow = x - widthRow / 2 + w / 2;

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

      let arrowSize = 1


      if (buttonHover(positionRow) && !popUpShown) {
        arrowSize = 1.1
      }


      if (buttonClicked(positionRow) && !popUpShown) {
        soundEffects()
        leftClickPressed = false
        haveToTrade = true;
        buttonHasBeenClicked = true;
        popUpShown = true;
        getTrade = echange;
      } else if (!buttonHasBeenClicked) {
        if (waitingAnswer == false) {
          //* Affichage du background du troc

          //? Pour chaque ligne creation d'un slot
          Object.entries(echange).forEach((items) => {

            //? Affichage du arrow troc
            image(
              arrowTroc,
              postionXRow + (widthRow / 2) - (widthElement),
              positionYElement - heightElement / 4,
              widthElement * slotSize * arrowSize,
              heightElement * slotSize * arrowSize
            );


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
  cursor('default')
  textFont(pixelFont)
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
        //? Si l'item requis n'est pas dans l'inventaire fermer la discussion
        //? Si le joueur reparle au PNJ, il verra le dernier message du PNJ
        PressTalkPNJ = false
        currentPNJ.step -= 1;
      }
    } else {
      //? Si la discussion est terminée, la fermer
      //? Si le joueur reparle au PNJ, il verra le dernier message du PNJ
      PressTalkPNJ = false
      currentPNJ.step -= 1;
    }
  }

  let fontSize = 30

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

    //? Effet typewritter
    if (timer && currentIndexTextSpeaking < sentenceToTell.length) {
      currentTextSpeaking += sentenceToTell[currentIndexTextSpeaking]
      currentIndexTextSpeaking++
    }

    //? Changer de phrase
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
    //? Remettre la phrase au début
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

function timerGame() {
  textFont(pixelFont)

  let popupMargin = 40

  let timerFontSize = 20

  let timerPopupWidth = 100
  let timerPopupHeight = 80
  let timerPopupX = viewportDisplayWidth - timerPopupWidth - popupMargin
  let timerPopupY = 0 + popupMargin

  let timerTextX = timerPopupX + timerPopupWidth / 2
  let timerTextY = timerPopupY + (timerPopupHeight / 2) - timerFontSize * 1.5

  let timerTextPosition = [timerTextX, timerTextY]

  image(smallButton, timerPopupX, timerPopupY, timerPopupWidth, timerPopupHeight)
  drawText(" Temps: \n" + timeConversion(Math.floor(statistiques.timeSpentInGame), 1), timerFontSize, timerTextPosition, [CENTER, BASELINE], [0, 0, 0]);

}

//~ Affiche les FPS
function gameFPS() {
  textFont(pixelFont)
  if (fpsEnabled) {
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
      PressInteractPNJ = false;
    }
  }

}

//~ CREDITS END GAME
function drawCredits() {
  textFont(pixelFont)
  gameIsPaused = true;
  endInventory = true;


  textAlign(CENTER, CENTER);
  textSize(32);
  image(backgroundImageUI, 0, 0, (viewportDisplayWidth / viewportDisplayHeight) * backgroundImageUI.width, (viewportDisplayWidth / viewportDisplayHeight) * backgroundImageUI.height);
  //fill(255);
  fill(0)



  for (let i = 0; i < creditsJSON.Credits.length; i++) {

    if (!musicCredits.isPlaying()) {
      musicCredits.loop()
    }

    let credit = creditsJSON.Credits[i];
    let spaceBetweenText = i * 50;
    text(credit, width / 2, PositionCredits + spaceBetweenText);

  }
  PositionCredits -= speedCredits;


  if (PositionCredits < -creditsJSON.Credits.length * 50) {
    if (musicCredits.isPlaying()) {
      musicCredits.pause()
    }

    if (creditsInHome && !endTheGameCredits) {
      inGame = false
      creditsInHome = false;
      initVariables()
    } else if (endTheGameCredits && !creditsInHome) {
      inGame = false
      endTheGameCredits = false
      initVariables()
    }
  }
  textAlign(CENTER, BASELINE);
}

//~ End game

function endGame() {


  console.log("FIN DU JEU")


}



//^ LANCER
function setupUI() {
  //? Si je suis en jeu
  if (startGame && !startCinematicPlaying) {
    drawStartGame()
  }

  if (inGame) {
    gameIsPlaying = true;

    
    //& Affichage des Intéractions
    setupInteractions();


    //& Barre de vie
    drawLifeBar((viewportDisplayWidth / 2) - (maxHealth * lifeBarSize) / 2, viewportDisplayHeight - lifeBarSize * 2);

    if (canShowMessage) {
      showMessage("Votre inventaire est plein.")
    }

    //? Trocs et Discussions 
    if (PressInteractPNJ) {
      openTrocMenu();
    }
    if (PressTalkPNJ) {
      openTalkMenu();
    }

    //? Menu de Pause / Paramètres 
    if (gameIsPaused) {
      if (settingsPause) {
        drawSettingsMenu();
      } else if (healthPlayer > 0) {
        drawPauseMenu();
      }
    } else {
      timerGame()
    }

    if (gameIsEnd) {
      endGame()
    }


    //? Credits
    if (endTheGameCredits && !playerDead || creditsInHome && !playerDead) {
      drawCredits()
    }

    //? Mort du joueur
    if (healthPlayer < 1) {
      characterMovement = "die"

      if (playerDead) {
        drawDeath()
      }

    } else {
      gameIsPlaying = true;
    }

    if (statsMenu) {
      drawStats();
    }

    //? Affichage de l'inventaire
    displayInventory();


    gameFPS()


  } else {
    //* Le jeu n'est pas lancé
    gameIsPaused = false;
    gameIsPlaying = false;

    //? Affichage du menu principal
    drawHomeMenu();

    //? Affichage des paramètres
    if (settingsPause && !startCinematicPlaying) {
      drawSettingsMenu();
    }
  }

  if (leftClickPressed) {
    leftClickPressed = false;
  }
}