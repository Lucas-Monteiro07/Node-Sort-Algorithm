function mergeSort(array){
    if (array.length > 1){
        const meio = array.length/2
        const parte1 = mergeSort(array.slice(0, meio))
        const parte2 = mergeSort(array.slice(meio, array.length))
    }

}