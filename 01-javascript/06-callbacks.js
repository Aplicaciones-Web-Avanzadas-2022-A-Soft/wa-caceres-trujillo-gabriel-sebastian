const fs = require('fs');


fs.readFile(
    './06-ejemplo.txt',
    'utf-8',
    (errorPrimer, contenidoPrimer) => {
        if (errorPrimer) {
            console.log(errorPrimer)
        } else {
            if (errorPrimer) {
                console.log(errorPrimer)
            } else {
                fs.readFile(
                    './01-variables.js',
                    'utf-8',
                    (errorSegundo, contenidoSegundo) => {
                        if (errorSegundo) {
                            console.log(errorSegundo)
                        } else {
                            console.log(contenidoPrimer, contenidoSegundo);

                            fs.writeFile(
                                './06-nuevo-archivo.txt',
                                contenidoPrimer.concat("\n", contenidoSegundo),
                                (errorEscritura) => {
                                    if (errorEscritura) {
                                        console.log(errorEscritura)
                                    }
                                }
                            );
                        }
                    }
                );
            }
        }
    }
);

