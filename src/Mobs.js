/* -------------------------------------------------------------------------- */
/*                    Collisions de l'entité avec le monde                    */
/* -------------------------------------------------------------------------- */

function handleCollisionMobs(agentX, agentY, agentWidth, agentHeight, agentDirection, objectX, objectY, objectWidth, objectHeight, velocityY, jumpCount, isJumping) {

    //* Vérifier si les boîtes se chevauchent
    if (rectIsInRect(agentX, agentY, agentWidth, agentHeight, objectX, objectY, objectWidth, objectHeight)) {
  
        //~ Collisions dessus / dessous de l'objet
        if ((agentX < objectX + objectWidth - (objectWidth / 10)) && (agentX + agentWidth > objectX + (objectWidth / 10))) {
            //? collisions en dessous de l'objet
            if (agentY < objectY + objectHeight && agentY > objectY) {
                agentY = objectY + objectHeight
  
                velocityY = 0;

            }
            //? collision au dessus de l'objet
            else if (agentY + agentHeight > objectY && agentY < objectY) {
  
                agentY = objectY - agentHeight

                jumpCount = 0;
                isJumping = false
                if (!isJumping){
                    velocityY = 0
                }

            }   
            
            return [agentX, agentY, velocityY, jumpCount, isJumping, haveToJump]
        }

  
        //~ Collisions gauche / droite de l'objet
        //? si le bas du perso est en dessous du haut du cube + 1/10 de sa hauteur
        if ((agentY < objectY + objectHeight - (objectHeight / 10)) && (agentY + agentHeight > objectY + (objectHeight / 10))) {
    
            //? collisions à droite de l'objet
            if (agentX + agentWidth > objectX && agentX > objectX) {
                agentX = objectX + objectWidth

                if (agentDirection == "left"){

                    haveToJump = true
                }else{
                    haveToJump = false
                }
    
            //? collisions à gauche de l'objet
            } else if (agentX < objectX + objectWidth && agentX < objectX) {
                agentX = objectX - agentWidth

                if (agentDirection == "right"){
                    haveToJump = true
                }else{
                    haveToJump = false
                }

            }
            

            
            return [agentX, agentY, velocityY, jumpCount, isJumping, haveToJump]
        }  

    }
    return [agentX, agentY, velocityY, jumpCount, isJumping, haveToJump]
}


/* -------------------------------------------------------------------------- */
/*                              Suivre le joueur                              */
/* -------------------------------------------------------------------------- */

function followPlayer(Mobs){

    Mobs.isFollowing = true

    let distance = characterPositionX - Mobs.x;
    let followSpeed = Mobs.followSpeed
    let MobsHaveToJump = Mobs.haveToJump

    Mobs.movement = "walk"
    Mobs.direction = "right";

    //? se diriger vers le perso 
    if (distance < 0){
        Mobs.direction = "left";
        followSpeed *= -1
    }

    if (!MobsHaveToJump){
        Mobs.stepCount += followSpeed;
    }else{
        Mobs.haveToJump = false
    }


}


/* -------------------------------------------------------------------------- */
/*                     Un mob se ballade / fait une ronde                     */
/* -------------------------------------------------------------------------- */
function doRound(Mobs){
    Mobs.movement = "walk"

    Mobs.isFollowing = false

    let CurrentX = Mobs.x
    let walkAmount = Mobs.stepCount

    let MobEnd = Mobs.xEnd
    let MobStart = Mobs.xStart

    let MobsHaveToJump = Mobs.haveToJump



    //& FAIRE UNE RONDE
    if (CurrentX >= MobEnd){
        Mobs.direction = "left"
    }else if (CurrentX <= MobStart){
        Mobs.direction = "right"
    }
    
    if (Mobs.color == "blue"){
        rect(MobStart, 200, 50, 50)
        rect(MobEnd, 200, 60, 60)

    }

    
    //& Se déplacer
    if (Mobs.direction == "right"){
        
        if (haveToJump){
            Mobs.direction = "left"
            walkAmount -= Mobs.speed
            haveToJump = false
            
        }else{
            
            walkAmount += Mobs.speed
            
        }
    }else{
        if (haveToJump){
            Mobs.direction = "right"

          
            walkAmount += Mobs.speed

            haveToJump = false
            

        }else{
            walkAmount -= Mobs.speed
            
        }
        
    }

     
    Mobs.haveToJump = MobsHaveToJump
    Mobs.stepCount = walkAmount
    Mobs.xStart = MobStart
    Mobs.xEnd = MobEnd
}