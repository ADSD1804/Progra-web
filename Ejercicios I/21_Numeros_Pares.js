function pares(arreglo){

    const numerosPares = [];

    for(let i = 0; i < arreglo.length; i++){

        if (arreglo[i] % 2 === 0){
            numerosPares.push(arreglo[i]);
        }
    }

    return numerosPares;
}

console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []