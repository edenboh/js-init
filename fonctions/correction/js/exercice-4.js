function vowelCount(str1)
{
    let vowelList = 'aeiouAEIOU';
    let vcount = 0;

    //On boucle sur chaque caractère de la chaine
    for(let letter of str1)
    {
        //Si le caractère correspond à une valeur dans la liste de voyelles
        //Alors on ajoute 1 au compte de voyelles
        if (vowelList.indexOf(letter) !== -1)
        {
            vcount += 1;
        }

    }
    return vcount;
}
console.log(vowelCount("The quick brown fox"));