function charCount(str, search)
{
    //On initialise un compteur
    let letterCount = 0;

    //On boucle sur chaque lettre de la chaine
    for(let letter of str){
        //Si la lettre est egale à la recherche, on incrémente le compteur
        if(letter === search){
            letterCount +=1
        }
    }

    return letterCount;
}

console.log(charCount('w3resource.com', 'o'));