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

//#region //~ Interactions Joueur - Machine

// Pouvoir faire echap
let YouCanEscape = true;


// Pour que le joueur fasse echap
let PlayerIsInPaused = false;
let isSettingsEchap = false;



// Attente du joueur pour joueur
let PlayerIsInPlay = false;
let isSettingsWait = false;


// Quand le joueur est mort
let isStats = false;
let isMenu = false;


// pour coeur
let HealthMax = 3; // largeur de la barre de vie
let MargeBarVie = 30; // marge de la barre de vie
let Pressing = false; // Quand on appuie
let Degating = false; // Pour les degats
let Regening = false; // Pour regen
let AddHeart = false; // Pour ajouter un coeur
let DeleteHeart = false; // Pour enlever un coeur
let HealthPlayer = 3; // vie du perso



// STATS
let ForStat = false;


// MUSIC / SETTINGS
let MusicIsActivateOrNot = true;
let ColorForRectMusic = 50
let SongIsActivateOrNot = false;
let ColorForRectSong = 200


// Plus pouvoir bouger apres la mort
let PlayerCanMove = true

//#endregion


//#region Interfaces

// Pour les interfaces
let IsWidthForAllInterfaces = 800;
let IsHeightForAllInterfaces = 600;

let IsXForAllInterfaces = (window.innerWidth / 2) - (IsWidthForAllInterfaces / 2);
let IsYForAllInterfaces = (window.innerHeight / 2) - (IsHeightForAllInterfaces / 2);


// Pour les boutons de wait
let IsWidthForWaitButtons = 100
let IsHeightForWaitButtons = 80


// Pour tous les autres boutons hors wait
let IsWidthForAllButtons = 290
let IsHeightForAllButtons = 50
let IsXForAllButtons = (window.innerWidth / 2) - (IsWidthForAllButtons / 2);
let IsYForAllButtons = (window.innerHeight / 2) - (IsHeightForAllButtons / 2);


// Pour tous les textes des autres boutons hors wait
let IsXForTextAllButtons = (window.innerWidth / 2);


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


//#region CINEMATIC

let StartCinematic;

let CinematicIsStart = true;
let MusicForCinematic = false;

let CinematicForEnd = false;

//#endregion

