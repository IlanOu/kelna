//^ Textures

//#region //~ Textures
let stone;
let stoneBrick;
let sky;

//#endregion

//#region //~ Textures Perso
let characterTextureIdle;
let characterTextureWalk;
let characterTextureJump;

let characterTextureList = [];

let characterAnimationIndex = 0
let characterAnimationFramePassed = false;

let characterDirection = "";
let characterLastDirection = "right";

let characterMovement = "idle";

//#endregion

//^ Grille

//#region //~ caractéristique de la grille
let rectWidth = 75;
let rectHeight = 75;

let xStartWorld = 0;
let yStartWorld = 0;

let arrayMap = [];

//#endregion

//#region //~ caractéristiques des maisons
let xStartHouse = 0;
let yStartHouse = 0;

//#endregion

//^ Perso

//#region //~ caractéristiques du perso
let characterInMapX = 0;
let characterInMapY = 0;


let characterInsidePosX = 1;
let characterInsidePosY = 1;


let characterPositionX = 1;
let characterPositionY = 1;

let previousPlayerX = 0;
let previousPlayerY = 0


let characterWidth = 80;
let characterHeight = 80;

let characterBoundingBoxWidth = 40;
let characterBoundingBoxHeight = 80;

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

let isDashing = false;

//#endregion

//^ Interfaces

//#region //~ Pour que le joueur fasse echap
let isInPaused = false;
let isSettings = false;
let ButXSet, ButYSet, ButWSet, ButHSet, ButXRet, ButYRet, ButWRet, ButRSet, ButXRetG, ButYRetG, ButWRetG, ButRSetG;

//#endregion

//#region //~ Debut Game
let isPlay = false;
let ButXPlay, ButYPlay, ButWPlay, ButHPlay, ButXRetW, ButYRetW, ButWRetW ,ButHRetW;

//#endregion

//^ Autres

//#region //~ physique
const gravityForce = 0.81;

//#endregion

//#region //~ cartes du jeu
let Maps;
let World;
let Houses;

//#endregion

//#region //~ Evenements 
let spaceKeyIsPressed = false;
let RightArrowPressed = false;
let LeftArrowPressed = false;

let EngineOne = true;

//#endregion