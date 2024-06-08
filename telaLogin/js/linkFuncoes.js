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
    // Método para configurar eventos na tela de login
    configurarEventosLogin() {
        this.addClick('#entrar', '../index');
        this.addClick('#recuperar', '../telaRecuperacao/recuperacao');
        this.addClick('#cadastro', '../telaCadastro/cadastro');
    }
}