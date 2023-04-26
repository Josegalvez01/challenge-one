const ingreseTexto = document.getElementById('ingreseTexto');
const alertaSoloMinusculas = document.getElementById('alertaSoloMinusculas')
const textoResultante = document.getElementById('textoResultante');
const botonEncriptar = document.getElementById('botonEncriptar');
const botonDesencriptar = document.getElementById('botonDesencriptar');
const botonCopiar = document.getElementById('botonCopiar');
const condicionMinuscula = (text) => /^[a-z\s\n\.,;:!?]+$/.test(text);

const encriptar = (text) => {
    return text.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
};

const desencriptar = (text) => {
    return text.replace(/ufat/g, 'u')
        .replace(/ober/g, 'o')
        .replace(/ai/g, 'a')
        .replace(/imes/g, 'i')
        .replace(/enter/g, 'e');
};
botonEncriptar.addEventListener('click', () => {
    if (!condicionMinuscula(ingreseTexto.value)) {
        alertaSoloMinusculas.style.color = "red";
        alertaSoloMinusculas.style.fontSize = "14px";
    }
    else {
        textoResultante.value = encriptar(ingreseTexto.value);
        imagenMu.style.display = 'none';
        noMensaje.style.display = 'none';
        noTexto.style.display = 'none';
        textoResultante.style.display = 'block';
        botonCopiar.style.display = 'block';
        alertaSoloMinusculas.style.color = "#0a3871";
        alertaSoloMinusculas.style.fontSize = "12px";
    }
});
botonDesencriptar.addEventListener('click', () => {
    if (!condicionMinuscula(ingreseTexto.value)) {
        alertaSoloMinusculas.style.color = "red";
        alertaSoloMinusculas.style.fontSize = "14px";
    }
    else {
        textoResultante.value = desencriptar(ingreseTexto.value);
        imagenMu.style.display = 'none';
        noMensaje.style.display = 'none';
        noTexto.style.display = 'none';
        textoResultante.style.display = 'block';
        botonCopiar.style.display = 'block';
        alertaSoloMinusculas.style.color = "#0a3871";
        alertaSoloMinusculas.style.fontSize = "12px";
    }
});
botonCopiar.addEventListener('click', () => {
    navigator.clipboard.writeText(textoResultante.value)
    ingreseTexto.select();
}); 