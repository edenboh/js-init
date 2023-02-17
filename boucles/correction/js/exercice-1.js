console.log("Script Boucle 1 chargé !")

let chiffre = prompt('Entrez un nombre')
if (chiffre > 10 || chiffre < 0) {
    console.log("Le nombre n'est pas entre 0 et 10")
} else {
    for (let i = chiffre; i >= 0; i--) {
        console.log(i)
    }
}
