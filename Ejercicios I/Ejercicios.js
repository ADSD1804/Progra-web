
console.log("1. Contraseña Valida")

function contrasenaValida(contrasenia){

    if (contrasenia == "2Fj(jjbFsuj" || contrasenia == "eoZiugBf&g9"){

        return true;
    }else{
        return false;
    }
}

console.log(contrasenaValida("2Fj(jjbFsuj")) // true
console.log(contrasenaValida("eoZiugBf&g9")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValida("como estas")) // false

console.log("2. Calcular Impuestos")
function calcularImpuestos(edad, ingresos){

    if (edad >= 18 && ingresos >= 1000){
        
        return ingresos * (40/100);
    }else{
        return 0;
    }

}  

console.log(calcularImpuestos(18, 1000)) // 400
console.log(calcularImpuestos(40, 10000)) // 4000
console.log(calcularImpuestos(17, 5000)) // 0
console.log(calcularImpuestos(30, 500)) // 0

/*----------------------------------------------------------*/

console.log("3. IMC (ïndice de masa corporal)")

function bmi(peso, altura){

    var masa_corp = peso / altura ** 2;

    if (masa_corp < 18.5){

        return "Bajo de Peso";

    } if (masa_corp >= 18.5 && masa_corp <= 24.9){

        return "Normal";

    } if (masa_corp >= 25 && masa_corp < 29.9){

        return "Sobrepeso";

    }return "Obeso";
               
}

console.log(bmi(65, 1.8)); // "Normal"
console.log(bmi(72, 1.6)); // "Sobrepeso"
console.log(bmi(52, 1.75)); //  "Bajo de peso"
console.log(bmi(135, 1.7)); // "Obeso"



/*----------------------------------------------------------*/

console.log("4. Imprimir un Arreglo")

function imprimirArreglo(){

}

console.log(imprimirArreglo(1, "Hola", 2, "Mundo"));

/*----------------------------------------------------------*/

console.log("5. Número de Likes");

function likes(num){

    if (num > 999){

        console.log();
    }

}