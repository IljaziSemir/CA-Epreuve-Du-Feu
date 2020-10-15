var array = process.argv.slice(2)
console.log("Avant : ");
console.log(array);

function tri(array){
  for (var i = 1; i < array.length; i++){
    var value = array[i];
    var cpt = i;
    while (cpt > 0 && array[cpt - 1] < value){
        array[cpt] = array[cpt - 1];
        cpt = cpt - 1
        array[cpt] = value;
    }
  }
  console.log(array);
}

console.log("Après : ");
tri(array);
