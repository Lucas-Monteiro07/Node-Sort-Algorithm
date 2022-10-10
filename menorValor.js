const livros = require('./lista');



function menorValor(array, posicaoInicial) {
    let maisBarato = posicaoInicial;

    for (let i = posicaoInicial; i < array.length; i++) {
        if (array[i].preço < array[maisBarato].preço) {
            maisBarato = i
        }
    }
    return maisBarato;
}

module.exports = menorValor;

