function soloNumeros(a,b,c){
    return a - b + c;
}

console.log(soloNumeros(1,2,3,true,[1,2,3]))

function funcionNombrada(){

}

const funcionSinNombre=function (){};

funcionSinNombre();

const funcionFatArrow= () => {}

const funcionFatArrow1 = x => x+1; //En unsa sola linea

function sumarNumeros (...otrosNumeros){
    let total=0;
    otrosNumeros.forEach(
        (valorActual)=>{
            total=total+valorActual
        }
    )
    return total;
}

sumarNumeros(1,2,3,4,5,6,7);