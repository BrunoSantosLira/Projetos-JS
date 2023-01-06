
//Pegando os quadrados
let quadrado1 = document.getElementById('quadrado1')
let quadrado2 = document.getElementById('quadrado2')
let quadrado3 = document.getElementById('quadrado3')
let quadrado4 = document.getElementById('quadrado4')
let quadrado5 = document.getElementById('quadrado5')
let quadrado6 = document.getElementById('quadrado6')
let rgb_principal = document.getElementById('rgb_display')
let mensagem_topo = document.getElementById('mensagem-topo')
let modo = document.getElementById('dificuldade')


//Botão iniciar
let btn = document.getElementById('btn-iniciar')

function iniciar_gerar(){
    
    mensagem_topo.innerHTML = 'GOOD LUCKY!!'
    btn.innerHTML = 'Get new colors'

    //Gerando número RGB
    let R = gerarNúmeroRGB()
    let G = gerarNúmeroRGB()
    let B = gerarNúmeroRGB()

    //Pegando o elemento do display
 
    rgb_principal.innerHTML = `RGB(${R}, ${G}, ${B})`

    //Selecionando quadrado com o RGB principal
    let num = gerarNúmero1_6()

    if(modo.value == 'Easy'){
        quadrado4.style.display = 'none'
        quadrado5.style.display = 'none'
        quadrado6.style.display = 'none'
        while(num == 6 || num == 5 || num == 4 ){
            num = gerarNúmero1_6()
        }
    }
    if(modo.value == 'Normal'){
        quadrado4.style.display = 'block'
        quadrado5.style.display = 'block'
        quadrado6.style.display = 'block'
    }


    if (num == 1){
        quadrado1.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
        console.log('Aquiii')
    }else{
        quadrado1.style.backgroundColor = `rgb(${gerarNúmeroRGB()}, ${gerarNúmeroRGB()}, ${gerarNúmeroRGB()})`
    }

    if (num == 2){
        quadrado2.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
        console.log('Aquiii')
    }else{
        quadrado2.style.backgroundColor = `rgb(${gerarNúmeroRGB()}, ${gerarNúmeroRGB()}, ${gerarNúmeroRGB()})`
    }

    if (num == 3){
        quadrado3.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
        console.log('Aquiii')
    }else{
        quadrado3.style.backgroundColor = `rgb(${gerarNúmeroRGB()}, ${gerarNúmeroRGB()}, ${gerarNúmeroRGB()})`
    }

    if (num == 4){
        quadrado4.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
        console.log('Aquiii')
    }else{
        quadrado4.style.backgroundColor = `rgb(${gerarNúmeroRGB()}, ${gerarNúmeroRGB()}, ${gerarNúmeroRGB()})`
    }

    if (num == 5){
        quadrado5.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
        console.log('Aquiii')
    }else{
        quadrado5.style.backgroundColor = `rgb(${gerarNúmeroRGB()}, ${gerarNúmeroRGB()}, ${gerarNúmeroRGB()})`
    }

    if (num == 6){
        quadrado6.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
        console.log('Aquiii')
    }else{
        quadrado6.style.backgroundColor = `rgb(${gerarNúmeroRGB()}, ${gerarNúmeroRGB()}, ${gerarNúmeroRGB()})`
    }

}

function verificar(escolhido){
    let cor = rgb_principal.innerHTML.replace('RGB','rgb')

    if (escolhido == 1){
        if (cor == quadrado1.style.backgroundColor){
            console.log('Cor correta')
            vitoria(cor)
        }else{
            quadrado1.style.backgroundColor = 'gray'
            mensagem_topo.innerHTML = 'TRY AGAIN'
        }
    }

    if (escolhido == 2){
        if (cor == quadrado2.style.backgroundColor){
            console.log('Cor correta')
            vitoria(cor)
        }else{
            quadrado2.style.backgroundColor = 'gray'
            mensagem_topo.innerHTML = 'TRY AGAIN'
        }
    }

    if (escolhido == 3){
        if (cor == quadrado3.style.backgroundColor){
            console.log('Cor correta')
            vitoria(cor)
        }else{
            quadrado3.style.backgroundColor = 'gray'
            mensagem_topo.innerHTML = 'TRY AGAIN'
        }
    }

    if (escolhido == 4){
        if (cor == quadrado4.style.backgroundColor){
            console.log('Cor correta')
            vitoria(cor)
        }else{
            quadrado4.style.backgroundColor = 'gray'
            mensagem_topo.innerHTML = 'TRY AGAIN'
        }
    }

    if (escolhido == 5){
        if (cor == quadrado5.style.backgroundColor){
            console.log('Cor correta')
            vitoria(cor)
        }else{
            quadrado5.style.backgroundColor = 'gray'
            mensagem_topo.innerHTML = 'TRY AGAIN'
        }
    }


    if (escolhido == 6){
        if (cor == quadrado6.style.backgroundColor){
            console.log('Cor correta')
            vitoria(cor)
        }else{
            quadrado6.style.backgroundColor = 'gray'
            mensagem_topo.innerHTML = 'TRY AGAIN'
        }
    }
   

}

function vitoria(cor){
    mensagem_topo.innerHTML = 'YOU WIN!!!'
    mensagem_topo.style.fontSize = '45px'
    mensagem_topo.style.fontWeight = 'bold'
    quadrado1.style.backgroundColor = cor
    quadrado2.style.backgroundColor = cor
    quadrado3.style.backgroundColor = cor
    quadrado4.style.backgroundColor = cor
    quadrado5.style.backgroundColor = cor
    quadrado6.style.backgroundColor = cor
}


function gerarNúmeroRGB(){
    return  Math.floor(Math.random() * (0 - 255 + 1)) + 255
}

function gerarNúmero1_6(){
    return  Math.floor(Math.random() * (0 - 7 + 1)) + 7
}

