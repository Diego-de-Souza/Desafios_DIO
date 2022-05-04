const formulario = document.getElementById('fumularioTarefas')
const listaTarefas = document.getElementById('listaTarefas')

formulario.onsubmit = function(event){
    event.preventDefault()
    const entradaDados = document.getElementById('entradaTarefa')
    if(entradaDados.value.length < 1){
        alert("Por favor digite uma tarefa no campo a baixo")
    } else {
        addTarefa(entradaDados.value)
    }
    
    formulario.reset()

    
}

function addTarefa(descricao) {
    const containerTarefa = document.createElement('div')
    const novaTarefa = document.createElement('input')
    const camadaTarefa = document.createElement('label')
    const noDescricaoTarefa = document.createTextNode(descricao)

    novaTarefa.setAttribute('type', 'checkbox')
    novaTarefa.setAttribute('name',descricao)
    novaTarefa.setAttribute('id',descricao)
    

    camadaTarefa.setAttribute('for', descricao)
    camadaTarefa.appendChild(noDescricaoTarefa)
    camadaTarefa.style.margin = '0 0 0 10px'

    containerTarefa.classList.add('itemTarefa')
    containerTarefa.appendChild(novaTarefa)
    containerTarefa.appendChild(camadaTarefa)
    containerTarefa.style.padding = '5px'

    listaTarefas.appendChild(containerTarefa)
    listaTarefas.style.display ='flex'
    
}

