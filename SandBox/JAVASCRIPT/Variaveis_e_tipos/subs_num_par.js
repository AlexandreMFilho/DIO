function nula_se_par(array){
    if(!array || array.length == 0)return -1;
    let limite = array.length
    for(let i =0; i< limite;i++){
        if(typeof array[i] == "string")return;
        if(array[i].value % 2 == 0) array[i] = 0;
    }
    return array
}

let a = []
let b = [1,2,3,4,5,6,7,8,9,10]
let c = [2,4,6,8]

console.log(nula_se_par(a))
console.log(nula_se_par(b))
console.log(nula_se_par(c))
console.log(nula_se_par(null))
console.log(nula_se_par(undefined))
console.log(nula_se_par("a"))

