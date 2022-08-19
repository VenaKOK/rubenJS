/* 
Pour ce petit tp vous allez créer votre propre erreur à l’aide de « throw new Error() »
- Créez un programme qui demande à l’utilisateur de choisir entre 3 sorts (boule
de feu – trait de glace et chaine d’éclair).
- boule de feu = 40 dégats, trait de glace = 35 dégats et chaine d’éclair = 25 dégats.
- Si l’utilisateur choisis l’un de ses trois sorts, une alerte apparait disant que vous
avez choisis le « nom du sort » qui fait les dégats annoncé ci-desus.
- Si l’utilisateur choisis un sort autre que les trois ci-dessus, vous créez une erreur
et l’affichez.
« Switch case » vous sera utile pour cette exercice.
*/

function sorts (){
    try{
        var sorts = prompt("quel sort choissisez vous? boule de feu - trait de glace - chaine d’éclair ")
    
        switch (sorts) {
            case 'boule de feu':
                alert('vous avez choisi boule de feu et vous faites 40 dégats ');
            break;
            case 'trait de glace':
                alert('vous avez choisi trait de glace et vous faites 35 dégats ');
            break;
            case 'chaine d’éclair':
                alert('vous avez choisi chaine d’éclair et vous faites 25 dégats ');
            break;
            
            default:
                throw new Error();
        }
    }catch(e){
        console.log(e);
    }
    console.log("fin programme");
}

sorts();