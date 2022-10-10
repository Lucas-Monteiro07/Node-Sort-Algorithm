const livros = require('./lista');
const trocaValor = require('./trocaValor')

function insertionSort(lista){
    for(let atual = 0; atual < lista.length; atual++) {
        let analise = atual
        while (analise > 0 && lista[analise].preço < lista[analise - 1].preço) {
            trocaValor(lista, analise, analise-1)

            analise--
        }
    }
    console.log(livros);
}

insertionSort(livros)