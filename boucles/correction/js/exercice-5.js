console.log("Script Boucle 5 chargé !")

const staff = [
    {name:"Marc",gender:"M"},
    {name:"Sophie",gender:"F"},
    {name:"Eva",gender:"F"},
    {name:"Aaron",gender:"M"},
    {name:"Pierre",gender:"M"},
    {name:"Martine",gender:"F"},
    {name:"Chloé",gender:"F"},
    {name:"Hubert",gender:"M"},
    {name:"Aurore",gender:"F"},
]

let mens = [];
let womens = [];

for(let member of staff){
    switch(member.gender){
        case 'M':
            mens.push(member)
            break;
        case 'F':
            womens.push(member)
            break
        default:
            break;
    }
}

console.log(mens)
console.log(womens)