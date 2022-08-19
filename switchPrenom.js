
/*
    Faite une comparaison en utilisant un switch sur une variable prénom
    dans le switch vous pouvez checker 3 prénom de fille et 3 garçons
    votre programme demande un prénom
    si vous entrez un des 3 alors console log vous ete un garçon
    pareille pour fille
    sinon console log invalide ou prénom non reconnus
    comparaison insensibles a la casse

    Bonus pour une ternaire moins de 18 ans majeur : mineur

*/

function etatCivil (prenom,age){
    prenom = prompt("quel est votre prénom?")
    age = prompt("quel est votre age?")
    console.log(typeof age + " " +age);
    switch (prenom.toLowerCase()) {
        case 'lea':
        case 'lucie':
        case 'sophie':
            console.log('vous etes une fille');
        break;
        case 'leo':
        case 'lucien':
        case 'sylvain':
            console.log('vous etes un garçon');
        break;
        default:
            console.log(`Sorry, we don't what you are ${prenom.toLowerCase()}.`);
    }
    if (age>=0){
        age >= 18 ? console.log("majeur") : console.log("mineur");
    }else console.log("you are not born");
    
}

etatCivil();


