//^ vérifier si une touche est pressée 
function keyPressed() {

    //? Bouton echap
    if (keyCode == ESCAPE) {
        if (inGame) {
            gameIsPaused = !gameIsPaused
        }
    }

    //? Barre espace
    if (keyCode == 32) {
        spaceKeyIsPressed = true;
    }

    //? Touche D
    if (keyCode == 68) {
        rightArrowPressed = true;
        numberOfSteps++
    }

    //? Touche Q
    if (keyCode == 81) {
        leftArrowPressed = true;
        numberOfSteps++
    }

    //? Touche Z
    if (keyCode == 90) {
        highArrowPressed = true;
    }
    //? Touche S
    if (keyCode == 83) {
        downArrowPressed = true;
    }

    //? Touche F
    if (keyCode == 70) {
        characterIsEating = true
    }


    if (aPNJCanTrade()) {
        //? Touche E
        if (keyCode == 69) {
            PressInteractPNJ = !PressInteractPNJ
        }
    }

    if (aPNJCanTalk()) {
        //? Touche E
        if (keyCode == 69) {
            if (!PressTalkPNJ){
                PressTalkPNJ = true
            }else{
                skipTalk = true
            }
        }
    }


    if (keyCode == 69 && engineOne) {
        //! Récupérer l'item
        if (itemsJSON.ItemsOnTheFloor) {
            Object.entries(itemsJSON.ItemsOnTheFloor).forEach((item) => { 
                item = item[1]
                if (item.canGetItem) {
                    if (Inventory[getIndexOfItemCategory(item.category)].category && item.category != "food") {
                        tempMessage()
                    } else {
                        if (item.category == "food"){
                            if (Inventory[getIndexOfItemCategory(item.category)].amount < stackSize || Object.keys(Inventory[getIndexOfItemCategory(item.category)]).length == 0) {
                                getCurrentItem()
                            }
                        }else{
                            getCurrentItem()
                        }
                    }
                    item.canGetItem = false
                }
            })
        }
    }

    //? Touche R
    if (keyCode == 82 && logged) {
        dashKeyIsPressed = true
    }

    //? Touche I
    if (keyCode == 73 && logged) {
        addItemToInventory(itemsJSON.Items.sword_3, 1);
    }

    //? Touche O du clavier
    if (keyCode == 79 && logged) {
        addItemToInventory(itemsJSON.Items.food_1, 1);
    }


    //? Touche M  du clavier
    if (keyCode == 188 && logged) {
        addItemToInventory(itemsJSON.Items.mushroom_1, 1);
    }

    //? Touche H  du clavier
    if (keyCode == 72 && logged) {
        addItemToInventory(itemsJSON.Items.kelna, 1);
    }

}

//~ vérifier si une touche est relâchée 
function keyReleased() {
    //? Barre espace
    if (keyCode == 32 || keyCode == 38) {
        if (soundEnabled) {
            if (!soundJump.isPlaying()) {
                if (characterIsJumping) {
                    soundJump.play()
                } else {
                    soundJump.pause()
                }
            }
        }
        spaceKeyIsPressed = false;
        characterDoubleJumping = true;
    }

    //? Flèche de droite
    if ((keyCode == 39 || keyCode == 68)) {
        rightArrowPressed = false;
    }

    //? Flèche de gauche
    if ((keyCode == 37 || keyCode == 81)) {
        leftArrowPressed = false;
    }

    //? Flèche de haut
    if ((keyCode == 38 || keyCode == 90)) {
        highArrowPressed = false;
    }


    //? Touche F
    if (keyCode == 70) {
        characterIsEating = false
    }

    //? Flèche de bas
    if ((keyCode == 40 || keyCode == 83)) {
        downArrowPressed = false;
    }

    //? Touche R
    if (keyCode == 82) {
        dashKeyIsPressed = false
    }

    //? Si n'importe quelle touche est relachée
    if (keyCode) {
        pressingKey = false;
    }


    if (canEnterInHouse) {
        //? Touche E
        if (keyCode == 69 && engineOne) {

            PressInteractPNJ = false
            engineOne = !engineOne;
        }
    }


    if (canGoOutTheHouse) {
        //? Touche E
        if (keyCode == 69 && !engineOne) {
            engineOne = !engineOne;
        }
    }


    if (startCinematicPlaying) {
        //? Touche entrée
        if (keyCode == 13 || keyCode == ESCAPE) {
            startCinematicPlaying = false
            gameIntroductionVideo.pause();
            startGameVoice()
        }
    }
}


//~ Clique de souris
function mouseReleased() {
    if (mouseButton === LEFT) {
        if (startCinematicPlaying && gameIntroductionVideo.elt.paused) {
            gameIntroductionVideo.elt.addEventListener('ended', videoEnded);
            gameIntroductionVideo.play();
        }

        slotOne = Inventory[0]
        leftClickPressed = true
        if (inventoryIsEmpty(slotOne) === false) {
            if (!PressTalkPNJ && !PressInteractPNJ) {
                if (!gameIsPaused && gameIsPlaying && characterAnimationIndex <= characterTextureList.length - 1) {
                    if (!characterHitting && !characterComboHitting && !characterComboHittingDouble) {
                        characterHitting = true
                        characterComboHitting = false
                        characterComboHittingDouble = false
                        lastHit = "1"
                    } else if (characterHitting && !characterComboHitting && !characterComboHittingDouble) {
                        characterHitting = false
                        characterComboHitting = true
                        characterComboHittingDouble = false
                        lastHit = "2"
                    } else if (!characterHitting && characterComboHitting && !characterComboHittingDouble) {
                        characterHitting = false
                        characterComboHitting = false
                        characterComboHittingDouble = true
                        lastHit = "3"
                    }
                }
            }
        } else {
            return
        }
    }
}