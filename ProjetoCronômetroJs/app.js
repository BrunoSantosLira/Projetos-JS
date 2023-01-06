let pare = false
let milésimos = document.getElementById('tempo_milésimos')
let segundos  = document.getElementById('segundos')
let segundos2 = Number(segundos.innerHTML)
let zero      = document.getElementById('zero')
let zero_minutos = document.getElementById('zero_minutos')
let cont      = Number(milésimos.innerHTML)
let minutos   = document.getElementById('minutos')
let minutos2  = Number(minutos.innerHTML)

function start(){
    let cronometro = setInterval(function(){
        
        cont = Number(milésimos.innerHTML)
        cont +=1
        milésimos.innerHTML = cont

        //Chamando a função que vai parar o cronômetro
        if (pare == true){
            parar(cronometro)
            pare = false
        }
        //quando o contator de milésimos chegar em 100..
        if (cont == 100){
            milésimos.innerHTML = 0
            segundos2 +=1
            //comando que vai "esconder" o zero quando a soma de segundos chegar em 10
            if (segundos2 == 10){
                zero.style.display = 'none'
            }
            segundos.innerHTML = segundos2
            //Quando bater 60 segundos, o contador de minutos aumentará +1, além disso, precisamos resetar o contador de segundos para 0
            if (segundos2 == 60){
                segundos.innerHTML = 0
                segundos2 = 0

                minutos2 +=1
                ////comando que vai "esconder" o zero quando a soma de minutos chegar em 10
                if (minutos2 == 10){
                    zero_minutos.style.display = 'none'
                }
                minutos.innerHTML = minutos2
            }

        }

    },10)
    
}

function stop(){
    pare = true
}

function parar(c){
    clearInterval(c)
}

function resetar(){
    //resetará todas as variáveis
    milésimos.innerHTML = "00"
    segundos.innerHTML  = "0"
    segundos2 = 0
    if (segundos2 == 0){
        zero.style.display = 'inline'
    }
    cont = 0

    minutos.innerHTML = '0'
    minutos2 = 0
    if (minutos2 == 0){
        zero_minutos.style.display = 'inline'
    }
}

