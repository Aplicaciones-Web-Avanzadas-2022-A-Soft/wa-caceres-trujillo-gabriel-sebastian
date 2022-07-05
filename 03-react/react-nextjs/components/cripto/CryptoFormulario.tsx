import {MONEDAS, MonedasInterface} from "../constantes/monedas";
import useSelectMoneda from "../hooks/useSelectMoneda";
import {useEffect, useState} from "react";

export const CryptoFormulario = ({setMonedas}) => {

    const [monedasArreglo, setMonedasArreglo] = useState(
        // MONEDAS.map((a)=>a),
        // Object.assign([], MONEDAS)
        [...MONEDAS]
    );
    const [criptoMonedasArreglo, setCriptoMonedasArreglo] = useState([]);
    // Definir selects
    const [valorMoneda, SelectMonedaComponente] = useSelectMoneda('Seleccionar moneda', monedasArreglo)
    const [valorCriptoMoneda, SelectCriptoMonedaComponente] = useSelectMoneda('Seleccionar criptomoneda', criptoMonedasArreglo)
    // Ayuda a reaccionar a cambios, debido a que alguna variable escucha cambios
    // Inicializar variables dentro del componente
    useEffect(
        () => {
            // eventos cuando cambie variable
            // setCriptoMonedasArreglo([{id: 'Bitcoin',nombre: 'Bitcoin'}])
            const consultarAPI = async () => {
                const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
                const respuesta = await fetch(url);
                const dataPlana = await respuesta.json();
                const arregloCriptos = dataPlana.Data.map(
                    (criptoMoneda) => {
                        const criptoMonedaLocal: MonedasInterface = {
                            id: criptoMoneda.CoinInfo.Name,
                            nombre: criptoMoneda.CoinInfo.FullName
                        };
                        return criptoMonedaLocal;
                    }
                );
                setCriptoMonedasArreglo(arregloCriptos)
            }
            consultarAPI();
        },
        [
            // Arreglo de variables a escuchar
        ]
    )
    useEffect(
        () => {
            console.log('Cambio Moneda', valorMoneda);
        },
        [valorMoneda] //  Escucho cambios de valorMomeda
    )
    useEffect(
        () => {
            console.log('Cambio CriptoMoneda', valorCriptoMoneda);
        },
        [valorCriptoMoneda] //  Escucho cambios de valorCriptoMomeda
    )
    useEffect(
        () => {
            console.log('Cambio Moneda o CriptoMoneda', valorMoneda, valorCriptoMoneda);
        },
        [valorMoneda, valorCriptoMoneda] //  Escucho cambios de valorMomeda o valorCriptoMomeda
    )


    // const generarSelectMonedas = () => {
    //     return MONEDAS.map((moneda) =>(
    //             <option id={moneda.id} value={moneda.id}> {moneda.nombre}</option>
    //         )
    //     )
    // }
    const [error, setError] = useState(false)
    const manejarSubmitFormulario = (e)=>{
        e.preventDefault();
        if([valorMoneda, valorCriptoMoneda].includes('')){
            setError(true)
        }
        setError(false)
        // enviar criptomonedas a nuestra ruta
        setMonedas({
            valorMoneda: valorMoneda,
            valorCriptoMoneda: valorCriptoMoneda
        })
    }
    return (
        <>
            <form onSubmit={manejarSubmitFormulario}>
                {/*<label className="form-label" htmlFor="moneda">Moneda </label>*/}
                {/*<select className="form-select" name="moneda" id="moneda">*/}
                {/*    <option value="">Seleccione opción</option>*/}
                {/*    {generarSelectMonedas()}*/}
                {/*</select>*/}
                <SelectMonedaComponente/>
                <SelectCriptoMonedaComponente/>
                <br/>
                <button className={'btn btn-primary w-100'} type="submit"> Consultar</button>
            </form>
        </>
    )
}

export default CryptoFormulario