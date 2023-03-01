//^ Textures

//#region //~ Textures
let stone;
let stoneBrick;
let sky;

//#endregion

//#region //~ Textures Perso
let characterTexture_Idle;
let characterTexture_Walk;
let characterTexture_Jump;
let characterTexture_Dash;

let characterTextureList = [];

let characterAnimationIndex = 0
let characterAnimationFramePassed = false;

let characterDirection = "";
let characterLastDirection = "right";

let characterMovement = "idle";

let animationSpeed = 50

//#endregion

//^ Grille

//#region //~ caractéristique de la grille
let rectWidth = 60;
let rectHeight = 60;

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

//? Positions
// let characterInMapX = 0;
// let characterInMapY = 0;

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

let characterMovesSpeed = 6;


//? Saut
let characterMass = 60;
let characterJumpHeight = 20;

let characterVelocityY = 0;
let characterVelocityYMin = -80
let characterVelocityYMax = 100

let characterIsGrounded = false;

let characterJumpCount = 0;
let characterMaxJumps = 2;
let characterDoubleJumping = false;

let characterIsJumping = false;

//? Dash
let characterIsDashing = false;
let lastDashTime = 0;
const dashCooldown = 1000;
const dashTime = 200;
const dashForce = 2;


//#endregion

//^ Interfaces

let viewportDisplayWidth = 1920
let viewportDisplayHeight = 1080

let buttonWidthClassic = 50
let buttonHeightClassic = 20


let ColorForRectMusic = 255
let MusicIsActivate = false

let Pressing = false

let buttonWidthBIG = 50
let buttonHeightBIG = 20

let inGame = false
let gameIsPaused = false
let gameIsPlaying = false

let isSettingsWait = false
let isSettingsPause = false

let PlayerInSettings = false
let YouCanPlayMusic = false



// For PNJ


//let NbrePas = 0

// Life Bar

let MargeBarVie = 30;
let healthPlayer = 3
let maxHealth = 6


//^ Autres

//#region //~ physique
const gravityForce = 0.5;

//#endregion


//#region //~ cartes du jeu
let Maps;
let World;
let Houses;

//#endregion


//#region //~ Evenements 

let spaceKeyIsPressed = false;
let rightArrowPressed = false;
let leftArrowPressed = false;
let dashKeyIsPressed = false;

let engineOne = true;

//#endregion


//#region //~ CINEMATIC

let StartCinematic;

let CinematicIsStart = true;
let MusicForCinematic = false;

let CinematicForEnd = false;

//#endregion

