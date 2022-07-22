let contador = 0 ;
let minimo = -100, maximo = 100;

const CURRENT_NUMBER = document.getElementById('valor');

function atualiza(){

    if(minimo < maximo){
        minimo = document.getElementsByClassName("floor")[0].value;
        maximo = document.getElementsByClassName("ceil")[0].value
    }else{
        console.log("O valor mínimo deve ser menor que o máximo.");
    }
}

function incrementa(){
    if(contador < maximo){
        contador++;
        CURRENT_NUMBER.innerHTML = contador;
    }
    positivo();
}
function decrementa(){
    if(contador > minimo){
        contador--;
        CURRENT_NUMBER.innerHTML = contador;
    }
    negativo();
}
function negativo(){
    if(contador < 0){
        CURRENT_NUMBER.style.color = "red";
    }
}
function positivo(){
    if(contador >= 0){
        CURRENT_NUMBER.style.color = "black";
    }
}