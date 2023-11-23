const Linguaportuguesa = document.createElement("script");
Linguaportuguesa.src = "Idiomas/portugues.js";
document.head.appendChild(Linguaportuguesa);

const LinguaEspanhola = document.createElement("script");
LinguaEspanhola.src = "Idiomas/espanhol.js";
document.head.appendChild(LinguaEspanhola);

const LinguaIngle = document.createElement("script");
LinguaIngle.src = "Idiomas/ingles.js";
document.head.appendChild(LinguaIngle);

const Linguafrances = document.createElement("script");
Linguafrances.src = "Idiomas/frances.js";
document.head.appendChild(Linguafrances);


let selectIdioma = document.querySelector("#idioma");
selectIdioma.addEventListener("change", function () {
    translate(this.value);
})
function translate(Idiomas) {
    const traducao =
        (Idiomas == "br") ? portugues()
            : (Idiomas == "es") ? espanhol()
                : (Idiomas == "en") ? ingles()
                    : (Idiomas == "fr") ? frances()
                        : null;
    setLanguage(traducao);
}
function setLanguage(traducao) {
    btSoma = document.getElementById("btSoma");
    btSubtracao = document.getElementById("btSubtracao");
    btMultiplicacao = document.getElementById("btMultiplicacao");
    btDivisao = document.getElementById("btDivisao");

    btSoma.value = traducao.btSoma;
    btSubtracao.value = traducao.btSubtracao;
    btDivisao.value = traducao.btDivisao;
    btMultiplicacao.value = traducao.btMultiplicacao;
}
