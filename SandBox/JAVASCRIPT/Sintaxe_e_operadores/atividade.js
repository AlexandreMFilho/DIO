function is_equal(a,b){
    return (a == b)? " são iguais." : " não são iguais."
} 
function menor_maior(base,x){
    return (x < base)? "menor" : "maior"
}
function compara(x,y){
    if(!x || !y) {console.log("Defina dois numeros!")
        return -1}
    console.log("Os números "+a+" e "+b+is_equal(a,b)+" Sua soma é "+soma+", que é "+menor_maior(10,soma)+" que 10 e "+menor_maior(20,soma)+" que 20.") 
}
a=1
b=2
soma = a+b
compara(a)
compara(a,b)
console.log(a++)