import {MONEDAS, MonedasInterface} from "../constantes/monedas";
import useSelectMoneda from "../hooks/useSelectMoneda";
import {useEffect, useState} from "react";

export const CryptoFormulario = () => {

    const [monedasArreglo, setMonedasArreglo] = useState(
        // MONEDAS.map((a)=>a),
        // Object.assign([], MONEDAS)
        [...MONEDAS]
    );
    const [criptoMonedasArreglo, setCriptoMonedasArreglo] = useState([]);
    // Definir selects
    const[SelectMonedaComponente] = useSelectMoneda('Seleccionar moneda', monedasArreglo)
    const[SelectCriptoMonedaComponente] = useSelectMoneda('Seleccionar criptomoneda', criptoMonedasArreglo)
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
                    (criptoMoneda)=>{
                        const criptoMonedaLocal:MonedasInterface = {
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
    // const generarSelectMonedas = () => {
    //     return MONEDAS.map((moneda) =>(
    //             <option id={moneda.id} value={moneda.id}> {moneda.nombre}</option>
    //         )
    //     )
    // }
    return(
        <>
            <form>
                {/*<label className="form-label" htmlFor="moneda">Moneda </label>*/}
                {/*<select className="form-select" name="moneda" id="moneda">*/}
                {/*    <option value="">Seleccione opción</option>*/}
                {/*    {generarSelectMonedas()}*/}
                {/*</select>*/}
                <SelectMonedaComponente/>
                <SelectCriptoMonedaComponente/>
            </form>
        </>
    )
}

export default CryptoFormulario