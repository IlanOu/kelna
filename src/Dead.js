let isPlay = false;
let isMenu = false;
let isStats = false;
let ButXMen, ButYMen, ButWMen, ButHMen, ButXStats, ButYStats, ButWStats ,ButHStats;
let ViePlayer = 3;


function setup() {
  createCanvas(800, 600);
  PositionButtons()
}

function draw() {
  if (!isPlay) {
    Play()
    
    
  } if (ViePlayer === 0) {
    YouDie()
    
    
  } if (isMenu === true){
    Menu()
    
    
  }  if (isStats === true){
    Stats()
  }
}



function keyPressed() {
  if (keyCode === 97) { // 1 du pavé
    ViePlayer -= 1;
  }
}
  
let YouDie = () => {
    background(0);
    fill(255);
    textAlign(CENTER);
    textSize(32);
    text("VOUS ETES MORT", width / 2, height / 2);
  
  
    fill(200);
    rect(ButXStats, ButYStats, ButWStats, ButHStats);
    fill(0);
    textAlign(CENTER);
    textSize(16);
    text("STATS", ButXStats + ButWStats/2, ButYStats + ButHStats/2 + 5);
  
  
    fill(200);
    rect(ButXMen, ButYMen, ButWMen, ButHMen);
    fill(0);
    textAlign(CENTER);
    textSize(16);
    text("RETURN TO MENU", ButXMen + ButWMen/2, ButYMen + ButHMen/2 + 5);
  
}




let Play = () => {
  
   background(50);
  // image(IMGWaitToPlay, 0,0,width,height)
    fill(255);
    textAlign(CENTER);
    textSize(32);
    text("TU JOUE LA", width / 2, height / 2);
  
  
   fill(255);
    textAlign(CENTER);
    textSize(32);
    text("Press '1' for test", width / 2, height / 2 + 80);
  
}



function mousePressed() {
  if (isMenu === false) {
    if (mouseX > ButXMen && mouseX < ButXMen + ButWMen && mouseY > ButYMen && mouseY < ButYMen + ButHMen){
       isMenu = true;
      
    }
  }
    if (isStats === false) {
      if (mouseX > ButXStats && mouseX < ButXStats + ButWStats && mouseY > ButYStats && mouseY < ButYStats + ButHStats) {
       isStats = true;
    }
  }
  
}


let Stats = () => {
 
   background(80)
    fill(255);
    textAlign(CENTER);
    textSize(32);
    text("C LES STATS", width / 2, height / 2);
}


let Menu = () => {
 
   background(168)
    fill(255);
    textAlign(CENTER);
    textSize(32);
    text("C LE MENU", width / 2, height / 2);
}


let PositionButtons = () => {
  
  // return menu
  ButXMen = width/2 - 250;
  ButYMen = height/2 + 50;
  ButWMen = 150;
  ButHMen = 50;
  
  // go to stats
  ButXStats = width/2;
  ButYStats = height/2 + 50;
  ButWStats = 100;
  ButHStats = 50;
  
}