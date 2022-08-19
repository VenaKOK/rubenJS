/*
Créez une fonctions permettant de console.log un message
*/

function hello(){
    console.log("hello");
}

var helloArrow = () => {
    console.log("helloArrow");
}

hello();
helloArrow();

/*
Refaite la fonction avec un paramètre, ainsi lors de l'appel de cette fonction vous lui passerez un argument qui sera une chaine de caractère
Elle affiche le message passez en argument
 */

function helloParam(message){
    console.log(message);
}

var helloArrowParam = (message) => {
    console.log(message);
}