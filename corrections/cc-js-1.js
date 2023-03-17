
//  ______                   _            __
// |  ____|                 (_)          /_ |
// | |__  __  _____ _ __ ___ _  ___ ___   | |
// |  __| \ \/ / _ \ '__/ __| |/ __/ _ \  | |
// | |____ >  <  __/ | | (__| | (_|  __/  | |
// |______/_/\_\___|_|  \___|_|\___\___|  |_|
//
// Créer une fonction qui permet de remplacer un caractère dans une chaine
// Resultat attendu : user.test@mail.dev

const email = 'user.test_mail.dev'

function fonction1(str,targetChar, replacementchar){
    return str.replace(targetChar,replacementchar)
}

console.log(fonction1(email,'_','@'))


//  ______                   _            ___
// |  ____|                 (_)          |__ \
// | |__  __  _____ _ __ ___ _  ___ ___     ) |
// |  __| \ \/ / _ \ '__/ __| |/ __/ _ \   / /
// | |____ >  <  __/ | | (__| | (_|  __/  / /_
// |______/_/\_\___|_|  \___|_|\___\___| |____|
//
// Créer une fonction qui permet d'extraire une partie d'une chaine
// résultat attendu : 678

const chaine = 'DG-678-ZP'

function fonction2(str, start,end){
    return str.substring(start,end)
}

console.log(fonction2(chaine,3,6))


//  ______                   _            ____
// |  ____|                 (_)          |___ \
// | |__  __  _____ _ __ ___ _  ___ ___    __) |
// |  __| \ \/ / _ \ '__/ __| |/ __/ _ \  |__ <
// | |____ >  <  __/ | | (__| | (_|  __/  ___) |
// |______/_/\_\___|_|  \___|_|\___\___| |____/
//
// Créer une function permettant de verifier si une valeur est présente dans un tableau
// Résultat attendu:
//      - pour la valeur recherchée 'chat' -> true
//      - pour la valeur recherchée 'Chat' -> false
//      - pour la valeur recherchée 'Lion' -> false

const animaux = ['loutre', 'chat', 'girage'];

function fonction3(array, search){
    return array.includes(search)
}

console.log(fonction3(animaux,'chat'));
console.log(fonction3(animaux,'Chat'));
console.log(fonction3(animaux,'Lion'));


//  ______                   _            _  _
// |  ____|                 (_)          | || |
// | |__  __  _____ _ __ ___ _  ___ ___  | || |_
// |  __| \ \/ / _ \ '__/ __| |/ __/ _ \ |__   _|
// | |____ >  <  __/ | | (__| | (_|  __/    | |
// |______/_/\_\___|_|  \___|_|\___\___|    |_|
//
// Créer une fonction permettant d'ajouter un élément dans un tableau
// Résultat attendu : ['Cochon', 'Chèvre', 'Mouton', 'Canard']

const oiseaux = ['Pigeon', 'Corbeau', 'Mouette'];

function fonction4(array,value){
    array.push(value)
    return array
}

console.log(fonction4(oiseaux,'canard'));


//  ______                   _            _____
// |  ____|                 (_)          | ____|
// | |__  __  _____ _ __ ___ _  ___ ___  | |__
// |  __| \ \/ / _ \ '__/ __| |/ __/ _ \ |___ \
// | |____ >  <  __/ | | (__| | (_|  __/  ___) |
// |______/_/\_\___|_|  \___|_|\___\___| |____/
//
// Créer une fonction permettant de vérifier si un nombre est compris entre 2 autres
// Résultat attendu :
//      - pour la valeur 15 dans l'intervalle 11 - 30 -> 15 est compris dans l'interval 11 et 30
//      - pour la valeur 20 dans l'intervalle 34 - 51 -> 20 n'est pas compris dans l'interval 34 et 51

function fonction5(num, start, end) {
    let resultStr
    if(num >= start && num <= end){
        resultStr = num + " est compris dans l'interval " + start +" et "+ end
    }
    else{
        resultStr = num + " n'est pas compris dans l'interval " + start +" et "+ end
    }

    return resultStr
}

console.log(fonction5(15,11,30))
console.log(fonction5(20,34,51))


//  ______                   _              __
// |  ____|                 (_)            / /
// | |__  __  _____ _ __ ___ _  ___ ___   / /_
// |  __| \ \/ / _ \ '__/ __| |/ __/ _ \ | '_ \
// | |____ >  <  __/ | | (__| | (_|  __/ | (_) |
// |______/_/\_\___|_|  \___|_|\___\___|  \___/
//
// Créer une fonction qui permet d'afficher le fameux 'Hello, World' dans différentes langues.
// Les langues prises en charge seront le français, l'anglais et l'espagnol
// Résultat attendu:
//      - pour la langue en anglais -> Hello, World
//      - pour la langue en français -> Bonjour tout le monde
//      - pour la langue en espagnol -> Hola, Mundo
//      - pour la langue en allemand -> Langue non prise en charge

function fonction6(lang) {
    let result

    switch(lang){
        case 'fr':
            result = 'Bonjour tout le monde'
            break
        case 'en':
            result = 'Hello, World'
            break
        case 'es':
            result = 'Hola, Mundo'
            break
        default:
            result = 'Langue non prise en charge'
            break
    }
    return result
}

console.log(fonction6('en'));
console.log(fonction6('fr'));
console.log(fonction6('es'));
console.log(fonction6('de'));


//  ______                   _            ______
// |  ____|                 (_)          |____  |
// | |__  __  _____ _ __ ___ _  ___ ___      / /
// |  __| \ \/ / _ \ '__/ __| |/ __/ _ \    / /
// | |____ >  <  __/ | | (__| | (_|  __/   / /
// |______/_/\_\___|_|  \___|_|\___\___|  /_/
//
// Créer une fonction permettant de le type d'un triangle à partir de la longueur de chacun de ces cotés
// Pour rappel:
//      - un triangle equilatéral possède 3 cotes égaux
//      - un triangle isocèle possède 2 cotés égaux
//      - un triangle scalene possède aucun cotés égaux
// Résultat attendu:
//      - Pour un triangle ayant des cotés de longueurs suivantes (12, 12, 12) -> Triangle equilateral.
//      - Pour un triangle ayant des cotés de longueurs suivantes (12, 12, 12) -> Triangle isocèle.
//      - Pour un triangle ayant des cotés de longueurs suivantes (12, 12, 12) -> Triangle scalène.

function fonction7(side1, side2, side3) {

    let result

    if((side1 === side2) && (side1 === side3)){
        result = `Equilateral triangle.`
    }
    else if ((side1 === side2) || (side2 === side3) || (side1 === side3)){
        result = `Isosceles triangle.`
    }
    else{
        result = `Scalene triangle.`
    }

    return result
}

console.log(fonction7(12,12,12))
console.log(fonction7(20,20,31))
console.log(fonction7(5,4,3))


//  ______                   _             ___
// |  ____|                 (_)           / _ \
// | |__  __  _____ _ __ ___ _  ___ ___  | (_) |
// |  __| \ \/ / _ \ '__/ __| |/ __/ _ \  > _ <
// | |____ >  <  __/ | | (__| | (_|  __/ | (_) |
// |______/_/\_\___|_|  \___|_|\___\___|  \___/
//
// Créer une fonction qui permet d'obtenir la somme de 2 tableaux d'entiers
// La fonction devra donner le resultat de la somme de chaque tableau et la somme des 2 tableaux
// Résultat attendu: 276 + 351 = 627

let dataArr1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let dataArr2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351

function fonction8(arr1,arr2){
    let arr1Sum
    let arr2Sum

    // for(let value of arr1){
    //     arr1Sum += value
    // }
    //
    // for(let value of arr2){
    //     arr2Sum += value
    // }

    arr1Sum = arr1.reduce(
        (acc,current)=>acc + current,
        0
    )

    arr2Sum = arr2.reduce(
        (acc,current)=>acc + current,
        0
    )

    return `${arr1Sum} + ${arr2Sum} = ${arr1Sum + arr2Sum}`

}

console.log(fonction8(dataArr1,dataArr2))


//  ______                   _             ___
// |  ____|                 (_)           / _ \
// | |__  __  _____ _ __ ___ _  ___ ___  | (_) |
// |  __| \ \/ / _ \ '__/ __| |/ __/ _ \  \__, |
// | |____ >  <  __/ | | (__| | (_|  __/    / /
// |______/_/\_\___|_|  \___|_|\___\___|   /_/
//
// Créer une fonction qui permet de verifier si une chaine est un palindrome
// Rappel : un palindrome est un mot qui a la meme orthographe qu'il soit lu dans un sens ou dans l'autre
// Exemple : kayak
// Résultat attendu :
//      - pour la valeur racecar -> "racecar" est un palindrome
//      - pour la valeur java -> "Java" n'est pas un palindrome

let str1 = "racecar";
let str2 = "java";

function fonction9(str){
    let result

    if(str.toLowerCase() === str.toLowerCase().split('').reverse().join('')){
        result = `"${str}" est un palindrome`
    }else{
        result = `"${str}" n'est pas un palindrome`
    }

    return result
}

console.log(fonction9(str1)) // "racecar" est un palindrome
console.log(fonction9(str2)) // "Java" n'est pas un palindrome

//  ______                   _            __  ___
// |  ____|                 (_)          /_ |/ _ \
// | |__  __  _____ _ __ ___ _  ___ ___   | | | | |
// |  __| \ \/ / _ \ '__/ __| |/ __/ _ \  | | | | |
// | |____ >  <  __/ | | (__| | (_|  __/  | | |_| |
// |______/_/\_\___|_|  \___|_|\___\___|  |_|\___/
// Créer une fonction qui retourne la plus grande valeur d'un tableau d'entiers
// Résultat attendu: 567

let data = [2, 45, 3, 67, 34, 567, 34, 345, 123];

function function10(arr){
    let largest = arr[0]
    for(let value of arr){
        largest = value>largest ? value:largest;
    }
    return largest
}

console.log(function10(data))














