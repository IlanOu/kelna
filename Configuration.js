//~ Debug Mod
let debugMod;


//~ Moteur de jeu
let engineOne;
let fpsLevel;

//& Le bloc qui tue (littéralement)
let killingBlocks;


//~ Admins
let username;
let password;
let logged;

//& Checkpoint start
let checkpointActivated = false

//~ Camera
let cameraShakeEnabled;

let shakeDuration;
let shakeForce;


//^ ========= Mode SMOOTH ========= 
let smoothCamera;
let smoothCameraSpeed;
let cameraSpeedR;
let newCharacterMovesSpeedR;
let cameraSpeedL;
let newCharacterMovesSpeedL;
let backgroundSpeed;
let backgroundSmoothSpeed;


//~ Background
let backgroundX;

//~ Character
//? Textures / Outils du Personnage
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


//? Animations
let animationSpeed;
let textDialogSpeed;
let annimationBeginY = 4 * 32;
let annimationEndY = 5 * 32;


//~ Grille
let rectWidth;
let rectHeight;

let xStartWorld;
let yStartWorld;

let arrayMap;
let currentMap;
let lastMap;


//~ Maisons
let xStartHouse;
let yStartHouse;


//^ Interfaces

//~ Font
let classicFont;
let pixelFont;

//~ Interfaces
let canShowMessage;

let interactionWidth;
let interactionHeight;

let viewportDisplayWidth;
let viewportDisplayHeight;

let buttonWidthClassic;
let buttonHeightClassic;
let buttonWidthBIG;
let buttonHeightBIG;

let toggleButtonColor;

let arrowTroc;

let longButton
let longButtonHover
let popUpButton
let popUpButtonHover
let checkedLongButtonHover
let checkedLongButton
let homeButton

//? Buttons UI

let buttonZ
let buttonQ
let buttonS
let buttonD
let buttonE
let buttonF
let buttonSpace

let site = "https://readymag.com/u2730643025/4237179/"
let logo;


//? Jeu
let inGame;
let gameIsPaused;
let gameIsPlaying;

//? Parametres
let settingsPause;

//? Statistiques
let statsMenu;

//? Barre de vie
let lifeBarSize;
let healthPlayer;
let maxHealth;
let heartSize;
let pressingKey;
let gettingHurt;
let gettingHeal;
let addHeart;
let removeHeart;
let GameHeartBlack;
let GameHeart

//? Inventaire
let Inventory = [];
let widthSlot;
let heightSlot;
let slotX;
let hideInventory;
let waitingButton;

//? Jauge quand on mange
let characterIsEating;

let gaugeSize;
let gaugeSpeed;

let topGaugeLevel;
let rightGaugeLevel;
let bottomGaugeLevel;
let leftGaugeLevel;


//^ Audio

//? Musique
let musicEnabled;
let canPlayMusic;

//? Sons
let soundEnabled = true;
let canPlaySong;


let VoicesSongMarjo;

let VoicesDieSong;
let firstDieSound;
let dieSoundPlay;

let VoiceStartSong;
let startGame;
let startSoundPlay;

let soundWalk;
let soundJump;
let soundHit;
let soundDie;
let soundSwordHit1;
let soundSwordHit2;
let soundSwordHit3;
let soundClick;
let soundPNJ;




let buttonClickSound = false

//^ Evenements

//? Touches
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

//? PNJ
let canInteractWithPNJ;
let PressInteractPNJ;
let canTalkWithPNJ;
let PressTalkPNJ;
let currentTextSpeaking;
let currentIndexTextSpeaking;

let skipTalk = true

//?  Portes
let behindThisDoor;
let behindThisDoorHouse;
let engine1WidthDoors;
let engine1HeightDoors;
let engine2WidthDoors;
let engine2HeightDoors;

//? Mort
let playerDead;

//? Popups
let popUpShown;
let playerAnswersYes;

//~ Credits
let endTheGameCredits;
let PositionCredits;
let speedCredits;
let creditsInHome;


//~ Fin du jeu
let gameIsEnd;


//~ Statistiques
let numberOfSteps;


//~ Items
let itemList;
let currentItemPointing;

//~ Troc
let waitingAnswer;
let haveToTrade;
let slotSize;
let itemSize;
let stackSize;


//~ FPS
let fpsEnabled;
let FPSButtonColor;


//~ Physique
let gravityForce;


//~ Cinématiques
let startCinematicPlaying = false;
let musicCinematic;



//~ Textures
let sky;
let tileSet;
let tileSetForTaverne;
let tileSetTaverne;
let tileSetForLabo;
let tileSetLabo;
let characterTexture_Dash;

let backgroundImage;
let backgroundImageDistant;
let backgroundImageClose;

let backgroundImageUI;

let GUITroc;
let GUIButton;
let GUIStart;
let marjoTexture;
let charleTexture;
let crazyTexture;
let innkeeperTexture;
let wizardTexture;
let malade1Sprite;
let malade2Sprite;
let pointEnnemis;
let tilesetItems;
let backgroundImageTroc;
let slot;
let smallPopUp;

let requiredSlotSword;
let requiredSlotFoods;

//~ JSONS
let adminJSON;
let allDoors;
let ennemiesJSON;
let Houses;
let itemsJSON;

let Maps;
let pnjJSON;

let World;
let creditsJSON;


//~ Variables vides
let getTrade;
let fps;
let StartCinematic;
let statistiques;
let tilesList;
let gameIntroductionVideo;
let gameEndVideo;
let hideUI = false;