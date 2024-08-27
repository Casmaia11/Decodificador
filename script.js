const areaTexto = document.querySelector('.area_texto');
const area2 = document.querySelector('.area_texto_2');

function btnEncripto() {
    const textoencrip = encript(areaTexto.value);
    area2.value = textoencrip;
    areaTexto.value = '';
}

function encript(encriptar) {
    let codigo = [['e','enter'] , ['i','imes'] , ['a','ai'] , ['o','ober'] , ['u','ufat']];
    let encriptada = encriptar.toLowerCase();

    for(let i = 0; i < codigo.length; i++) {
        if(encriptada.includes(codigo[i][0])) {
            encriptada = encriptada.replaceAll(codigo[i][0], codigo[i][1]);
        }
    }
    return encriptada;
}

function btnDesencript() {
    const textodesencript = desencript(areaTexto.value);
    area2.value = textodesencript;
}

function desencript(desencriptar) {
    let codigo = [['e','enter'] , ['i','imes'] , ['a','ai'] , ['o','ober'] , ['u','ufat']];
    let desencriptada = desencriptar.toLowerCase();

    for(let i = 0; i < codigo.length; i++) {
        if(desencriptada.includes(codigo[i][1])) {
            desencriptada= desencriptada.replaceAll(codigo[i][1], codigo[i][0]);
        } 
    }
    return desencriptada;
}

function copiar() {
    const textoCopiar = document.querySelector('.area_texto_2').value;
    navigator.clipboard.writeText(textoCopiar)
}

function forcarMinusculas(evento) {
    const input = evento.target;
    const texto = input.value;
    const textoLimpo = texto.toLowerCase().replace(/[^a-z\s]/, '');
    input.value = textoLimpo;
}


areaTexto.addEventListener('input', forcarMinusculas);