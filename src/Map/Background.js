function drawBackgroundImage (background){

  //? dessinez votre image de fond d'écran
  noSmooth()
  
  let heightImgRatio = viewportDisplayHeight/background.height
  
  // image(background, backgroundX, 0, background.width/heightImgRatio, background.height/heightImgRatio);
  image(background, backgroundX, 0, background.width*heightImgRatio, background.height*heightImgRatio);
  
  backgroundX = xStartWorld / heightImgRatio;
}
