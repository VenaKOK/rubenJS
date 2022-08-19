/*
Avec la boucle dowhile demandez un prénom jusqu'à l'obtenir
Bonus
Avec un confirm() reposer la question tant que l'utilisateur dit non 

*/

function surname (){
    do {
        var surname = prompt("quel est votre prénom");
        console.log(surname);
    }
    while (surname =="" || surname == null);
    
    
}

surname();