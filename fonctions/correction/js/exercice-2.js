function uppercase(str)
{
    //On transforme la chaine en tableau de mots
    let array1 = str.split(' ');
    //On  initialise un tableau destiné a recevoir nos resultats
    let newarray1 = [];

    //On boucle sur chaque mot du tableau
    for(let word of array1){

        //On recupere la première lettre du mot
        let firstLetter = word.charAt(0)
        //On la passe en majuscule
        let upperCaseFirstLetter = firstLetter.toUpperCase()
        //On enleve la premiere lettre du mot
        let wordWithoutFirstLetter = word.slice(1)
        //On concatène la premiere lettre en majuscule et le mot sans sa première lettre
        let upperCasedFirstLetterWord = upperCaseFirstLetter + wordWithoutFirstLetter
        //On ajoute le nouveau mot au tableau
        newarray1.push(upperCasedFirstLetterWord)

        //Version one line
        //newarray1.push(word.charAt(0).toUpperCase()+word.slice(1));
    }
    return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));