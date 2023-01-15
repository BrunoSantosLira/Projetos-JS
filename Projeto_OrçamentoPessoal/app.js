function dataAtual(){ //função para pegar a data atual e a do prox ano
    let data = new Date()
    let ano  = data.getFullYear()
    let input = document.getElementById('inputAno')
    input.value = ano
    input.innerHTML = ano

    //criando elemento do prox ano
    let prox_ano = document.createElement('option')
    prox_ano.innerHTML = ano + 1
    prox_ano.value = ano + 1

    let select = document.getElementById('ano')
    select.appendChild(prox_ano)
}

class Despesa {
    constructor(ano,mes,dia,tipo,valor,descricao){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.valor = valor
        this.descricao = descricao
    }

    verificarDados(){
        for (let i in this){
            if (this[i] == undefined || this[i] == '' || this[i] == null){
                return false
            }
        }
        return true
    }

}

class BD {
    constructor() {
		let id = localStorage.getItem('id')

		if(id === null) {
			localStorage.setItem('id', 0)
		}
	}

	getProximoId() {
		let proximoId = localStorage.getItem('id')
		return parseInt(proximoId) + 1
	}

   


     gravar(d){
        let id = this.getProximoId()
        
        localStorage.setItem(id, JSON.stringify(d))
    
        localStorage.setItem('id', id)
    }     

    pesquisar(despesa){
        let lista_despesas = []
        let id = localStorage.getItem('id')
        
        for (let i =1 ; i <= id; i++){
            let despesa = JSON.parse(localStorage.getItem(i))

			//existe a possibilidade de haver índices que foram pulados/removidos
			//nestes casos nós vamos pular esses índices
			if(despesa === null) {
				continue
			}
			despesa.id = i
			lista_despesas.push(despesa)
        }

        let despesas_Filtradas = Array()
        despesas_Filtradas = lista_despesas

        //Ano
        if (despesa.ano != ''){
             despesas_Filtradas = despesas_Filtradas.filter(d => d.ano == despesa.ano)
        }

        //mes
        if (despesa.mes != ''){
            despesas_Filtradas =  despesas_Filtradas.filter(d => d.mes == despesa.mes)
        }

        //dia
        if (despesa.dia != ''){
            despesas_Filtradas =  despesas_Filtradas.filter(d => d.dia == despesa.dia)
        }

        //tipo
        if (despesa.tipo != ''){
            despesas_Filtradas =  despesas_Filtradas.filter(d => d.tipo == despesa.tipo)
        }

        //valor
        if (despesa.valor != ''){
            despesas_Filtradas =  despesas_Filtradas.filter(d => d.valor == despesa.valor)
        }

        //descrição
        if (despesa.descricao != ''){
            despesas_Filtradas =  despesas_Filtradas.filter(d => d.descricao == despesa.descricao)
        }

    return despesas_Filtradas
    }

    remover(d){
        localStorage.removeItem(d)
    }

    
}

let bd = new BD()


function cadastrarDespesa() {
    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let valor = document.getElementById('valor')
    let descricao = document.getElementById('descricao')

   let despesa = new Despesa(ano.value, mes.value,dia.value,tipo.value,valor.value,descricao.value)
   
   if (despesa.verificarDados() == true){
        bd.gravar(despesa)

        document.getElementById('conteudo-modal').innerHTML = 'Todos os dados da despesa foram salvos.'
        

        //titulo
        let titulo = document.getElementById('exampleModalLabel')
        titulo.innerHTML = 'Os dados foram salvos com sucesso!!!'
        titulo.className = 'text-success'

        //btn
        let botao = document.getElementById('btn-modal')
        botao.innerHTML = 'Voltar'
        botao.className = 'btn btn-success'

        //Limpando o formulário
        descricao.value = ''
        valor.value = ''
        dia.value = ''
        ano.value = ''
        mes.value = ''
        tipo.value = ''



        $('#modal-sucesso-erro').modal('show')
   }else {
        document.getElementById('conteudo-modal').innerHTML = 'Existem informações que não foram preenchidas. Por favor, retorne para defini-las!!!'
        //titulo
        let titulo = document.getElementById('exampleModalLabel')
        titulo.innerHTML = 'Informações não preenchidas'
        titulo.classList.add('text-danger')

        //btn
        let botao = document.getElementById('btn-modal')
        botao.innerHTML = 'Voltar e corrigir'
        botao.className = 'btn btn-danger'
        $('#modal-sucesso-erro').modal('show')
   }
   
}

   


function carregarListaDespesas(){
    dataAtual()
    let lista_despesas = []
    let id = localStorage.getItem('id')
    let tabela_despesas = document.getElementById('tabela_despesas')
    
    for (let i =1 ; i <= id; i++){
        let despesa = JSON.parse(localStorage.getItem(i))

			//existe a possibilidade de haver índices que foram pulados/removidos
			//nestes casos nós vamos pular esses índices
			if(despesa === null) {
				continue
			}

			despesa.id = i
			lista_despesas.push(despesa)
    }
    
    inserindoLinhas(lista_despesas)   
}


function pesquisarDespesa(){
    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let valor = document.getElementById('valor')
    let descricao = document.getElementById('descricao')


    let despesa = new Despesa(ano.value, mes.value,dia.value,tipo.value,valor.value,descricao.value)

    let despesas = bd.pesquisar(despesa)

    //tbody. Eliminado as despesas atuais para colocar as filtradas
    let tabela_despesas = document.getElementById('tabela_despesas')
    tabela_despesas.innerHTML = ''

    inserindoLinhas(despesas)
}


function inserindoLinhas(despesas){
    let valor_total = 0
    despesas.forEach( function(d){
        //inserindo 1 linha e 4 colunas para cada object

        let linhas = tabela_despesas.insertRow()
        linhas.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`

        //Substitui o número
        switch(Number(d.tipo)){
            case 1:
                d.tipo = 'Alimentação'
                break

            case 2:
                d.tipo = 'Educação'
                break

            case 3:
                d.tipo = 'Lazer'
                break

            case 4:
                d.tipo = 'Saúde'
                break

            case 5:
            d.tipo = 'Transporte'
            break
        }
        linhas.insertCell(1).innerHTML = d.tipo

        linhas.insertCell(2).innerHTML = d.descricao
        linhas.insertCell(3).innerHTML = d.valor
        valor_total += Number(d.valor)
        
        let btn = document.createElement('button')
        btn.className = 'btn btn-danger'
        btn.id = d.id
        btn.innerHTML = '<i class="fas fa-times"></i>'
        btn.onclick = function(){
            bd.remover(d.id)
            
            document.getElementById('conteudo-modal').innerHTML = 'As informações serão atualizadas'
            //titulo
            let titulo = document.getElementById('exampleModalLabel')
            titulo.innerHTML = 'Você removeu uma despesa da lista!'
            titulo.classList.add('text-success')

            //btn
            let botao = document.getElementById('btn-modal')
            botao.innerHTML = 'Voltar'
            botao.className = 'btn btn-success'
            botao.onclick = function(){
                window.location.reload()
            }
            $('#modal-sucesso-erro').modal('show')
        }
        linhas.insertCell(4).append(btn)
       
    })

    let valor_total_linha = tabela_despesas.insertRow()
    valor_total_linha.className = 'bg-dark text-light '
    valor_total_linha.insertCell(0).innerHTML = `TOTAL: R$ ${valor_total}`
   
    
}