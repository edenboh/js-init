console.log('Script form1 loaded !')

//Je récupère mon élement représentant le formulaire
const formElement = document.querySelector('form')

//j'ajoute mon écouteur d'évènement à ce dernier qui écoutera lorsque je soumets mon formulaire
formElement.addEventListener('submit',function(event){
    //Je stoppe la soumission de la requête du formulaire
    //event.preventDefault()

    //Je crée un objet FormData afin d'extraire les valeurs de mon formulaire, puis je récupère les valeurs des champs
    const form = event.currentTarget
    const data = new FormData(form)
    const userName = data.get('user_name')

    //j'éxécute mes verifications sur les mes valeurs extraites
    if(userName === ""){
        //Si mon champ username est vide
        //Je stoppe la soumission de la requête du formulaire
        event.preventDefault()

        console.log("userName est vide")

        //Je crée un nouvel élément HTML <p> destiné à recevoir le message d'erreur
        const errorMessage = document.createElement('p')
        //J'insère dans cet élément le message d'erreur
        errorMessage.textContent = "le nom d'utilisateur ne peut pas être vide !"
        //J'ajoute à la suite du formulaire mon nouvel élément <p> contenant le message d'erreur
        form.append(errorMessage)
    }
})