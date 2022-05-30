const fs = require('fs')

function promesaEsPar(numero) {
    const miPrimerPromesa = new Promise(
        (
            resolve,
            reject
        ) => {
            if (numero % 2 === 0) {
                resolve(numero);
            } else {
                reject("No es par")
            }
        }
    )
    return miPrimerPromesa
}

function promesaElevarAlCuadrado(numero) {
    const miSegundaPromesa = new Promise(
        (resolve) => {
            const numeroElevadoAlCuadrado = Math.pow(numero, 2);
            resolve(numeroElevadoAlCuadrado);
        }
    );
    return miSegundaPromesa;
}


promesaEsPar(4)
    .then(
        (numeroPar) => {
            return promesaElevarAlCuadrado(numeroPar)
        }
    )
    .then(
        (numeroParElevadoAlCuadrado)=>{
            console.log("numeroParElevadoAlCuadrado",numeroParElevadoAlCuadrado)
        }
    )
    .catch(
        (error) => {
            console.error("Error", error)
        }
    )
    .finally(
        () => {
            console.info("Fin")
        }
    )


