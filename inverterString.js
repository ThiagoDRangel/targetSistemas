function inverterString(entrada) {
    let resultado = '';
    let tamanhoString = entrada.length - 1;

    for (let i = tamanhoString; i >= 0; i -= 1) {
        resultado += entrada[i];
    }
    return resultado;
}

const stringOriginal = "novo estagiario";
const stringInvertida = inverterString(stringOriginal);

console.log("String Original:", stringOriginal);
console.log("String Invertida:", stringInvertida);
