//~ Crée l'image de fond
function drawBackgroundImage (background, backgroundClose, backgroundDistant){

  //? dessinez votre image de fond d'écran
  noSmooth()
  
  let heightImgRatio = viewportDisplayHeight/background.height

  let widthImgRatio = viewportDisplayWidth/background.width

  let multiplyFactor = 1
  let speedFactor = 3
  
  //? Premier background
  backgroundX = (xStartWorld / heightImgRatio)*multiplyFactor * speedFactor;
  image(background,         backgroundX, 0, background.width*heightImgRatio*multiplyFactor, background.height*heightImgRatio*multiplyFactor);


  //? Deuxième background
  multiplyFactor = 1.1
  backgroundX = (xStartWorld / heightImgRatio)*multiplyFactor * speedFactor;
  image(backgroundDistant,  backgroundX, 0, background.width*heightImgRatio*multiplyFactor, background.height*heightImgRatio*multiplyFactor);
  
  //? Troisième background
  multiplyFactor = 1.2
  backgroundX = (xStartWorld / heightImgRatio)*multiplyFactor * speedFactor;
  image(backgroundClose,    backgroundX, 0, background.width*heightImgRatio*multiplyFactor, background.height*heightImgRatio*multiplyFactor);
}
