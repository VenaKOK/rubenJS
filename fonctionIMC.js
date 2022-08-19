/*
Créez une fonction permettant d’afficher l’IMC d’une personne, en rentrant comme paramètre
son poids et sa taille.
Pour info : La formule de l’IMC est poids(en kg) / taille²(en mètre).
L’utilisateur devra rentré son poids en kg, donc à vous de faire la conversion cm->mètre, de
faire le calcul nécessaire pour l’IMC et d’afficher le résultat arrondi à 1 chiffre après la virgule.
let poids = prompt("Quel est votre poids en kg ?");
let taille = prompt("Quel est votre taille en cm ?");
*/

function imc (poids, taille){
    poids = prompt("Quel est votre poids en kg ?");
    taille = prompt("Quel est votre taille en cm ?");
    console.log(Math.round((poids/(taille/100)**2)*10)/10);
    return Math.round((poids/(taille/100)**2)*10)/10;
}

imc();