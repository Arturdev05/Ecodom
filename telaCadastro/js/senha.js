export class validaSenha {
    constructor() {
        this.senha = document.querySelector("#senha");
        this.tamanho = document.querySelector("#tamanho");
        this.maiuscula = document.querySelector("#maiuscula");
        this.senhaConfirmada = document.querySelector("#senhaConfirmada");
        this.iguais = document.querySelector("#iguais");
    }
    senhaConfirmadaFuncao() {
        this.senhaConfirmada.addEventListener("input", () => {
            if (this.senhaConfirmada.value == "" || this.senha.value == "") {
                this.iguais.innerHTML = "";
            }   
            else if (this.senhaConfirmada.value === this.senha.value) {
                this.iguais.innerHTML = "As senhas são iguais";
                this.iguais.style.color = "green";
            }
            else if (this.senhaConfirmada.value != this.senha.value) {
                this.iguais.innerHTML = "As senhas não são iguais";
                this.iguais.style.color = "red";
            }      
        });
    }
    addValidacao() {
        this.senha.addEventListener("input", () => {
            var event = new Event("input", { bubbles: true });
            this.senhaConfirmada.dispatchEvent(event);

            if (this.senha.value == "") {
                alfaNum.style.color = "red";
            } else {
                alfaNum.style.color = "green";
            }

            if (this.senha.value.length < 8) {
                this.tamanho.style.color = "red";
            } else if (this.senha.value.length <= 20) {
                this.tamanho.style.color = "green";
            } 

            if (/[A-Z]/.test(this.senha.value)) {
                this.maiuscula.style.color = "green";
            } else {
                this.maiuscula.style.color = "red";
            }
            // Remove non-alphanumeric characters from the input value
            var cleanedValue = this.senha.value.replace(/[^a-zA-Z0-9]/g, '');

            // Update the input field value with the cleaned value
            this.senha.value = cleanedValue;
        });

        this.senhaConfirmadaFuncao();
    }
}