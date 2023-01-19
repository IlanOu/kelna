// caractéristique de la grille
let rectWidth = 50;
let rectHeight = 50;



// caractéristiques du perso
let characterPositionX = 0;
let characterPositionY = 0;

let characterWidth = 60;
let characterHeight = 60;

let characterMass = 50;
let characterJumpHeight = 20;

let characterMovesSpeed = 10;

let characterVelocityY = 0;

let characterIsGrounded = false;

let characterJumpCount = 0;
let characterMaxJumps = 2;
let characterDoubleJumping = false;

// physique
const gravityForce = 0.5;


// Autre
let isJumping = false;
let spaceKeyIsPressed = false;

// Pour que le joueur fasse echap
let isInPaused = false;
let isSettings = false;
let ButXSet, ButYSet, ButWSet, ButHSet, ButXRet, ButYRet, ButWRet, ButRSet, ButXRetG, ButYRetG, ButWRetG, ButRSetG;

// cartes du jeu
let Maps;