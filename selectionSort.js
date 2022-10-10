const livros = require('./lista');
const menorValor = require('./menorValor');
const trocaValor = require('./trocaValor');

function selectionSort(lista){
    for (let atual = 0; atual < lista.length - 1; atual++){
        let menor = menorValor(lista, atual);
        trocaValor(lista, atual, menor)
    }
    console.log(lista);
}

selectionSort(livros)