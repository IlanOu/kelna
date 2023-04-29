//~ Crée l'image de fond
function drawBackgroundImage (background, backgroundClose, backgroundDistant){

  //? dessinez votre image de fond d'écran
  noSmooth()
  
  let heightImgRatio = viewportDisplayHeight/background.height

  let widthImgRatio = viewportDisplayWidth/background.width

  let multiplyFactor = 1
  
  //? Premier background
  backgroundX = (xStartWorld / widthImgRatio);
  image(background,         backgroundX, 0, background.width*heightImgRatio*multiplyFactor, background.height*heightImgRatio*multiplyFactor);


  //? Deuxième background
  multiplyFactor = 1.1
  backgroundX = (xStartWorld / widthImgRatio)*multiplyFactor;
  image(backgroundDistant,  backgroundX, 0, background.width*heightImgRatio*multiplyFactor, background.height*heightImgRatio*multiplyFactor);
  
  //? Troisième background
  multiplyFactor = 1.2
  backgroundX = (xStartWorld / widthImgRatio)*multiplyFactor;
  image(backgroundClose,    backgroundX, 0, background.width*heightImgRatio*multiplyFactor, background.height*heightImgRatio*multiplyFactor);
}
