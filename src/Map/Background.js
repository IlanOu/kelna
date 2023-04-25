function drawBackgroundImage (background, backgroundClose, backgroundDistant){

  //? dessinez votre image de fond d'écran
  noSmooth()
  
  let heightImgRatio = viewportDisplayHeight/background.height
  
  backgroundX = (xStartWorld / heightImgRatio)/2;
  image(background, backgroundX, 0, background.width*heightImgRatio, background.height*heightImgRatio);

  backgroundX = (xStartWorld / heightImgRatio)/1.5;
  image(backgroundDistant, backgroundX, 0, background.width*heightImgRatio, background.height*heightImgRatio);
  
  backgroundX = xStartWorld / heightImgRatio;
  image(backgroundClose, backgroundX, 0, background.width*heightImgRatio, background.height*heightImgRatio);
}
