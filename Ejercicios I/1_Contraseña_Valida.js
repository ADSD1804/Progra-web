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