function setup() {
  createCanvas(windowWidth, windowHeight);
}



function draw() {
  background(220);
  stroke(0)
    
  // récupérer le maximum de cases possible dans le canvas
  let [maxNumberCasesX, maxNumberCasesY] = getNumberOfCasesInRect(
                                            windowWidth, 
                                            windowHeight,
                                            rectWidth,
                                            rectHeight
                                          )
  
  // générer un tableau avec le maximum de cases possible
  // let grid = createTable(maxNumberCasesX, maxNumberCasesY)
  let grid = createTable(10, 10)
  
  fill(255)
  
  // afficher le tableau sous forme de grille en position 0,0
  let gridX1 = displayGrid(grid, 0, 0, rectWidth, rectHeight)[0]
  let gridY1 = displayGrid(grid, 0, 0, rectWidth, rectHeight)[1]
  let gridX2 = displayGrid(grid, 0, 0, rectWidth, rectHeight)[2]
  let gridY2 = displayGrid(grid, 0, 0, rectWidth, rectHeight)[3]
  
  
  // ajouter des contrôles au perso (gauche, droite)
  characterPositionX = getMovementsControls(characterPositionX, characterMovesSpeed)
  
  
  // ajouter la gravité au personnage
  let gravityReturns = getPositionWithGravity(characterPositionY, 
                                              characterVelocityY, 
                                              gravityForce, 
                                              characterMass)
  characterPositionY = gravityReturns[0]
  characterVelocityY = gravityReturns[1]  
  
  
  
  
  // ajouter le saut au personnage
  if (spaceKeyIsPressed){
    if (!isJumping && characterJumpCount < characterMaxJumps){
      
      isJumping = true;
      characterDoubleJumping = false;
      characterJumpCount++;
      
      let jumpReturns = addJump(characterPositionY, 
                                characterJumpHeight, 
                                characterVelocityY, 
                                gravityForce)
      characterPositionY = jumpReturns[0];
      characterVelocityY = jumpReturns[1];
      
      
    // ajoute le double saut au personnage  
    }else if (characterDoubleJumping && characterJumpCount < characterMaxJumps){
      characterDoubleJumping = false;
      characterJumpCount++;
      
      let jumpReturns = addJump(characterPositionY, 
                                characterJumpHeight, 
                                characterVelocityY, 
                                gravityForce)
      characterPositionY = jumpReturns[0];
      characterVelocityY = jumpReturns[1];
    }
  }
  // vérifier si le joueur touche le sol
  characterIsGrounded = isGrounded(characterPositionY, 
                                   characterHeight, 
                                   gridX1, 
                                   gridY2, 
                                   gridX2)
  
  if (characterIsGrounded){
    isJumping = false;
    characterJumpCount = 0
  }
   
  
  // contraindre les positions du perso
  let positions = containedPositionsIn(characterPositionX,
                                          characterPositionY,
                                          characterWidth,
                                          characterHeight,
                                          gridX2,
                                          gridY2)
  characterPositionX = positions[0];
  characterPositionY = positions[1];
  
  // afficher le personnage
  drawCharacter(characterPositionX, 
                characterPositionY, 
                characterWidth, 
                characterHeight)
}