const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

const respuestaFind= arreglo.find(
    function (valor, indice,arreglo){
        return valor.nombre==="Cristian";
    }
)

console.log("respuestaFind", respuestaFind);

const respuestaFindIndex= arreglo.findIndex(
    function (valor, indice,arreglo){
        return valor.nombre==="Cristian";
    }
)

console.log("respuestaFindIndex", respuestaFindIndex);

const respuestaForEach= arreglo.forEach(
    function(valor, indice,arreglo){
        console.log("valorActual", valor)
    }
)
console.log("respuestaForEach",respuestaForEach)

const respuestaMap= arreglo.map(
    (valor, indice,arreglo)=>{
        const nuevoElemento = {
            id: valor.id,
            nombre: valor.nombre,
            nota: valor.nota +1,
            caso : false,
        };
        return nuevoElemento;
    }
)

console.log("respuestaMap",respuestaMap)

const respuestaFilter = arreglo.filter(
    (valor, indice,arreglo)=> {
        return valor.nota>=14;
    }
)

console.log("respuestaFilter",respuestaFilter)


const respuestaSome = arreglo.some(
    (valor, indice,arreglo)=>{
        return valor.nota >10
    }
)
console.log("respuestaSome", respuestaSome)

const respuestaEvery = arreglo.every(
    (valor, indice,arreglo)=>{
        return valor.nota >10
    }
)
console.log("respuestaEvery", respuestaEvery)

const respuestaReduce = arreglo.reduce(
    (valorAcumulado,valor, indice,arreglo)=>{
        return (valorAcumulado+valor.nota);
    },
    0
)

console.log("respuestaReduce",respuestaReduce)