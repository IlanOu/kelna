//^ DEBUG MOD
let debugMod = false;


//^ Textures

//#region //~ Textures
let stone;
let stoneBrick;
let sky;

let tileSet;
let tilesList;
//#endregion

//^ Background
//#region 

let backgroundImage;
let backgroundX = 0;

//#endregion

//#region //~ Textures Perso

let characterTexture_Dash;

let characterTextureList = [];

let characterAnimationIndex = 0
let characterAnimationFramePassed = false;

let characterDirection = "";
let characterLastDirection = "right";

let characterMovement = "idle";

let animationSpeed = 60

//#endregion

//^ Grille

//#region //~ caractéristique de la grille
let rectWidth = 60;
let rectHeight = 60;

let xStartWorld = 0;
let yStartWorld = 0;

let arrayMap = [];



// Camera movements
//! ========= Mode SMOOTH ========= 
let smoothCamera = false

let smoothCameraSpeed = 0.04

let cameraSpeedR = 0;
let newCharacterMovesSpeedR = 0

let cameraSpeedL = 0;
let newCharacterMovesSpeedL = 0



let backgroundSpeed = 8; //? Plus c'est haut, moins ca va vite
let backgroundSmoothSpeed = 0.1 //? Plus c'est haut, plus ca va vite



//#endregion

//#region //~ caractéristiques des maisons
let xStartHouse = 0;
let yStartHouse = 0;

//#endregion

//^ Perso

//#region //~ caractéristiques du perso

//? Positions


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




let haveToJump = false;




//#endregion

//^ Interfaces

let viewportDisplayWidth = 1920
let viewportDisplayHeight = 1080

let buttonWidthClassic = 80
let buttonHeightClassic = 30


let ColorForRectMusic = 255
let MusicIsActivate = false

let ColorForRectSong = 255
let SongIsActivate = false

let Pressing = false

let buttonWidthBIG = 120
let buttonHeightBIG = 50

let inGame = false
let gameIsPaused = false
let gameIsPlaying = false

let settingsHome = false
let settingsPause = false

let PlayerInSettingsPause = false
let YouCanPlayMusic = false



// For PNJ
let ForPNJ;


// For ENNEMIS
let ForEnnemis;

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

