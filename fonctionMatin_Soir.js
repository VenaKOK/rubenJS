/*
Créez une fonction qui affiche « c’est le matin » si l’heure est inférieur à midi,
« c’est l’après midi » si l’heure est entre 12h et 18h et « c’est le soir » si l’heure
est au dessus
*/

function reveil (heure){
    if (heure >=0 && heure <24){
        if (heure < 12){
            console.log("c’est le matin");
        }
        else if (heure < 18){
            console.log("c’est l’après midi");
        }else console.log("c’est le soir");
    }else console.log("Heure non valable")
    
}