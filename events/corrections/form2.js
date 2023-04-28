console.log('Script form 2 loaded !')

const formElement = document.querySelector('form')

formElement.addEventListener('submit',function(event){

    const form = event.currentTarget
    const data = new FormData(form)
    const userFirstname = data.get('user_firstname')
    const userLastname = data.get('user_lastname')


    event.preventDefault()

    //Verif applicables au firstname
    const userFirstnameElement =  document.querySelector('#firstname')
    if(isFirstnameValid(userFirstname)){
        userFirstnameElement.style.border = "2px solid green"
    }else{
        userFirstnameElement.style.border = "2px solid red"
    }

    //Verif applicables au lastname
    const userLastnameElement =  document.querySelector('#lastname')
    if(isLastnameValid(userLastname)){
        userLastnameElement.style.border = "2px solid green"
    }else{
        userLastnameElement.style.border = "2px solid red"
    }



    if(userFirstnameElement.style.borderColor === "red" || userLastnameElement.style.borderColor === "red"){
        //event.preventDefault()
        console.log("le formulaire comporte des erreurs")
    }
})

function isFirstnameValid(value){
    // Un prénom est considéré valide si :
    // Sa taille est supérieur ou égale à 3 et inférieur à 12
    return value.length >= 3 && value.length < 12;
}

function isLastnameValid(value){
    // Un prénom est considéré valide si :
    // Sa taille est supérieur ou égale à 2 et inférieur à 15
    return value.length >= 2 && value.length < 15;
}