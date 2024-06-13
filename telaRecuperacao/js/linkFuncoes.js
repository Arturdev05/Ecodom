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
    configurarEventosRecuperacao() {
        var button = document.querySelector("#enviar");
        
        $('#formulario-recuperacao').on('submit', function(event) {
            var allFieldsFilled = true;
            $(this).find('input[required=true]').each(function() {
                if ($(this).val() === '') {
                    allFieldsFilled = false;
                    return false; // Exit the loop early if any required field is empty
                }
            });
        
            if (!allFieldsFilled) {
                event.preventDefault();
                alert('Please fill out all required fields.');
            } else {
                button.setAttribute("data-bs-toggle", "modal");
                button.setAttribute("data-bs-target", "#exampleModal");
                button.click();

                document.querySelector("#text-modal").innerHTML = "Link de recuperação enviado para seu email!";

                setTimeout(() => {
                    if (document.querySelector("#exampleModal").style.display = "none") {
                        window.location.href = '../telaLogin/login.html';
                    }
                }, 2000);
            }
        });   
        this.addClick("#cancelar", "../telaLogin/login");
    }
}