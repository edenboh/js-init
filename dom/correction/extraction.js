console.log('Script extract DOM data loaded.')

const commande ={
    infos:{
        id:document.getElementById('cmd-id').textContent,
        date:document.getElementById('cmd-date').textContent,
    },
    client:{
        id:document.getElementById('cmd-client-id').textContent,
        nomComplet:document.getElementById('cmd-client-nom-complet').textContent,
        tel:document.getElementById('cmd-client-tel').textContent,
    },
    details:{
        lignes:[],
        totalHt:document.getElementById('cmd-total-ht').textContent,
        totalTva:document.getElementById('cmd-tva').textContent,
        totalTtc:document.getElementById('cmd-total-ttc').textContent,
    },
}

let lignesCommandes = document.querySelectorAll('.cmd-details-ligne')
lignesCommandes.forEach(l=>{
    const ligne = {
        ref:l.children[0].textContent,
        description:l.children[1].textContent,
        prixUnitaire:parseInt(l.children[2].textContent),
        quantite:parseInt(l.children[3].textContent),
        total:parseInt(l.children[4].textContent)
    }

    commande.details.lignes.push(ligne)
})

console.log(commande)