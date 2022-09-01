/**
 * DIfférence entre style.visibility et display
 * visibility = cacher mais on garde l'emplacement
 * display = cacher et on supprimer l'emplacement
 */


let bouton1 = document.querySelector("#bouton1");
let bouton2 = document.querySelector("#bouton2");

bouton1.style.background = "red";
bouton2.style.background = "yellow";

bouton1.addEventListener("click", hiddenVisible );
bouton2.addEventListener("click", display );

let hidden = false;
function hiddenVisible(){
    if(hidden){
        console.log("le message est visible");
        hidden = false;
        document.querySelector("#d1").style.visibility = "visible"
        bouton1.textContent = "Cacher avec visibility";
    }else{
        console.log("le message est caché")
        hidden = true;
        document.querySelector("#d1").style.visibility = "hidden";
        bouton1.textContent = "Afficher avec visibility";
    }
}

function display(){
    if(hidden){
        console.log("le message est visible");
        hidden = false;
        document.querySelector("#d1").style.display = "block"
        bouton2.textContent = "Cacher avec display";
    }else{
        console.log("le message est caché")
        hidden = true;
        document.querySelector("#d1").style.display = "none";
        bouton2.textContent = "Afficher avec display";
    }
}