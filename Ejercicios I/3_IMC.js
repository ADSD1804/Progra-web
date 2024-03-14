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
