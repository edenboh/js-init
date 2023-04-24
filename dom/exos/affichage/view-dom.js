console.log('Script view DOM data loaded.')

let student = {
    classe:"BTS SIO 1 ALT",
    prenom:"Mathieu",
    nom:"DURAND",
    adresse:"34 avenue du plateau",
    cp:"94220",
    ville:"CHARENTON LE PONT",
    email:"m.durand@mail.fr",
    telephone:"06-23-87-90-45",
    releveNotes:{
        mathematiques:[12,10],
        cybersecurite:[13,10],
        cejm:[16,10],
        atpro:[12,10],
        anglais:[16,10],
    }
}

const moyennesGenerales = calculMoyenneGenerale(student.releveNotes)

afficheDonnesAdministratives(student)
afficheReleveNotesV1(student.releveNotes)
afficheReleveNotesV2(student.releveNotes)
afficheMoyenneGenerale(moyennesGenerales)
afficheStatusPassage(moyennesGenerales.s2)

function afficheDonnesAdministratives(studentObject){
    document.getElementById('std-fullname').textContent = studentObject.prenom.concat(" ",student.nom)
    document.getElementById('std-classe').textContent = studentObject.classe
    document.getElementById('std-adresse').textContent = studentObject.adresse
    document.getElementById('std-cp').textContent = studentObject.cp
    document.getElementById('std-ville').textContent = studentObject.ville
    document.getElementById('std-email').textContent = studentObject.email
    document.getElementById('std-tel').textContent = studentObject.telephone
}

function afficheReleveNotesV1(releveNotesObject){
    const notesTrs = document.querySelectorAll("[class^='std-notes-']")
    notesTrs.forEach(tr=> {
        //console.log(tr.className)
        const matiere = tr.className.split('-')[2]
        tr.children[1].textContent = releveNotesObject[matiere][0]
        tr.children[2].textContent = releveNotesObject[matiere][1]
    })
}

function afficheReleveNotesV2(releveNotesObject){
    for(const [matiere,notes] of Object.entries(releveNotesObject)){
        document.querySelector('.std-notes-'+matiere).children[1].textContent = notes[0]
        document.querySelector('.std-notes-'+matiere).children[2].textContent = notes[1]
    }
}

function calculMoyenneGenerale(releveNotesObject){
    const notesArray = Object.values(releveNotesObject)
    const cumulNotes = {s1:0,s2:0}

    for(let notes of notesArray){
        cumulNotes.s1 += notes[0]
        cumulNotes.s2 += notes[1]
    }

    return {
        s1: (cumulNotes.s1 / notesArray.length).toFixed(2),
        s2: (cumulNotes.s2 / notesArray.length).toFixed(2),
    }
}

function afficheMoyenneGenerale(moyenneGeneraleObject){

    document.getElementById('std-mg-s1').textContent = moyenneGeneraleObject.s1
    document.getElementById('std-mg-s2').textContent = moyenneGeneraleObject.s2

    document.getElementById('std-mg-s1').style.color = moyenneGeneraleObject.s1 >= 10 ? 'green' : 'red'
    document.getElementById('std-mg-s2').style.color = moyenneGeneraleObject.s2 >= 10 ? 'green' : 'red'
}

function afficheStatusPassage(moyenneS2){
    document.getElementById('container-passage').removeAttribute('hidden')
    if(moyenneS2 >= 10){
        //document.getElementById('alert-recale').setAttribute('hidden','hidden') //Version via les attributs HTML
        document.getElementById('alert-recale').classList.add('d-none')  //Version via les classes Bootstrap
    }else{
        //document.getElementById('alert-admis').setAttribute('hidden','hidden') //Version via les attributs HTML
        document.getElementById('alert-admis').classList.add('d-none') //Version via les classes Bootstrap
    }
}

