var readline = require("readline-sync");
var saisi = readline.questionInt("Combien de marches d'escalier voulez-vous : ")

function staircase(n){
    for (var i = 1; i <= n; i++){
        var space = n - i
        console.log(" ".repeat(space) + "#".repeat(i))
    }
}

staircase(saisi);