// class PlatziMath {
//   static esPar() {}
//   static esImpar() {}
//   static calcularMedian() {}
// }

const PlatziMath = {};

PlatziMath.esPar = function esPar(lista) {
  return !(lista.length % 2);
}

PlatziMath.esImpar = function esImpar(lista) {
  return Boolean(lista.length % 2);
}

PlatziMath.calcularModa = function calcularModa(lista) {
  if (lista.length > 1){ //valida que la lista tenga elementos
      const listaCount = {};

      for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];

        if (listaCount[elemento]) {
          listaCount[elemento] += 1;
        } else {
          listaCount[elemento] = 1;
        }
      }

      const listaArray = Object.entries(listaCount);
      const listaOrdenada = PlatziMath.ordenarListaBidimensional(listaArray, 1)
      const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
      if (listaArray.length > 1) {//valida que haya mas de una frecuencia para determinar la moda unimodal
        const listaAnterior = listaOrdenada[listaOrdenada.length - 2];
        if(listaMaxNumber[1]!== listaAnterior[1]){//valida que haya moda unimodal
          const moda = listaMaxNumber[0];
          return moda;
        } else {//si no hay moda unimodal
          return `Array don´t have a unimodal Mode`
        }
      } else {//solo una frecuencia en la serie
        const moda = listaMaxNumber[0];
          return moda;
      }
  
  }else { // la list no tiene elementos
    return `Enter more than 1 value`
  }
}

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {
  const lista = PlatziMath.ordenarLista(listaDesordenada);
  const listaEsPar = PlatziMath.esPar(lista);

  if (listaEsPar) {
    const indexMitad1ListaPar = (lista.length / 2) - 1;
    const indexMitad2ListaPar = lista.length / 2;
    const listaMitades = [];
    listaMitades.push(lista[indexMitad1ListaPar]);
    listaMitades.push(lista[indexMitad2ListaPar]);

    const medianaListaPar = PlatziMath.calcularPromedio(listaMitades);
    return medianaListaPar;
  } else {
    const indexMitadListaImpar = Math.floor(lista.length / 2);
    const medianaListaImpar = lista[indexMitadListaImpar];
    return medianaListaImpar;
  }
}

PlatziMath.calcularPromedio = function calcularPromedio(lista) {
  function sumarTodosElementos(valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
  }

  const sumaLista = lista.reduce(sumarTodosElementos);  
  const promedio = sumaLista / lista.length;
  return promedio;
}

PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    return valorAcumulado - nuevoValor;
  }
  
  const lista = listaDesordenada.sort(ordenarListaSort);
  
  return lista;
}

PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada, i) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    return valorAcumulado[i] - nuevoValor[i];
  }
  
  const lista = listaDesordenada.sort(ordenarListaSort);
  return lista;
}
