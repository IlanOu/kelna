function drawBackgroundImage (background){

  //? dessinez votre image de fond d'écran
  noSmooth()
  
  image(background, backgroundX, 0, background.width, viewportDisplayHeight);

  //& déplacez votre image de fond d'écran vers la gauche à chaque trame
  
  //? si l'image de fond d'écran est sortie de l'écran, remettez-la à droite
  if (backgroundX < -background.width + viewportDisplayWidth) {
    backgroundX += background.width
  }else{
    backgroundX = xStartWorld/8;
  }
}
