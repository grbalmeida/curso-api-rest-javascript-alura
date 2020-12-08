const removeCliente = id => {
    if (confirm('Deseja deletar o cliente?')) {
        deletaCliente(id)
    }
}

const corpoTabela = document.querySelector('[data-conteudo-tabela]')

listarClientes()
    .then(clientes => {
        clientes.forEach(cliente => {
            corpoTabela.appendChild(exibeCliente(cliente.id, cliente.cpf, cliente.nome))
        })
    })

const exibeCliente = (id, cpf, nome) => {
    const linha = document.createElement('tr')

    const conteudoLinha = `
        <td>${cpf}</td>
        <td>${nome}</td>
        <td>
            <a href="edita-clientes.html?id=${id}">
                <button type="button" class="btn btn-info">Editar</button>
            </a>
        </td>
        <td>
            <button type="button" class="btn btn-danger" onClick="removeCliente(${id})">Excluir</button>
        </td>
    `

    linha.innerHTML = conteudoLinha

    return linha
}
