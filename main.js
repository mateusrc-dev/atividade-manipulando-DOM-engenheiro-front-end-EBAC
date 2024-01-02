const form = document.getElementById("form");
const inputA = document.getElementById("input-a");
const inputB = document.getElementById("input-b");
let BMaiorQueA = false;

function compararCampos() {
    return inputB.value > inputA.value;
}

form.addEventListener('submit', function(e) {
    e.preventDefault(); // para evitar o comportamento de reload padrão do submit

    BMaiorQueA = compararCampos();

    if (BMaiorQueA) {
        const containerMessagemSucesso = document.querySelector(".success-message");
        const containerMessagemError = document.querySelector(".error-message");
        containerMessagemSucesso.style.display = "block";
        containerMessagemError.style.display = "none";

        // inputA.value = "";
        // inputB.value = "";
        inputB.style.border = ""
    } else {        
        const containerMessagemError = document.querySelector(".error-message");
        const containerMessagemSucesso = document.querySelector(".success-message");
        containerMessagemSucesso.style.display = "none";
        containerMessagemError.style.display = "block";

        inputB.style.border = "2px solid red"
    }
})