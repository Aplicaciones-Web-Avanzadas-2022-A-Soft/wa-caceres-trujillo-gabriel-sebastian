const fs = require('fs');

console.log("Primero");
fs.readFile(
    './06-ejemplo.txt',
    'utf-8',
    (error,contenido)=>{
        console.log("Segundo",contenido);
    }
)
console.log("Tercero")