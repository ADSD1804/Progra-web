function fabricarRegalos(regalos, materiales) {
    const materialesSet = new Set(materiales);
  
    function sePuedeFabricar(regalo) {
      const regaloSet = new Set(regalo);
  
      return Array.from(regaloSet).every(function (material) {
        return materialesSet.has(material);
      });
    }
  
    return regalos.filter(sePuedeFabricar);
  }
  
  const regalos = ["tren", "oso", "pelota"];
  const materiales = "tronesa";
  
  const regalosFabricables = fabricarRegalos(regalos, materiales);
  
  console.log(regalosFabricables);
  
  const regalos2 = ["juego", "puzzle"];
  const materiales2 = "jlepuz";
  
  const regalosFabricables2 = fabricarRegalos(regalos2, materiales2);
  
  console.log(regalosFabricables2); 
  
  const regalos3 = ["libro", "ps5"];
  const materiales3 = "psli";
  
  const regalosFabricables3 = fabricarRegalos(regalos3, materiales3);
  
  console.log(regalosFabricables3); 
    