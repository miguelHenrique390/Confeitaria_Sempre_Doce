    const senha = document.getElementById('senha')
    const confirmaSenha = document.getElementById('confirma-senha')

function cadastrarUsuario() {
    const nome = document.getElementById('nome')
    const email = document.getElementById('email')


    if (senha.value == confirmaSenha.value){
    //cadastrar no local storage

    //verifica se a lista existe no local storage
    let lista = window.localStorage.getItem('usuarios')

        if (lista == undefined){
        //nao existe a lista , entao cria e adiciona o usuario 
            lista = []
        //adiciona o usuario na lista
            let usuario = {
                'nome': nome.value,
                'email': email.value,
                'senha' : senha.value
            }
            lista.push(usuario)
            
            //salvar no local storage a lista 
            window.localStorage.setItem('usuarios', JSON.stringify(lista))
            alert('usuario cadastrado')

        } else {
            //adicionar novos usuarios 
            //primeiro buscar a lista no local storage
            let listaE = window.localStorage.getItem('usuarios')
            listaE = JSON.parse(listaE)

            let usuarioA = {
                'nome': nome.value,
                'email': email.value,
                'senha': senha.value

            }
            //add na lista
            listaE.push(usuarioA)

            //Salvar no local storage
            window.localStorage.setItem('usuarios', JSON.stringify(listaE))
            alert('usuario cadastrado')

            //limpar os dados dos formularios
            nome.value = ''
            email.value = ''
            senha.value = ''
            confirmaSenha.value = ''
        }
    }   else {
        alert('senha não confere, verifique os seus dados')
        senha.value = ''
        confirmaSenha.value = ''
    }
}
    function toggleSenha() {
        const exibirSenha = document.getElementById('exibir-senha')
        
        if(exibirSenha.checked == true) {
            //exibir as senhas
            senha.type = 'text'
            confirmaSenha.type = 'text'
        } else {
            //esconder as senhas
            senha.type = 'password'
            confirmaSenha.type = 'password'
            
        }
    }
        



