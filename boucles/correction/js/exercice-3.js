console.log("Script Boucle 3 chargé !")

let initialTemperature = 34
const targetTemperature = 19

if(initialTemperature < targetTemperature){
    while(initialTemperature < targetTemperature){
        initialTemperature++
        console.log("J'augmente la température de 1 degré -> "+ initialTemperature)
    }
}else if(initialTemperature > targetTemperature){
    while(initialTemperature > targetTemperature){
        initialTemperature--
        console.log("Je descends la température de 1 degré -> "+ initialTemperature)
    }
}


console.log("Température reglée à "+ targetTemperature+" degrés")