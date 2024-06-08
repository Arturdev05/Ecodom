import { LinkFuncoes } from "./linkFuncoes.js"

const funcao = new LinkFuncoes();

// Configurar eventos comuns em todas as telas
funcao.configurarEventosComuns();

// Determinar a tela atual e configurar eventos específicos
if (window.location.href.includes('login.html')) {
    funcao.configurarEventosLogin();
} else if (window.location.href.includes('cadastro.html')) {
    funcao.configurarEventosCadastro();
} else if (window.location.href.includes('recuperacao.html')) {
    funcao.configurarEventosRecuperacao();
} else if (window.location.href.includes('pagamento.html')) {
    funcao.configurarEventosPagamento();
} else if (window.location.href.includes('confirmacao.html')) {
    funcao.configurarEventosConfirmacao();
}
