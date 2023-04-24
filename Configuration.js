//& Debug Mod
let debugMod;


//& Moteur de jeu
let engineOne;
let fpsLevel;

//& Le bloc qui tue (littéralement)
let killingBlock;


//& Admins
let username;
let password;


//& Camera
let cameraShakeEnabled;

let shakeDuration;
let shakeForce;

//~ ========= Mode SMOOTH ========= 
let smoothCamera;
let smoothCameraSpeed;
let cameraSpeedR;
let newCharacterMovesSpeedR;
let cameraSpeedL;
let newCharacterMovesSpeedL;
let backgroundSpeed;
let backgroundSmoothSpeed;


//& Background
let backgroundX;


//& Character
//~ Textures / Outils du Personnage
let characterTextureList;
let characterAnimationIndex;
let characterAnimationFramePassed;
let characterDirection;
let characterLastDirection;
let characterMovement;
let characterLastMovement;
let characterSpriteWidth;
let characterSpriteHeight;


//~ caractéristiques du perso
//? Positions
let characterInsidePosX;
let characterInsidePosY;
let characterPositionX;
let characterPositionY;
let previousPlayerX;
let previousPlayerY;
let characterWidth;
let characterHeight;
let characterBoundingBoxWidth;
let characterBoundingBoxHeight;
let characterBoundingBoxWidthInside;
let characterBoundingBoxHeightInside;
let characterMovesSpeed;
let characterHitting;
let characterComboHitting;
let characterComboHittingDouble;
let lastHit;
//? Saut
let characterMass;
let characterJumpHeight;
let characterVelocityY;
let characterVelocityYMin;
let characterVelocityYMax;
let characterIsGrounded;
let characterJumpCount;
let characterMaxJumps;
let characterDoubleJumping;
let characterIsJumping;
let haveToJump;

//? Dash
let dashSystem;
let characterIsDashing;
let lastDashTime;
let dashCooldown;
let dashTime;
let dashForce;


//& Animations
let animationSpeed;
let textDialogSpeed;
let annimationBeginY = 4 * 32;
let annimationEndY = 5 * 32;


//& Grille
let rectWidth;
let rectHeight;

let xStartWorld;
let yStartWorld;

let arrayMap;
let currentMap;


//& Maisons
let xStartHouse;
let yStartHouse;


//& Interfaces
//~ Interfaces
let interactionWidth;
let interactionHeight;

let viewportDisplayWidth;
let viewportDisplayHeight;

let buttonWidthClassic;
let buttonHeightClassic;
let buttonWidthBIG;
let buttonHeightBIG;

//~ Jeu
let inGame;
let gameIsPaused;
let gameIsPlaying;

//~ Parametres
let settingsPause;

//~ Barre de vie
let lifeBarSize;
let healthPlayer;
let maxHealth;
let pressingKey;
let gettingHurt;
let gettingHeal;
let addHeart;
let removeHeart;

//~ Inventaire
let Inventory = [];
let widthSlot;
let heightSlot;
let slotX;
let endInventory;
let waitingButton;

//~ Jauge quand on mange
let characterIsEating;

let gaugeSize;
let gaugeSpeed;

let topGaugeLevel;
let rightGaugeLevel;
let bottomGaugeLevel;
let leftGaugeLevel;


//& Audio
//~ Musique
let musicButtonColor;
let musicEnabled;
let canPlayMusic;

//~ Sons
let soundButtonColor;
let soundEnabled;


//& Evenements
//~ Touches
let Pressing;
let spaceKeyIsPressed;
let rightArrowPressed;
let leftArrowPressed;
let highArrowPressed;
let downArrowPressed;
let dashKeyIsPressed;
let leftClickPressed;
let leftClickWasPressed;

let canEnterInHouse;
let canGoOutTheHouse;

//~ PNJ
let canInteractWithPNJ;
let PressInteractPNJ;
let canTalkWithPNJ;
let PressTalkPNJ;
let currentTextSpeaking;
let currentIndexTextSpeaking;

//~  Portes
let behindThisDoor;
let engine1WidthDoors;
let engine1HeightDoors;
let engine2WidthDoors;
let engine2HeightDoors;
let doorInTaverne;

//~ Mort
let playerDead;

//~ Popups
let popUpShown;
let playerAnswersYes;


//& Statistiques
let numberOfSteps;


//& Items
let itemList;
let currentItemPointing;
let canGetItem;

//& Troc
let waitingAnswer;
let haveToTrade;
let slotSize;
let itemSize;
let stackSize;


//& FPS
let fpsActivate;
let FPSButtonColor;


//& Physique
let gravityForce;


//& Cinématiques
let startCinematicPlaying;
let musicCinematic;



//& Textures
let sky;
let tileSet;
let tileSetForTaverne;
let tileSetTaverne;
let backgroundImage;
let characterTexture_Dash;

let GUITroc;
let GUIStart;
let marjoTexture;
let charleTexture;
let malade1Sprite;
let malade2Sprite;
let pointEnnemis;
let tilesetItems;
let backgroundImageTroc;
let slot;
let backgroundImageTalk;


//& JSONS
let adminJSON;
let allDoors;
let ennemiesJSON;
let Houses;
let itemsJSON;

let Maps;
let pnjJSON;

let World;
let creditsJSON;


//& Variables vides
let getTrade;
let fps;
let StartCinematic;
let statistiques;
let tilesList;
let gameIntroductionVideo;