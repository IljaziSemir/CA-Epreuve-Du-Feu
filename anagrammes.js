var words = process.argv.slice(2)

var word = words[0].split('').sort().join('')

for (var i = 0; i < words.length; i++){
   if (words[i].split('').sort().join('') === word)
   console.log(words[i])   
}
