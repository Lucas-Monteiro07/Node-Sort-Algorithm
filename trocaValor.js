

function trocaValor(lista, iAtual, iTroca){
    let itemAtual = lista[iAtual]
    let itemTroca = lista[iTroca]

    lista[iAtual] = itemTroca
    lista[iTroca] = itemAtual

    return lista
}


module.exports = trocaValor