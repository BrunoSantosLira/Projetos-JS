//Espaços
let caixa1 = document.getElementById('caixa1')
let caixa2 = document.getElementById('caixa2')
let caixa3 = document.getElementById('caixa3')
let caixa4 = document.getElementById('caixa4')
let caixa5 = document.getElementById('caixa5')
let caixa6 = document.getElementById('caixa6')
let caixa7 = document.getElementById('caixa7')
let caixa8 = document.getElementById('caixa8')
let caixa9 = document.getElementById('caixa9')
let btn = document.getElementById('botão-iniciar')
let quem_venceu = document.getElementById('quem_venceu')
let btn_reiniciar = document.getElementById('botão-reiniciar')
btn_reiniciar.style.display = 'none'
quem_venceu.style.display = 'none'

//Nesse trecho, houve uma geração de números aleátorios no value. Com o objetivo de gerar o sistema de vitórias
caixa1.value = Math.round() *10
caixa2.value = Math.round()*10
caixa3.value = Math.round()*10

caixa4.value = Math.round()*10
caixa5.value = Math.round()*10
caixa6.value = Math.round()*10

caixa7.value = Math.round()*10
caixa8.value = Math.round()*10
caixa9.value = Math.round()*10




//Indicadores
let indicador1 = false
let indicador2 = false
let indicador3 = false
let indicador4 = false
let indicador5 = false
let indicador6 = false
let indicador7 = false
let indicador8 = false
let indicador9 = false
let indicador_laço = false
let jogo_iniciado = false //variavel que vai controlar cada jogada do usuário
let turnos = 0

function clickar(caixa_escolhida=''){
    console.log(`Turno: ${turnos}`)
    if (jogo_iniciado == true){
        
        if (indicador1 == false){
            if (caixa_escolhida == 1){
                turnos++
                caixa1.innerHTML = "<i class='fa-solid fa-x'></i>"
                caixa1.value = 1
                indicador1 = true
                verificarVitoria()
                console.log(caixa1.value)
                jogo_iniciado = false
                iniciar()
            }
        }
    
        if (indicador2 == false){
            if (caixa_escolhida == 2){
                turnos++
                caixa2.innerHTML = "<i class='fa-solid fa-x'></i>"
                caixa2.value = 1
                indicador2 = true
                console.log('acabou2')
                console.log(indicador1)
                verificarVitoria()
                jogo_iniciado = false
                iniciar()
            }
        }
    
        if (indicador3 == false){
            if (caixa_escolhida == 3){
                turnos++
                caixa3.innerHTML = "<i class='fa-solid fa-x'></i>"
                caixa3.value = 1
                indicador3 = true
                console.log('acabou3')
                console.log(indicador1)
                verificarVitoria()
                jogo_iniciado = false
                iniciar()
            }
        }
    
        if (indicador4 == false){
            if (caixa_escolhida == 4){
                turnos++
                caixa4.innerHTML = "<i class='fa-solid fa-x'></i>"
                caixa4.value = 1
                indicador4 = true
                console.log('acabou4')
                console.log(indicador1)
                verificarVitoria()
                jogo_iniciado = false
                iniciar()
            }
        }
    
        if (indicador5 == false){
            if (caixa_escolhida == 5){
                turnos++
                caixa5.innerHTML = "<i class='fa-solid fa-x'></i>"
                caixa5.value = 1
                indicador5 = true
                console.log('acabou5')
                console.log(indicador1)
                verificarVitoria()
                jogo_iniciado = false
                iniciar()
            }
        }
    
        if (indicador6 == false){
            if (caixa_escolhida == 6){
                turnos++
                caixa6.innerHTML = "<i class='fa-solid fa-x'></i>"
                caixa6.value = 1
                indicador6 = true
                console.log('acabou6')
                console.log(indicador1)
                verificarVitoria()
                jogo_iniciado = false
                iniciar()
            }
        }
    
        if (indicador7 == false){
            if (caixa_escolhida == 7){
                turnos++
                caixa7.innerHTML = "<i class='fa-solid fa-x'></i>"
                caixa7.value = 1
                indicador7 = true
                console.log('acabou7')
                console.log(indicador1)
                jogo_iniciado = false
                verificarVitoria()
                iniciar()
            }
        }
    
        if (indicador8 == false){
            if (caixa_escolhida == 8){
                turnos++
                caixa8.innerHTML = "<i class='fa-solid fa-x'></i>"
                caixa8.value = 1
                indicador8 = true
                console.log('acabou8')
                console.log(indicador1)
                jogo_iniciado = false
                verificarVitoria()
                iniciar()
            }
        }
    
        if (indicador9 == false){
            if (caixa_escolhida == 9){
                turnos++
                caixa9.innerHTML = "<i class='fa-solid fa-x'></i>"
                caixa9.value = 1
                indicador9 = true
                console.log('acabou9')
                console.log(indicador1)
                jogo_iniciado = false
                verificarVitoria()
                iniciar()
            }
        }
    }

}


//Função que vai marcar bola
function iniciar(){
    jogo_iniciado = true
    btn.style.display = 'none'
    turnos++
    console.log(`Turno: ${turnos}`)
    while(true){
        let num_gerado = gerarNumeroAleatório()
        console.log(num_gerado)

        if (indicador1 == false){
            if (num_gerado == 1){
                caixa1.innerHTML = "<i class='fa-solid fa-circle'></i>"
                caixa1.value = 2
                indicador1 = true
                console.log('acabou1')
                verificarVitoria()
                break
            }
        }


        if (indicador2 == false){
            if (num_gerado == 2){
                caixa2.innerHTML = "<i class='fa-solid fa-circle'></i>"
                caixa2.value = 2
                indicador2 = true
                console.log('acabou2')
                verificarVitoria()
                break
            }
        }

        if (indicador3 == false){
            if (num_gerado == 3){
                caixa3.innerHTML = "<i class='fa-solid fa-circle'></i>"
                caixa3.value = 2
                indicador3 = true
                console.log('acabou3')
                verificarVitoria()
                break
            }
        }

         if (indicador4 == false){
            if (num_gerado == 4){
                caixa4.innerHTML = "<i class='fa-solid fa-circle'></i>"
                caixa4.value = 2
                indicador4 = true
                console.log('acabou4')
                console.log(indicador4)
                verificarVitoria()
                break
            }
        }

        if (indicador5 == false){
            if (num_gerado == 5){
                caixa5.innerHTML = "<i class='fa-solid fa-circle'></i>"
                caixa5.value = 2
                indicador5 = true
                console.log('acabou5')
                console.log(indicador5)
                verificarVitoria()
                break
            }
        }

        if (indicador6 == false){
            if (num_gerado == 6){
                caixa6.innerHTML = "<i class='fa-solid fa-circle'></i>"
                caixa6.value = 2
                indicador6 = true
                console.log('acabou6')
                console.log(indicador6)
                verificarVitoria()
                break
            }
        }

        if (indicador7 == false){
            if (num_gerado == 7){
                caixa7.innerHTML = "<i class='fa-solid fa-circle'></i>"
                caixa7.value = 2
                indicador7 = true
                console.log('acabou7')
                console.log(indicador7)
                verificarVitoria()
                break
            }
        }

        if (indicador8 == false){
            if (num_gerado == 8){
                caixa8.innerHTML = "<i class='fa-solid fa-circle'></i>"
                caixa8.value = 2
                indicador8 = true
                console.log('acabou8')
                console.log(indicador8)
                verificarVitoria()
                break
            }
        }

        if (indicador9 == false){
            if (num_gerado == 9){
                caixa9.innerHTML = "<i class='fa-solid fa-circle'></i>"
                caixa9.value = 2
                indicador9 = true
                console.log('acabou9')
                console.log(indicador9)
                verificarVitoria()
                break
            }
        }

    }

}


function verificarVitoria(){
    //Verificando se cada um dos oitos tipos de vitórias diferentes aconteceu
    //linha1
    if (caixa1.value == caixa2.value  && caixa1.value == caixa3.value) {
        if (turnos > 1){
            console.log('Vitória detectada!!!')
            console.log(`valor: ${caixa1.value}`)
            gerarVitória(caixa1.value)
        }
    }//linah2
    else if (caixa4.value == caixa5.value  && caixa4.value == caixa6.value) {
        if (turnos > 1){
            console.log('Vitória detectada!!!')
            console.log(`valor: ${caixa4.value}`)
            gerarVitória(caixa4.value)
        }
    }//linha3
    else if (caixa7.value == caixa8.value  && caixa7.value == caixa9.value) {
        if (turnos > 1){
            console.log('Vitória detectada!!!')
            console.log(`valor: ${caixa7.value}`)
            gerarVitória(caixa7.value)
        }
    }//coluna1
    else if (caixa1.value == caixa4.value  && caixa1.value == caixa7.value) {
        if (turnos > 1){
            console.log('Vitória detectada!!!')
            console.log(`valor: ${caixa1.value}`)
            gerarVitória(caixa1.value)
        }
    }//coluna2
    else if (caixa2.value == caixa5.value  && caixa2.value == caixa8.value) {
        if (turnos > 1){
            console.log('Vitória detectada!!!')
            console.log(`valor: ${caixa2.value}`)
            gerarVitória(caixa2.value)
        }
    }//coluna3
    else if (caixa3.value == caixa6.value  && caixa3.value == caixa9.value) {
        if (turnos > 1){
            console.log('Vitória detectada!!!')
            console.log(`valor: ${caixa3.value}`)
            gerarVitória(caixa3.value)
        }
    }//Diagonal
    else if (caixa1.value == caixa5.value  && caixa1.value == caixa9.value) {
        if (turnos > 1){
            console.log('Vitória detectada!!!')
            console.log(`valor: ${caixa1.value}`)
            gerarVitória(caixa1.value)
        }
    }//Diagonal2
    else if (caixa3.value == caixa5.value  && caixa3.value == caixa7.value) {
        if (turnos > 1){
            console.log('Vitória detectada!!!')
            console.log(`valor: ${caixa3.value}`)
            gerarVitória(caixa3.value)
        }
    }
    else if(turnos == 9){
        quem_venceu.style.display = 'inline'
        quem_venceu.innerHTML = "EMPATE"
        quem_venceu.classList = "text-center text-warning"
        btn_reiniciar.style.display = 'block'
    }
      
}


function gerarVitória(vitorioso){
    jogo_iniciado = false
    if(vitorioso == 1){
        quem_venceu.style.display = 'inline'
        quem_venceu.innerHTML = 'Parabéns!! Você venceu!!!'
        btn_reiniciar.style.display = 'block'
        let x = Number(localStorage.pontuação_x)
        localStorage.pontuação_x = x - 1
    }
    else if (vitorioso == 2){
        quem_venceu.style.display = 'inline'
        quem_venceu.innerHTML = "A maquina venceu!!!"
        quem_venceu.classList = "text-center text-danger"
        btn_reiniciar.style.display = 'block'
        let x = localStorage.length
        localStorage.pontuação_o = 1
    }
}   




function gerarNumeroAleatório(){
    c = 0
    while(c < 10){
        let num = Math.random()
        num *= 10 
        var a = Math.trunc(num)
        if (a == 0){
            continue
        }
        c++
    }
    return a
}

