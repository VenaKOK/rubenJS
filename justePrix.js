/*

Pour ceux qui ne sont pas familiers avec ce jeu, il s'agit de
deviner le prix d'un produit. Ici, trois possibilités :
- C'est plus cher
- C'est moins cher
- C'est le juste prix !
Dans cette version du "Juste prix", nous générerons un
prix aléatoire, et nous calculerons le nombre de coups
qu'il faut à un joueur pour retrouver le juste prix.
Ainsi, il pourra se confronter à ses amis pour tenter de
voir qui retrouve le bon prix avec le moins de coups
possibles !
Je vous attends dans la prochaine session !
Etape 1 - Sélectionner nos éléments
Etape 2 - Cacher l'erreur
Etape 3 - Générer un nombre aléatoire
Etape 4 - Vérifier que l'utilisateur donne bien un nombre
Etape 5 - Agir à l'envoi du formulaire
Etape 6 - Créer la fonction vérifier

Couleur:
#004a6f
#2b9f88
*/

let textarea = document.querySelector("input");
let bntstart = document.querySelector(".start");
let messages= document.querySelector(".messages");
let bntsubmit = document.querySelector(".submit");
let count = 0;
bntsubmit.style.display ="none";;

let rand =0
function start() {
    rand = Math.floor(Math.random()*1001);
    console.log(rand);
    bntstart.style.display ="none";
    bntsubmit.style.display ="block";
}

textarea.addEventListener("input", isNotaNumb)

function isNotaNumb() {
    if (isNaN(textarea.value) || textarea.value > 1000){
        alert("Entrez un nombre entre 0 et 1000")
        textarea.value ="";
    }
}



bntstart.addEventListener("click", start)

bntsubmit.addEventListener("click",verify)

function verify() {
    count ++;
    console.log(count);
    console.log(rand + " = rand");
    console.log( textarea.value+ " = textarea.value");
    if (textarea.value < rand){
        messages.textContent = "Plus grand";
    }else if (textarea.value > rand){
        messages.textContent = "Plus petit";
    }else {
        messages.textContent = `C'est gagné !!! Vous avez réussi au bout de ${count} tentatives`;
        bntstart.style.display ="block";
        bntsubmit.style.display ="none";
    }
    textarea.value ="";
}
