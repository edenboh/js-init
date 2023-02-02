console.log("Script condition-4 chargé !")

const inputPassword = prompt('Taper votre nouveau mot de passe')
let password = "Password"
if(inputPassword === password ){
    result = "Mot de passe valide"
}else{
    result = "Mot de passe invalide"
}

console.log(result)