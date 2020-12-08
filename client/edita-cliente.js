const url = new URL(location.href)

const id = url.searchParams.get('id')

const inputCPF = document.querySelector('[data-cpf]')
const inputNome = document.querySelector('[data-nome]')

detalhaCliente(id)
    .then(clientes => {
        const cliente = clientes[0]
        inputCPF.value = cliente.cpf
        inputNome.value = cliente.nome
    })
    .catch(() => location.href = 'clientes.html')

const formEdicao = document.querySelector('[data-form]')

const mensagemSucesso = (mensagem) => {
    const div = document.createElement('div')

    const conteudoLinha = `
        <div class="alert alert-success" role="alert">
            ${mensagem}
        </div>
    `

    div.innerHTML = conteudoLinha

    return div
}

const mensagemErro = (mensagem) => {
    const div = document.createElement('div')

    const conteudoLinha = `
        <div class="alert alert-warning" role="alert">
            ${mensagem}
        </div>
    `

    div.innerHTML = conteudoLinha

    return div
}

formEdicao.addEventListener('submit', event => {
    event.preventDefault()

    if (!validaCPF(inputCPF.value)) {
        alert('O CPF não é válido')
        return
    }

    editaCliente(id, inputCPF.value, inputNome.value)
        .then(resposta => {
            if (resposta.status === 200) {
                formEdicao.appendChild(mensagemSucesso('Cliente editado com sucesso'))
            } else {
                formEdicao.appendChild(mensagemErro('Erro na edição do cliente'))
            }
        })
})
