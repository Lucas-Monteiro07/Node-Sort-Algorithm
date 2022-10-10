function juntaListas(lista1, lista2) {
  let listafinal = [];
  let posicaoLista1 = 0;
  let posicaoLista2 = 0;
  let posicaoListaFinal = 0;

  while (posicaoLista1 < lista1.length && posicaoLista2 < lista2.length) {
    let itemAtualLista1 = lista1[posicaoLista1];
    let itemAtualLista2 = lista2[posicaoLista2];

    if (itemAtualLista1.preco < itemAtualLista2.preco) {
      listafinal[posicaoListaFinal] = itemAtualLista1;
      posicaoLista1++;
    } else {
      listafinal[posicaoListaFinal] = itemAtualLista2;
      posicaoLista2++;
    }
    posicaoListaFinal++;
  }

  while (posicaoLista1 < lista1.length) {
    listafinal[posicaoListaFinal] = lista1[posicaoLista1];
    posicaoLista1++;
    posicaoListaFinal++;
  }

  while (posicaoLista2 < lista2.length) {
    listafinal[posicaoListaFinal] = lista2[posicaoLista2];
    posicaoLista2++;
    posicaoListaFinal++;
  }

  return listafinal;
}

console.log(juntaListas(edGalho, edFolha));


module.exports =  juntaListas