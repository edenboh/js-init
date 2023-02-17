function findLongestWord(str)
{
    //On transforme la chaine en tableau
    let words = str.split(" ");
    //on considere le premier mot comme étant le plus long
    let result = words[0];

    //On boucle sur chaque mot du tableau
    for(let word of words)
    {
        //Si la longueur du mot en cours est superieur au mot stocké comme étant me plus long
        //alors on remplace le mot stocké
        if(result.length < word.length)
        {
            result = word;
        }
    }
    return result;
}
console.log(findLongestWord('Web Development Tutorial'));