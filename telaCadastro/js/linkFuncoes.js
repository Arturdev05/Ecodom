export class LinkFuncoes {
    constructor() {}
    // Método para trocar de tela
    trocaTela(local) {
        window.location.href = local + '.html';
    }
    // Método para adicionar evento de clique a um botão
    addClick(botao, local) {
        document.querySelector(botao).addEventListener('click', () => this.trocaTela(local));
    }
    // Método para configurar eventos comuns em várias telas
    configurarEventosComuns() {
        // Botões de voltar em telas com #nav-img e #cancelar
        if (document.querySelector('#nav-img') && document.querySelector('#cancelar')) {
            [document.querySelector('#nav-img'), document.querySelector('#cancelar')].forEach(element => {
                element.addEventListener('click', () => history.back());
            });
        }
        else if (document.querySelector('#nav-img')) {
            this.addClick('#nav-img', '../index');
        }
    }
    // Método para configurar eventos na tela de cadastro
    configurarEventosCadastro() {
        var button = document.querySelector('#confirmar');
        button.addEventListener('click', () => {
            var text = document.querySelector("#text-modal");

            if (document.querySelector("#termos").checked) {
                button.setAttribute("data-bs-toggle", "modal");
                button.setAttribute("data-bs-target", "#exampleModal");
                button.click();

                text.innerHTML = "Usuário cadastrado com sucesso!"

                setTimeout(() => {
                    if (document.querySelector("#exampleModal").style.display = "none") {
                        this.trocaTela('../telaLogin/login')
                    }
                }, 2000);
            }
        })
    }
}
