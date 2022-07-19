const fs = require('fs')


function ejercicio(
    pathPrimerArchivo,
    pathSegundoArchivo,
    pathNuevoArchivo
) {
    return new Promise((resolve, reject) => {
            fs.readFile(
                pathPrimerArchivo,
                'utf-8',
                (errorPrimer, contenidoPrimer) => {
                    if (errorPrimer) {
                        reject(errorPrimer)
                    } else {
                        fs.readFile(
                            pathSegundoArchivo,
                            'utf-8',
                            (errorSegundo, contenidoSegundo) => {
                                if (errorSegundo) {
                                    reject(errorSegundo)
                                } else {
                                    console.log(contenidoPrimer, contenidoSegundo);
                                    fs.writeFile(
                                        pathNuevoArchivo,
                                        contenidoPrimer.concat("\n", contenidoSegundo),
                                        (errorEscritura) => {
                                            if (errorEscritura) {
                                                reject(errorEscritura)
                                            } else{
                                                resolve("Terminado satisfactoriamente")
                                            }
                                        }
                                    );
                                }
                            }
                        );
                    }

                }
            );
        }
    )

}

ejercicio("./texto1.txt","./texto2.txt","./nuevo.txt");

