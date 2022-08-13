function ispalindromo(palavra)
{
    if(!palavra) return;
    let j = palavra.length -1
    for(i = 0 ; i<j ; i++,j--){
        if(palavra[i] === " "){
            i++
        }
        if(palavra[j] == " "){
            j--
        }
        //console.log(`i:${palavra[i]} |j:${palavra[j]}`)
        if(palavra[i] != palavra[j]){
            return false
        }
    }
    return true
}
function ispalindromo2(word){
    if(!word) return;
  return word.split("").reverse("").join("") === word
}

console.log(ispalindromo("arara"))
console.log(ispalindromo("minhaavo"))
console.log(ispalindromo("socorram me subi no onibus em marrocos"))

console.log(ispalindromo2("arara"))
console.log(ispalindromo2("minhaavo"))
console.log(ispalindromo2("socorram me subi no onibus em marrocos"))
