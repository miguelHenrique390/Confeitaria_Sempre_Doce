function validarLogin() {
    //pegar os dados do usuario da pagina
    const email = document.getElementById('email')
    const senha = document.getElementById('senha')

    //acessar a lista do local storage
    let lista = window.localStorage.getItem('usuarios')

    //fazer o parse da lista
    lista = JSON.parse(lista)

    let logado = false

    for (let i = 0; i < lista.length; i++) {
        //estamos passando pelos itens da lista 
        //maravilha só alegria
        const usuario = lista[i]
        const emailLista = usuario.email
        const senhaLista = usuario.senha

        if (emailLista == email.value) {
            //comparar as senhas
            if (senhaLista == senha.value) {
                alert('sucesso, voce esta logado')
                logado = true
                break

            } else {
                logado = false
            }

        } else {
            logado = false

        }

    }
 
    //mostra a mensagem de nao logado
    if (logado == false) {
        alert('Login invalido')
    } else {
        window.location.href = '../../pages/home-admin.html'
    }

}
