/*
Maintenant que vous savez afficher une demande de confirmation et une alerte, nous allons
    afficher une alerte différente selon si l’utilisateur à confirmer ou pas.
    - Utilisez la condition « if / else » pour demander quelques chose à l’utilisateur
    - Afficher une alerte différente selon si l’utilisateur confirme ou non
 */

let confirmation = confirm("Etes vous surs?");

if(confirmation){
    alert("Très bien on continue");
} else{
    alert("Très bien on arrete")
}
