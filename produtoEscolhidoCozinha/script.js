//JS da galeria dinâmica
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


//JS do botão de quantidade -> subtração


const botaoMais = document.querySelector(".btn-qty .mais");
const botaoMenos = document.querySelector(".btn-qty .menos");

function somar() {
    const span = document.querySelector(".btn-qty span");
    const total = Number(span.innerText) + 1;

    if (total < 20) {
        span.innerText = total;
    } else {
        alert("Impossível adicionar mais");
    }
}
function subtrair(){
    const span = document.querySelector(".btn-qty span");
    const total = Number(span.innerText) - 1;

    if (total >= 1) {
        span.innerText = total;
    } else {
        alert("Impossível subtrair mais");
    }
}

botaoMais.addEventListener("click", somar);
botaoMenos.addEventListener("click", subtrair);

