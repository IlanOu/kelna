//~ Mode ADMIN
function login(username, password) {

    adminJSON.admins.forEach(user => {
        if (user.name == username && user.password == password) {
            loged = true
            console.log('Current User :' + " " + username)
            characterMaxJumps = 100,
            //characterMovesSpeed = 10,
            characterPositionY = 0,
            maxHealth = 10,
            healthPlayer = 10
            dashSystem = true
        } else {
            console.error("Nom ou mot de passe incorrect !")
        }

    });
}



function logout() {
    if (loged) {
        console.log('Log out !')
        characterMaxJumps = init_characterMaxJumps,
        //characterMovesSpeed = init_characterMovesSpeed,
        maxHealth = init_maxHealth,
        healthPlayer = init_healthPlayer
        loged = false
        dashSystem = false
    } else {
        console.error("Vous n'êtes pas connecté pour vous déconnecter !")
    }
}