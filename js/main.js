'use strict'

import { acharContatos } from "./contato.js"
import { criarContato } from "./contato.js"
import { deleteContato } from "./contato.js"
async function criarCardContatos() {

    const content = await acharContatos()

    const container = document.getElementById('container')

    content.forEach(conteudo => {
        const cardContato = document.createElement('div')

        cardContato.classList.add('card-contato')
        cardContato.addEventListener('click', (event) => { editarContato(conteudo) })
        const img = document.createElement('img')
        img.src = conteudo.foto

        const h2 = document.createElement('h2')
        h2.textContent = conteudo.nome

        const p = document.createElement('p')
        p.textContent = conteudo.celular

        cardContato.append(img, h2, p)
        container.appendChild(cardContato)
    })

}
function abrirFormulario() {

    const btnNovoContato = document.getElementById('novo-contato')

    btnNovoContato.addEventListener('click', function () {

        document.querySelectorAll('.input-text').forEach(input => {
            input.value = '';
        });

        const main = document.querySelector('main')
        main.classList.replace('card-show', 'form-show')
    })


}
function cancelarNovoContato() {
    const btnCancelar = document.getElementById('cancelar')

    btnCancelar.addEventListener('click', function () {
        const main = document.querySelector('main')
        main.classList.replace('form-show', 'card-show')
    })
}
function editarContato(conteudo) {

    const main = document.querySelector('main')
    main.classList.replace('card-show', 'form-show')

    const nome = document.getElementById('nome')
    nome.value = conteudo.nome

    const email = document.getElementById('email')
    email.value = conteudo.email

    const celular = document.getElementById('celular')
    celular.value = conteudo.celular

    const foto = document.getElementById('preview-image')
    foto.src = conteudo.foto

    const endereco = document.getElementById('endereco')
    endereco.value = conteudo.endereco

    const cidade = document.getElementById('cidade')
    cidade.value = conteudo.cidade

    document.getElementById('deletar').addEventListener('click', function(){
        if(confirm('Deseja mesmo deletar esse contato?'))
        deleteContato(conteudo.id)
        window.location.reload();
    })

}
function preview ({target}){
    
    document.getElementById('preview-image').src = URL.createObjectURL(target.files[0])
    
}
async function adicionarNovoContato(){

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const foto = document.getElementById('preview-image').src
    const celular = document.getElementById('celular').value
    const endereco = document.getElementById('endereco').value
    const cidade = document.getElementById('cidade').value

    const novoContato = {
        nome,
        email,
        foto,
        celular,
        endereco,
        cidade
    }
    
    criarContato(novoContato)
}

criarCardContatos()
abrirFormulario()
cancelarNovoContato()
document.getElementById('foto').addEventListener('change', preview)
document.getElementById('salvar').addEventListener('click', adicionarNovoContato)



