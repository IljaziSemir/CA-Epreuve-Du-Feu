var words = process.argv[2]
var newWords = "";
var cpt = 0;

for (var i = 0; i < words.length; i++){
    if (words[i] == " "){
        newWords += " "
        cpt++
    }
    else if (cpt % 2 == 0){
        newWords += words[i].toLowerCase()    
    }
    else {
        newWords += words[i].toUpperCase()    
    }
    cpt++
}

console.log(newWords)