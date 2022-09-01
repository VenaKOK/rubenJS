
/* 
    - Créez le fichier HTML (attention à la sémantique des balises)
    - Créez le fichier Css pour avoir un visuel le plus proche possible du mien. (font =
    satisfy)

    - Créez les variables nécessaires au projet, prenez 5 minutes pour réfléchir à un
    algorithme, cela vous donneras une idée de vos besoins.
    - Allez chercher tout les éléments à modifier dans le DOM et stockez les également.
    - Créez un tableau avec vos citations préférées ainsi que l’auteur correspondant.
    (une dizaine)
    - Créez un évènement sur le clique du bouton « nouvelle citation ».
    - Créez une fonction permettant d’aller piocher une citation aux hasard dans votre
    tableau
    - Créez une fonction permettant d’actualise la citation et l’auteur.
    - Je vous laisse penser à un système pour qu’une citation ne sorte pas deux
    fois de suite.
    - Vous devriez avoir toutes les armes pour avancer, renseignez vous bien sur les
    fonctions mathématiques, elles pourront vous être utiles.
    - Vous pourriez avoir besoin d’une boucle à un endroit et de connaitre la longueur de
    votre tableau.
    J’en dis pas plus sinon c’est pas drôle, je vous donne la correction sur un zip et non
    dans le cours, comme ça vous avez tout.
    */

    let citation = document.querySelector(".citation");
    let source = document.querySelector(".source");
    let bouton = document.querySelector(".bouton");
    let random = document.querySelector(".random");

    let tableCitation = [
        ["When you realize nothing is lacking, the whole world belongs to you.", "Lao Tzu"],
        ["What the superior man seeks is in himself; what the small man seeks is in others.", "Confucius"],
        ["To seek is to suffer. To seek nothing is bliss.", "Bodhidharma"],
        ["Mind is like a mad monkey.", "Sathya Sai Baba"],
        ["Wise men don’t judge – they seek to understand.", "Wei Wu Wei"],
        ["When thoughts arise, then do all things arise. When thoughts vanish, then do all things vanish", "Huang Po"],
        ["Wherever you are, it’s the place you need to be", "Maxime Lagacé"],
        ["The noble-minded are calm and steady. Little people are forever fussing and fretting.", "Confucius"],
        ["Rest and be kind, you don’t have to prove anything.", "Jack Kerouac"],
        ["Nothing ever goes away until it has taught us what we need to know.", "Pema Chödrön"],
    ]
const INDEXTABLECITATION = 0;
let index = INDEXTABLECITATION;

function affichage() {
    bouton.textContent ="citation suivante";
    citation.textContent =tableCitation[index][0];
    source.textContent =tableCitation[index][1];   
    console.log(`click ${index}`);
    if (index == tableCitation.length-1){
        bouton.textContent ="cliquez à nouveau";
        index = -1;
    }
}

function citationSuivante() {
        index++;
        affichage();
}

bouton.addEventListener("click", citationSuivante);

let randPrecedent = INDEXTABLECITATION;

function randTableCitation() {
    randPrecedent = index;
    index = Math.floor(Math.random()*tableCitation.length);
    if (index == randPrecedent) {
        console.log(index + " je relance le random");
        randTableCitation();
    } else {
        affichage();
        console.log(index);
    }
}

random.addEventListener("click", randTableCitation);
