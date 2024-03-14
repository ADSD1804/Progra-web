function distancia(txt1, txt2){

    let distancia = 0;

    for (let i = 0; i < txt1.length; i++){

        if (txt1[i] !== txt2[i]){
            distancia++;
        }
    }
    return distancia;
}

console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3