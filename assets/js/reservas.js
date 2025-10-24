function adicionarInformacoes() {
    const nome = document.getElementById('nome')
    const produto = document.getElementById('descricao')
    const quantidade = document.getElementById('qtd')
    const data = document.getElementById('data')
    const telefone = document.getElementById('telefone')
    const comentario = document.getElementById('adicionais')


const start = `${data.value}`

const reservasDados = {
    nome: nome.value,
    data: start,
    produto: produto.value,
    quantidade: quantidade.value,
    telefone: telefone.value,
    comentario: comentario.value
}


 let reservaLS = window.localStorage.getItem('reservas')

 if (reservaLS == undefined) {
    reservaLS = []

 } else {
    reservaLS = JSON.parse(reservaLS)
 }

 reservaLS.push(reservasDados)
    window.localStorage.setItem('reservas', JSON.stringify(reservaLS)
)

    alert('reserva cadastrada com sucesso 😁')
}
