var altura = 0
var largura  = 0
var mosquito = window.document.getElementById('mosquito')
var img_mosquito = window.document.getElementById('img_mosquito')
var caixa = window.document.getElementById('caixa')
//'<img src="imagens/mosca.png" width="80px" alt=""></img>'
var opcaoValor = ''
var dificuldade = ''
//Dificuldade
var nivel = window.location.search
nivel = nivel.replace('?','')


//Corações
var coracao1 = window.document.getElementById('coração1')
var coracao2 = window.document.getElementById('coração2')
var coracao3 = window.document.getElementById('coração3')

//A mosca foi pega no turno?
var moscaPega = false
var fugas = 0


//tempo
var c = 0
var aparecimento_mosquitos = 0
if (nivel == "normal"){
    c = 50
    aparecimento_mosquitos = 1500
}else if (nivel == "dificil"){
    c = 80
    aparecimento_mosquitos = 1000
}else if (nivel == "norris"){
    c = 100
    aparecimento_mosquitos = 800
}

//Ajustando tamanho
function ajustartamanho(){
    altura = window.innerHeight
    largura = window.innerWidth
}

ajustartamanho()


function getRandom(max) {
    return Math.floor(Math.random() * max + 1)
}

function mosca(){
    moscaPega = true
}


var altura_max = getRandom(window.innerHeight)  -50
var largura_max = getRandom(window.innerWidth)  -50

if (altura_max < 100){
    altura_max += 150
}
if (altura_max > 700){
    altura -= 150
}
if (largura_max > 1200){
    altura_max -= 200
}
if (largura_max < 200){
    altura_max += 200
}


mosquito.style.top = `${altura_max}px`
mosquito.style.left = `${largura_max}px`

c--


var tempo = window.document.getElementById('tempo')
var x = setInterval(function(){
    tempo.innerHTML = c
    c--
    console.log(opcaoValor)
    //Posição gerada aleatoriamente a cada segundo
    var altura_max = getRandom(window.innerHeight) -90
    var largura_max = getRandom(window.innerWidth)  -90
    
    if (altura_max < 0){
        altura_max = 0
    }
    if (largura_max < 0){
        largura_max = 0
    }
   
    mosquito.style.top = `${altura_max}px`
    mosquito.style.left = `${largura_max}px`
   

    //tamanho
    var tamanho = getRandom(180)
    if (tamanho <= 50){
        tamanho += 40
    }

    img_mosquito.style.width = `${tamanho}px`

    //Rotação
    var rotacionar = Math.floor(Math.random() * 2)
    if (rotacionar == 0){
        img_mosquito.style.transform = 'scaleX(1)'
    }else if (rotacionar == 1){
        img_mosquito.style.transform = 'scalex(-1)'
    }

    if (moscaPega == true){
        console.log('A mosca foi pega')
        moscaPega = false
    }
    else {
        fugas += 1
        if (fugas == 1){
            coracao1.src= 'imagens/coracao_vazio.png'
        }
        else if (fugas == 2){
            coracao2.src= 'imagens/coracao_vazio.png'
        }
        else if (fugas == 3){
            coracao3.src= 'imagens/coracao_vazio.png'
            window.location.href = 'Derrota.html'
        }
    }

   
    if (c == -1){
        clearInterval(x)
        window.location.href = 'vitória.html'
    }
},aparecimento_mosquitos)




