let isPlay = false;
let isSettings = false;
let ButXPlay, ButYPlay, ButWPlay, ButHPlay, ButXSet, ButYSet, ButWSet,ButHSet, ButXRetW, ButYRetW, ButWRetW ,ButHRetW;



function preload() {
  IMGWaitToPlay = loadImage("enattente.webp")
  IMGPlay = loadImage("lancegame.jpg")
  IMGSetting = loadImage("settings.jpg")
}


function setup() {
  createCanvas(800, 600);
  PositionButtons()
}

function draw() {
  if (isPlay === false) {
    WaitToPlay()
  } if (isPlay === true) {
      GoToPlay()
  } if (isSettings === true){
    Settings()
  }
}


let GoToPlay = () => {
    // background(0);
    image(IMGPlay, 0,0,width,height)
    fill(255);
    textAlign(CENTER);
    textSize(32);
    text("C LE JEU", width / 2, height / 2);
  
  
}



let WaitToPlay = () => {
  
   // background(50);
  image(IMGWaitToPlay, 0,0,width,height)
    fill(255);
    textAlign(CENTER);
    textSize(32);
    text("ATTENTE", width / 2, height / 2);
  
  
    fill(200);
    rect(ButXPlay, ButYPlay, ButWPlay, ButHPlay);
    fill(0);
    textAlign(CENTER);
    textSize(16);
    text("PLAY", ButXPlay + ButWPlay/2, ButYPlay + ButHPlay/2 + 5);
  
  
    fill(200);
    rect(ButXSet, ButYSet, ButWSet, ButHSet);
    fill(0);
    textAlign(CENTER);
    textSize(16);
    text("Settings", ButXSet + ButWSet/2, ButYSet + ButHSet/2 + 5);
  
  
}



function mousePressed() {
  if (isPlay === false) {
    if (mouseX > ButXPlay && mouseX < ButXPlay + ButWPlay && mouseY > ButYPlay && mouseY < ButYPlay + ButHPlay){
       isPlay = true;
    }
  }
    if (isSettings === false) {
      if (mouseX > ButXSet && mouseX < ButXSet + ButWSet && mouseY > ButYSet && mouseY < ButYSet + ButHSet) {
       isSettings = true;
    }
  }  if (isSettings === true) {
      if (mouseX > ButXRetW && mouseX < ButXRetW + ButWRetW && mouseY > ButYRetW && mouseY < ButYRetW + ButHRetW) {
       isSettings = false; 
    }
  }
}


let Settings = () => {
 
   // background(80)
    image(IMGSetting, 0,0,width,height)
    fill(255);
    textAlign(CENTER);
    textSize(32);
    text("Settings", width / 2, height / 2);
  
  
    rect(ButXRetW, ButYRetW, ButWRetW, ButHRetW);
    fill(0);
    textAlign(CENTER);
    textSize(16);
    text("Return to menu", ButXRetW + ButWRetW/2, ButYRetW + ButHRetW/2 + 5);
  
}


let PositionButtons = () => {
  // PLay button
  ButXPlay = width/2 - 50;
  ButYPlay = height/2 + 50;
  ButWPlay = 100;
  ButHPlay = 50;
  
  // Return for Settingss button
  ButXSet = width/2+250;
  ButYSet = height/2+200;
  ButWSet = 100;
  ButHSet = 50;
  
  
  // Return FOR PLAY button
  ButXRetW = width/2 - 60;
  ButYRetW = height/2+150;
  ButWRetW = 120;
  ButHRetW = 50;
  
  
}