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
