function contarRango(numInicio, numFinal){

    let cont = 0;

    for(let i = numInicio + 1; i < numFinal; i++){

        contador++;
    }

    return contador;
}

console.log(contarRango(1, 9)); // 7
console.log(contarRango(1332, 8743)); // 7410
console.log(contarRango(5, 6)); // 0