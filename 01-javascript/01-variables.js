var numeroUno = 1;
let numeroDos=2;

numeroUno=5;
numeroDos=8;

numeroUno=false;

const extension = "PDF";
//extension ="XML"

const numero =1; //number
const sueldo = 1.2; //number
const texto= "Adrian"; // string
const apellido = 'Eguez'; // string
const boleano = false; // boolean
const hijos = null; //undefined
const zapatos = undefined; //undefined

console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof apellido);
console.log(typeof boleano);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log (Number("asd"))
console.log (typeof Number("asd"));

//Truty Falsy

console.log("\n")

if (true === true){ //triple igual
    console.log("Es verdadero")
} else {
    console.log("Es falso")
}

if (true === false){ //triple igual
    console.log("Es verdadero")
} else {
    console.log("Es falso")
}

if (""){ //triple igual
    console.log("El string vacio es Truty")
} else {
    console.log("El string vacio es Falsy")
}

if ("Hola"){ //triple igual
    console.log("El string es Truty")
} else {
    console.log("El string es Falsy")
}

if (-1){ //triple igual
    console.log("El negativo es Truty")
} else {
    console.log("El negativo es Falsy")
}

if (0){ //triple igual
    console.log("El cero es Truty")
} else {
    console.log("El cero es Falsy")
}

if (1){ //triple igual
    console.log("El positivo es Truty")
} else {
    console.log("El positivo es Falsy")
}

//Objetos JS (JSON)

const yo = {
    nombre : "Gabriel",
    apellido: "Cáceres",
    edad: 25,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa:{
        color:"plomo",
        talla: "40"
    },
    macotas: ["Wanda","Yoda"],
}

console.log(yo)

yo.nombre = "Sebastián";
yo["nombre"]="Sebastián";
yo.sueldo=1.2;

console.log(yo)

yo.nombre= undefined;
console.log(yo)
delete yo.nombre
console.log(yo)

console.log(Object.keys(yo))
console.log(Object.values(yo))

let edadAdrian = 32;
let edadVicente = edadAdrian

console.log(edadAdrian)
console.log(edadVicente)

edadAdrian +=1

console.log(edadAdrian)
console.log(edadVicente)
