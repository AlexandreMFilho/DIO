let contador = 0 ;

const CURRENT_NUMBER = document.getElementById('valor');

function incrementa(){
    if(contador < 10){
        contador++;
        CURRENT_NUMBER.innerHTML = contador;
    }
    positivo();
}
function decrementa(){
    if(contador > -10){
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