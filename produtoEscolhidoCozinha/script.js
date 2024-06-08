const imagens = document.querySelectorAll('.produtoEscolhido .miniaturas li');

function produtoEscolhidoTrocar(event) {
    const clicada = event.currentTarget.querySelector('img'); // Acesse a img dentro do li
    const principal = document.querySelector('.principal');
    principal.src = clicada.src;
    principal.alt = clicada.alt;
}

function produtoEscolhidoClique(imagem) {
    imagem.addEventListener('click', produtoEscolhidoTrocar);
}

imagens.forEach(produtoEscolhidoClique);



