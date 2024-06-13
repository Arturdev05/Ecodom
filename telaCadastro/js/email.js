export class validaEmail {
    constructor() {
        this.email = document.querySelector("#email");
        this.emailConfirmado = document.querySelector("#emailConfirmado");
        this.igual = document.querySelector("#emailIgual");
    }
    addValidacao() {
        this.email.addEventListener("input", () => {
            var event = new Event("input", { bubbles: true });
            this.emailConfirmado.dispatchEvent(event);
        });
        this.emailConfirmado.addEventListener('input', () => {
            if (this.email.value == this.emailConfirmado.value) {
                this.igual.innerHTML = "E-mails iguais"
                this.igual.style.color = "green";
            } else {
                this.igual.innerHTML = "";
            }
        });
    }
}