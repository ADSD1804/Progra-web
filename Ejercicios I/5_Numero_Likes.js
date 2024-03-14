console.log("5. Número de Likes");

function likes(numero){

    const numString = numero.toString();

    if (numero < 1000){
        return numString;
    }

    if(numero >= 1000 && numero < 1000000){
        const mil = Math.floor(numero / 1000);
        return mil + "K";
    } else {
        const millones = Math.floor(numero / 1000000);
        return millones + "M";
    }

}

console.log(likes(1400)); // Salida: "1K"
console.log(likes(34567)); // Salida: "34K"
console.log(likes(7456345)); // Salida: "7M"
console.log(likes(999)); // Salida: "999"