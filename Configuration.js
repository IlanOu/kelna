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

let animationSpeed = 100

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

let characterMovesSpeed = 7.5;


//? Saut
let characterMass = 60;
let characterJumpHeight = 35;

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

//#region //~ Interactions Joueur - Machine

// Pouvoir faire echap
let canPressEscape = true;


// Pour que le joueur fasse echap
let gameIsPaused = false;
let isSettingsEchap = false;



// Attente du joueur pour joueur
let gameIsPlaying = false;
let isSettingsWait = false;


// Quand le joueur est mort
let isStats = false;
let isMenu = false;


// pour coeur
let HealthMax = 3; // largeur de la barre de vie
let MargeBarVie = 30; // marge de la barre de vie
let pressingKey = false; // Quand on appuie
let gettingHurt = false; // Pour les degats
let gettingHeal = false; // Pour regen
let addHeart = false; // Pour ajouter un coeur
let removeHeart = false; // Pour enlever un coeur
let HealthPlayer = 3; // vie du perso



// STATS
let ForStat = false;


// MUSIC / SETTINGS
let MusicIsActivateOrNot = true
let IsNot = true
let ColorForRectMusic = 50
let SongIsActivateOrNot = false;
let ColorForRectSong = 200


// Plus pouvoir bouger apres la mort ou en pause
let PlayerCanMove = true


// RECHERCHE
let PositionXPoster = 1550;
let PositionYPoster = 50;
let WidthPoster = 300;
let HeightPoster = 300;


let PositionXTextOfPoster = 1700;
let PositionYTextOfPoster = 317;
let playerReward = 0;
let VarToKeepPoster = false;
let PlayerIsRecherche = false;


// INVENTAIRE
let Inventory = [];
let WidthSlot = 85;
let HeightSlot = 85;
let ForSlotOneX = 750;
let currentSlot = 0;



//#endregion


//#region //~ Interfaces

// Interfaces
let IsWidthForAllInterfaces = 800;
let IsHeightForAllInterfaces = 600;

let IsXForAllInterfaces = (window.innerWidth / 2) - (IsWidthForAllInterfaces / 2);
let IsYForAllInterfaces = (window.innerHeight / 2) - (IsHeightForAllInterfaces / 2);


// Boutons wait
let IsWidthForWaitButtons = 100
let IsHeightForWaitButtons = 80


// Autres boutons hors wait
let IsWidthForAllButtons = 290
let IsHeightForAllButtons = 50
let IsXForAllButtons = (window.innerWidth / 2) - (IsWidthForAllButtons / 2);
let IsYForAllButtons = (window.innerHeight / 2) - (IsHeightForAllButtons / 2);


// Textes autres boutons hors wait
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

