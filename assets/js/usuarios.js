function carregarUsuarios() {
    /*esta função faz a leitura do local storage
    e carrega os usuarios cadastrados via
    formularios do sistemas.
    */

    const usuariosLS = window.localStorage.getItem('usuarios')
    const usuarios = JSON.parse(usuariosLS)
    const tbodyUsuarios = document.getElementById('tbody-usuarios')

    /*for usuario in usuarios */

    for (let i = 0; i < usuarios.length; i++) {
        const usuario = usuarios[i]
        const nome = usuario.nome
        const email = usuario.email

        /*agora vamos preencher a tabela com os dados*/

        //criar linha
        const linha = document.createElement('tr')

        //criar a coluna
        const coluna1 = document.createElement('td')
        const coluna2 = document.createElement('td')

        //associando os dados do usuarios na coluna 
        coluna1.textContent = nome
        coluna2.textContent = email


        //adiciona as colunas na linha 
        linha.appendChild(coluna1)
        linha.appendChild(coluna2)

        //adicona a linha no tbody
        tbodyUsuarios.appendChild(linha)

    }
}

carregarUsuarios()