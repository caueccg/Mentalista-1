const randomNumber = parseInt(Math.random() * 11);
const resultado = document.getElementById("resultado");
const hint = document.getElementById("hint");
const chute = Number(document.getElementById("numero").value);
const tentativa = document.getElementById("tentativa")
var tentativas = 5;
var dica;

if (chute > randomNumber) {
    dica = `Dica: é um número maior.`;
} else if (chute < randomNumber) {
    dica = `Dica: é um número menor.`;
}

const chutar = () => {
    if (tentativas > 0) {
        if (chute > 10 || chute < 0) {
            resultado.innerText = `O número precisar estar entre 0 e 10.`;
        } else if (chute == randomNumber) {
            resultado.innerText = `Parabéns, você acertou!!`;
        } else {
            tentativas -= 1;
            tentativa.innerText = `Restam ${tentativas} tentativas!`
            tentativa.style.color = "#f07f7f"
            resultado.innerText = `Você errou... Tente novamente.`;
            hint.innerText = dica;
        }
    } else {
        resultado.innerText = `Acabaram suas chances :(`;
        hint.outerHTML = "";   // removendo o elemento com o id hint do HTML.
    }
}