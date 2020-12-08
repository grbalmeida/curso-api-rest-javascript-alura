const listarClientes = () => {
    return fetch('http://localhost:4000/clientes')
        .then(clientes => clientes.json())
}

const cadastrarCliente = (nome, cpf) => {
    const json = JSON.stringify({
        nome,
        cpf
    })

    return fetch('http://localhost:4000/clientes/cliente', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    })
    .then(resp => resp.body)
}

const deletaCliente = id => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        method: 'DELETE'
    })
}

const detalhaCliente = id => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`)
        .then(cliente => cliente.json())
}

const editaCliente = (id, cpf, nome) => {
    const json = JSON.stringify({
        nome,
        cpf
    })

    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    })
}
