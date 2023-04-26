//& Debug Mod
const init_debugMod = false;


//& Moteur de jeu
const init_engineOne = true;
const init_fpsLevel = 60


//& Le bloc qui tue (littéralement)
const init_killingBlocks = [39, 49];


//& Admins
const init_username = "";
const init_password = "";


//& Camera
const init_cameraShakeEnabled = true;

const init_shakeDuration = 0;
const init_shakeForce = 0;

//~ ========= Mode SMOOTH ========= 
const init_smoothCamera = false
const init_smoothCameraSpeed = 0.04
const init_cameraSpeedR = 0;
const init_newCharacterMovesSpeedR = 0
const init_cameraSpeedL = 0;
const init_newCharacterMovesSpeedL = 0
const init_backgroundSpeed = 8;
const init_backgroundSmoothSpeed = 0.1


//& Background
const init_backgroundX = 0;

//& Character
//~ Textures / Outils du Personnage
const init_characterTextureList = [];
const init_characterAnimationIndex = 0
const init_characterAnimationFramePassed = false;
const init_characterDirection = "";
const init_characterLastDirection = "right";
const init_characterMovement = "idle";
const init_characterLastMovement = init_characterMovement
const init_characterSpriteWidth = 32;
const init_characterSpriteHeight = 32;

//~ caractéristiques du perso
//? Positions
const init_characterInsidePosX = 1;
const init_characterInsidePosY = 1;
const init_characterPositionX = 900//1;
const init_characterPositionY = 1;
const init_previousPlayerX = 0;
const init_previousPlayerY = 0
const init_characterWidth = 80;
const init_characterHeight = 80;
const init_characterBoundingBoxWidth = 45;
const init_characterBoundingBoxHeight = 60;
const init_characterBoundingBoxHeightInside = 40
const init_characterBoundingBoxWidthInside = 60
const init_characterMovesSpeed = 6;
const init_characterHitting = false;
const init_characterComboHitting = false;
const init_characterComboHittingDouble = false;
const init_lastHit = "";

//? Saut
const init_characterMass = 60;
const init_characterJumpHeight = 20;
const init_characterVelocityY = 0;
const init_characterVelocityYMin = -80
const init_characterVelocityYMax = 100
const init_characterIsGrounded = false;
const init_characterJumpCount = 0;
const init_characterMaxJumps = 2;
const init_characterDoubleJumping = false;
const init_characterIsJumping = false;
const init_haveToJump = false;

//? Dash
const init_dashSystem = false
const init_characterIsDashing = false;
const init_lastDashTime = 0;
const init_dashCooldown = 1000;
const init_dashTime = 200;
const init_dashForce = 2;


//& Animations
const init_animationSpeed = 100
const init_textDialogSpeed = 3


//& Grille
const init_rectWidth = 60;
const init_rectHeight = 60;
const init_xStartWorld = 0;
const init_yStartWorld = 0;
const init_arrayMap = [];
const init_currentMap = "";
const init_lastMap = "";


//& Maisons
const init_xStartHouse = 0;
const init_yStartHouse = 0;


//& Interfaces
//~ Interfaces
const init_interactionWidth = 30;
const init_interactionHeight = 30;

const init_viewportDisplayWidth = 1920
const init_viewportDisplayHeight = 1080

const init_buttonWidthClassic = 80
const init_buttonHeightClassic = 30
const init_buttonWidthBIG = 120
const init_buttonHeightBIG = 80

const init_toggleButtonColor = 255

//~  Jeu
const init_inGame = false
const init_gameIsPaused = false
const init_gameIsPlaying = false

//~ Parametres
const init_settingsPause = false

//~ Barre de vie
const init_MargeBarVie = 40;
const init_healthPlayer = 5
const init_maxHealth = 5
const init_pressingKey = false
const init_gettingHurt = false;
const init_gettingHeal = false;
const init_addHeart = false;
const init_removeHeart = false;

//~ Inventaire
const init_Inventory = [{},{},{}];
const init_WidthSlot = 85;
const init_HeightSlot = 85;
const init_slotX = 0;
const init_endInventory = false;
const init_waitingButton = false;

//~ Jauge quand on mange
const init_characterIsEating = false;

const init_gaugeSize = 5;
const init_gaugeSpeed = 5;

const init_topGaugeLevel = 0;
const init_rightGaugeLevel = 0;
const init_bottomGaugeLevel = 0;
const init_leftGaugeLevel = 0;


//& Audio
//~ Musique
const init_MusicIsActivate = false
const init_YouCanPlayMusic = false

//~ Sons
const init_SongIsActivate = false
const init_YouCanPlaySong = false

const init_VoicesSongMarjo = []
const init_VoicesDieSong = []

const init_dieSoundPlay = false
const init_startGame = false;
const init_startSoundPlay = false


//& Evenements
//~ Touches
const init_Pressing = false
const init_spaceKeyIsPressed = false;
const init_rightArrowPressed = false;
const init_leftArrowPressed = false;
const init_highArrowPressed = false;
const init_downArrowPressed = false;
const init_dashKeyIsPressed = false;
const init_leftClickPressed = false
const init_leftClickWasPressed = false;

const init_canEnterInHouse = false;
const init_canGoOutTheHouse = false;

//~ PNJ
const init_canInteractWithPNJ = false;
const init_PressInteractPNJ = false
const init_canTalkWithPNJ = false;
const init_PressTalkPNJ = false;
const init_currentTextSpeaking = ""
const init_currentIndexTextSpeaking = 0

//~  Portes
const init_behindThisDoor = "";
const init_behindThisDoorHouse = ""
const init_engine1WidthDoors = init_rectWidth
const init_engine1HeightDoors = init_rectHeight * 2
const init_engine2WidthDoors = 10
const init_engine2HeightDoors = init_rectHeight

//~ Mort
const init_playerDead = false

//~ Popups
const init_popUpShown = false;
const init_playerAnswersYes = false;

//~ Credits
const init_endTheGameCredits = false;
const init_PositionCredits = window.innerHeight + 50;
const init_speedCredits = 2.5;
const init_creditsInHome = false;

//& Statistiques
const init_numberOfSteps = 0;
const init_statistiques = {
    distanceWalked: 0,
    totalJumpCount: 0,
    mobsKilled: 0,
    damagesDones: 0,
    damagesGet: 0,
    healCount: 0,
    deathCount: 0,
    timeSpentInGame: 0,
    playerSpeed: 0
}

//& Items
const init_itemList = [];
const init_currentItemPointing = "";
const init_canGetItem = false;


//& Troc
const init_waitingAnswer = false;
const init_haveToTrade = false;
const init_slotSize = 2
const init_itemSize = 1.6
const init_stackSize = 5


//& FPS
const init_fpsEnabled = false
const init_FPSButtonColor = 255


//& Physique
const init_gravityForce = 0.5;


//& Cinématiques
const init_startCinematicPlaying = false;
const init_musicCinematic = false;


