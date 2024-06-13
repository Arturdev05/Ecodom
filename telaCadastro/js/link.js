import { LinkFuncoes } from "./linkFuncoes.js"
import { validaSenha } from "./senha.js";
import { validaEmail } from "./email.js";

const funcao = new LinkFuncoes();
const senha = new validaSenha();
const email = new validaEmail();

// Configurar eventos comuns em todas as telas
funcao.configurarEventosComuns();

// Determinar a tela atual e configurar eventos específicos
funcao.configurarEventosCadastro();

$(function () {
    $('#cpf').mask('000.000.000-00');
    $('#tel').mask('+55 (00) 0 0000-0000');
})

senha.addValidacao();
email.addValidacao();

$('#formulario-1').on('submit', function(){
    $(this).find('input[required=true]').each(function(){
      if(!$(this).val()){
        alert('O campo ' + $(this).attr('id') + ' é obrigatório!');
        return false;
      }
    });
  });