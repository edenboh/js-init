function reverseNumber(n)
{
    //on transforme le nombre en string
    let numStr = n.toString();
    //on transforme la chaine en tableau de chiffres
    let numArr = numStr.split('')
    //on inverse le sens du tableau
    let reverseNumArr = numArr.reverse()
    //on retransforme le tableau inversé en chaine
    let reverseNumStr = reverseNumArr.join('')
    //on retransforme la chaine en nombre
    let reverseNum = Number(reverseNumStr)

    return reverseNum;

    // Version One line
    // return Number(n.toString().split("").reverse().join(""));
}
console.log(reverseNumber(1122334455));