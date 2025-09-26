//criar a listas de imagens 
let imagens =[
    'assets/img/bolo-capa-1.jpg',
    'assets/img/bolo-capa-2.webp',
    'assets/img/bolo-capa-3.webp'
]

function exibirImagem() {
    let imagemCarrosel = document.getElementById('img-carrosel')
    imagemCarrosel.src = imagens [indiceAtualListaImagem]
}

indiceAtualListaImagem = 0

//logica para mudar as imagens a cada 5 segundos

setInterval(function() {
    exibirImagem()
    indiceAtualListaImagem++

    //verifica de chegou no fim das imagens
    if(indiceAtualListaImagem > 2){
        indiceAtualListaImagem = 0
    }

},5000);



exibirImagem()
indiceAtualListaImagem++
