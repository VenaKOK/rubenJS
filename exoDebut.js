/*
Créez une variable contenant votre nom
- Créez une variable contenant votre prénom
- Faites un console.log des deux variable afin d’afficher votre nom et prénom à la suite
(attention à bien rajouter un espace entre les deux
*/

let prenom = "Vena";
let nom = "Kok";
console.log(prenom, nom);

/* 
- Créez un fichier html et faites appel à un script afin d’afficher un message en boite de
dialogue à l’aide de la fonction alert().
- Essayez d’afficher un message de confirmation à l’aide de la fonction confirm()
*/

// alert("hello");
// confirm("etes vous surs?");

/*
Maintenant que vous savez afficher une demande de confirmation et une alerte, nous allons
    afficher une alerte différente selon si l’utilisateur à confirmer ou pas.
    - Utilisez la condition « if / else » pour demander quelques chose à l’utilisateur
    - Afficher une alerte différente selon si l’utilisateur confirme ou non
 */

// let confirmation = confirm("Etes vous surs?");
/*
if(confirmation){
   alert("Très bien on continue");
} else{
    alert("Très bien on arrete")
}
*/

/*
A l’aide de la fonction « prompt() » demandez une informations à l’utilisateurs.
- Stockez cette information dans une variable et affichez la
*/

// var prompt = prompt("Donner votre nom");
// console.log(prompt);

/*
Comment tu t’appelles? Vérifier le nom :
● Entre 1 et 10 caractères.
● Non-vide.
Afficher une erreur
Répondre :
● “Bonjour !”
*/

// var reponse = prompt ("Comment tu t’appelles?");
// if(reponse.length>10 || reponse == null){
//     console.log("une erreur est produite");
// }else{
//     console.log("Bonjour !");
// }

/*
    Crée une variable nombre et affecte lui un chiffre ou un nombre
    console.log le type de la variable
    Convertie la variable nombre en STRING
    affiche le 
    Crée une variable chaineDeCaractere et affecte lui un texte
    affiche le 
    Convertie la variable en nombre
    affiche le
    Quel est  ton constat ?

    bonus
    Trouve trois façon de convertir une variable en string ou number
*/

let nombre = 22;

console.log(typeof nombre);
nombre = String(nombre);
console.log(nombre)

let chaineDeCaractere = "hello";
let chaineDeCaractere2 = "2";

console.log(chaineDeCaractere);
console.log(chaineDeCaractere2)

chaineDeCaractere = parseInt(chaineDeCaractere);
chaineDeCaractere2 = parseInt(chaineDeCaractere2);

console.log(chaineDeCaractere);
console.log(chaineDeCaractere2)

//BONUS
/**
 * Il est possible de convertir avec parseInt, Number(), ou parseFloat, +
 * pour les STRING il est possible de faire String()
 */

/**
 * Le constat est que si vous aviez mis un text comme hello alors il en resulte NaN pour note a number
 * parcontre si vous aviez mit un chiffre entre guillemet alors cela fonction
 */
