let tarefa = document.getElementById('tarefa')
let caixa_tarefa = document.getElementById('caixa-tarefas')



function adicionar(){
    if (tarefa.value == '' || tarefa.value == null || tarefa.value == undefined){
        alert('Por favor, adicione uma tarefa')
    }else{
        let linha_tarefa = document.createElement('div')

        //Editando elemento div
        linha_tarefa.className = 'border border-success mt-2'
        linha_tarefa.style.padding = '15px'
        

        //Adicionando elemento na div criada
        linha_tarefa.innerHTML = tarefa.value
        caixa_tarefa.append(linha_tarefa)

        localStorage.setItem(gerarID(),JSON.stringify(linha_tarefa.innerHTML))

        let btn = document.createElement('button')
        btn.innerHTML = '<i class="fa-solid fa-trash"></i>'
        btn.className = 'btn btn-danger'
        btn.style.width = '80px'
        btn.style.height = '40px'
        btn.style.float = 'right'

        linha_tarefa.append(btn)

        tarefa.value = ''
   
        window.location.reload()
    }
    
}


function gerarID(){
    let id = localStorage.getItem('id')

    if (id === null){
        localStorage.setItem('id',0)
    }

    let proximoID = localStorage.getItem('id')
    localStorage.id = parseInt(localStorage.id) + 1
    return parseInt(proximoID) + 1

}




function mostrar_tarefas(){
    let qtd_elementos = localStorage.getItem('id')

    if(localStorage.length > 1){

        for(let c = 1; c <= qtd_elementos;c++){
            let elemento = JSON.parse(localStorage.getItem(c))
            

            if(elemento ===null){
                continue
            }



            let linha_tarefa = document.createElement('div')

            //Editando elemento div
            linha_tarefa.className = 'border border-success mt-2'
            linha_tarefa.id = c
            linha_tarefa.style.padding = '15px'

            //Adicionando elemento na div criada
            linha_tarefa.innerHTML = elemento
            caixa_tarefa.append(linha_tarefa)    

            

            let btn = document.createElement('button')
            btn.innerHTML = '<i class="fa-solid fa-trash"></i>'
            btn.className = 'btn btn-danger'
            btn.id = c
            btn.style.width = '80px'
            btn.style.height = '40px'
            btn.style.float = 'right'
            btn.onclick = function(){
                localStorage.removeItem(c)
               
                linha_tarefa.style.display = 'none'
            }

            linha_tarefa.append(btn)
            console.log(linha_tarefa.id)

        }


    }
}

function numeroaleatorio(){
    return Math.trunc(Math.random() * 1000 +1)
}