//^ DEBUG MOD
let debugMod = false;

//* Le bloc qui tue (littéralement)
let killingBlock = 238;

//^ ADMIN MOD
let username = "";
let password = "";
let adminJSON;

let cameraShakeEnabled = false;

//^ Textures
//#region //~ Textures
let sky;

let tileSet;
let tilesList;


let tileSetForTaverne;
let tileSetTaverne;
//#endregion


//^ Background
//#region 
let backgroundImage;
let backgroundX = 0;
//#endregion


//^ Personnages
//#region Personnages
//#region Textures / Outils du Personnage

//~ Textures / Outils du Personnage
let characterTexture_Dash;
let characterTextureList = [];
let characterAnimationIndex = 0
let characterAnimationFramePassed = false;
let characterDirection = "";
let characterLastDirection = "right";
let characterMovement = "idle";
let characterLastMovement = characterMovement
let characterSpriteWidth = 32;
let characterSpriteHeight = 32;

let animationSpeed = 100
let textDialogSpeed = 3

//#endregion Textures / Outils du Personnage



//~ caractéristiques du perso

//? Positions
let characterInsidePosX = 1;
let characterInsidePosY = 1;
let characterPositionX = 1;
let characterPositionY = 1;
let previousPlayerX = 0;
let previousPlayerY = 0
let characterWidth = 80;
let characterHeight = 80;
let characterBoundingBoxWidth = 45;
let characterBoundingBoxHeight = 60;
let characterBoundingBoxHeightInside = 30
let characterBoundingBoxWidthInside = 56
let characterMovesSpeed = 6;
let characterHitting = false;
let characterComboHitting = false;
let characterComboHittingDouble = false;
let lastHit = "";


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
let haveToJump = false;


//? Dash
let dashSystem = false
let characterIsDashing = false;
let lastDashTime = 0;
const dashCooldown = 1000;
const dashTime = 200;
const dashForce = 2;
//#endregion Personnages


//^ Grille
//#region //~ caractéristique de la grille
let rectWidth = 60;
let rectHeight = 60;

let xStartWorld = 0;
let yStartWorld = 0;

let arrayMap = [];
//#endregion


//^ Camera
//#region //~ Camera movements
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


//^ Maisons
//#region //~ caractéristiques des maisons
let xStartHouse = 0;
let yStartHouse = 0;
//#endregion


//^ Interfaces
//#region Interfaces

//~ Interfaces
let interactionWidth = 30;
let interactionHeight = 30;

let viewportDisplayWidth = 1920
let viewportDisplayHeight = 1080

let buttonWidthClassic = 80
let buttonHeightClassic = 30
let buttonWidthBIG = 120
let buttonHeightBIG = 80

let GUITroc;
let GUIStart;
//~  Variables pour la musique
let ColorForRectMusic = 255
let MusicIsActivate = false
let YouCanPlayMusic = false

//~  Variables pour les sons
let ColorForRectSong = 255
let SongIsActivate = false


//~  Variable a la pression d'un key event
let Pressing = false


//~  Variables pour le jeu
let inGame = false
let gameIsPaused = false
let gameIsPlaying = false


//~  Variables pour les parametres
let settingsHome = false
let settingsPause = false
let PlayerInSettingsPause = false


//~  Variables pour les PNJ
let ForPNJ;
let marjoTexture;
let charleTexture;

let canInteractWithPNJ = false;
let PressInteractPNJ = false

let canTalkWithPNJ = false;
let PressTalkPNJ = false

let currentTextSpeaking = ""
let currentIndexTextSpeaking = 0

//~  Variables pour les ennemis
let ForEnnemis;
let malade1Sprite;
let malade2Sprite;
let pointEnnemis;

//~  Variables pour les portes
let allDoors;
let behindThisDoor = "";
let engine1WidthDoors = rectWidth
let engine1HeightDoors = rectHeight * 2

let engine2WidthDoors = rectWidth
let engine2HeightDoors = rectHeight / 1.5

let doorInTaverne = false;

let canGotOut = false

let behindThisDoorHouse = "";


//~  Variables pour la barre de vie
let MargeBarVie = 40;
let healthPlayer = 1
let maxHealth = 5
let pressingKey = false
let gettingHurt = false; //& Pour les degats
let gettingHeal = false; //& Pour regen
let addHeart = false; //& Pour ajouter un coeur
let removeHeart = false; //& Pour enlever un coeur


//~  Variables pour l'inventaire
let Inventory = [{},{},{}];
let WidthSlot = 85;
let HeightSlot = 85;
let slotX = 0;
let endInventory = false;
let waitingButton = false;

//~ Jauge quand on mange
let characterIsEating = false;

let gaugeSize = 5;
let gaugeSpeed = 5;

let topGaugeLevel = 0;
let rightGaugeLevel = 0;
let bottomGaugeLevel = 0;
let leftGaugeLevel = 0;

//~  Variables pour la mort
let playerDead = false



//~  Variables pour les stats
//let playerStat = false
let numberOfSteps = 0;

//~  Variables pour le JSON des items
let ForItems;
let itemList = [];


//~ Variables pour les popup
let popUpShown = false;
let playerAnswersYes = false;


//~ Variable pour la tileset des items
let tilesetItems;


//~ Variable pour le troc
let BackTroc;
let Slot;
let waitingAnswer = false;
let BackPop;
let haveToTrade = false;
let getTrade;
let slotSize = 2
let itemSize = 1.6

let stackSize = 5

//~ Variables pour le FPS
let fps;
let fpsActivate = false
let ColorForRectFPS = 255



//~ Variables pour les credits
let currentCredit = 0;
let creditSpeed = 100; // Vitesse de défilement des crédits
let TimeForCredit = true;



//~ Variables pour la jauge
let progress = 0;
let progressTimer = 0;
let progressTimeRequired = 1; // Temps requis pour remplir la jauge (en secondes)

//#endregion Interfaces


//^ Cartes
//#region //~ cartes du jeu
let Maps;
let World;
let Houses;
//#endregion


//^ Physique
//#region //~ physique
const gravityForce = 0.5;
//#endregion


//^ Evenements
//#region //~ Evenements 
let spaceKeyIsPressed = false;
let rightArrowPressed = false;
let leftArrowPressed = false;
let highArrowPressed = false;
let downArrowPressed = false;
let dashKeyIsPressed = false;
let leftClickPressed = false

let engineOne = true;

let canEnterInHouse = false;
let canGoOutTheHouse = false;
//#endregion


//^ Cinematic
//#region //~ CINEMATIC
let StartCinematic;

let CinematicIsStart = true;
let MusicForCinematic = false;

let CinematicForEnd = false;
//#endregion
