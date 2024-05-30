if (document.querySelector('#nav-img')) {
    document.querySelector('#nav-img').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
}
// Tela de login
if (window.location.href.includes('login.html')) {
    document.querySelector('#entrar').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
    document.querySelector('#recuperar').addEventListener('click', function() {
        window.location.href = 'recuperacao.html';
    });
    document.querySelector('#cadastro').addEventListener('click', function() {
        window.location.href = 'cadastro.html';
    });
}
// Tela de cadastro
else if (window.location.href.includes('cadastro.html')) {
    document.querySelector('#nav-img').addEventListener('click', function() {
        window.location.href = 'login.html';
    });
    document.querySelector('#cadastro-confirmar').addEventListener('click', function() {
        window.location.href = 'login.html';

        window.alert(' Usuário cadastrado com sucesso!')
    });
    document.querySelector('#cadastro-cancelar').addEventListener('click', function() {
        history.back();
    });
}
// Tela de recuperação
else if (window.location.href.includes('recuperacao.html')) {
    document.querySelector('#nav-img').addEventListener('click', function() {
        window.location.href = 'login.html';
    });
    document.querySelector('#recuperacao-enviar').addEventListener('click', function() {
        window.location.href = 'login.html';

        window.alert(" O link de recuperação de email enviado!")
    });
    document.querySelector('#recuperacao-cancelar').addEventListener('click', function() {
        history.back();
    });
}
// Tela de pagamento
else if (window.location.href.includes('pagamento.html')) {
    document.querySelector('#pagamento-confirmar').addEventListener('click', function() {
        window.location.href = 'confirmacao.html';
    });
    document.querySelector('#pagamento-cancelar').addEventListener('click', function() {
        history.back();
    });
}
// Tela de confirmação
else if (window.location.href.includes('confirmacao.html')) {
    document.querySelector('#confirmacao-finalizar').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
}