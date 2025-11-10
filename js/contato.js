'use strict'

export async function acharContatos() {
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos/'

    const response = await fetch(url)
    const contatos = await response.json()
    return contatos
}
export async function criarContato(contato) {
    console.log(contato)
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos/'
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(contato)
    }

    const response = await fetch(url, options)

    return response.ok
}
export const novoContato = [
    {
    "id": 1,
    "nome": "Ana Oliveira Dias",
    "celular": "11 9 7171-6464",
    "foto": "https://img.freepik.com/psd-gratuitas/renderizacao-3d-do-estilo-de-cabelo-para-o-design-do-avatar_23-2151869121.jpg",
    "email": "ana@gmail.com",
    "endereco": "Av. São Joaquim, 234",
    "cidade": "Sorocaba"
    },
    {
    "id": 2,
    "nome": "Igor da Silva",
    "celular": "11 9 1112-3333",
    "foto": "https://img.freepik.com/psd-gratuitas/ilustracao-3d-de-avatar-ou-perfil-humano_23-2150671122.jpg",
    "email": "fernando@gmail.com",
    "endereco": "Rua dos padres, 555",
    "cidade": "Osasco"
    }
    ]
export async function atualizarContato(id, contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(contato)
    }

    const response = await fetch(url, options)

    return response.ok
}

export async function deleteContato(id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = {
        method: 'DELETE',
    }
    const response = await fetch(url, options)

    return response.ok
}
