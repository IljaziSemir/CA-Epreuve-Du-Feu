var readline = require("readline-sync");
var saisi = readline.questionInt("Quel nombre voulez-vous : ");

function factoriel(n){
    var result = 1;
    for (let i = 1; i <= n; i++){
        result *= i;
    }       
    console.log("La factorielle de " + n + " est " + result)
}

factoriel(saisi);