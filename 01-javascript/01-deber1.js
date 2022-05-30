const fs = require('fs')


var promise1 = fs.promises.readFile('./06-ejemplo.txt','utf-8')

var promise2 = fs.promises.readFile('./01-variables.js','utf-8')


var contenido = ""
Promise.all([promise1, promise2])
    .then((result) =>{
        contenido=result[0]+result[1]
        console.log(contenido)
        fs.promises.writeFile('./06-nuevo-archivo.txt', contenido, 'utf-8')
    });



//'./06-ejemplo.txt', './01-variables.js', './06-nuevo-archivo.txt'


