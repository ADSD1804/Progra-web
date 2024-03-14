function crearArbolNavidad(adornos, altura) {
    const adornosArray = adornos.split("");
  
    const longitudMaximaLinea = (2 * altura) - 1;
  
    function generarLinea(nivel) {
      let linea = "";
      const espaciosIzquierda = Math.floor((longitudMaximaLinea - linea.length) / 2);
      const adornosLinea = adornosArray.slice(nivel * 2, (nivel * 2) + 2);
  
      linea += " ".repeat(espaciosIzquierda);
      linea += adornosLinea.join(" ");
  
      return linea;
    }
  
    let arbol = "";
    for (let i = 0; i < altura; i++) {
      arbol += generarLinea(i) + "\n";
    }
  
    arbol += " ".repeat(Math.floor(longitudMaximaLinea / 2)) + "|\n";
  
    return arbol;
  }
  
  const adornos = "123";
  const altura = 4;
  
  const arbolNavidad = crearArbolNavidad(adornos, altura);
  
  console.log(arbolNavidad);
  
  const adornos2 = "*@o";
  const altura2 = 3;
  
  const arbolNavidad2 = crearArbolNavidad(adornos2, altura2);
  
  console.log(arbolNavidad2);

  