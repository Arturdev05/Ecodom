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

function ajustarTamanhos() {
  
  const carrossel = document.getElementById("carouselExample");
  const subtitulo = document.querySelector(".subtitulo");
  const verProdutos = document.querySelector(".verProdutos");

  
  const carrosselLargura = carrossel.offsetWidth;
  const carrosselAltura = carrossel.offsetHeight;


  subtitulo.style.width = carrosselLargura + "px";
  subtitulo.style.height = carrosselAltura + "px";

  verProdutos.style.width = carrosselLargura + "px";
  verProdutos.style.height = carrosselAltura + "px";

 
  window.onload = ajustarTamanhos;
  window.onresize = ajustarTamanhos;
  // Ajusta os tamanhos ao redimensionar a janela
  
}
if (window.location.href.includes('carrinho.html')) {
  atualizaValor();

  var diminuir = document.querySelector("#diminuir");
  diminuir.addEventListener('click', function() {
    var valorElement = document.querySelector('#valor');
    var valor = parseInt(valorElement.textContent);
    if (valor > 1) {
      valorElement.textContent = String(valor - 1) + " ";
      atualizaValor(valorElement.textContent);
    }
  });

  var aumentar = document.querySelector("#aumentar");
  aumentar.addEventListener('click', function() {
    var valorElement = document.querySelector('#valor');
    var valor = parseInt(valorElement.textContent);
    valorElement.textContent = String((valor + 1) + " ");
    atualizaValor(valorElement.textContent);
  });

  function atualizaValor(quantidade) {
    if (quantidade) {
      document.querySelector("#resumo-quantidade").textContent = quantidade;
    } else {
      var quantidade = document.querySelector("#resumo-quantidade").textContent;
    }

    var valorProduto = document.querySelector("#produto-valor");
    var valorResumo = document.querySelector("#resumo-valor");
    valorResumo.textContent = String(" " + (parseFloat(valorProduto.textContent) * quantidade));

    atualizaValorTotal(valorResumo.textContent);
  }

  function atualizaValorTotal(valorProduto) {
    var valorTotal = document.querySelector("#total-valor");
    var valorFrete = parseFloat(document.querySelector("#resumo-frete").textContent);
    valorTotal.textContent = String(" " + (parseFloat(valorProduto) + valorFrete));
  }
  document.querySelector("#continuar").addEventListener('click', function() {
    window.location.href = "../telaPagamento/pagamento.html";
  })

  document.querySelectorAll(".input-frete").forEach(element => {
    element.addEventListener('click', () => {
      console.log(element);
      if (element.checked) {
        document.querySelector("#resumo-frete").textContent = String(parseFloat(element.value));

        atualizaValor();
        }
      });
  });
};