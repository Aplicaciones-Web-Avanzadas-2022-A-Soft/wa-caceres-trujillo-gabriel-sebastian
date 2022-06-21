export const MONEDAS:MonedasInterface[] = [
    {
        id:'USD', nombre:'Dolar Estados Unidos'
    },
    {
        id:'MXN', nombre:'Peso mexicano'
    },
    {
        id:'EUR', nombre:'Euro'
    },
    {
        id:'GBP', nombre:'Libra esterlina'
    }
]

export interface MonedasInterface{
    id:string;
    nombre:string;
}