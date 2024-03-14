function numeroCaracteres(txt, letra){

    let contador = 0;
    for (let i = 0; i < txt.length; i++){

        if (txt[i] === letra){
            contador++;
        }
    }

return contador;

}

console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", e)) // 4