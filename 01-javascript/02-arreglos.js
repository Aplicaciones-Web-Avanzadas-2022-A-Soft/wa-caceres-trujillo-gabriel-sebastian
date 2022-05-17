let arreglo = [6,7,8,9,10];
arreglo = 1;
arreglo = true;
arreglo = null;
arreglo= [6,7,8,9,10];

//for of

for (let numero of arreglo){
    console.log("numero", numero)
}

// for in

for (let indice in arreglo){
    console.log("indice", indice)
}

arreglo.push(11) // agragar al final

arreglo.pop() // borrar al final

arreglo.unshift(5) // agragar al inicio

arreglo.splice(0,0,4) // en el indice start, borrar delete count y agregar items

