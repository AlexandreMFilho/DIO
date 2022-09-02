const matriz= [ //coluna(dia da semana)[domingo,segunda,terça,quarta,quinta,sexta,sábado] linha(hora)[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    [0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0]
]

let objetos

let evento = ["name","value","concluido"] //isso era p ser um objeto ou uma struct


function ja_existe(nome){
    //checa se o transporte ja existe, se sim retorna true, senão false.
    let validador = 0
    objetos.forEach(name => name==nome?validador+=1:validador+=0)
    return validador > 0?true:false
}
//Criar eventos, extra.
function criar_evento(nome,valor){
    if(!ja_existe(nome)){
        //cria o objeto ex: metrô 6,50 / ônibus 4,45 / bandejao 3,00
        objetos.add(nome,valor)
        console.log(nome+" criado com sucesso.")
        return 0 //bem sucedido
    }else{
        console.log("Não foi possivel criar este evento pois o mesmo ja existe")
        return -1 //ja existe
    }
}
//linka uma espaço no grid a um transporte
function assinala_transporte_no_grid(x,y,nome){
    //preenche o espaço do grid com o objeto ou nome apenas
    matriz[x][y] = nome
    return "Assinalado "+nome+traduz_grid(x,y)
}
//No grid seta o objeto, para concluir aquele evento, trasnporte. Pega o valor dele e soma à "gasto_diario"
function check(x,y){
    let valor_evento;
    evento = busca_evento(matriz[x][y])
    if(evento){
        gasto_diario = gasto_diario + evento.value;
        evento.concluido = true
        return evento.name+" foi concluído "+traduz_grid(x,y)
    }else{
        console.log("Não foi possível dar check neste evento.")
    }
}
function busca_evento(nome){
    let validador = 0
    let item
    objetos.forEach(name => name==nome?item = name:validador = false)
    return validador != false?item:false
}
//verifica através das coordenadas a que dia da semana, que horas, que evento ou trasporte e valor se refere.
function traduz_grid(x,y){
    let dia,hora
    switch(x){
        case 0:
            dia = "Domingo"
        case 1:
            dia = "segunda-feira"
        case 2:
            dia = "Terça-feira"
        case 3:
            dia = "Quarta-feira"
        case 4:
            dia = "Quinta-feira"
        case 5:
            dia = "Sexta-feira"
        case 6:
            dia = "Sábado"
        }

    switch (y) {
        case 0:
            hora = "4:00"
        case 1:
            hora = "5:00"
        case 2:
            hora = "6:00"
        case 3:
            hora = "7:00"
        case 4:
            hora = "8:00"
        case 5:
            hora = "9:00"
        case 6:
            hora = "10:00"
        case 7:
            hora = "11:00"
        case 8:
            hora = "12:00"
        case 9:
            hora = "13:00"
        case 10:
            hora = "14:00"
        case 11:
            hora = "15:00"
        case 12:
            hora = "16:00"
        case 13:
            hora = "17:00"
        case 14:
            hora = "18:00"
        case 15:
            hora = "19:00"
        case 16:
            hora = "20:00"
        case 17:
            hora = "21:00"
        case 18:
            hora = "22:00"
        case 19:
            hora = "23:00"
    }
    return dia+" às "+hora
}

function retorno_diario(hoje){
    //percorre o grid na coluna do dia respectivo, somando cada evento, retornando o gasto previsto e comparando com o gasto atual diario.
    let total=0,gasto=0,resultado=0;
    for(i=0;i<20;i++){
        let evento = busca_evento(matriz[i][hoje])
        if(evento){
            total += evento.value
            if(evento.concluido){
                gasto += evento.value
            }
        }
    }
    resultado = total - gasto
    return resultado>=0?resultado===0?"Você seguiu a risca, sem faltas nem sobra. Gastou exatamente"+total: "Você economizou "+resultado+" parabéns!":"Você gastou"+resultado*-1+" mais que o esperado, tente economizar na próxima"
}
function limpa_ontem(hoje){
    let evento
    //Se domingo, coloca dia 7 para ontem ser sábado. 
    if(hoje == 0){
        hoje = 7
    }
    //Percorre a matriz limpando concluidos dos eventos, do dia anterior
    for(i=0;i<20;i++){
        evento = busca(matriz[i][hoje-1])
        if(evento){
            evento.concluido = false
        }
    }
}