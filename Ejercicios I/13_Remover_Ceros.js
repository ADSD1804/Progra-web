function removerCeros(arreglo){

    const arreglo2 = [];

    for(let i = 0; i < arreglo.length; i++){

        if (arreglo[i] =! 0){
            arreglo2.push(arreglo[i]);
        }
    }

    return arreglo2;
}

console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])) // []