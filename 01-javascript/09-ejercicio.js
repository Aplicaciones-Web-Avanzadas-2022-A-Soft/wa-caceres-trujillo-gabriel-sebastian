const fs = require("fs")

function promesaLectura(pathLectura) {
    return new Promise((resolve, reject) => {
        fs.readFile(
            pathLectura,
            'utf-8',
            (errorLectura, contenido) => {
                if (errorLectura) {
                    reject(errorLectura)
                } else {
                    resolve(contenido)
                }
            })
    })
}

function promesaEscritura(pathEscritura,data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(
            pathEscritura,
            data,
            (errorEscritura) => {
                if (errorEscritura) {
                    reject(errorEscritura)
                } else {
                    resolve("Ejecutado satisfactoriamente")
                }
            })
    })
}

function ejercicio (pathLectura1,pathLectura2,pathEscritura){

    var data=""

    promesaLectura(pathLectura1)
        .then(
            (contenido1)=>{
                data=data+contenido1
                return promesaLectura(pathLectura2)
            }
        )
        .then(
            (contenido2)=>{
                data=data+contenido2
                return promesaEscritura(pathEscritura,data)
            }
        )
        .then(
            (mensaje)=>{
                console.log(mensaje)
            }
        )
        .catch(
            (error)=>{
                console.log("Error en la ejecucion", error)
            }
        )
}

ejercicio('./06-ejemplo.txt','./01-variables.js','./09-nuevo-archivo.txt')

//async await
/*
Estar dentro de una duncion
Agregar la palabra "async" antes de la declaracion de la funcion
Agregar la palabra await ates de la declaracionde una promesa
*/
async function ejecutarPromesasAsyncAwait(path1,path2,path3){
    try{
        const primerContenido = await promesaLectura(path1)
        const segundoContenido = await promesaLectura(path2)
        await promesaEscritura(path3, primerContenido+segundoContenido)
    }catch(error){
        console.log("Error en la ejecucion", error)
    }

}
