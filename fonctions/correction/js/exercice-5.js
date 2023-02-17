function generatePassword(length)
{
    //On initialise une chaine qui contient tous les caractères autorisés dans notre génération de mot de passe
    let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    //ON initialise une chaine vide destiné à recevoir le password
    let password = "";

    //On initialise un compteur
    let i = 0

    //tant que le compteur est inférieur on ajoute un caractère aléatoire
    while(i < length){
        //On selectionne aléatoirement un caractère dans la liste des possibles
        let char = charList.charAt(Math.floor(Math.random() * charList.length))
        //on ajoute ce caractère au password
        password += char
        //on augmente la valeur de i
        i++
    }

    return password;
}
console.log(generatePassword(8));