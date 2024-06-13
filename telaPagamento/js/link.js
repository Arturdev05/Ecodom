import { LinkFuncoes } from "./linkFuncoes.js"

const funcao = new LinkFuncoes();

// Configurar eventos comuns em todas as telas
funcao.configurarEventosComuns();

// Determinar a tela atual e configurar eventos específicos
funcao.configurarEventosPagamento();

$(function() {
    $('#cep').mask('00000-000');
    $('#numCartao').mask('0000 0000 0000 0000');
    $('#codSeg').mask('000');
})
