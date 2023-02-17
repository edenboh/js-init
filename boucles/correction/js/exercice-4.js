console.log("Script Boucle 4 chargé !")

for (let i = 0; i <= 20; i++) {
    if (i === 8 || i === 14) {
        continue
    }else{
        if(i%2 === 0){
            console.log(+ i)
        }
    }
}