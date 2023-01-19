
function keyPressed() {
    if (keyCode === ESCAPE) {
        isInPaused = !isInPaused
    }
}


let MenuEchap = () => {

    // background(0);
    image(menu, 0, 0, width, height)
    fill(255);
    textAlign(CENTER);
    textSize(32);
    text("PAUSE", width / 2, height / 2);


    fill(200);
    rect(ButXSet, ButYSet, ButWSet, ButHSet);
    fill(0);
    textAlign(CENTER);
    textSize(16);
    text("Settings", ButXSet + ButWSet / 2, ButYSet + ButHSet / 2 + 5);


    fill(200);
    rect(ButXRetG, ButYRetG, ButWRetG, ButHRetG);
    fill(0);
    textAlign(CENTER);
    textSize(16);
    text("Return to game", ButXRetG + ButWRetG / 2, ButYRetG + ButHRetG / 2 + 5);


}



let IsGame = () => {
    // background(50);
    image(ingame, 0, 0, width, height)
    fill(255);
    textAlign(CENTER);
    textSize(32);
    text("JEUUU", width / 2, height / 2);


    fill(255);
    textAlign(CENTER);
    textSize(32);
    text("Press 'echap' for test", width / 2, height / 2 + 80);


}



function mousePressed() {
    if (isInPaused) {
        if (mouseX > ButXSet && mouseX < ButXSet + ButWSet && mouseY > ButYSet && mouseY < ButYSet + ButHSet) {
            isSettings = true;
        }
        if (isSettings) {
            if (mouseX > ButXRet && mouseX < ButXRet + ButWRet && mouseY > ButYRet && mouseY < ButYRet + ButHRet) {
                isSettings = false;
            }
        } if (isInPaused) {
            if (mouseX > ButXRetG && mouseX < ButXRetG + ButWRetG && mouseY > ButYRetG && mouseY < ButYRetG + ButHRetG) {
                isInPaused = false;
            }
        }
    }
}


let Settings = () => {

    // background(80)
    image(imgset, 0, 0, width, height)
    fill(255);
    textAlign(CENTER);
    textSize(32);
    text("Settings", width / 2, height / 2);


    rect(ButXRet, ButYRet, ButWRet, ButHRet);
    fill(0);
    textAlign(CENTER);
    textSize(16);
    text("Return to menu", ButXRet + ButWRet / 2, ButYRet + ButHRet / 2 + 5);

}


let PositionButtons = () => {

    // Settings button
    ButXSet = width / 2;
    ButYSet = height / 2 + 50;
    ButWSet = 100;
    ButHSet = 50;

    // Return for Settingss button
    ButXRet = width / 2;
    ButYRet = height / 2 + 200;
    ButWRet = 100;
    ButHRet = 50;


    // Return FOR GAME button
    ButXRetG = width / 2 - 200;
    ButYRetG = height / 2 + 50;
    ButWRetG = 100;
    ButHRetG = 50;


}


