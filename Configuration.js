// caractéristique de la grille
let rectWidth = 50 ;
let rectHeight = 50 ;

let xStartWorld = 0;
let yStartWorld = 0;

let arrayMap = [];



// caractéristiques du perso
let characterInMapX = 0;
let characterInMapY = 0;



let characterPositionX = 250;
let characterPositionY = 250;

let previousPlayerX = 0;
let previousPlayerY = 0


let characterWidth = 60;
let characterHeight = 60;

let characterMass = 50;
let characterJumpHeight = 18;

let characterMovesSpeed = 5;

let characterVelocityY = 0;

let characterIsGrounded = false;

let characterJumpCount = 0;
let characterMaxJumps = 2;
let characterDoubleJumping = false;

let isJumping = false;
let spaceKeyIsPressed = false;

// physique
const gravityForce = 0.5;



// Pour que le joueur fasse echap
let isInPaused = false;
let isSettings = false;
let ButXSet, ButYSet, ButWSet, ButHSet, ButXRet, ButYRet, ButWRet, ButRSet, ButXRetG, ButYRetG, ButWRetG, ButRSetG;

// cartes du jeu
let Maps;
let World;