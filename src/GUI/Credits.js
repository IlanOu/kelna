//     textAlign(CENTER, CENTER);
//     textSize(32);

function forCredits(){
    let PositionCredits = window.innerHeight + 50;
    let speedCredits = 1;


    background(0);
    fill(255);

    for (let i = 0; i < credits.length; i++) {

        let credit = creditsJson.Credits[i];
        let dy = i * 50;
        text(credit, width / 2, PositionCredits + dy);

    }
    PositionCredits -= speedCredits;

    if (PositionCredits < -credits.length * 50) { // Si les crédits sont sortis de l'écran

        PositionCredits = window.innerHeight + 50; // Les crédits réapparaissent en haut

    }


}