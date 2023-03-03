//#region //! Variables GUI Raf

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

//#endregion
