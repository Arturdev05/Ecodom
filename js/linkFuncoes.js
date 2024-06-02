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
            this.addClick('#nav-img', 'index');
        }
    }
    // Método para configurar eventos na tela de login
    configurarEventosLogin() {
        this.addClick('#entrar', 'index');
        this.addClick('#recuperar', 'recuperacao');
        this.addClick('#cadastro', 'cadastro');
    }
    // Método para configurar eventos na tela de cadastro
    configurarEventosCadastro() {
        document.querySelector('#confirmar').addEventListener('click', () => {
            if (document.querySelector("#termos").checked) {
                window.alert("Usuário cadastrado.");
                this.trocaTela('login');
            } else {
                window.alert("Termos de uso não aceitos.");
            }
        });
    }
    // Método para configurar eventos na tela de recuperação
    configurarEventosRecuperacao() {
        document.querySelector("#enviar").addEventListener('click', () => {
            if (document.querySelector("#email").value) {
                window.alert('Link de recuperação enviado para seu email.');
                this.trocaTela('login');
            } else {
                window.alert("Preencha o seu email.");
            }
        });
        this.addClick("#cancelar", "login");
    }
    // Método para configurar eventos na tela de pagamento
    configurarEventosPagamento() {
        this.addClick('#confirmar', 'confirmacao');
    }
    // Método para configurar eventos na tela de confirmação
    configurarEventosConfirmacao() {
        this.addClick('#finalizar', 'index');
    }
}
