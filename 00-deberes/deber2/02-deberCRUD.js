const fs = require('fs')
const inquirer = require("inquirer")

function promesaEscritura(pathEscritura, data) {
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

let arraySistemas = []

async function recibirNombre(nombreObjeto) {
    try {
        const entrada = await inquirer
            .prompt(
                {
                    type: "input",
                    name: "nombre",
                    message: "Ingresa el nombre del " + nombreObjeto + " al que se refiere"
                }
            )
        return entrada.nombre
    } catch (e) {
        console.error(e)
    }
}

async function leerInformacion() {
    let contenido = null
    try {
        contenido = await promesaLectura("./02-informacion.txt")
    } catch (error) {
        console.log("Error en la ejecucion", error)
    }

    if (contenido) {
        arraySistemas = JSON.parse(contenido)
    } else {
        arraySistemas = []
    }
}

async function guardarInformacion() {
    data = JSON.stringify(arraySistemas)
    try {
        await promesaEscritura("./02-informacion.txt", data)
    } catch (error) {
        console.log("Error en la ejecucion", error)
    }
}

async function crearSistema() {
    try {
        const entrada = await inquirer
            .prompt([
                {
                    type: "input",
                    name: "nombre",
                    message: "Ingresa el nombre del sistema solar"
                },
                {
                    type: "number",
                    name: "radio",
                    message: "Ingresa el radio del sistema solar"
                },
                {
                    type: "input",
                    name: "nombreSol",
                    message: "Ingresa el nombre del sol del sistema"
                },
                {
                    type: "number",
                    name: "satelitesNaturales",
                    message: "Ingresa la cantidad de satelites naturales en el sistema solar"
                },
            ])

        const indice = arraySistemas.findIndex(object => {
            return object.nombre === entrada.nombre;
        });

        if (indice !== -1) {
            console.log("Ese sistema ya existe, operacion cancelada")
        } else {
            console.log("Para ingresar planetas entra a la opcion de crear planetas")
            entrada.planetas = []
            arraySistemas.push(entrada)
        }

    } catch (e) {
        console.error(e)
    }
}

async function borrarSistema() {

    let sistema = await recibirNombre("sistema solar")

    const indice = arraySistemas.findIndex(object => {
        return object.nombre === sistema
    });


    if (indice !== -1) {
        try {
            const entrada = await inquirer
                .prompt(
                    {
                        type: "confirm",
                        name: "confirmacion",
                        message: "Esta seguro que quiere borrar " + sistema
                    }
                )


            if (entrada.confirmacion) {

                arraySistemas = arraySistemas.filter(function (value) {
                    return value.nombre !== sistema
                });
            } else {
                console.log("Operacion cancelada")
            }

        } catch (e) {
            console.error(e)
        }
    } else {
        console.error("Ese sistema no existe")
    }

}

async function actualizarSistema() {

    let sistema = await recibirNombre("sistemaSolar")

    const indice = arraySistemas.findIndex(object => {
        return object.nombre === sistema
    });

    if (indice !== -1) {
        try {
            const entrada = await inquirer
                .prompt([
                    {
                        type: "number",
                        name: "radio",
                        message: "Ingresa el radio del sistema solar " + sistema
                    },
                    {
                        type: "input",
                        name: "nombreSol",
                        message: "Ingresa el nombre del sol del sistema " + sistema
                    },
                    {
                        type: "number",
                        name: "satelitesNaturales",
                        message: "Ingresa la cantidad de satelites naturales en el sistema solar " + sistema
                    },
                ])

            arraySistemas[indice].radio = entrada.radio
            arraySistemas[indice].nombreSol = entrada.nombreSol
            arraySistemas[indice].satelitesNaturales = entrada.satelitesNaturales

            console.log("Para ingresar planetas entra a la opcion de crear planetas")

        } catch (e) {
            console.error(e)
        }

    } else {
        console.log("Ese sistema no existe")
    }

}

async function crearPlaneta() {

    let sistema = await recibirNombre("sistema solar")

    const indice = arraySistemas.findIndex(object => {
        return object.nombre === sistema;
    });

    if (indice !== -1) {
        try {
            const entrada = await inquirer
                .prompt([
                    {
                        type: "input",
                        name: "nombre",
                        message: "Ingresa el nombre del planeta"
                    },
                    {
                        type: "number",
                        name: "radioEcuatorial",
                        message: "Ingresa el radio ecuatorial (en KM)"
                    },
                    {
                        type: "number",
                        name: "duracionDia",
                        message: "Ingresa cuanto dura un dia en el planeta (en horas)"
                    },
                    {
                        type: "number",
                        name: "lunas",
                        message: "Ingresa la cantidad de lunas"
                    },
                    {
                        type: "confirm",
                        name: "esHabitable",
                        message: "Ingresa si el planeta es habitable"
                    }
                ])

            const indicePlaneta = arraySistemas[indice].planetas.findIndex(object => {
                return object.nombre === entrada.nombre;
            });

            if (indicePlaneta !== -1) {
                console.log("Ese planeta ya existe, operacion cancelada")
            } else {
                arraySistemas[indice].planetas.push(entrada)
            }
        } catch (error) {
            console.error(error)
        }
    } else {
        console.error("Ese sistema solar no existe!! Crealo o intenta uno diferente")

    }

}

async function listarPlanetas() {

    let sistema = await recibirNombre("sistema solar")

    const indice = arraySistemas.findIndex(object => {
        return object.nombre === sistema;
    });

    if (indice !== -1) {
        console.log("Los planetas del sistema " + sistema + " son " + JSON.stringify(arraySistemas[indice].planetas))

    } else {
        console.error("Ese sistema solar no existe!! Crealo o intenta uno diferente")
    }

}

async function actualizarPlaneta() {
    let sistema = await recibirNombre("sistema solar")

    const indice = arraySistemas.findIndex(object => {
        return object.nombre === sistema;
    });

    if (indice !== -1) {
        let planeta = await recibirNombre("planeta")

        const indicePlaneta=arraySistemas[indice].planetas.findIndex(object => {
            return object.nombre === planeta
        });

        if (indicePlaneta!==-1){
            try {
                const entrada = await inquirer
                    .prompt([
                        {
                            type: "number",
                            name: "radioEcuatorial",
                            message: "Ingresa el radio ecuatorial (en KM)"
                        },
                        {
                            type: "number",
                            name: "duracionDia",
                            message: "Ingresa cuanto dura un dia en el planeta (en horas)"
                        },
                        {
                            type: "number",
                            name: "lunas",
                            message: "Ingresa la cantidad de lunas"
                        },
                        {
                            type: "confirm",
                            name: "esHabitable",
                            message: "Ingresa si el planeta es habitable"
                        }
                    ])

                arraySistemas[indice].planetas[indicePlaneta].radioEcuatorial=entrada.radioEcuatorial
                arraySistemas[indice].planetas[indicePlaneta].duracionDia=entrada.duracionDia
                arraySistemas[indice].planetas[indicePlaneta].lunas=entrada.lunas
                arraySistemas[indice].planetas[indicePlaneta].esHabitable=entrada.esHabitable
            } catch (e) {
                console.error(e)
            }

        } else{
            console.log("Ese planeta no existe!! Crealo o intenta uno diferente")
        }

    } else {
        console.error("Ese sistema solar no existe!! Crealo o intenta uno diferente")
    }

}

async function borrarPlaneta() {

    let sistema = await recibirNombre("sistema solar")

    const indice = arraySistemas.findIndex(object => {
        return object.nombre === sistema;
    });

    if (indice!==-1){
        let planeta = await recibirNombre("planeta")

        const indicePlaneta=arraySistemas[indice].planetas.findIndex(object => {
            return object.nombre === planeta
        });

        if (indicePlaneta!==-1){
            try {
                const entrada = await inquirer
                    .prompt(
                        {
                            type: "confirm",
                            name: "confirmacion",
                            message: "Esta seguro que quiere borrar " + planeta
                        }
                    )

                if (entrada.confirmacion) {
                    arraySistemas[indice].planetas = arraySistemas[indice].planetas.filter(function (value) {
                        return value.nombre !== planeta
                    });
                } else {
                    console.log("Operacion cancelada")
                }


            }catch (e) {
                console.error(e)
            }

        } else {
            console.error("Ese planeta no existe!! Crealo o intenta uno diferente")
        }

    } else {
        console.error("Ese sistema solar no existe!! Crealo o intenta uno diferente")
    }


}

async function main() {
    leerInformacion()

    let opcion = -1

    while (opcion !== 0) {

        console.log(
            "Bienvenido\n Menu principal\n" +
            "1. Crear Sistema Solar\n2. Listar los sistemas solares\n3. Actualizar un sistema solar\n4. Borrar un sistema solar\n" +
            "5. Crear Planeta\n6. Listar los planetas de un sistema solar\n7. Actualizar un planeta\n8. Borrar un planeta\n" +
            "0. Salir")
        try {
            const entrada = await inquirer
                .prompt(
                    {
                        type: "number",
                        name: "numero",
                        message: "Escoja la accion quiere realizar"
                    }
                )
            opcion = entrada.numero
            switch (opcion) {
                case 1:
                    await crearSistema()
                    break
                case 2:
                    console.log(arraySistemas)
                    break
                case 3:
                    await actualizarSistema()
                    break
                case 4:
                    await borrarSistema()
                    break
                case 5:
                    await crearPlaneta()
                    break
                case 6:
                    await listarPlanetas()
                    break
                case 7:
                    await actualizarPlaneta()
                    break
                case 8:
                    await borrarPlaneta()
                    break
                case 0:
                    guardarInformacion()
                    console.log("Adios")
                    return
                default:
                    console.log("No entiendo esa orden")
                    break
            }
        } catch (e) {
            console.error(e)
        }
    }

}


main()






