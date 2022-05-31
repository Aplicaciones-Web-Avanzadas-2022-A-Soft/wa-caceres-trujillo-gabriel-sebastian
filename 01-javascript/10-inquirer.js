//4-inquierer
//npm init -> package.json -> dependencias scripts

const inquirer = require("inquirer")

async function main(){
    try{
        const respuesta= await inquirer
            .prompt([
                {
                    type:"input",
                    name: "apellido",
                    message: "Ingresa tu nombre"
                },
                {
                    type: "input",
                    name: "edad",
                    message: "Ingresa tu edad"
                }
            ])
        console.log("respuesta", respuesta)
    }catch (error){
        console.error(error)
    }
}
main()

const arregloUsuarios={
    id:1,
    nombre:'Adrian',
}

const arregloString= JSON.stringify(arregloUsuarios)
console.log("arrregloString", arregloString)
const arregloRestaurado = JSON.parse(arregloString)
console.log(arregloRestaurado)