function encontrarPasoTravieso(original, modificada) {
    if (original === modificada) {
      return "";
    }
  
    const longitudMinima = Math.min(original.length, modificada.length);
  
    for (let i = 0; i < longitudMinima; i++) {
      if (original[i] !== modificada[i]) {
        if (original.length > modificada.length) {
          return modificada[i];
        }
        return "";
      }
    }
  
    if (modificada.length > original.length) {
      return modificada[longitudMinima];
    }
  
    return "";
  }
  
  const original = "abcd";
  const modificada = "abcde";
  
  const pasoTravieso = encontrarPasoTravieso(original, modificada);
  
  console.log(pasoTravieso);
  

  const original2 = "stepfor";
  const modificada2 = "stepor";
  
  const pasoTravieso2 = encontrarPasoTravieso(original2, modificada2);
  
  console.log(pasoTravieso2); 
  
  const original3 = "abcde";
  const modificada3 = "abcde";
  
  const pasoTravieso3 = encontrarPasoTravieso(original3, modificada3);
  
  console.log(pasoTravieso3);
  