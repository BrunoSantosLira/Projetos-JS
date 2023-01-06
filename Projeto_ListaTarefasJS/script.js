
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

        tarefa.value = ''
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
