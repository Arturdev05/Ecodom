import { LinkFuncoes } from "./linkFuncoes.js"

const funcao = new LinkFuncoes();

// Configurar eventos comuns em todas as telas
funcao.configurarEventosComuns();

// Determinar a tela atual e configurar eventos específicos
funcao.configurarEventosRecuperacao();