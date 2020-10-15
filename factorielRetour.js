var readline = require("readline-sync");
var saisi = readline.questionInt("Quel nombre voulez-vous : ");

function factoriel(n) {
     if (n == 0 || n == 1)
          return 1;
     else 
          return n * factoriel(n -1)
}

console.log("La factorielle de " + saisi + " est : " + factoriel(saisi).toLocaleString());