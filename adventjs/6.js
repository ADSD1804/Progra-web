function maxDistance(movimientos) {
    let posicionActual = 0;
    let distanciaMaxima = 0;
  
    for (const movimiento of movimientos) {
      switch (movimiento) {
        case ">":
          posicionActual++;
          break;
        case "<":
          posicionActual--;
          break;
      }
  
      distanciaMaxima = Math.max(distanciaMaxima, Math.abs(posicionActual));
    }
  
    return distanciaMaxima;
  }
  
  const movimientos = ">>*<>";
  const result = maxDistance(movimientos);
  
  console.log(result);
  
  const movimientos2 = "<<<>";
  const result2 = maxDistance(movimientos2);
  
  console.log(result2); 
  
  const movimientos3 = ">***>";
  const result3 = maxDistance(movimientos3);
  
  console.log(result3);
  