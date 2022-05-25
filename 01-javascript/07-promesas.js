const fs = require('fs')

function promesaEsPar(numero){
    const miPrimerPromesa = new Promise(
        (
            resolve,
            reject
        ) => {
            if (numero % 2 === 0) {
                resolve(numero);
            }else {
                reject("No es par")
            }
        }
    )
    return miPrimerPromesa
}

promesaEsPar(3)
    .then(
        (respuesta)=>{
            console.log('Respuesta', respuesta)
        }
    )
    .catch(
        (error)=>{
            console.error("Error",error)
        }
    )
    .finally(
        ()=>{
            console.info("Fin")
        }
    )