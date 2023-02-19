// Textures
let stone;
let stoneBrick;
let sky;

// Textures Perso
let characterTextureIdle;
let characterTextureWalk;
let characterTextureJump;

let characterTextureList = [];

let characterAnimationIndex = 0
let characterAnimationFramePassed = false;

let characterDirection = "";
let characterLastDirection = "right";

let characterMovement = "idle";

// caractéristique de la grille
let rectWidth = 100;
let rectHeight = 100;

let xStartWorld = 0;
let yStartWorld = 0;

let arrayMap = [];



// caractéristiques du perso
let characterInMapX = 0;
let characterInMapY = 0;



let characterPositionX = 1;
let characterPositionY = 1;

let previousPlayerX = 0;
let previousPlayerY = 0


let characterWidth = 100;
let characterHeight = 100;

let characterBoundingBoxWidth = 75;
let characterBoundingBoxHeight = 100;

let characterMass = 60;
let characterJumpHeight = 35;

let characterMovesSpeed = 7.5;

let characterVelocityY = 0;
let characterVelocityYMin = -80
let characterVelocityYMax = 100

let characterIsGrounded = false;

let characterJumpCount = 0;
let characterMaxJumps = 2;
let characterDoubleJumping = false;

let isJumping = false;
let spaceKeyIsPressed = false;

// physique
const gravityForce = 0.81;



// Pour que le joueur fasse echap
let isInPaused = false;
let isSettings = false;
let ButXSet, ButYSet, ButWSet, ButHSet, ButXRet, ButYRet, ButWRet, ButRSet, ButXRetG, ButYRetG, ButWRetG, ButRSetG;

// cartes du jeu
let Maps;
let World;