const categorias = document.querySelectorAll(".categorias a");

function ativarLink(link) {
  const href = link.href;
  const url = document.location.href;

  if (href === url) {
    link.style.backgroundColor = "#ffff";
    link.style.color = "#264059";
    link.style.padding = "8px";
    link.style.borderRadius = "3px";
  }
  console.log(url);
}

categorias.forEach(ativarLink);

const botao = document.querySelector ('.menu-toggle');

function mostrar () {
  const categorias = document.querySelector('.categorias');
  categorias.classList.toggle('ativar');
}

botao.addEventListener ('click', mostrar);





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


//JS do botão de quantidade -> soma e subtração


const botaoMais = document.querySelector(".btn-qty .mais");
const botaoMenos = document.querySelector(".btn-qty .menos");

function somar() {
    const span = document.querySelector(".btn-qty span");
    const total = Number(span.innerText) + 1;

    if (total < 20) {
        span.innerText = total;
    } else {
        alert("Impossível adicionar  mais de 1000 itens");
    }
}
function subtrair(){
    const span = document.querySelector(".btn-qty span");
    const total = Number(span.innerText) - 1;

    if (total >= 1) {
        span.innerText = total;
    } else {
     reportError;
    }
}

botaoMais.addEventListener("click", somar);
botaoMenos.addEventListener("click", subtrair);