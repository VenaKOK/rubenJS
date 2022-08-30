/* 
Pour voir si tout vas bien jusque ici nous allons créer un calculateur en boite de dialogue
(une sorte de calculatrice simplifiée).
Objectif :
- Demandez de faire un choix entre addition – soustraction – multiplication – division
- Indice : pour un retour à la ligne « \n » tant que l’utilisateur ne choisis pas une des quatre
proposition il serait bien de répéter la question.
- Demandez de rentrer un nombre, puis un deuxieme
- Indice : Répéter la demande si un nombre n’est pas rentré, je vous laisse chercher la fonction qui permet de checker cela.
- Crée 4 fonctions correspond aux 4 méthodes de calculs
- Selon le choix de l’utilisateur appelé la fonction correspondante
- Affichez le résultat
- Proposez à l’utilisateur de recommencer
*/
function calculatrice(){
    let operation = prompt("faire un choix entre addition – soustraction – multiplication – division ");
    let a;
    let b;
    do {
        a = prompt('entrez le 1er nombre');
    }
    while (isNaN(a));

    do {
        b  = prompt('entrez le 2er nombre');
    }
    while (isNaN(b));
    a = parseInt(a);
    b = parseInt(b);
    switch (operation) {
        case 'addition':
            alert(a+b);
        break;
        case 'soustraction':
            alert(a-b);
        break;
        case 'multiplication':
            alert(a*b);
        break;
        case 'division':
            if(!b==0){
                alert(a/b);
            }else alert('operation impossible')
            
        break;
    }
    let recommencer = prompt("nouvelle operation : oui - non");
    switch (recommencer.toLocaleLowerCase()) {
        case 'oui':
            calculatrice();
    }
}

calculatrice();

