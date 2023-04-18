//& Debug Mod
let debugMod;


//& Moteur de jeu
let engineOne;


//& Le bloc qui tue (littéralement)
let killingBlock;


//& Admins
let username;
let password;


//& Camera
let cameraShakeEnabled;

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


//& Grille
let rectWidth;
let rectHeight;

let xStartWorld;
let yStartWorld;

let arrayMap;


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
let MargeBarVie;
let healthPlayer;
let maxHealth;
let pressingKey;
let gettingHurt;
let gettingHeal;
let addHeart;
let removeHeart;

//~ Inventaire
let Inventory = [];
let WidthSlot;
let HeightSlot;
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
let ColorForRectMusic;
let MusicIsActivate;
let YouCanPlayMusic;

//~ Sons
let ColorForRectSong;
let SongIsActivate;


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
let canGotOut;

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


//& Troc
let waitingAnswer;
let haveToTrade;
let slotSize;
let itemSize;
let stackSize;


//& FPS
let fpsActivate;
let ColorForRectFPS;


//& Physique
let gravityForce;


//& Cinématiques
let CinematicIsStart;
let MusicForCinematic;
let CinematicForEnd;


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
let BackTroc;
let Slot;
let BackPop;


//& JSONS
let adminJSON;
let allDoors;
let ForEnnemis;
let Houses;
let ForItems;
let Maps;
let ForPNJ;
let World;
let creditsJson;

//& Variables vides
let getTrade;
let fps;
let StartCinematic;
let statistiques;
let tilesList;