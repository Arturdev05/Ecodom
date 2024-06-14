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


document.addEventListener('DOMContentLoaded', function() {
  const carrinhoIcons = document.querySelectorAll('.carrinhoIcon i');

  carrinhoIcons.forEach(icon => {
    icon.addEventListener('click', function(event) {
      event.preventDefault();

      if (icon.classList.contains('fa-cart-plus')) {
        icon.classList.remove('fa-cart-plus');
        icon.classList.add('fa-cart-arrow-down');
      } else {
        icon.classList.remove('fa-cart-arrow-down');
        icon.classList.add('fa-cart-plus');
      }
    });
  });
});

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


